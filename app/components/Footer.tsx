import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1c13] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_.65fr_.8fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9efa6]">Hydrovert Solutions · France</p><h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Parlons de votre terrain.</h2><p className="mt-5 max-w-lg text-lg leading-8 text-white/70">Vous avez un projet de revégétalisation, un talus à stabiliser ou une surface à végétaliser ? Échangeons sur la solution la plus adaptée.</p><Link href="/devis" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c0ea93] px-6 py-3.5 font-bold text-[#10271d] transition hover:bg-white">Demander un devis <ArrowRight size={18} /></Link></div>
          <div><h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/55">Explorer</h3><nav className="mt-5 flex flex-col gap-3 text-white/80"><Link href="/hydroseeding" className="transition hover:text-[#c9efa6]">Hydroseeding</Link><Link href="/hydromulching" className="transition hover:text-[#c9efa6]">Hydromulching</Link><Link href="/applications" className="transition hover:text-[#c9efa6]">Applications</Link><Link href="/guide-irrigation" className="transition hover:text-[#c9efa6]">Guide d’irrigation</Link><Link href="/faq" className="transition hover:text-[#c9efa6]">FAQ</Link></nav></div>
          <div><h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/55">Contact</h3><div className="mt-5 space-y-4 text-white/75"><p className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-[#c9efa6]" />France</p><p className="flex items-start gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-[#c9efa6]" />Coordonnées à compléter</p><a href="mailto:contact@hydrovert-solutions.fr" className="flex items-start gap-3 transition hover:text-[#c9efa6]"><Mail size={18} className="mt-0.5 shrink-0 text-[#c9efa6]" />contact@hydrovert-solutions.fr</a></div></div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Hydrovert Solutions. Tous droits réservés.</p><div className="flex gap-5"><Link href="/mentions-legales">Mentions légales</Link><Link href="/politique-confidentialite">Confidentialité</Link></div></div>
      </div>
    </footer>
  );
}
