"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/performance", label: "Performances" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-3 text-sm text-white">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo size={36} />

          <div className="leading-tight">
            <p className="font-serif font-semibold tracking-wide">Bijalsangnaach</p>
            <p className="text-[11px] text-neutral-300">
              Kathak • Training • Performances
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-amber-200"
                  : "hover:text-amber-200 transition"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/register"
            className="rounded-full bg-amber-300 px-4 py-1.5 text-black font-semibold hover:bg-amber-200 transition"
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/90 backdrop-blur px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  "rounded-lg px-3 py-2.5 transition " +
                  (pathname === link.href
                    ? "bg-white/10 text-amber-200"
                    : "text-neutral-200 hover:bg-white/5")
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-amber-300 px-4 py-2.5 text-center font-semibold text-black hover:bg-amber-200 transition"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
