"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageBackLink() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      className="fixed left-4 top-24 z-[60] inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#10271d]/88 px-3 py-2 text-xs font-bold text-white shadow-lg shadow-[#10271d]/15 backdrop-blur transition hover:-translate-x-0.5 hover:bg-[#244c35] sm:left-6 sm:px-4 sm:text-sm"
    >
      <ArrowLeft size={16} />
      Retour à l&apos;accueil
    </Link>
  );
}
