import { ArrowDown, ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[740px] overflow-hidden bg-[#10271d] text-white sm:min-h-[780px]">
      <Image src="/images/hero.jpg" alt="Terrain végétalisé par projection hydraulique" fill priority sizes="100vw" className="object-cover object-center opacity-80 motion-safe:animate-[hero-zoom_18s_ease-out_forwards]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,15,.94)_0%,rgba(7,24,15,.78)_42%,rgba(7,24,15,.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(169,223,118,.16),transparent_32%)]" />

      <div className="relative mx-auto flex min-h-[740px] w-full max-w-7xl items-center px-6 pb-16 pt-40 sm:min-h-[780px] sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.21em] text-[#c9efa6] sm:text-sm">Hydroseeding · Hydromulching · Anti-érosion</p>
          <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Votre terrain mérite <span className="text-[#c9efa6]">mieux qu&apos;une solution standard.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            Une revégétalisation pensée pour votre sol, vos contraintes et le résultat que vous attendez — partout en France.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
            <Link href="/devis" className="inline-flex items-center gap-2 rounded-full bg-[#c0ea93] px-6 py-3.5 font-bold text-[#10271d] transition hover:-translate-y-0.5 hover:bg-white">Parler de votre projet <ArrowRight size={18} /></Link>
            <Link href="/terrain" className="rounded-full border border-[#c9efa6]/60 bg-[#10271d]/30 px-6 py-3.5 font-semibold text-[#e8f8d9] transition hover:-translate-y-0.5 hover:bg-[#c9efa6]/15">Étudier mon terrain</Link>
            <Link href="#pourquoi-nous" className="rounded-full border border-white/35 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">Pourquoi nous choisir</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/20 pt-5 text-sm text-white/80">
            {['Chantiers réalisés par nos équipes', 'Conseils adaptés à votre terrain', 'Devis clair et gratuit'].map((item) => <span key={item} className="inline-flex items-center gap-2"><Check size={16} className="text-[#c9efa6]" />{item}</span>)}
          </div>
        </div>
      </div>
      <a href="#pourquoi-nous" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-white sm:flex"><ArrowDown size={16} /> Découvrir notre approche</a>
    </section>
  );
}
