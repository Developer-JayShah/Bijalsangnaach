import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Bijalsangnaach Kathak Academy for class enquiries, trial sessions, or performance bookings.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
