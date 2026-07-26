import { Check, MessageCircleMore, ShieldCheck, UploadCloud } from "lucide-react";
import Link from "next/link";

const commitments = [
  "Un interlocuteur qui comprend votre demande",
  "Des documents et photos traités avec attention",
  "Une recommandation expliquée, jamais imposée",
];

export default function ServiceCommitment() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_.95fr] lg:items-center lg:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4f7e31]">Un service qui va plus loin</p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#18241d] sm:text-5xl">La technique compte. La façon de vous accompagner aussi.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Notre priorité est de rendre chaque étape compréhensible : de votre première demande jusqu’aux conseils qui suivent l’intervention.</p>
          <ul className="mt-8 space-y-4">
            {commitments.map((commitment) => <li key={commitment} className="flex items-start gap-3 text-[#244c35]"><span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e5f3d9]"><Check size={15} /></span><span className="font-medium">{commitment}</span></li>)}
          </ul>
          <Link href="/devis" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#10271d] px-6 py-3.5 font-bold text-white transition hover:bg-[#31683c]">Parler de mon projet <MessageCircleMore size={18} /></Link>
        </div>

        <div className="rounded-[2rem] border border-[#dce7d5] bg-[#f6f8f3] p-6 shadow-[0_25px_70px_rgba(34,73,42,.08)] sm:p-8">
          <div className="flex items-center justify-between border-b border-[#dce7d5] pb-5">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#759c5f]">Aperçu de suivi</p><p className="mt-1 font-semibold text-[#18241d]">Votre demande, étape par étape</p></div>
            <ShieldCheck className="text-[#4f7e31]" size={28} />
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex gap-4 rounded-2xl bg-white p-4"><span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e5f3d9] text-[#31683c]"><UploadCloud size={19} /></span><div><p className="font-semibold text-[#18241d]">Informations reçues</p><p className="mt-1 text-sm leading-6 text-slate-600">Terrain, photos et besoin transmis à l’équipe.</p></div><span className="ml-auto h-fit rounded-full bg-[#e5f3d9] px-2.5 py-1 text-xs font-bold text-[#31683c]">Prévu</span></div>
            <div className="flex gap-4 rounded-2xl bg-white p-4"><span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e5f3d9] text-[#31683c]"><MessageCircleMore size={19} /></span><div><p className="font-semibold text-[#18241d]">Échange avec Hydrovert</p><p className="mt-1 text-sm leading-6 text-slate-600">Les éléments utiles sont repris avant toute proposition.</p></div><span className="ml-auto h-fit rounded-full bg-[#e5f3d9] px-2.5 py-1 text-xs font-bold text-[#31683c]">Prévu</span></div>
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">Cet aperçu présente le suivi que nous mettrons en place. Les coordonnées et canaux de confirmation seront configurés avant la mise en service.</p>
        </div>
      </div>
    </section>
  );
}
