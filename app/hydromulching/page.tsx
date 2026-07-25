import Link from "next/link";
import { ArrowRight, Check, Droplets, Layers3, ShieldCheck, Wind } from "lucide-react";

export const metadata = {
  title: "Hydromulching | Hydrovert Solutions",
  description:
    "Comprendre l'hydromulching : une couverture hydraulique adaptée aux sols exposés, aux talus et aux projets de protection contre l'érosion.",
};

const uses = [
  "Talus et pentes exposées au ruissellement",
  "Sols remaniés après chantier",
  "Zones difficiles d'accès ou à couvrir rapidement",
  "Protection temporaire avant l'installation de la végétation",
];

export default function HydromulchingPage() {
  return (
    <main className="overflow-hidden bg-[#f7f8f4] text-[#18241d]">
      <section className="relative bg-[#10271d] px-6 pb-20 pt-32 text-white sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(192,234,147,.22),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9efa6]">Hydromulching</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Protéger le sol pendant que la végétation s&apos;installe.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              L&apos;hydromulching forme une couverture fibreuse projetée sur le terrain. Elle aide à limiter l&apos;impact de la pluie, du vent et du dessèchement sur les surfaces sensibles.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/devis" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c0ea93] px-6 py-3.5 font-bold text-[#10271d] transition hover:bg-white">
                Étudier mon terrain <ArrowRight size={18} />
              </Link>
              <Link href="/hydroseeding" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 font-semibold transition hover:bg-white/10">
                Voir l&apos;hydroseeding
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/[.07] p-7 backdrop-blur sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9efa6]">En bref</p>
            <p className="mt-5 text-2xl font-medium leading-9">Eau + fibres de paillage + liant, avec ou sans semences selon l&apos;objectif du chantier.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4f7e31]">La technique</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Une couverture projetée, choisie selon le terrain.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>L&apos;hydromulching est une application hydraulique d&apos;eau, de fibres de paillage et d&apos;un liant. Cette couche recouvre le sol, conserve mieux l&apos;humidité de surface et aide à réduire l&apos;érosion superficielle.</p>
            <p>Selon le projet, des semences peuvent être intégrées au mélange ou appliquées avec une opération distincte. Le choix dépend notamment de la pente, du sol, de l&apos;exposition, de l&apos;objectif végétal et des contraintes du chantier.</p>
            <p className="rounded-2xl border-l-4 border-[#79b852] bg-white p-5 text-[#18241d]">L&apos;hydromulching protège la surface : il ne remplace pas une préparation ou une stabilisation du sol lorsqu&apos;elles sont nécessaires.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dbe5d4] bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#dbe5d4] px-6 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
          <article className="py-10 md:px-8 md:first:pl-0">
            <Layers3 className="text-[#4f7e31]" size={30} />
            <h2 className="mt-5 text-2xl font-semibold">Couvre le terrain</h2>
            <p className="mt-3 leading-7 text-slate-600">Les fibres créent une couche de protection sur la zone traitée, y compris lorsque l&apos;accès est complexe.</p>
          </article>
          <article className="py-10 md:px-8">
            <Droplets className="text-[#4f7e31]" size={30} />
            <h2 className="mt-5 text-2xl font-semibold">Aide à garder l&apos;humidité</h2>
            <p className="mt-3 leading-7 text-slate-600">Le paillage limite le dessèchement rapide de surface, utile pour accompagner l&apos;installation des semences.</p>
          </article>
          <article className="py-10 md:px-8 md:pr-0">
            <Wind className="text-[#4f7e31]" size={30} />
            <h2 className="mt-5 text-2xl font-semibold">Limite l&apos;érosion superficielle</h2>
            <p className="mt-3 leading-7 text-slate-600">La couverture peut réduire l&apos;effet du vent et de la pluie sur les sols nus en attendant la végétalisation.</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 rounded-[2rem] bg-[#eaf2e5] p-7 sm:p-10 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4f7e31]">Pour quels projets ?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Quand le terrain a besoin d&apos;une protection supplémentaire.</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {uses.map((use) => <li key={use} className="flex gap-3 rounded-2xl bg-white p-4 leading-6 text-slate-700"><Check className="mt-0.5 shrink-0 text-[#4f7e31]" size={18} />{use}</li>)}
          </ul>
        </div>
      </section>

      <section className="bg-[#10271d] px-6 py-16 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div><ShieldCheck className="mb-4 text-[#c9efa6]" size={28} /><h2 className="text-3xl font-semibold">Vous ne savez pas si l&apos;hydromulching est adapté ?</h2><p className="mt-3 max-w-2xl leading-7 text-white/70">Décrivez votre terrain : nous vous aidons à identifier la solution la plus cohérente, sans ajouter d&apos;étape inutile.</p></div>
          <Link href="/contact" className="shrink-0 rounded-full bg-[#c0ea93] px-6 py-3.5 text-center font-bold text-[#10271d] transition hover:bg-white">Nous parler du projet</Link>
        </div>
      </section>
    </main>
  );
}
