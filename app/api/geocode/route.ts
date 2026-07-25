import { NextRequest, NextResponse } from "next/server";

type GeocodeFeature = { geometry?: { coordinates?: [number, number] }; properties?: { label?: string } };
type GeocodeResponse = { features?: GeocodeFeature[] };

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim();
  if (!query || query.length < 3) return NextResponse.json({ error: "Saisissez au moins trois caractères." }, { status: 400 });

  try {
    const response = await fetch(`https://data.geopf.fr/geocodage/search?q=${encodeURIComponent(query)}&limit=1`, { cache: "no-store" });
    if (!response.ok) return NextResponse.json({ error: "La recherche d’adresse est momentanément indisponible." }, { status: 502 });
    const data = await response.json() as GeocodeResponse;
    const feature = data.features?.[0];
    const coordinates = feature?.geometry?.coordinates;
    if (!coordinates) return NextResponse.json({ error: "Adresse introuvable. Vérifiez l’orthographe ou indiquez la commune." }, { status: 404 });
    return NextResponse.json({ label: feature?.properties?.label ?? query, lng: coordinates[0], lat: coordinates[1] });
  } catch {
    return NextResponse.json({ error: "La recherche d’adresse est momentanément indisponible." }, { status: 502 });
  }
}
