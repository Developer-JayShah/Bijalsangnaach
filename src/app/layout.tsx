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

export const metadata: Metadata = {
  metadataBase: new URL("https://bijalsangnaach.vercel.app"),
  title: {
    default: "Bijalsangnaach — Kathak Academy",
    template: "%s | Bijalsangnaach",
  },
  description:
    "National award-winning Kathak performer and academy based in New Jersey, USA. In-person classes in NJ and online classes worldwide.",
  openGraph: {
    title: "Bijalsangnaach — Kathak Academy",
    description:
      "National award-winning Kathak performer and academy based in New Jersey, USA. In-person classes in NJ and online classes worldwide.",
    siteName: "Bijalsangnaach",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
