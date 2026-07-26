import type { Metadata } from "next";
import "./globals.css";
import FaqBubble from "./components/FaqBubble";
import PageBackLink from "./components/PageBackLink";

export const metadata: Metadata = {
  title: "Hydrovert Solutions | Revégétalisation sur mesure",
  description:
    "Hydroseeding, hydromulching et protection contre l’érosion : des solutions de revégétalisation adaptées à chaque terrain, partout en France.",
  keywords: ["hydroseeding", "hydromulching", "revégétalisation", "anti-érosion", "France"],
  openGraph: {
    title: "Hydrovert Solutions | Revégétalisation sur mesure",
    description: "Une solution adaptée à votre terrain, réalisée par nos équipes.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body><PageBackLink />{children}<FaqBubble /></body>
    </html>
  );
}
