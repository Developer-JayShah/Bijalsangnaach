import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Bijal",
  description:
    "Meet Bijal Barot — National Balshree Award winner, Kathak Visharad trained in the Jaipur Gharana, and founder of Bijalsangnaach Kathak Academy.",
};

const sidebarLinks = [
  { href: "#about", label: "About Me" },
  { href: "#awards", label: "Awards" },
  { href: "#performances", label: "Performances" },
  { href: "#classes", label: "Classes & Programs" },
  { href: "#contact", label: "Contact & Location" },
];

import {
  GraduationCap,
  Sparkles,
  Heart,
  MapPin,
  Globe,
  Target,
  Users
} from "lucide-react";

const WHATSAPP_NUMBER = "17329551883";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'd like to enquire about Bijalsangnaach Kathak classes."
)}`;


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* TOP BANNER */}
<section className="relative h-[420px] w-full overflow-hidden">
  <Image
    src="/collage/b4.jpeg" // ⬅️ change this to the number you liked
    alt="Bijal performing Kathak"
    fill
    priority
    sizes="100vw"
    className="object-cover"
    style={{ objectPosition: "center 20%" }}
  />
  {/* darker gradient so text is readable */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />

  <div className="relative z-10 flex h-full items-end">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 pb-8 md:px-6">
      <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">
        Bijalsangnaach
      </p>
      <h1 className="max-w-3xl font-serif text-3xl md:text-4xl lg:text-5xl">
        About Bijal – Founder &amp; Artistic Director
      </h1>
      <p className="max-w-2xl text-sm md:text-base text-neutral-100/85">
        National award-winning Kathak dancer, choreographer, and educator
        bringing the grace of Indian classical dance to New Jersey and to
        students around the world.
      </p>
    </div>
  </div>
</section>


      {/* MAIN CONTENT */}
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:px-6 md:py-16">
        {/* LEFT SIDEBAR */}
        <aside className="w-full md:w-64 md:flex-shrink-0">
          {/* Logo + name */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/80 bg-black/80">
              <span className="text-xl" aria-hidden="true">
                💃
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">
                SKK
              </p>
              <p className="text-sm font-semibold">
                Bijalsangnaach
              </p>
            </div>
          </div>

          {/* Register card */}
          <div className="mb-8 rounded-2xl bg-white/5 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.75)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
              Registration Open
            </p>
            <p className="mt-2 text-sm text-neutral-100">
              New batches for kids, teens, and adults in New Jersey & online.
            </p>
            <p className="mt-2 text-xs text-neutral-300">
              Beginner to advanced Kathak, with optional exam & performance
              opportunities.
            </p>
            <Link
              href="/register"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-4 py-2 text-xs font-semibold tracking-wide text-black hover:bg-amber-200 transition"
            >
              REGISTER / ENQUIRE
            </Link>
          </div>

          {/* Sidebar navigation */}
          <nav className="space-y-1 text-sm">
            {sidebarLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-full px-3 py-2 text-neutral-300 hover:bg-white/10 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="flex-1 space-y-12 text-sm md:text-[15px] leading-relaxed">
          {/* ABOUT SECTION */}
         <section id="about-me" className="space-y-4">
  <h2 className="text-xl md:text-2xl font-semibold mb-2">About Bijal</h2>

  <p className="leading-relaxed text-neutral-200">
    Bijal Barot is an internationally recognized Kathak artist, MCA graduate, and
    Kathak Visharad from Gujarat, India. Trained under{" "}
    <span className="font-semibold">Smt. Namrata Shah</span> and rooted in the{" "}
    <span className="font-semibold">Jaipur Gharana</span> tradition, she
    combines classical depth with artistic versatility.
  </p>

  <p className="leading-relaxed text-neutral-200">
    Honored with the{" "}
    <span className="font-semibold">National Balshree Award</span>,{" "}
    <span className="font-semibold">Nadiad Kala Ratna</span>, and several state
    and national accolades, Bijal is celebrated for her expressive stage
    presence and mastery of rhythm. Along with Kathak, she is an accomplished
    folk dancer, performing at the Modi US event and showcasing Gujarat&apos;s
    culture at the Kutch Rann Utsav in front of Prime Minister Narendra Modi.
  </p>

  <p className="leading-relaxed text-neutral-200">
    Her performances span major stages across India and internationally,
    including India Day New York, Gujarat Samaj USA, Brahmbhatt Samaj USA, the
    Uttarardh Festival, Hyderabad Literary Festival, International Kite
    Festival, and Vibrant Navratri.
  </p>

  <p className="leading-relaxed text-neutral-200">
    In recent years, Bijal has expanded globally as an educator, teaching in the
    USA and conducting online Kathak classes for students across the USA, UK,
    and India—building a vibrant international community of dancers.
  </p>
</section>


          {/* AWARDS SECTION */}
<section id="awards" className="space-y-4">
  <h2 className="text-xl md:text-2xl font-semibold mb-2">Awards & Honours</h2>

  <div className="space-y-3">
    <h3 className="font-semibold text-neutral-100">National Recognition</h3>
    <ul className="list-disc list-inside space-y-1 text-neutral-200">
      <li>
        <span className="font-semibold">National Balshree Award (2009)</span> —
        Honored in New Delhi in the presence of HRD Minister{" "}
        Dr. D. Purandeswari; first recipient in Kathak from Gujarat.
      </li>
      <li>
        <span className="font-semibold">Gold Medalist</span> — Ranked first in
        Gujarat in the Bruhad Gujarat Kathak Visharad Examination.
      </li>
    </ul>
  </div>

  <div className="space-y-3">
    <h3 className="font-semibold text-neutral-100">State &amp; Cultural Honors</h3>
    <ul className="list-disc list-inside space-y-1 text-neutral-200">
      <li>
        <span className="font-semibold">Nadiad Kala Ratna (2011)</span> — Awarded
        by then Chief Minister Shri Narendra Modi.
      </li>
      <li>
        <span className="font-semibold">Mai Kala Ratna (2010)</span> — Conferred
        by Amba Ashram, Nadiad.
      </li>
      <li>
        Felicitated by Nadiad Municipality during Swarnim Gujarat Mahotsav
        (2010).
      </li>
      <li>Felicitated by Lioness Club and JCI Nadiad (2010).</li>
      <li>
        Felicitated by Petroleum Minister Shri Dinsha Patel on Vishva Rangbhumi
        Din Mahotsav (2010).
      </li>
      <li>
        <span className="font-semibold">State Award (2011)</span> — First in
        Gujarat State Youth Festival.
      </li>
      <li>
        <span className="font-semibold">
          Inter-College &amp; University Awards (2011)
        </span>{" "}
        — First in Gujarat University Youth Festival.
      </li>
      <li>
        <span className="font-semibold">
          Inter-University West Zonal Youth Festival Winner (2017)
        </span>
        .
      </li>
      <li>
        <span className="font-semibold">Nadiad Gaurav Award (2006)</span> — By
        Kheda Jilla Sahitya Sangh.
      </li>
    </ul>
  </div>

  <div className="space-y-3">
    <h3 className="font-semibold text-neutral-100">
      Scholarships &amp; Special Recognition
    </h3>
    <ul className="list-disc list-inside space-y-1 text-neutral-200">
      <li>
        CCRT Government of India Scholarship for advanced Kathak training.
      </li>
      <li>
        Recognized by leading media including Sandesh, Gujarat Samachar,
        Hyderabad News, and Gujarat Times (USA).
      </li>
    </ul>
  </div>

  <div className="space-y-3">
    <h3 className="font-semibold text-neutral-100">Television</h3>
    <ul className="list-disc list-inside space-y-1 text-neutral-200">
      <li>
        Featured performer on Sony Entertainment Television&apos;s{" "}
        <span className="italic">Boogie Woogie Kids Championship</span>.
      </li>
    </ul>
  </div>
</section>


          {/* PERFORMANCES SECTION */}
<section id="performances" className="space-y-4">
  <h2 className="text-xl md:text-2xl font-semibold mb-2">Performances</h2>

  <div className="space-y-3">
    <h3 className="font-semibold text-neutral-100">
      International &amp; USA Performances
    </h3>
    <ul className="list-disc list-inside space-y-1 text-neutral-200">
      <li>Featured performer at Mera India 2019, Expo Center, New Jersey.</li>
      <li>Performed at India Day – New York (2022–2025).</li>
      <li>
        Invited artist for Gujarat Samaj USA and Brahmbhatt Samaj USA cultural
        events.
      </li>
      <li>
        Presented Kathak and Indian cultural works at multiple community
        celebrations across the USA.
      </li>
    </ul>
  </div>

  <div className="space-y-3">
    <h3 className="font-semibold text-neutral-100">
      Major National &amp; State Festivals
    </h3>
    <ul className="list-disc list-inside space-y-1 text-neutral-200">
      <li>Uttarardh Festival, Sun Temple, Modhera.</li>
      <li>Hyderabad Literary Festival, organized by Telangana Tourism.</li>
      <li>
        International Kite Festival, Ahmedabad — performed in the presence of
        Chief Minister Shri Vijay Rupani.
      </li>
      <li>Kite Festival Closing Ceremony, Ahmedabad.</li>
      <li>
        Vibrant Navratri, Ahmedabad — performed Narmada Ashtakam before the
        Chief Minister.
      </li>
      <li>Navratri Mahotsav, Ambaji Temple — Gujarat State programme.</li>
      <li>
        Chhattisgarh Rajyotsav, Raipur — in the presence of Governor Smt.
        Anandiben Patel.
      </li>
      <li>Sadakal Gujarat Festival, Raipur.</li>
      <li>National Youth Festivals in Haryana and Odisha.</li>
      <li>Unity in Diversity Festival, Hyderabad (CCRT, Government of India).</li>
    </ul>
  </div>

  <div className="space-y-3">
    <h3 className="font-semibold text-neutral-100">Special Classical Productions</h3>
    <ul className="list-disc list-inside space-y-1 text-neutral-200">
      <li>
        Lead dancer in multiple Krishna-Leela productions across Gujarat,
        Rajasthan, and Chhattisgarh.
      </li>
      <li>
        <span className="font-semibold">Vishnu Sahasranam Stotram</span> — 45
        minute uninterrupted performance (rare feat).
      </li>
      <li>Samudra Manthan Nritya-Natika, Nadiad.</li>
      <li>Saraswati Stotram, National Youth Festival (Haryana).</li>
      <li>Ayurvedic-themed Nritya Natika, Nadiad.</li>
    </ul>
  </div>

  <div className="space-y-3">
    <h3 className="font-semibold text-neutral-100">
      Cultural &amp; Government Events
    </h3>
    <ul className="list-disc list-inside space-y-1 text-neutral-200">
      <li>Closing Ceremony of Gandhiji Padyatra, Bhavnagar.</li>
      <li>
        Performances at Stree Niketan, Santram Mandir, and various cultural
        organizations.
      </li>
      <li>Featured artist at Indo-Vasc International Symposium, Bengaluru.</li>
      <li>
        Exclusive performance at Mehrangarh Palace, Jodhpur — invited by the
        Royal Family for an event hosted for the Ambanis and international
        dignitaries.
      </li>
      <li>
        Showcased Kathak at the Kutch Rann Utsav in the presence of Prime
        Minister Narendra Modi.
      </li>
    </ul>
  </div>

  <div className="space-y-3">
    <h3 className="font-semibold text-neutral-100">
      Youth, University &amp; Institutional Performances
    </h3>
    <ul className="list-disc list-inside space-y-1 text-neutral-200">
      <li>Winner &amp; performer at Gujarat State Youth Festival.</li>
      <li>Winner &amp; performer at Gujarat University Inter-College Festival.</li>
      <li>
        Winner &amp; performer at Inter-University West Zonal Youth Festival.
      </li>
      <li>
        Lead performer for Tapasa Academy events (2008–2018), including Swarnim
        Gujarat Mahotsav, Kankaria Carnival, and state cultural celebrations.
      </li>
    </ul>
  </div>

  <div className="space-y-3">
    <h3 className="font-semibold text-neutral-100">
      Folk Dance &amp; Special Appearances
    </h3>
    <ul className="list-disc list-inside space-y-1 text-neutral-200">
      <li>Performed as a Folk Artist at the ModiUS Event.</li>
      <li>
        Presented classical–folk fusion pieces at prominent cultural
        gatherings.
      </li>
    </ul>
  </div>
</section>

         {/* CLASSES SECTION */}
<section id="classes" className="space-y-6 mt-12">
  <h2 className="text-3xl font-serif font-bold text-white">
    Classes & Programs
  </h2>

  <ul className="space-y-4 mt-6">
    {/* BEGINNER / INTERMEDIATE / ADVANCED */}
    <li className="flex items-start gap-3">
      <GraduationCap className="w-6 h-6 text-amber-300 flex-shrink-0" />
      <span className="text-neutral-200">
        Kathak Classes – Beginner, Intermediate & Advanced levels
      </span>
    </li>

    {/* SEMI CLASSICAL */}
    <li className="flex items-start gap-3">
      <Sparkles className="w-6 h-6 text-amber-300 flex-shrink-0" />
      <span className="text-neutral-200">Semi-Classical Choreography</span>
    </li>

    {/* WEDDING */}
    <li className="flex items-start gap-3">
      <Heart className="w-6 h-6 text-amber-300 flex-shrink-0" />
      <span className="text-neutral-200">Wedding Choreography</span>
    </li>

    {/* NEW JERSEY */}
    <li className="flex items-start gap-3">
      <MapPin className="w-6 h-6 text-amber-300 flex-shrink-0" />
      <span className="text-neutral-200">
        In-Person Classes for New Jersey–based students
      </span>
    </li>

    {/* ONLINE CLASSES */}
    <li className="flex items-start gap-3">
      <Globe className="w-6 h-6 text-amber-300 flex-shrink-0" />
      <span className="text-neutral-200">
        Online Kathak Classes for USA, UK & India based students
      </span>
    </li>

    {/* FOCUS AREA */}
    <li className="flex items-start gap-3">
      <Target className="w-6 h-6 text-amber-300 flex-shrink-0" />
      <span className="text-neutral-200">
        Focus of Every Batch: Technique, Taal, Padhant, Body Alignment, Stage Presence, Story Understanding
      </span>
    </li>

    {/* PERSONAL COACHING */}
    <li className="flex items-start gap-3">
      <Users className="w-6 h-6 text-amber-300 flex-shrink-0" />
      <span className="text-neutral-200">
        Personalized One-on-One Coaching (limited slots)
      </span>
    </li>
  </ul>
</section>


          {/* CONTACT SECTION */}
          <section id="contact" className="space-y-4">
            <h2 className="font-serif text-xl md:text-2xl">
              Contact & Location
            </h2>
            <p>
              Bijalsangnaach is based in{" "}
              <span className="font-semibold">New Jersey, USA</span>, with
              in-person classes planned in the Edison / Iselin area and online
              batches for students across the US and internationally.
            </p>
            <p className="space-y-1 text-sm text-neutral-100">
              <span className="block">
                <span className="font-semibold">WhatsApp:</span>{" "}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-amber-200"
                >
                  Message us directly
                </a>
              </span>
            </p>
            <p className="text-sm text-neutral-300">
              For detailed schedule, fees, or to book a trial class, please use
              the Register / Enquire button above or message us on WhatsApp with
              your name, age, and previous dance experience.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
