import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kathak Classes",
  description:
    "Online and in-person Kathak classes for kids, teens, and adults — Beginner to Advanced, with optional exams and performance opportunities.",
};

const WHATSAPP_NUMBER = "17329551883";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'd like to enquire about Bijalsangnaach Kathak classes."
)}`;

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Page container */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.25em] text-amber-200/70">
            BIJALSANGNAACH • CLASSES
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-[1.05]">
            Online Kathak Classes
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-300">
            Beginner / Intermediate / Advanced batches. Classes are conducted
            online via Zoom. If you miss a class, recording will be available for
            7 days.
          </p>

          {/* Hero Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-200"
            >
              Book
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* LEFT */}
          <div className="space-y-6">
            {/* Choose your batch */}
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-serif text-2xl">Choose your level</h2>
              <p className="mt-2 text-sm text-neutral-300">
                Pick your level and message us directly — we&apos;ll match a batch
                and timing to your timezone.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <BatchCard title="Beginner" />
                <BatchCard title="Intermediate" />
                <BatchCard title="Advanced" />
              </div>
            </section>

            {/* What you’ll learn */}
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-serif text-2xl">What you’ll learn</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <InfoPill title="Rhythm & Taal" desc="Lay, taal, and clarity" />
                <InfoPill title="Tatkaar" desc="Footwork technique + speed" />
                <InfoPill title="Chakkars" desc="Balance, posture, control" />
                <InfoPill
                  title="Compositions"
                  desc="Tukda, tora, tihaai practice"
                />
              </div>
            </section>

            {/* Ready to begin */}
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="font-serif text-3xl">Ready to begin?</h2>
              <p className="mt-2 text-sm text-neutral-300">
                Submit your details and we will reach out personally with next
                steps.
              </p>

              <div className="mt-6">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-200"
                >
                  Book
                </Link>
              </div>
            </section>
          </div>

          {/* RIGHT */}
          <aside className="space-y-6">
            {/* How classes work */}
            <section
              id="how-it-works"
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-serif text-2xl">How classes work</h3>
              <ul className="mt-4 space-y-3 text-sm text-neutral-200">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
                  Online via Zoom
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
                  Recording available for 7 days if you miss a class
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
                  Beginner / Intermediate / Advanced
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
                  Personal guidance & structured learning
                </li>
              </ul>
            </section>

            {/* Quick action */}
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-serif text-2xl">Quick action</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Want us to contact you directly? Fill the booking form, or message
                us on WhatsApp right now.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/register"
                  className="inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-200"
                >
                  Book
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

function BatchCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5">
      <p className="text-base font-semibold">{title}</p>
      <p className="mt-2 text-sm text-neutral-300">
        Message us for available timings in your timezone.
      </p>

      <div className="mt-4 flex flex-col gap-2">
        <Link
          href="/register"
          className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-amber-200"
        >
          Book
        </Link>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function InfoPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-neutral-300">{desc}</p>
    </div>
  );
}