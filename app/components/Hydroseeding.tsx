export default function Hydroseeding() {
  const steps = [
    {
      number: "01",
      title: "Étude du terrain",
      description:
        "Analyse du sol, de la pente et des contraintes du projet afin de choisir le mélange le plus adapté.",
    },
    {
      number: "02",
      title: "Préparation",
      description:
        "Le terrain est préparé pour favoriser une implantation homogène de la végétation.",
    },
    {
      number: "03",
      title: "Projection hydraulique",
      description:
        "Le mélange est pulvérisé sous pression pour assurer une répartition uniforme des semences.",
    },
    {
      number: "04",
      title: "Germination",
      description:
        "Les semences se développent progressivement grâce aux conditions favorables créées par le mélange.",
    },
    {
      number: "05",
      title: "Résultat durable",
      description:
        "Le terrain retrouve rapidement une couverture végétale dense qui limite l'érosion et améliore son aspect.",
    },
  ];

  return (
    <section className="bg-white py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="max-w-3xl mb-20">

          <span className="uppercase tracking-[6px] text-green-700 font-semibold">
            Notre méthode
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-gray-900">
            Comment se déroule un projet ?
          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-9">
            Chaque intervention suit un processus précis afin d'obtenir une
            implantation rapide et durable de la végétation.
          </p>

        </div>

        <div className="space-y-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row gap-8 rounded-3xl border border-gray-200 p-10 hover:border-green-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-6xl font-bold text-green-700 min-w-[120px]">
                {step.number}
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8 text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}