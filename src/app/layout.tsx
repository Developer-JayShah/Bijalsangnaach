import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

const SITE_TITLE = "Bijalsangnaach — Kathak Academy";
const SITE_DESCRIPTION =
  "National award-winning Kathak performer and academy based in New Jersey, USA. In-person classes in NJ and online classes worldwide.";
const OG_IMAGE = "/collage/b9.jpeg";

export const metadata: Metadata = {
  metadataBase: new URL("https://bijalsangnaach.vercel.app"),
  title: {
    default: SITE_TITLE,
    template: "%s | Bijalsangnaach",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Bijalsangnaach",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1600,
        height: 1184,
        alt: "Bijal Barot performing Kathak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": "https://bijalsangnaach.vercel.app/#organization",
      name: "Bijalsangnaach Kathak Academy",
      description: SITE_DESCRIPTION,
      url: "https://bijalsangnaach.vercel.app",
      image: "https://bijalsangnaach.vercel.app/collage/b9.jpeg",
      areaServed: [
        { "@type": "Place", name: "New Jersey, USA" },
        { "@type": "Place", name: "Worldwide (Online)" },
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: "NJ",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.instagram.com/bijalsangnaach",
        "https://www.facebook.com/profile.php?id=61560980019921",
        "https://www.youtube.com/@bijalsangnaach",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://bijalsangnaach.vercel.app/#founder",
      name: "Bijal Barot",
      jobTitle: "Kathak Performer & Instructor",
      description:
        "National Balshree Award recipient, Kathak Gold Medalist, and disciple of the Jaipur Gharana tradition.",
      worksFor: { "@id": "https://bijalsangnaach.vercel.app/#organization" },
      award: [
        "National Balshree Award (New Delhi)",
        "Kathak Gold Medalist",
      ],
      sameAs: [
        "https://www.instagram.com/bijalsangnaach",
        "https://www.facebook.com/profile.php?id=61560980019921",
        "https://www.youtube.com/@bijalsangnaach",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-neutral-950 text-white antialiased`}
      >
        <Navbar />
        {/* No pt-16 here – pages decide their own padding */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
