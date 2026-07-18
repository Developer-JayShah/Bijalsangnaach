"use client";

import { useState } from "react";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const WHATSAPP_NUMBER = "17329551883"; // country code + number (no +, no spaces)

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return "Please enter a valid email.";
    if (!form.message.trim()) return "Please enter your message.";
    return "";
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    setErrorMsg("");

    const msg = validate();
    if (msg) {
      setStatus("error");
      setErrorMsg(msg);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiry/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          whatsapp: form.whatsapp.trim() || undefined,
          message: form.message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send. Try again.");

      setStatus("success");
      setForm({ name: "", email: "", whatsapp: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi! I would like to enquire about Bijalsangnaach Kathak classes."
  )}`;

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-5xl px-4 pt-28 pb-14">
        <p className="text-xs tracking-[0.25em] text-amber-200/80">
          BIJALSANGNAACH • CONTACT
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl">Contact</h1>
        <p className="mt-3 max-w-2xl text-neutral-300">
          Reach out for classes, trial session details, or performance bookings.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Name *">
                <Input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Full name"
                />
              </Field>

              <Field label="Email *">
                <Input
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="WhatsApp Number (optional)" className="md:col-span-2">
                <Input
                  value={form.whatsapp}
                  onChange={(e) => update("whatsapp", e.target.value)}
                  placeholder="+91 98xxxxxx / +1 732xxxxxxx"
                />
              </Field>

              <Field label="Message *" className="md:col-span-2">
                <Textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us what you need (trial class, fees, schedule, performance booking, etc.)"
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {status === "error" && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {errorMsg}
                </div>
              )}
              {status === "success" && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                  Message sent successfully! We’ll reply soon.
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className={cx(
                  "rounded-xl bg-amber-300 px-5 py-3 font-semibold text-neutral-900 transition",
                  "hover:bg-amber-200",
                  submitting && "cursor-not-allowed opacity-70"
                )}
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            <Card title="Quick Contact">
              <div className="mt-3 space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-sm hover:bg-neutral-900/40 transition"
                >
                  💬 WhatsApp: Message us
                </a>

                <p className="rounded-xl border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-sm text-neutral-400">
                  ✉️ Prefer email? Use the form — we&apos;ll reply from our inbox.
                </p>
              </div>
            </Card>

            <Card title="Location">
              <p className="text-sm text-neutral-300">
                New Jersey (USA) & Online via Zoom.
              </p>
            </Card>

            <Card title="Response time">
              <p className="text-sm text-neutral-300">
                We usually reply within 24 hours.
              </p>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cx("block", className)}>
      <span className="mb-2 block text-sm font-medium text-neutral-200">{label}</span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cx(
        "w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-100",
        "placeholder:text-neutral-500 focus:border-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-300/20"
      )}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={5}
      className={cx(
        "w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-100",
        "placeholder:text-neutral-500 focus:border-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-300/20"
      )}
    />
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
      <h3 className="font-serif text-xl">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}
