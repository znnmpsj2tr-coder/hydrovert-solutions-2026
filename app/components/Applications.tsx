import {
  Mountain,
  Construction,
  Trees,
  Building2,
  Train,
  Warehouse,
} from "lucide-react";

const applications = [
  {
    icon: Mountain,
    title: "Talus",
    text: "Stabilisation et revégétalisation des talus routiers, ferroviaires ou privés afin de limiter durablement l'érosion.",
  },
  {
    icon: Construction,
    title: "Chantiers",
    text: "Revégétalisation rapide après travaux afin de rendre les terrains propres et stabilisés.",
  },
  {
    icon: Trees,
    title: "Parcs & Espaces verts",
    text: "Création d'espaces végétalisés homogènes avec une implantation rapide de la végétation.",
  },
  {
    icon: Train,
    title: "Voies ferrées",
    text: "Végétalisation des abords des infrastructures ferroviaires même dans des zones difficiles d'accès.",
  },
  {
    icon: Warehouse,
    title: "Sites industriels",
    text: "Remise en état de terrains industriels, plateformes logistiques et carrières.",
  },
  {
    icon: Building2,
    title: "Collectivités",
    text: "Une solution idéale pour les communes souhaitant végétaliser durablement leurs espaces publics.",
  },
];

export default function Applications() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-green-700 uppercase tracking-widest font-semibold">
            Applications
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Où utilise-t-on l'hydroseeding ?
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Grâce à sa rapidité d'application et à son excellente capacité
            d'adaptation, l'hydroseeding répond à une grande variété de
            projets de revégétalisation.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {applications.map((app) => {

            const Icon = app.icon;

            return (

              <div
                key={app.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Icon size={30} className="text-green-700" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {app.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {app.text}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}