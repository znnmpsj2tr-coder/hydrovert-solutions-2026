"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Droplets,
  ShieldCheck,
  Check,
  X,
} from "lucide-react";

const cards = [
  {
    title: "Semis traditionnel",
    icon: Leaf,
    color: "text-gray-700",
    border: "border-gray-200",
    badge: null,
    items: [
      { text: "Faible coût initial", ok: true },
      { text: "Adapté aux petites surfaces", ok: true },
      { text: "Application manuelle", ok: true },
      { text: "Peu adapté aux pentes", ok: false },
      { text: "Risque d'érosion", ok: false },
      { text: "Répartition irrégulière", ok: false },
    ],
    footer: "Recommandé uniquement pour les terrains simples.",
  },
  {
    title: "Hydroseeding",
    icon: Droplets,
    color: "text-green-700",
    border: "border-green-600",
    badge: "Recommandé",
    featured: true,
    items: [
      { text: "Application rapide", ok: true },
      { text: "Répartition homogène", ok: true },
      { text: "Grandes surfaces", ok: true },
      { text: "Réduction des pertes", ok: true },
      { text: "Très bon taux de reprise", ok: true },
      { text: "Adapté aux terrains complexes", ok: true },
    ],
    footer: "La solution idéale pour la majorité des projets.",
  },
  {
    title: "Hydromulching",
    icon: ShieldCheck,
    color: "text-emerald-700",
    border: "border-emerald-500",
    badge: null,
    items: [
      { text: "Protection maximale", ok: true },
      { text: "Très forte rétention d'eau", ok: true },
      { text: "Anti-érosion", ok: true },
      { text: "Idéal pour les talus", ok: true },
      { text: "Parfait pour les chantiers difficiles", ok: true },
      { text: "Technique spécialisée", ok: true },
    ],
    footer: "Conçu pour les terrains les plus exigeants.",
  },
];

export default function Comparison() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green-700 font-semibold uppercase tracking-widest">
            Comparaison
          </span>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Pourquoi choisir l'hydroseeding ?
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Toutes les techniques de revégétalisation ne répondent pas aux
            mêmes besoins. Comparez leurs avantages afin de choisir la
            solution la plus adaptée à votre terrain.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (

              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className={`relative rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 border ${card.border}
                ${
                  card.featured
                    ? "scale-105 shadow-green-200 shadow-2xl"
                    : ""
                }`}
              >

                {card.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white shadow-lg">
                    {card.badge}
                  </span>
                )}

                <div
                  className={`w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-8`}
                >
                  <Icon
                    className={`${card.color}`}
                    size={34}
                  />
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  {card.title}
                </h3>

                <div className="space-y-5">

                  {card.items.map((item) => (

                    <div
                      key={item.text}
                      className="flex items-start gap-4"
                    >
                      {item.ok ? (
                        <Check
                          size={20}
                          className="text-green-600 mt-1"
                        />
                      ) : (
                        <X
                          size={20}
                          className="text-red-500 mt-1"
                        />
                      )}

                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>

                  ))}

                </div>

                <div className="mt-10 pt-8 border-t">

                  <p
                    className={`font-semibold ${card.color}`}
                  >
                    {card.footer}
                  </p>

                </div>

              </motion.div>

            );
          })}

        </div>

      </div>
    </section>
  );
}