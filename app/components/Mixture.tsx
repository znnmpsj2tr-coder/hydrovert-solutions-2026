"use client";

import {
  Droplets,
  Sprout,
  Wheat,
  Trees,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

const ingredients = [
  {
    icon: Droplets,
    title: "Eau",
    description:
      "L'eau transporte tous les composants du mélange et assure une application uniforme sur toute la surface.",
  },
  {
    icon: Sprout,
    title: "Semences",
    description:
      "Le mélange de graines est choisi selon le terrain, le climat et le résultat recherché.",
  },
  {
    icon: Wheat,
    title: "Fertilisants",
    description:
      "Ils apportent les nutriments essentiels pour favoriser une germination rapide et une croissance vigoureuse.",
  },
  {
    icon: Trees,
    title: "Fibres végétales",
    description:
      "Les fibres retiennent l'humidité, protègent les graines et limitent leur déplacement par le vent ou la pluie.",
  },
  {
    icon: FlaskConical,
    title: "Amendements",
    description:
      "Ils améliorent les propriétés du sol afin d'offrir un environnement favorable au développement des racines.",
  },
  {
    icon: ShieldCheck,
    title: "Tackifier",
    description:
      "Cet agent liant fixe le mélange au terrain et renforce la résistance à l'érosion, notamment sur les pentes.",
  },
];

export default function Mixture() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-700 font-semibold uppercase tracking-widest">
            Le mélange
          </span>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            Les 6 composants de l'hydroseeding
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Chaque composant joue un rôle précis. Ensemble, ils créent les
            conditions idéales pour une implantation rapide et durable de la
            végétation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {ingredients.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Icon className="text-green-700" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}