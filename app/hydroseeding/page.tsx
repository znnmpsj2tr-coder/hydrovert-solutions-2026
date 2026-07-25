import Link from "next/link";
import { ArrowRight, Droplets, Sprout, Waves } from "lucide-react";

export const metadata = {
  title: "Hydroseeding | Hydrovert Solutions",
  description: "Découvrez l'hydroseeding : une projection hydraulique de semences et de paillage, adaptée aux terrains à revégétaliser.",
};

const steps = [
  ["01", "Comprendre le terrain", "Sol, pente, exposition, accès et objectif de végétalisation guident le choix de la solution."],
  ["02", "Composer le mélange", "Les semences et les composants sont sélectionnés en fonction du contexte du projet, pas sur une recette identique pour tous."],
  ["03", "Projeter de façon homogène", "Le mélange hydraulique est appliqué sur la surface pour répartir les composants et former une couverture de départ."],
  ["04", "Accompagner la suite", "Après la projection, l'irrigation et la météo jouent un rôle essentiel dans l'installation de la végétation."],
];

export default function HydroseedingPage() {
  return (
    <main className="overflow-hidden bg-[#f7f8f4] text-[#18241d]">
      <section className="relative bg-[#10271d] px-6 pb-20 pt-32 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(192,234,147,.2),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9efa6]">Hydroseeding</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-7xl">Faire partir une végétation adaptée, même sur des terrains exigeants.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">L&apos;hydroseeding projette, en une seule application, un mélange d&apos;eau, de semences et de fibres de paillage. Chaque mélange est ajusté à la réalité du terrain.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/devis" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c0ea93] px-6 py-3.5 font-bold text-[#10271d] transition hover:bg-white">Demander une étude <ArrowRight size={18} /></Link><Link href="/guide-irrigation" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 font-semibold transition hover:bg-white/10">Voir le guide d&apos;irrigation</Link></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:px-12 lg:py-28">
        <div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4f7e31]">Une méthode, pas une promesse magique</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Ce que fait l&apos;hydroseeding.</h2></div>
        <div className="space-y-5 text-lg leading-8 text-slate-600"><p>La projection hydraulique permet de déposer les semences et le paillage de façon régulière sur une surface. Le paillage aide à maintenir l&apos;humidité de surface et offre une première protection pendant la phase d&apos;installation.</p><p>Cette technique peut être pertinente pour les talus, les zones de chantier, les grandes surfaces et certains endroits difficiles d&apos;accès. Elle ne dispense pas d&apos;examiner l&apos;état du sol : un terrain compacté, instable ou mal préparé peut nécessiter des interventions complémentaires.</p></div>
      </section>

      <section className="border-y border-[#dbe5d4] bg-white"><div className="mx-auto grid max-w-7xl divide-y divide-[#dbe5d4] px-6 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12"><article className="py-10 md:px-8 md:first:pl-0"><Waves className="text-[#4f7e31]" size={30}/><h2 className="mt-5 text-2xl font-semibold">Une répartition maîtrisée</h2><p className="mt-3 leading-7 text-slate-600">La projection aide à couvrir la zone de manière homogène, y compris sur des surfaces étendues.</p></article><article className="py-10 md:px-8"><Sprout className="text-[#4f7e31]" size={30}/><h2 className="mt-5 text-2xl font-semibold">Un mélange adapté</h2><p className="mt-3 leading-7 text-slate-600">Les espèces et composants se choisissent selon le rendu recherché et les contraintes du site.</p></article><article className="py-10 md:px-8 md:pr-0"><Droplets className="text-[#4f7e31]" size={30}/><h2 className="mt-5 text-2xl font-semibold">Un suivi à prévoir</h2><p className="mt-3 leading-7 text-slate-600">Une irrigation régulière durant les premières semaines est déterminante pour maintenir un environnement favorable à la germination.</p></article></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4f7e31]">Notre approche</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Une méthode simple, expliquée clairement.</h2></div><Link href="/guide-irrigation" className="font-semibold text-[#315c2b] hover:underline">Après l&apos;intervention : guide 30 jours →</Link></div><div className="grid gap-px overflow-hidden rounded-3xl border border-[#dbe5d4] bg-[#dbe5d4] md:grid-cols-2">{steps.map(([number,title,text])=><article key={number} className="bg-[#f7f8f4] p-7 sm:p-8"><p className="text-sm font-bold tracking-[.2em] text-[#79a65d]">{number}</p><h3 className="mt-8 text-2xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}</div></section>
    </main>
  );
}
