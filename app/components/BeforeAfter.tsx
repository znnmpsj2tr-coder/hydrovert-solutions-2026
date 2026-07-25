import { ArrowRight, CheckCircle2, Camera, MapPinned } from "lucide-react";
import Link from "next/link";

export default function BeforeAfter() {
  return (
    <section className="bg-[#10271d] py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center lg:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c9efa6]">Une communication honnête</p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Nous préférons montrer du réel plutôt que promettre l&apos;impossible.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">Hydrovert Solutions démarre son histoire. Nos futurs avant/après présenteront nos propres chantiers, avec leurs contraintes et leur évolution — jamais des réalisations empruntées.</p>
          <Link href="/devis" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#10271d] transition hover:bg-[#c9efa6]">Échanger sur votre terrain <ArrowRight size={18} /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7"><Camera className="text-[#c9efa6]" size={28} /><p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-white/50">Avant intervention</p><h3 className="mt-3 text-xl font-semibold">Un état des lieux clair</h3><p className="mt-3 leading-7 text-white/65">Surface, pente, accès et objectif : les éléments utiles pour bien démarrer.</p></article>
          <article className="rounded-[1.75rem] bg-[#c0ea93] p-7 text-[#10271d]"><MapPinned size={28} /><p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#10271d]/55">Après intervention</p><h3 className="mt-3 text-xl font-semibold">Un suivi utile</h3><p className="mt-3 leading-7 text-[#10271d]/75">Des conseils simples, notamment sur l&apos;irrigation, pour favoriser la reprise végétale.</p><CheckCircle2 className="mt-6" size={22} /></article>
        </div>
      </div>
    </section>
  );
}
