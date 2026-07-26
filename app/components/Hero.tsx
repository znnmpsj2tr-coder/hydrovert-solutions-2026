"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Check, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const headline = ["Révéler", "le potentiel", "de chaque terrain."];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={sectionRef} className="relative isolate min-h-[820px] overflow-hidden bg-[#071a11] text-white">
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-[1.08]">
        <Image
          src="/images/v4/hydroseeding-levee-wide-optimized.jpg"
          alt="Application réelle d’hydroseeding sur un talus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,22,13,.97)_0%,rgba(4,22,13,.82)_43%,rgba(4,22,13,.17)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(190,239,147,.18),transparent_32%)]" />
      <div className="grain-overlay absolute inset-0 opacity-[.13]" />

      <motion.div style={{ y: copyY, opacity: copyOpacity }} className="relative mx-auto flex min-h-[820px] w-full max-w-7xl items-center px-6 pb-20 pt-28 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, delay: .15 }}
            className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9efa6] sm:text-sm"
          >
            Hydroseeding · Hydromulching · Revégétalisation
          </motion.p>

          <h1 className="mt-7 text-5xl font-semibold leading-[.92] tracking-[-0.065em] sm:text-7xl lg:text-[6.7rem]">
            {headline.map((line, index) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .8, delay: .24 + index * .12, ease: [0.22, 1, 0.36, 1] }}
                className={`block ${index === 1 ? "text-[#c9efa6]" : ""}`}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .72 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl"
          >
            Une approche précise, adaptée au sol et accompagnée par nos équipes — de la première lecture du terrain jusqu’aux conseils de reprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .84 }}
            className="mt-9 flex flex-wrap gap-3 sm:gap-4"
          >
            <Link href="/terrain" className="group inline-flex items-center gap-2 rounded-full bg-[#c0ea93] px-6 py-3.5 font-bold text-[#10271d] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(192,234,147,.22)]">
              Étudier mon terrain <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
            <Link href="/demonstration" className="group inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/[.06] px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/14">
              <span className="flex size-7 items-center justify-center rounded-full bg-white text-[#10271d]"><Play size={13} fill="currentColor" /></span>
              Voir la démonstration
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .8, delay: 1 }}
            className="mt-11 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-sm text-white/76"
          >
            {["Intervention par nos équipes", "Solution ajustée au terrain", "Suivi après projection"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2"><Check size={16} className="text-[#c9efa6]" />{item}</span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#approche-v4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/60 transition hover:text-white sm:flex"
      >
        <ArrowDown size={15} className="motion-safe:animate-bounce" /> Explorer
      </motion.a>
    </section>
  );
}
