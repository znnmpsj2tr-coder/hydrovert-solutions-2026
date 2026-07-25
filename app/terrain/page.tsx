"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Map, Ruler, Send, ShieldCheck, Upload, X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import TerrainMap from "../components/TerrainMap";

const MAX_PHOTOS = 6;

export default function TerrainPage() {
  const [photos, setPhotos] = useState<File[]>([]);
  const [sent, setSent] = useState(false);
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");

  function handlePhotos(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []).slice(0, MAX_PHOTOS);
    setPhotos(selected);
  }

  function removePhoto(index: number) {
    setPhotos((current) => current.filter((_, photoIndex) => photoIndex !== index));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-screen bg-[#f7f8f4] text-[#18241d]">
      <section className="bg-[#10271d] px-6 pb-16 pt-36 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#c9efa6] transition hover:text-white">
            <ArrowLeft size={16} /> Retour à l&apos;accueil
          </Link>
          <div className="mt-12 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c9efa6]">Étude de terrain Hydrovert</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">Préparons une intervention adaptée à votre terrain.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">Quelques informations suffisent pour nous aider à comprendre votre projet. Cette démarche ne génère pas de devis automatique : elle transmet votre terrain à notre équipe.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <aside className="rounded-3xl border border-[#dbe5d4] bg-white p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4f7e31]">Comment ça fonctionne</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em]">Une étude simple, sans engagement.</h2>
            <div className="mt-8 space-y-6">
              {[
                [Map, "Localiser le terrain", "Indiquez la commune ou le secteur concerné."],
                [Ruler, "Donner une surface indicative", "Dessinez ou indiquez une estimation. Elle sera vérifiée avec vous."],
                [Upload, "Ajouter jusqu'à 6 photos", "Les vues générales et les accès nous aident à préparer le premier échange."],
              ].map(([Icon, title, text], index) => {
                const StepIcon = Icon as typeof Map;
                return <div key={title as string} className="flex gap-4"><div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e7f4db] text-[#4f7e31]"><StepIcon size={19} /></div><div><p className="text-sm font-bold text-[#18241d]">0{index + 1} · {title as string}</p><p className="mt-1 text-sm leading-6 text-slate-600">{text as string}</p></div></div>;
              })}
            </div>
            <div className="mt-9 border-t border-[#e5ebe0] pt-6 text-sm leading-6 text-slate-600"><ShieldCheck className="mb-2 text-[#4f7e31]" size={19} /><p>Les photos servent uniquement à comprendre le terrain. Nous pouvons prévoir leur suppression automatique après traitement.</p></div>
          </aside>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-[#dbe5d4] bg-white p-6 shadow-[0_18px_60px_rgba(24,36,29,.06)] sm:p-9">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center"><div className="flex size-16 items-center justify-center rounded-full bg-[#e7f4db] text-[#4f7e31]"><Check size={30} /></div><h2 className="mt-6 text-3xl font-semibold">Votre étude est prête à être transmise.</h2><p className="mt-4 max-w-md leading-7 text-slate-600">Cette première version enregistre votre demande localement. La connexion à votre espace Hydrovert sera ajoutée avant la mise en ligne.</p><button type="button" onClick={() => setSent(false)} className="mt-7 text-sm font-semibold text-[#4f7e31] hover:text-[#18241d]">Modifier les informations</button></div>
            ) : (
              <>
                <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4f7e31]">Étape 1 / 2</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.04em]">Les informations du terrain</h2></div><span className="rounded-full bg-[#f0f6eb] px-3 py-1.5 text-xs font-semibold text-[#4f7e31]">Sans engagement</span></div>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="sm:col-span-2"><span className="text-sm font-semibold">Adresse ou commune *</span><input required name="location" value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Ex. Annecy, Haute-Savoie" className="mt-2 w-full rounded-2xl border border-[#dbe5d4] bg-[#fbfcfa] px-4 py-3.5 outline-none transition focus:border-[#79b852] focus:ring-4 focus:ring-[#c9efa6]/35" /></label>
                  <label><span className="text-sm font-semibold">Surface estimée</span><div className="mt-2 flex"><input name="area" type="number" min="0" value={area} onChange={(event) => setArea(event.target.value)} placeholder="Ex. 800" className="w-full rounded-l-2xl border border-r-0 border-[#dbe5d4] bg-[#fbfcfa] px-4 py-3.5 outline-none focus:border-[#79b852]" /><span className="flex items-center rounded-r-2xl border border-[#dbe5d4] bg-[#f0f6eb] px-4 text-sm font-semibold text-[#4f7e31]">m²</span></div></label>
                  <label><span className="text-sm font-semibold">Accès au terrain</span><select name="access" className="mt-2 w-full rounded-2xl border border-[#dbe5d4] bg-[#fbfcfa] px-4 py-3.5 outline-none focus:border-[#79b852]"><option>À préciser</option><option>Accès facile</option><option>Accès limité</option><option>Terrain difficile d&apos;accès</option></select></label>
                  <div className="sm:col-span-2"><span className="text-sm font-semibold">Dessiner la parcelle sur la carte <span className="font-normal text-slate-500">(facultatif, mais conseillé)</span></span><div className="mt-2"><TerrainMap onAreaChange={(nextArea) => setArea(nextArea >= 1 ? String(Math.round(nextArea)) : "")} onAddressChange={setAddress} /></div></div>
                  <label className="sm:col-span-2"><span className="text-sm font-semibold">Votre objectif</span><textarea name="message" rows={4} placeholder="Revégétalisation d'un talus, engazonnement, lutte contre l'érosion…" className="mt-2 w-full resize-none rounded-2xl border border-[#dbe5d4] bg-[#fbfcfa] px-4 py-3.5 outline-none transition focus:border-[#79b852] focus:ring-4 focus:ring-[#c9efa6]/35" /></label>
                  <label className="sm:col-span-2"><span className="text-sm font-semibold">Photos du terrain <span className="font-normal text-slate-500">(6 maximum)</span></span><span className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-[#abc998] bg-[#f5faef] px-4 py-6 text-center text-sm font-semibold text-[#4f7e31] transition hover:bg-[#eaf5df]"><Upload size={19} /> Ajouter des photos<input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={handlePhotos} className="sr-only" /></span></label>
                </div>
                {photos.length > 0 && <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">{photos.map((photo, index) => <div key={`${photo.name}-${index}`} className="flex items-center justify-between rounded-xl bg-[#f0f6eb] px-3 py-2 text-xs text-[#38532f]"><span className="truncate">{photo.name}</span><button type="button" aria-label={`Supprimer ${photo.name}`} onClick={() => removePhoto(index)} className="ml-2 shrink-0 text-slate-500 hover:text-red-700"><X size={15} /></button></div>)}</div>}
                <p className="mt-5 text-xs leading-5 text-slate-500">La surface indiquée reste indicative. Elle sera confirmée avec Hydrovert Solutions avant toute intervention.</p>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5ebe0] pt-6"><Link href="/devis" className="text-sm font-semibold text-[#4f7e31] hover:text-[#18241d]">Vous préférez demander un devis ?</Link><button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#10271d] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#244c35]">Préparer l&apos;envoi <Send size={17} /></button></div>
              </>
            )}
          </form>
        </div>
      </section>

      <section className="border-t border-[#dbe5d4] bg-white px-6 py-10 text-center"><p className="text-sm text-slate-600">Besoin d&apos;un échange direct ? <Link href="/devis" className="font-semibold text-[#4f7e31] hover:underline">Accéder à la demande de devis</Link> <ArrowRight className="inline" size={15} /></p></section>
    </main>
  );
}
