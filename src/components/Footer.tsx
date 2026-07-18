const WHATSAPP_NUMBER = "17329551883";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'd like to enquire about Bijalsangnaach Kathak classes."
)}`;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-neutral-300">
            Bijalsangnaach — Kathak Academy · New Jersey, USA & Online
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-amber-200 hover:text-amber-100 transition"
          >
            Message us on WhatsApp
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Bijalsangnaach. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
