import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A gallery of Bijalsangnaach's Kathak performances, training moments, and highlights.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
