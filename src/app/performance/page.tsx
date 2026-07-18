import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Performances",
  description:
    "Watch Bijalsangnaach's Kathak performances and book a custom performance for weddings, festivals, and cultural events.",
};

type Performance = {
  title: string;
  date?: string;
  location?: string;
  description: string;
  highlights?: string[];
  videoSrc?: string; // /videos/xxx.mp4
  poster?: string;   // /collage/xxx.jpg (optional)
};

const performances: Performance[] = [
  {
    title: "Stage Performance Showcase",
    date: "2025",
    location: "New Jersey, USA",
    description:
      "A high-energy Kathak performance showcasing graceful chakkars, expressive abhinaya, and powerful footwork.",
    highlights: ["Kathak choreography", "Stage presence", "Classical rhythm"],
    // OPTIONAL: if you want a second video here
    videoSrc: "/videos/performance-2.mp4",
    poster: "/collage/b10.jpeg",
  },
  {
    title: "Cultural Festival Performance",
    date: "2024",
    location: "Community Event",
    description:
      "A vibrant performance blending traditional Kathak elements with audience-friendly storytelling.",
    highlights: ["Festival performance", "Audience engagement", "Traditional presentation"],
    poster: "/collage/b12.jpeg",
  },
  {
    title: "Special Event / Private Booking",
    description:
      "Available for weddings, cultural programs, school events, and special occasions. Custom themes possible.",
    highlights: ["Custom choreography", "Solo / group options", "Professional presentation"],
    poster: "/collage/b14.jpeg",
  },
];

export default function PerformancesPage() {
  // ✅ MAIN HERO VIDEO (your current 1 video)
  // Put your current video file here:
  const heroVideoSrc = "/videos/performance-1.MP4"; // <-- CHANGE THIS
  const heroPoster = "/collage/b9.jpeg"; // optional fallback image

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* prevents top content hiding behind fixed navbar */}
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-16">
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-xs tracking-[0.25em] text-amber-200/80">
            BIJALSANGNAACH • PERFORMANCES
          </p>

          <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl">Performances</h1>
              <p className="mt-3 max-w-2xl text-neutral-300">
                Explore selected stage performances and booking options. For cultural events,
                weddings, festivals, and special programs — we can tailor the performance to your event.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-amber-300 px-5 py-2.5 font-semibold text-neutral-900 hover:bg-amber-200 transition"
              >
                Book a Performance
              </Link>
              <Link
                href="/register"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white hover:bg-white/10 transition"
              >
                Register for Classes
              </Link>
            </div>
          </div>
        </div>

        {/* HERO VIDEO + QUICK INFO */}
        <section className="grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
          {/* Video */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/30 overflow-hidden">
            <div className="relative w-full max-h-[80vh] bg-black flex items-center justify-center">
              <video
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                poster={heroPoster}
              >
                <source src={heroVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="p-5 md:p-6">
              <h2 className="font-serif text-2xl">Featured Performance</h2>
              <p className="mt-2 text-sm text-neutral-300">
                A featured stage moment capturing the energy, rhythm, and elegance of Kathak.
                For bookings, share your event date, location, and theme preference.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Solo / Group</Badge>
                <Badge>Festivals</Badge>
                <Badge>Weddings</Badge>
                <Badge>Cultural Programs</Badge>
              </div>
            </div>
          </div>

          {/* Booking card */}
          <div className="space-y-6">
            <Card title="Performance Booking">
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Event type: Festival / Wedding / Cultural / School / Private</li>
                <li>• Location: USA / India / International (online possible)</li>
                <li>• Duration: 5–45 minutes (custom)</li>
                <li>• Theme: Traditional / Storytelling / Fusion (optional)</li>
              </ul>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-amber-300 px-4 py-3 text-center font-semibold text-neutral-900 hover:bg-amber-200 transition"
                >
                  Contact for Booking
                </Link>

                <p className="text-xs text-neutral-400">
                  We usually reply within 24 hours.
                </p>
              </div>
            </Card>

            <Card title="What you’ll get">
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Professional choreography and presentation</li>
                <li>• Flexible event-friendly performance formats</li>
                <li>• High-energy footwork + graceful movement</li>
                <li>• Optional workshop / audience interaction</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* MORE PERFORMANCES */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl">More Performances</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {performances.map((perf) => (
              <div
                key={perf.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/25"
              >
                {perf.poster && (
                  <div className="relative aspect-[4/3] bg-black">
                    <Image
                      src={perf.poster}
                      alt={perf.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-serif text-lg">{perf.title}</h3>
                  <p className="mt-1 text-xs text-neutral-400">
                    {[perf.date, perf.location].filter(Boolean).join(" · ")}
                  </p>
                  <p className="mt-3 text-sm text-neutral-300">{perf.description}</p>
                  {perf.highlights && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {perf.highlights.map((h) => (
                        <Badge key={h}>{h}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/40 to-neutral-900/10 p-7 md:p-10">
          <h2 className="font-serif text-3xl">Want us to perform at your event?</h2>
          <p className="mt-2 max-w-2xl text-neutral-300">
            Share your event date, location, audience type, and preferred duration — we’ll respond with
            availability and a suggested performance format.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-neutral-900 hover:bg-amber-200 transition"
            >
              Book a Performance
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              View Gallery
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/25 p-6">
      <h3 className="font-serif text-xl">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
      {children}
    </span>
  );
}
