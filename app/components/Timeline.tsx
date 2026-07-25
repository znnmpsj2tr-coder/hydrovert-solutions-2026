import { ClipboardCheck, FlaskConical, Tractor, SprayCan, Sprout, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Comprendre le terrain", text: "Nous échangeons sur la surface, les contraintes et votre objectif." },
  { icon: FlaskConical, title: "Adapter le mélange", text: "Les composants sont sélectionnés selon les besoins réels du projet." },
  { icon: Tractor, title: "Préparer si nécessaire", text: "Nous réalisons uniquement les interventions utiles avant l’hydroseeding." },
  { icon: SprayCan, title: "Projeter avec précision", text: "Le mélange est appliqué de façon homogène sur la zone à végétaliser." },
  { icon: Sprout, title: "Accompagner la reprise", text: "Nous vous transmettons les bons gestes à suivre, notamment pour l’irrigation." },
  { icon: CheckCircle2, title: "Obtenir un résultat durable", text: "La végétation s’implante progressivement dans de bonnes conditions." },
];

export default function Timeline() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4f7e31]">Notre méthode</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#18241d] sm:text-5xl">Un projet clair, étape par étape.</h2></div><p className="max-w-md leading-7 text-slate-600">Un déroulé simple et expliqué, pour savoir ce qui est prévu et pourquoi.</p></div>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{steps.map(({ icon: Icon, title, text }, index) => <li key={title} className="group rounded-[1.6rem] border border-[#e1e7dd] bg-[#fbfcf9] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#b7d999] hover:shadow-xl hover:shadow-[#173d2712]"><div className="flex items-center justify-between"><span className="text-sm font-bold text-[#75985b]">0{index + 1}</span><span className="flex size-10 items-center justify-center rounded-xl bg-[#e3f0d8] text-[#30653b]"><Icon size={20} /></span></div><h3 className="mt-8 text-xl font-semibold text-[#18241d]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></li>)}</ol>
      </div>
    </section>
  );
}
