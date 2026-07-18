import Link from "next/link";
import {
  MapPin,
  Globe,
  Users,
  GraduationCap,
  Sparkles,
  Award,
} from "lucide-react";
import HeroCollage from "@/components/HeroCollage";

const WHATSAPP_NUMBER = "17329551883";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'd like to enquire about Bijalsangnaach Kathak classes."
)}`;

const BATCH_HIGHLIGHTS = [
  { icon: MapPin, text: "In-Person Classes in New Jersey" },
  { icon: Globe, text: "Online Classes Available Worldwide" },
  { icon: Users, text: "For Kids, Teens & Adults" },
  { icon: GraduationCap, text: "Beginner to Advanced Levels" },
  { icon: Sparkles, text: "Optional Examination & Performance Opportunities" },
];

const CREDENTIALS = [
  "National Balshree Award — New Delhi",
  "Trained in the Jaipur Gharana tradition",
  "Performed before PM Narendra Modi at Kutch Rann Utsav",
  "Featured on Sony TV's Boogie Woogie Kids Championship",
];

const FEATURES = [
  {
    icon: Award,
    title: "National Award-Winning Training",
    desc: "Learn from a National Balshree awardee trained in the Jaipur Gharana tradition.",
  },
  {
    icon: Globe,
    title: "In-Person or Online",
    desc: "Join in-person in New Jersey, or attend live online classes from anywhere in the world.",
  },
  {
    icon: Users,
    title: "Every Age, Every Level",
    desc: "Structured batches for kids, teens, and adults — from complete beginners to advanced dancers.",
  },
  {
    icon: Sparkles,
    title: "Beyond the Classroom",
    desc: "Optional exams and real performance opportunities for students who want to take it further.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <HeroCollage
        name="Bijalsangnaach"
        subtitle="National Award-Winning International Kathak Performer & Academy"
        ctaHref="/about"
        ctaLabel="Know More"
        whatsappHref={whatsappLink}
        reelSrc="/videos/hero-reel.mp4"
        reelPoster="/videos/hero-reel-poster.jpg"
        images={[
          "/collage/b1.jpg",
          "/collage/b2.jpeg",
          "/collage/b3.jpeg",
          "/collage/b5.jpeg",
          "/collage/b6.jpeg",
          "/collage/b8.jpeg",
          "/collage/b9.jpeg",
          "/collage/b10.jpeg",
          "/collage/b11.jpeg",
          "/collage/b12.jpeg",
          "/collage/b13.jpeg",
          "/collage/b14.jpeg",
        ]}
      />

      {/* NEW BATCHES BANNER */}
      <section className="border-y border-amber-300/15 bg-gradient-to-b from-amber-300/[0.06] to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
              Now Enrolling
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">
              New Kathak Batches Open!
            </h2>
          </div>

          <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {BATCH_HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <Icon className="h-5 w-5 flex-shrink-0 text-amber-300" />
                <span className="text-sm text-neutral-100 sm:text-[15px]">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-3 font-semibold text-black transition hover:bg-amber-200"
            >
              Register / Enquire Now
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Message us on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-neutral-400">
            Message us directly for batch timings and availability — we&apos;ll match a schedule to your timezone.
          </p>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="border-b border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-xs text-neutral-300 sm:text-sm">
            {CREDENTIALS.map((c) => (
              <span key={c} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-300" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRAIN WITH US */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
            Why Bijalsangnaach
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">
            Classical Training, Personally Guided
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/40 bg-black/40">
                <Icon className="h-5 w-5 text-amber-300" />
              </div>
              <h3 className="mt-4 font-serif text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
        <div className="rounded-3xl border border-amber-300/20 bg-gradient-to-br from-amber-300/10 via-white/5 to-transparent p-8 text-center md:p-14">
          <h2 className="font-serif text-2xl md:text-4xl">
            Ready to begin your Kathak journey?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-300 md:text-base">
            Submit the registration form and we&apos;ll personally reach out with everything
            you need to get started.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-3 font-semibold text-black transition hover:bg-amber-200"
            >
              Register / Enquire
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Learn About Bijal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
