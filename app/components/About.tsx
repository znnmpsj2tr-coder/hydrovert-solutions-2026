export default function About() {
  return (
    <section className="bg-white py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Texte */}

          <div>

            <span className="uppercase tracking-[6px] text-green-700 font-semibold">
              Hydrovert Solutions
            </span>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-6 leading-tight">
              La revégétalisation
              <br />
              pensée pour durer.
            </h2>

            <p className="mt-8 text-xl text-gray-600 leading-9">
              Nous accompagnons les entreprises, collectivités et particuliers
              dans leurs projets de revégétalisation grâce aux techniques
              d'hydroseeding et d'hydromulching.
            </p>

            <p className="mt-6 text-lg text-gray-500 leading-8">
              Notre objectif est de proposer des solutions efficaces,
              durables et adaptées aux contraintes de chaque terrain,
              qu'il s'agisse d'un talus, d'un chantier ou d'une zone à
              protéger contre l'érosion.
            </p>

          </div>

          {/* Cartes */}

          <div className="grid gap-6">

            <div className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition">

              <h3 className="text-2xl font-bold">
                🌱 Revégétalisation
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Implantation rapide d'une couverture végétale homogène.
              </p>

            </div>

            <div className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition">

              <h3 className="text-2xl font-bold">
                🌿 Protection des sols
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Réduction de l'érosion et maintien des terrains sensibles.
              </p>

            </div>

            <div className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition">

              <h3 className="text-2xl font-bold">
                🚜 Solutions sur mesure
              </h3>

              <p className="mt-4 text-gray-600 leading-8">
                Chaque projet bénéficie d'une approche adaptée à son
                environnement et à ses objectifs.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}