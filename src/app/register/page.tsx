"use client";

import { useState } from "react";

type Gender = "Male" | "Female" | "Other";
type Level = "Beginner" | "Intermediate" | "Advance";

type FormState = {
  name: string;
  age: string;
  dob: string;
  gender: Gender;
  genderOther: string;

  whatsapp: string;
  email: string;
  country: string;
  state: string;

  level: Level;

  goals: string;
  background: string;

  heard: string[]; // Instagram, Facebook, Friends/Family, Other
  heardOther: string;
};

const initialState: FormState = {
  name: "",
  age: "",
  dob: "",
  gender: "Male",
  genderOther: "",

  whatsapp: "",
  email: "",
  country: "",
  state: "",

  level: "Beginner",

  goals: "",
  background: "",

  heard: [],
  heardOther: "",
};

const WHATSAPP_NUMBER = "17329551883"; // country code + number (no +, no spaces)

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function RegisterPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const isOtherGender = form.gender === "Other";
  const isHeardOther = form.heard.includes("Other");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function toggleHeard(item: string) {
    setForm((p) => {
      const exists = p.heard.includes(item);
      const next = exists ? p.heard.filter((x) => x !== item) : [...p.heard, item];
      return { ...p, heard: next };
    });
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.age.trim()) return "Please enter your age.";
    if (!/^\d+$/.test(form.age.trim())) return "Age should be a number.";
    if (!form.whatsapp.trim()) return "Please enter your WhatsApp number.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return "Please enter a valid email.";
    if (!form.country.trim()) return "Please enter your country.";
    if (!form.state.trim()) return "Please enter your state / province.";
    if (isOtherGender && !form.genderOther.trim()) return "Please specify gender.";
    if (isHeardOther && !form.heardOther.trim()) return "Please specify how you heard about us.";
    return "";
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    setErrorMsg("");

    const msg = validate();
    if (msg) {
      setStatus("error");
      setErrorMsg(msg);
      return;
    }

    const genderLine =
      form.gender === "Other" && form.genderOther.trim()
        ? `Other (${form.genderOther.trim()})`
        : form.gender;

    const heardLine =
      [...form.heard.filter((x) => x !== "Other"), form.heard.includes("Other") ? form.heardOther.trim() : ""]
        .filter(Boolean)
        .join(", ") || "-";

    const text = `New registration / enquiry:

Name: ${form.name.trim()}
Age: ${form.age.trim()}
Date of Birth: ${form.dob.trim() || "-"}
Gender: ${genderLine}

WhatsApp/Contact: ${form.whatsapp.trim()}
Email: ${form.email.trim()}
Country: ${form.country.trim()}
State / Province: ${form.state.trim()}

Level: ${form.level}

Goals: ${form.goals.trim() || "-"}
Previous dance background: ${form.background.trim() || "-"}

Heard from: ${heardLine}`;

    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(link, "_blank", "noopener,noreferrer");

    setStatus("success");
    setForm(initialState);
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 pt-24 md:pt-28">
      <div className="mx-auto max-w-5xl px-4 pb-14">
        <div className="mb-10">
          <p className="text-xs tracking-[0.25em] text-amber-200/80">
            BIJALSANGNAACH • REGISTRATION
          </p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">Register / Enquire</h1>
          <p className="mt-3 max-w-2xl text-neutral-300">
            Online Kathak classes (Beginner / Intermediate / Advance). After you submit,
            you’ll receive a confirmation and we’ll reach out personally.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
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

              <Field label="Age *">
                <Input
                  value={form.age}
                  onChange={(e) => update("age", e.target.value)}
                  placeholder="e.g., 12"
                  inputMode="numeric"
                />
              </Field>

              <Field label="Date of Birth (MM/DD/YYYY)">
                <Input
                  value={form.dob}
                  onChange={(e) => update("dob", e.target.value)}
                  placeholder="MM/DD/YYYY"
                />
              </Field>

              <Field label="Gender *">
                <Select
                  value={form.gender}
                  onChange={(e) => update("gender", e.target.value as Gender)}
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                    { value: "Other", label: "Other" },
                  ]}
                />
              </Field>

              {isOtherGender && (
                <Field label="Specify gender *" className="md:col-span-2">
                  <Input
                    value={form.genderOther}
                    onChange={(e) => update("genderOther", e.target.value)}
                    placeholder="Please specify"
                  />
                </Field>
              )}

              <Field label="Contact Number (WhatsApp only) *" className="md:col-span-1">
                <Input
                  value={form.whatsapp}
                  onChange={(e) => update("whatsapp", e.target.value)}
                  placeholder="+1 732..."
                />
              </Field>

              <Field label="Email *" className="md:col-span-1">
                <Input
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="Country *" className="md:col-span-1">
                <Input
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  placeholder="e.g. USA, India"
                />
              </Field>

              <Field label="State / Province *" className="md:col-span-1">
                <Input
                  value={form.state}
                  onChange={(e) => update("state", e.target.value)}
                  placeholder="e.g. New Jersey, Gujarat"
                />
              </Field>

              <Field label="Level *">
                <Select
                  value={form.level}
                  onChange={(e) => update("level", e.target.value as Level)}
                  options={[
                    { value: "Beginner", label: "Beginner" },
                    { value: "Intermediate", label: "Intermediate" },
                    { value: "Advance", label: "Advance" },
                  ]}
                />
              </Field>

              <Field label="Any specific goals? (Exams, performance, hobby, fitness etc.)" className="md:col-span-2">
                <Textarea
                  value={form.goals}
                  onChange={(e) => update("goals", e.target.value)}
                  placeholder="Tell us what you want to achieve..."
                />
              </Field>

              <Field label="Any previous dance background (other styles)?" className="md:col-span-2">
                <Textarea
                  value={form.background}
                  onChange={(e) => update("background", e.target.value)}
                  placeholder="Optional"
                />
              </Field>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-sm font-medium text-neutral-200">
                How did you hear about our Kathak Classes?
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Instagram", "Facebook", "Friends / Family", "Other"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={form.heard.includes(item)}
                      onChange={() => toggleHeard(item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>

              {isHeardOther && (
                <div className="mt-3">
                  <Input
                    value={form.heardOther}
                    onChange={(e) => update("heardOther", e.target.value)}
                    placeholder="Please specify..."
                  />
                </div>
              )}
            </div>

            {status === "error" && (
              <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {errorMsg || "Failed to submit. Try again."}
              </div>
            )}

            {status === "success" && (
              <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                Opening WhatsApp — just press send there to complete your registration.
              </div>
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-amber-300 px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-amber-200 transition"
            >
              Submit via WhatsApp
            </button>

            <p className="mt-3 text-xs text-neutral-400">
              By submitting, you agree that we may contact you via WhatsApp.
            </p>
          </form>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            <Card title="Need help?">
              <p className="text-sm text-neutral-300">
                If you have questions before registering, submit this form and we will message you.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={cx(
        "w-full rounded-xl border border-neutral-800 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-100",
        "focus:border-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-300/20"
      )}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} className="bg-neutral-950">
          {o.label}
        </option>
      ))}
    </select>
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