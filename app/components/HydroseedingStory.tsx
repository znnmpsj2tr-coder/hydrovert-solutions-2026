"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Droplets, Gauge, Layers3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const pillars = [
  { icon: Layers3, label: "01 · Le support", title: "Une couverture homogène", text: "Le mélange est réparti sur la zone à traiter afin de créer un contact régulier avec le sol." },
  { icon: Gauge, label: "02 · La précision", title: "Une application maîtrisée", text: "Le débit, la distance de projection et le passage sont adaptés à la géométrie du terrain." },
  { icon: Droplets, label: "03 · La reprise", title: "Une irrigation suivie", text: "Après la pose, le paillage reste humide sans être saturé. Le rythme évolue avec la météo et la germination." },
];

export default function HydroseedingStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "8%"]);

  return (
    <section id="approche-v4" ref={sectionRef} className="overflow-hidden bg-[#071a11] py-20 text-white sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.27em] text-[#c9efa6]">Une méthode visible, un résultat progressif</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl">La projection n’est qu’un instant. La réussite se construit dans le temps.</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/65">Cette V4 montre la méthode sans la transformer en promesse automatique : chaque sol, chaque pente et chaque période demandent une réponse différente.</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.25rem]">
            <motion.div style={{ y: imageY }} className="absolute -inset-y-12 inset-x-0">
              <Image src="/images/v4/hydroseeding-levee-detail-optimized.jpg" alt="Projection réelle d’un mélange d’hydroseeding" fill sizes="(min-width: 1024px) 65vw, 100vw" className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#071a11]/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#c9efa6]">Application réelle</p>
              <p className="mt-3 max-w-xl text-2xl font-semibold sm:text-3xl">Une répartition régulière, ajustée au relief et aux accès.</p>
            </div>
          </div>

          <div className="grid gap-3">
            {pillars.map(({ icon: Icon, label, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: .35 }}
                transition={{ duration: .6, delay: index * .1 }}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[.055] p-6 backdrop-blur transition hover:border-[#c9efa6]/35 hover:bg-white/[.09]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c9efa6]">{label}</p>
                  <Icon size={21} className="text-white/55 transition group-hover:scale-110 group-hover:text-[#c9efa6]" />
                </div>
                <h3 className="mt-7 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/demonstration" className="group inline-flex items-center gap-2 font-bold text-[#c9efa6]">Voir le processus en vidéo <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
        </div>
      </div>
    </section>
  );
}
