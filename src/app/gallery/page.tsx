"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Category = "All" | "Performances" | "Classes" | "Awards";

type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<Category, "All">;
};

const ITEMS: GalleryItem[] = [
  { src: "/collage/b1.jpg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b2.jpeg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b3.jpeg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b4.jpeg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b5.jpeg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b6.jpeg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b7.jpeg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b8.jpeg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b9.jpeg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b10.jpeg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b11.jpeg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b12.jpeg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b13.jpeg", alt: "Kathak performance", category: "Performances" },
  { src: "/collage/b14.jpeg", alt: "Kathak performance", category: "Performances" },

  { src: "/collage/class-1.png", alt: "Kathak class", category: "Classes" },
  { src: "/collage/class-2.png", alt: "Kathak class", category: "Classes" },
  { src: "/collage/class-3.png", alt: "Kathak class", category: "Classes" },
  { src: "/collage/class-4.png", alt: "Kathak class", category: "Classes" },
  { src: "/collage/class-5.png", alt: "Kathak class", category: "Classes" },
  { src: "/collage/class-6.png", alt: "Kathak class", category: "Classes" },

  { src: "/collage/award-1.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-2.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-3.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-4.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-5.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-6.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-7.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-8.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-9.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-10.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-11.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-12.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-13.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-14.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-15.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-16.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-17.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-18.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-19.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-20.jpeg", alt: "Award and recognition", category: "Awards" },
  { src: "/collage/award-21.png", alt: "Award and recognition", category: "Awards" },
];

const TABS: Category[] = ["All", "Performances", "Classes", "Awards"];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function GalleryPage() {
  const [tab, setTab] = useState<Category>("All");
  const [open, setOpen] = useState<GalleryItem | null>(null);

  const filtered = useMemo(() => {
    if (tab === "All") return ITEMS;
    return ITEMS.filter((i) => i.category === tab);
  }, [tab]);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-14">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs tracking-[0.25em] text-amber-200/80">
            BIJALSANGNAACH • GALLERY
          </p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl">Gallery</h1>
          <p className="mt-3 max-w-2xl text-neutral-300">
            A glimpse of performances, training moments, and highlights.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cx(
                "rounded-full px-4 py-2 text-sm border transition",
                tab === t
                  ? "border-amber-300/60 bg-amber-300/10 text-amber-200"
                  : "border-white/10 bg-white/5 text-neutral-200 hover:bg-white/10"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-white/10 bg-white/5 px-6 py-16 text-center text-neutral-400">
            More photos coming soon.
          </p>
        ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((item) => (
            <button
              key={item.src}
              onClick={() => setOpen(item)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-xs text-white/80">{item.category}</p>
              </div>
            </button>
          ))}
        </div>
        )}
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={open.src}
                alt={open.alt}
                fill
                sizes="90vw"
                className="object-contain bg-black"
              />
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-sm text-white/80">
              <span>{open.category}</span>
              <button
                onClick={() => setOpen(null)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
