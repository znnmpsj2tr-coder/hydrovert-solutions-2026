"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/hydroseeding", label: "Hydroseeding" },
  { href: "/hydromulching", label: "Hydromulching" },
  { href: "/applications", label: "Applications" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Link
        href="/guide-irrigation"
        className="group relative flex min-h-16 items-center justify-center overflow-hidden border-b border-[#c9efa6]/20 bg-[#0b1c13] px-4 py-3 text-center"
      >
        <span className="absolute left-1/4 top-1/2 size-32 -translate-y-1/2 rounded-full bg-[#a9df76]/20 blur-3xl" />
        <span className="relative inline-flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm">
          <Droplets size={17} className="hidden text-[#c9efa6] sm:block" />
          <span className="font-bold uppercase tracking-[0.18em] text-[#c9efa6]">Guide 30 jours</span>
          <span className="text-white/85">Le rythme d&apos;irrigation à adapter après votre hydroseeding.</span>
          <span className="inline-flex items-center gap-1 font-semibold text-white transition group-hover:gap-2">Voir le guide <ArrowRight size={15} /></span>
        </span>
      </Link>

      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Navigation principale">
        <Link href="/" className="flex items-center gap-3 text-white" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="Hydrovert Solutions" width={50} height={50} priority className="rounded-xl shadow-lg shadow-black/20" />
          <span className="leading-none">
            <span className="block text-base font-bold tracking-[0.11em] sm:text-lg">HYDROVERT</span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.32em] text-white/70">Solutions · France</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex">
            {links.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-[#c9efa6]">{link.label}</Link>)}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/terrain" className="hidden rounded-full border border-[#c9efa6]/60 bg-[#10271d]/40 px-4 py-2.5 text-sm font-bold text-[#e8f8d9] transition hover:bg-[#c9efa6]/15 sm:inline-flex">Mesure de terrain</Link>
          <Link href="/devis" className="rounded-full bg-[#c0ea93] px-4 py-2.5 text-sm font-bold text-[#10271d] transition hover:bg-white sm:px-5">Demander un devis</Link>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Ouvrir le menu" className="rounded-full border border-white/20 bg-[#10271d]/70 p-2.5 text-white backdrop-blur lg:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 rounded-2xl border border-white/10 bg-[#10271d]/95 p-4 shadow-2xl backdrop-blur lg:hidden">
          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-2 border-b border-white/10 pb-3">
              <Link href="/terrain" onClick={() => setOpen(false)} className="rounded-xl border border-[#c9efa6]/40 px-3 py-3 text-center text-xs font-bold text-[#c9efa6]">Mesure de terrain</Link>
              <Link href="/devis" onClick={() => setOpen(false)} className="rounded-xl bg-[#c0ea93] px-3 py-3 text-center text-xs font-bold text-[#10271d]">Demander un devis</Link>
            </div>
            {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-white/10 px-3 py-4 text-sm font-medium text-white/85">{link.label}</Link>)}
            <Link href="/guide-irrigation" onClick={() => setOpen(false)} className="px-3 py-4 text-sm font-semibold text-[#c9efa6]">Guide d&apos;irrigation</Link>
          </div>
        </div>
      )}
    </header>
  );
}
