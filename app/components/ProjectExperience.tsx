import { ArrowRight, CalendarCheck2, ClipboardList, FileCheck2, MapPinned } from "lucide-react";
import Link from "next/link";

const stages = [
  {
    number: "01",
    icon: MapPinned,
    title: "Votre terrain, en contexte",
    text: "Vous localisez la zone, estimez les surfaces et ajoutez jusqu’à six photos pour donner une première lecture utile à notre équipe.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Une réponse construite",
    text: "Nous reprenons les contraintes réellement utiles : sol, pente, accès, exposition, objectif de végétalisation et risque d’érosion.",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Un devis à confirmer",
    text: "Nous revenons vers vous avec une première proposition. Une visite peut être recommandée pour confirmer les données du terrain avant intervention.",
  },
  {
    number: "04",
    icon: CalendarCheck2,
    title: "Un suivi après chantier",
    text: "Après la projection, vous gardez des repères simples sur l’irrigation et la reprise végétale, adaptés aux conditions observées.",
  },
];

export default function ProjectExperience() {
  return (
    <section className="overflow-hidden bg-[#edf3e8] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4f7e31]">Une expérience pensée pour votre projet</p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#18241d] sm:text-5xl">Un projet lisible, avant, pendant et après le chantier.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">Nous ne voulons pas vous laisser avec un simple formulaire. L’objectif est de recueillir les bonnes informations, vous répondre clairement et vous accompagner jusqu’à la reprise de la végétation.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stages.map(({ number, icon: Icon, title, text }) => (
            <article key={number} className="group relative rounded-[1.75rem] border border-[#d8e4d0] bg-white p-6 shadow-[0_18px_50px_rgba(34,73,42,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(34,73,42,.12)] sm:p-7">
              <span className="text-xs font-bold tracking-[0.18em] text-[#759c5f]">{number}</span>
              <span className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-2xl bg-[#e5f3d9] text-[#31683c] transition group-hover:scale-110"><Icon size={21} /></span>
              <h3 className="mt-10 text-xl font-semibold tracking-tight text-[#18241d]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 grid gap-5 rounded-[2rem] bg-[#10271d] p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.23em] text-[#c9efa6]">Étude de terrain</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Décrivez votre terrain avant notre premier échange.</h3>
            <p className="mt-3 max-w-2xl leading-7 text-white/70">Adresse, surface indicative, zones à traiter et photos : une approche concrète, sans devis automatique ni engagement.</p>
          </div>
          <Link href="/terrain" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#c0ea93] px-6 py-3.5 font-bold text-[#10271d] transition hover:-translate-y-0.5 hover:bg-white">Mesurer mon terrain <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
