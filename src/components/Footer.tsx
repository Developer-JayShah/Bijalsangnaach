import { Facebook, Instagram, Youtube } from "lucide-react";

const WHATSAPP_NUMBER = "17329551883";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'd like to enquire about Bijalsangnaach Kathak classes."
)}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.06 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/bijalsangnaach?igsh=MWl0cjc4bmt2N3IxZg%3D%3D&utm_source=qr",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61560980019921&mibextid=wwXIfr&rdid=kDLVsccNoCkArMNF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CrEaXgDjb%2F%3Fmibextid%3DwwXIfr",
    Icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@bijalsangnaach",
    Icon: Youtube,
  },
  {
    label: "Message us on WhatsApp",
    href: whatsappLink,
    Icon: WhatsAppIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-neutral-300">
            Bijalsangnaach — Kathak Academy · New Jersey, USA & Online
          </p>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-neutral-400 hover:text-amber-200 transition"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Bijalsangnaach. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
