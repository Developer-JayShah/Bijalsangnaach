import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;
    const INQUIRY_RECEIVER_EMAIL = process.env.INQUIRY_RECEIVER_EMAIL;

    if (!EMAIL_USER || !EMAIL_APP_PASSWORD || !INQUIRY_RECEIVER_EMAIL) {
      return new Response(JSON.stringify({ ok: false, error: "Missing env variables" }), {
        status: 500,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_APP_PASSWORD },
    });

    const subject = "New Registration / Enquiry (Bijalsangnaach)";

    const genderLine =
      body.gender === "Other" && body.genderOther
        ? `Other (${body.genderOther})`
        : body.gender || "-";

    const heardLine = Array.isArray(body.heard)
      ? [...body.heard.filter((x: string) => x !== "Other"), body.heardOther].filter(Boolean).join(", ") || "-"
      : body.heard || "-";

    const text = `New registration received:

Name: ${body.name || "-"}
Age: ${body.age || "-"}
Date of Birth: ${body.dob || "-"}
Gender: ${genderLine}

WhatsApp/Contact: ${body.whatsapp || "-"}
Email: ${body.email || "-"}

Level: ${body.level || "-"}
Batch: ${body.batch || "-"}
Country: ${body.country || "-"}

Goals: ${body.goals || "-"}
Previous dance background: ${body.background || "-"}

Heard from: ${heardLine}

— Website Registration Form
`;

    await transporter.sendMail({
      from: `Bijalsangnaach Website <${EMAIL_USER}>`,
      to: INQUIRY_RECEIVER_EMAIL,
      replyTo: body.email,
      subject,
      text,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error("REGISTER API ERROR:", err);
    return new Response(JSON.stringify({ ok: false, error: err?.message || "Unknown error" }), {
      status: 500,
    });
  }
}