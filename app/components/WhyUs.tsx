import { Handshake, ShieldCheck, Sprout, UsersRound } from "lucide-react";

const reasons = [
  { icon: UsersRound, number: "01", title: "Nos équipes, sur votre chantier", text: "Nous réalisons nous-mêmes les interventions. Vous échangez avec une équipe impliquée, sans multiplication d'intermédiaires." },
  { icon: Handshake, number: "02", title: "Un suivi qui reste concret", text: "Du premier échange aux conseils après l'intervention, nous restons disponibles pour vous aider à prendre les bonnes décisions." },
  { icon: Sprout, number: "03", title: "Une réponse adaptée au terrain", text: "Pente, sol, accès, exposition et objectif : nous ajustons la méthode et le mélange aux réalités de votre projet." },
  { icon: ShieldCheck, number: "04", title: "Faire les choses avec attention", text: "Nous cherchons à expliquer clairement ce qui est utile, à soigner l’exécution et à proposer une solution cohérente avec votre projet." },
];

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="scroll-mt-8 bg-[#f6f8f3] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4f7e31]">Pourquoi Hydrovert Solutions</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#18241d] sm:text-5xl">Une équipe présente, une solution pensée pour votre terrain.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">Nous voulons surtout vous aider à faire un choix clair : comprendre votre besoin, vous proposer une méthode adaptée, puis réaliser le chantier avec nos propres équipes.</p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-[#dde5d7] bg-[#dde5d7] sm:grid-cols-2">
          {reasons.map(({ icon: Icon, number, title, text }) => (
            <article key={number} className="group bg-[#f6f8f3] p-7 transition duration-300 hover:bg-white sm:p-9">
              <div className="flex items-center justify-between"><span className="text-sm font-bold tracking-[0.18em] text-[#7a9e60]">{number}</span><span className="flex size-11 items-center justify-center rounded-2xl bg-[#e2f0d6] text-[#31683c] transition group-hover:scale-110"><Icon size={22} /></span></div>
              <h3 className="mt-10 text-2xl font-semibold tracking-tight text-[#18241d]">{title}</h3>
              <p className="mt-3 max-w-md leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 rounded-[2rem] bg-[#10271d] px-7 py-8 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-xl font-medium leading-8">« Nous avançons avec une idée simple : expliquer honnêtement, travailler avec soin et rester disponibles après l’intervention. »</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#d4efbd]"><span>Équipe dédiée</span><span>Conseils transparents</span><span>Étude personnalisée</span></div>
        </div>
      </div>
    </section>
  );
}
