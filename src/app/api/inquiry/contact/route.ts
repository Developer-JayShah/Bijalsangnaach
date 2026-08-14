import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getClientIp, isRateLimited } from "@/lib/rateLimit";

type ContactPayload = {
  name: string;
  email: string;
  whatsapp?: string;
  message: string;
  company?: string; // honeypot
};

const EMAIL_RE = /^\S+@\S+\.\S+$/;

function clean(value: unknown, maxLen: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLen) : "";
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(`contact:${ip}`, 5, 10 * 60 * 1000)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as Partial<ContactPayload>;

    // Honeypot: real users never fill this hidden field. Silently accept without emailing.
    if (clean(body.company, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 200);
    const email = clean(body.email, 200);
    const whatsapp = clean(body.whatsapp, 50);
    const message = clean(body.message, 5000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;
    const RECEIVER = process.env.INQUIRY_RECEIVER_EMAIL;

    if (!EMAIL_USER || !EMAIL_APP_PASSWORD || !RECEIVER) {
      console.error("CONTACT API ERROR: missing email env variables");
      return NextResponse.json(
        { error: "Unable to send right now. Please try WhatsApp instead." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_APP_PASSWORD,
      },
    });

    const subject = `New Contact Enquiry — ${name}`;

    const text = `
New enquiry received:

Name: ${name}
Email: ${email}
WhatsApp: ${whatsapp || "Not provided"}

Message:
${message}
`.trim();

    await transporter.sendMail({
      from: `"Bijalsangnaach Website" <${EMAIL_USER}>`,
      to: RECEIVER,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or message us on WhatsApp." },
      { status: 500 }
    );
  }
}
