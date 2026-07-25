import Link from "next/link";
import { ArrowRight, Building2, Fence, LandPlot, Trees } from "lucide-react";

export const metadata = { title: "Applications | Hydrovert Solutions", description: "Talus, chantiers, espaces paysagers et sols exposés : découvrez les applications de nos solutions de revégétalisation." };

const applications = [
  [LandPlot, "Talus et pentes", "Pour engager une couverture végétale sur les surfaces inclinées et exposées au ruissellement."],
  [Building2, "Chantiers et infrastructures", "Pour accompagner la remise en état des zones remaniées, accotements et grandes surfaces."],
  [Trees, "Espaces paysagers", "Pour les jardins, lotissements et espaces verts lorsque la technique répond à l'objectif du projet."],
  [Fence, "Sols nus à protéger", "Pour apporter une couverture de surface temporaire ou accompagner un projet de végétalisation."],
];

export default function ApplicationsPage() {
  return <main className="min-h-screen bg-[#f7f8f4] px-6 py-28 text-[#18241d] sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[.24em] text-[#4f7e31]">Applications</p><h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.05em] sm:text-5xl lg:text-6xl">Chaque terrain demande une réponse adaptée.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">Nous partons de l&apos;usage du terrain, de sa pente, de son état et de son environnement. La solution se définit ensuite, de façon claire et cohérente.</p><div className="mt-14 grid gap-5 sm:grid-cols-2">{applications.map(([Icon,title,text]) => { const ItemIcon = Icon as typeof LandPlot; return <article key={title as string} className="rounded-3xl border border-[#dbe5d4] bg-white p-7 sm:p-8"><ItemIcon className="text-[#4f7e31]" size={30}/><h2 className="mt-7 text-2xl font-semibold">{title as string}</h2><p className="mt-4 leading-7 text-slate-600">{text as string}</p></article>; })}</div><section className="mt-14 flex flex-col gap-5 rounded-3xl bg-[#10271d] p-8 text-white sm:p-10 md:flex-row md:items-center md:justify-between"><div><h2 className="text-2xl font-semibold">Votre terrain ne rentre pas dans une case ?</h2><p className="mt-2 max-w-2xl text-white/70">Expliquez-nous votre projet : nous échangeons sur ce qui est réellement utile.</p></div><Link href="/devis" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#c0ea93] px-6 py-3.5 font-bold text-[#10271d] hover:bg-white">Parler du projet <ArrowRight size={18}/></Link></section></div></main>;
}
