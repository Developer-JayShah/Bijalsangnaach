import nodemailer from "nodemailer";
import { getClientIp, isRateLimited } from "@/lib/rateLimit";

const EMAIL_RE = /^\S+@\S+\.\S+$/;
const MAX_LEN = 2000;

function clean(value: unknown, maxLen = MAX_LEN): string {
  return typeof value === "string" ? value.trim().slice(0, maxLen) : "";
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(`register:${ip}`, 5, 10 * 60 * 1000)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Too many requests. Please try again later." }),
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot: real users never fill this hidden field. Silently accept without emailing.
    if (clean(body.company)) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const name = clean(body.name, 200);
    const whatsapp = clean(body.whatsapp, 50);
    const email = clean(body.email, 200);

    if (!name || !whatsapp || !email) {
      return new Response(
        JSON.stringify({ ok: false, error: "Please fill in all required fields." }),
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Please enter a valid email address." }),
        { status: 400 }
      );
    }

    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;
    const INQUIRY_RECEIVER_EMAIL = process.env.INQUIRY_RECEIVER_EMAIL;

    if (!EMAIL_USER || !EMAIL_APP_PASSWORD || !INQUIRY_RECEIVER_EMAIL) {
      console.error("REGISTER API ERROR: missing email env variables");
      return new Response(
        JSON.stringify({ ok: false, error: "Unable to submit right now. Please try WhatsApp instead." }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_APP_PASSWORD },
    });

    const subject = "New Registration / Enquiry (Bijalsangnaach)";

    const age = clean(body.age, 10);
    const dob = clean(body.dob, 20);
    const gender = clean(body.gender, 20);
    const genderOther = clean(body.genderOther, 100);
    const level = clean(body.level, 30);
    const goals = clean(body.goals, MAX_LEN);
    const background = clean(body.background, MAX_LEN);
    const heardOther = clean(body.heardOther, 100);

    const genderLine = gender === "Other" && genderOther ? `Other (${genderOther})` : gender || "-";

    const heard: string[] = Array.isArray(body.heard)
      ? body.heard
          .filter((x: unknown): x is string => typeof x === "string")
          .map((x: string) => x.slice(0, 50))
      : [];
    const heardLine =
      [...heard.filter((x: string) => x !== "Other"), heardOther].filter(Boolean).join(", ") || "-";

    const text = `New registration received:

Name: ${name}
Age: ${age || "-"}
Date of Birth: ${dob || "-"}
Gender: ${genderLine}

WhatsApp/Contact: ${whatsapp}
Email: ${email}

Level: ${level || "-"}

Goals: ${goals || "-"}
Previous dance background: ${background || "-"}

Heard from: ${heardLine}

— Website Registration Form
`;

    await transporter.sendMail({
      from: `Bijalsangnaach Website <${EMAIL_USER}>`,
      to: INQUIRY_RECEIVER_EMAIL,
      replyTo: email,
      subject,
      text,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("REGISTER API ERROR:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "Something went wrong. Please try again or message us on WhatsApp." }),
      { status: 500 }
    );
  }
}