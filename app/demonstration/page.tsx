import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Droplets, FlaskConical, Play, ScanSearch, Sprout } from "lucide-react";
import Footer from "../components/Footer";
import MotionReveal from "../components/MotionReveal";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Démonstration hydroseeding | Hydrovert Solutions",
  description:
    "Découvrez en vidéo le principe d’une application d’hydroseeding, les étapes de la méthode et les gestes qui favorisent une implantation régulière.",
};

const steps = [
  {
    icon: ScanSearch,
    number: "01",
    title: "Lire le terrain",
    text: "Pente, sol, accès, exposition et objectif de végétalisation sont examinés avant de définir la réponse technique.",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Composer la réponse",
    text: "Les semences, fibres, amendements et éléments du mélange sont sélectionnés selon le terrain et le résultat recherché.",
  },
  {
    icon: Play,
    number: "03",
    title: "Projeter avec régularité",
    text: "L’application hydraulique vise une couverture homogène, y compris sur des pentes ou des surfaces difficiles d’accès.",
  },
  {
    icon: Droplets,
    number: "04",
    title: "Accompagner la reprise",
    text: "Après l’intervention, l’irrigation et le suivi des premières semaines jouent un rôle décisif dans la germination.",
  },
];

export default function DemonstrationPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-[#071a11] text-white">
        <Navbar />
        <div className="grain-overlay absolute inset-0 opacity-20" />
        <div className="absolute -right-32 top-24 size-[34rem] rounded-full bg-[#9fd875]/10 blur-[150px]" />

        <main>
          <section className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:px-8 sm:pb-24 lg:px-12 lg:pt-48">
            <MotionReveal>
              <p className="text-xs font-bold uppercase tracking-[.28em] text-[#c9efa6]">Démonstration · Application réelle</p>
              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.95] tracking-[-.06em] sm:text-7xl lg:text-[6.2rem]">
                Voir la méthode.
                <span className="block text-[#c9efa6]">Comprendre chaque geste.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                Une démonstration sobre et transparente du principe de l’hydroseeding, de la lecture du terrain jusqu’aux premiers soins.
              </p>
            </MotionReveal>
          </section>

          <section className="relative mx-auto w-full max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
            <MotionReveal delay={0.08}>
              <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-black shadow-[0_35px_100px_rgba(0,0,0,.38)]">
                <div className="aspect-video">
                  <iframe
                    src="https://www.dvidshub.net/video/embed/937686"
                    title="Démonstration publique d’hydroseeding par l’US Army Corps of Engineers"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="flex flex-col gap-3 border-t border-white/10 px-6 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
                  <p>Vidéo illustrative : application d’hydroseeding sur un ouvrage paysager.</p>
                  <p className="shrink-0 text-white/40">USACE / DVIDS · Domaine public</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-white/40">
                Cette vidéo illustre la technique et ne présente pas un chantier réalisé par Hydrovert Solutions.
              </p>
            </MotionReveal>
          </section>
        </main>
      </div>

      <main className="bg-[#f6f8f3]">
        <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 sm:py-28 lg:px-12">
          <MotionReveal className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#5f8c42]">Le processus en quatre temps</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.03] tracking-[-.045em] text-[#10271d] sm:text-6xl">
              Une intervention lisible, du diagnostic au suivi.
            </h2>
          </MotionReveal>

          <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-[#d9e5d2] bg-white md:grid-cols-2">
            {steps.map(({ icon: Icon, number, title, text }, index) => (
              <MotionReveal
                key={title}
                delay={index * 0.06}
                className="border-b border-[#d9e5d2] p-7 last:border-b-0 md:min-h-[290px] md:p-10 md:odd:border-r"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold tracking-[.2em] text-[#79a45d]">{number}</span>
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-[#e8f4dc] text-[#315c34]">
                    <Icon size={22} />
                  </span>
                </div>
                <h3 className="mt-12 text-2xl font-semibold tracking-[-.03em] text-[#10271d]">{title}</h3>
                <p className="mt-4 max-w-lg leading-7 text-[#526258]">{text}</p>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="overflow-hidden bg-white py-20 sm:py-28">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-12">
            <MotionReveal>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[#5f8c42]">Ce que l’image permet de lire</p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-.045em] text-[#10271d] sm:text-5xl">
                Le relief guide la manière d’intervenir.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#58675e]">
                La portée du jet, l’angle d’application et la progression de l’équipe sont ajustés pour couvrir la surface de façon régulière, sans réduire le chantier à une méthode unique.
              </p>
              <ul className="mt-8 space-y-3 text-sm font-semibold text-[#23372a]">
                {["Lecture des accès et de la pente", "Répartition régulière du mélange", "Consignes de suivi après intervention"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex size-6 items-center justify-center rounded-full bg-[#dff2cc]"><Check size={14} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] sm:min-h-[560px]">
                <Image
                  src="/images/v4/hydroseeding-levee-detail-optimized.jpg"
                  alt="Application d’hydroseeding sur un talus réel"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a11]/65 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-7 text-white sm:p-10">
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-[#d8f5ba]">Photographie documentaire</p>
                  <p className="mt-3 max-w-md text-2xl font-semibold">Une application adaptée à la géométrie du terrain.</p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="bg-[#0b2116] px-6 py-20 text-white sm:px-8 sm:py-24">
          <MotionReveal className="mx-auto max-w-5xl text-center">
            <Sprout className="soft-float mx-auto text-[#c9efa6]" size={34} />
            <p className="mt-6 text-xs font-bold uppercase tracking-[.25em] text-[#c9efa6]">La suite compte autant que l’application</p>
            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-.045em] sm:text-6xl">
              Une implantation réussie se prépare, s’applique et s’accompagne.
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/guide-irrigation" className="group inline-flex items-center gap-2 rounded-full bg-[#c0ea93] px-6 py-3.5 font-bold text-[#10271d] transition hover:-translate-y-1 hover:bg-white">
                Consulter le guide d’irrigation <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
              <Link href="/terrain" className="inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                Mesurer mon terrain
              </Link>
            </div>
          </MotionReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
