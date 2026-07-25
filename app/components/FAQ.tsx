"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  { question: "À quels terrains l’hydroseeding convient-il ?", answer: "La technique est particulièrement pertinente pour les talus, grandes surfaces, chantiers, sols sensibles et zones difficiles d’accès. L’étude du terrain permet de confirmer la solution la plus adaptée." },
  { question: "Quand voit-on les premières pousses ?", answer: "La germination varie selon les semences, la saison, la météo et l’irrigation. Les premières pousses peuvent apparaître entre une et trois semaines dans de bonnes conditions." },
  { question: "Faut-il irriguer après l’intervention ?", answer: "Oui. Durant la phase de germination, il est important de maintenir le paillis humide sans le détremper. Notre guide d’irrigation vous donne des repères simples à adapter à la météo." },
  { question: "Préparez-vous systématiquement le terrain ?", answer: "Non. Nous évaluons d’abord le terrain et réalisons uniquement les interventions nécessaires pour créer de bonnes conditions d’implantation." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="bg-[#f6f8f3] py-20 sm:py-24 lg:py-28"><div className="mx-auto w-full max-w-4xl px-6 sm:px-8"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#4f7e31]">Questions fréquentes</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#18241d] sm:text-5xl">Les réponses utiles, sans jargon.</h2></div><div className="mt-12 divide-y divide-[#dbe3d5] rounded-[1.5rem] border border-[#dbe3d5] bg-white px-5 sm:px-7">{questions.map((item, index) => <div key={item.question}><button onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} className="flex w-full items-center justify-between gap-6 py-6 text-left"><span className="text-lg font-semibold text-[#18241d]">{item.question}</span><ChevronDown className={`shrink-0 text-[#4f7e31] transition ${open === index ? 'rotate-180' : ''}`} /></button>{open === index && <p className="max-w-3xl pb-6 leading-7 text-slate-600">{item.answer}</p>}</div>)}</div></div></section>;
}
