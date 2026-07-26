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
      className="fixed left-3 top-4 z-40 inline-flex items-center gap-2 rounded-full border border-[#d7e5cd] bg-white/95 px-3 py-2 text-xs font-bold text-[#244c35] shadow-lg shadow-[#10271d]/10 backdrop-blur transition hover:-translate-x-0.5 hover:bg-[#eaf5df] sm:left-5 sm:top-5 sm:px-4 sm:text-sm"
    >
      <ArrowLeft size={16} />
      Retour à l&apos;accueil
    </Link>
  );
}
