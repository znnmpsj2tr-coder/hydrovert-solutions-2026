import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crédits médias | Hydrovert Solutions",
  description: "Origine et conditions d’utilisation des médias de démonstration.",
};

export default function CreditsMediasPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f3] px-6 py-28 text-[#10271d] sm:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[.25em] text-[#5f8c42]">Transparence</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-.05em] sm:text-7xl">Crédits médias</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#58675e]">
          Les médias ci-dessous illustrent la technique. Ils ne sont pas présentés comme des réalisations d’Hydrovert Solutions.
        </p>

        <div className="mt-14 space-y-5">
          <article className="rounded-[1.75rem] border border-[#d9e5d2] bg-white p-7">
            <h2 className="text-xl font-semibold">Photographies d’hydroseeding sur levée</h2>
            <p className="mt-3 leading-7 text-[#58675e]">
              U.S. Army Corps of Engineers, photographie de Todd Plain. Images du domaine public publiées sur Wikimedia Commons.
            </p>
            <Link href="https://commons.wikimedia.org/wiki/File:Hydroseeding_a_River_Park_neighborhood_levee_section_(15644386739).jpg" className="mt-4 inline-block font-bold text-[#4f8038] underline underline-offset-4">
              Consulter la source
            </Link>
          </article>

          <article className="rounded-[1.75rem] border border-[#d9e5d2] bg-white p-7">
            <h2 className="text-xl font-semibold">Vidéo de démonstration</h2>
            <p className="mt-3 leading-7 text-[#58675e]">
              U.S. Army Corps of Engineers, vidéo de Melanie Oubre, mise à disposition dans le domaine public via DVIDS.
            </p>
            <Link href="https://www.dvidshub.net/video/937686/hydroseeding-west-shore-lake-pontchartrain-contract-110" className="mt-4 inline-block font-bold text-[#4f8038] underline underline-offset-4">
              Consulter la source
            </Link>
          </article>
        </div>
      </div>
    </main>
  );
}
