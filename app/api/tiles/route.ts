import { NextRequest } from "next/server";

export const runtime = "nodejs";

function numberParam(value: string | null, minimum: number, maximum: number) {
  const number = Number(value);
  return Number.isInteger(number) && number >= minimum && number <= maximum ? number : null;
}

async function tileResponse(url: string) {
  const response = await fetch(url, {
    headers: { "User-Agent": "Hydrovert-Solutions-Terrain/1.0" },
    next: { revalidate: 86_400 },
  });

  if (!response.ok) throw new Error("Tile unavailable");
  const body = await response.arrayBuffer();
  return new Response(body, {
    headers: {
      "Content-Type": response.headers.get("content-type") ?? "image/jpeg",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

export async function GET(request: NextRequest) {
  const zoom = numberParam(request.nextUrl.searchParams.get("z"), 4, 21);
  const x = numberParam(request.nextUrl.searchParams.get("x"), 0, 2 ** 21 - 1);
  const y = numberParam(request.nextUrl.searchParams.get("y"), 0, 2 ** 21 - 1);
  const layer = request.nextUrl.searchParams.get("layer") === "plan" ? "plan" : "satellite";

  if (zoom === null || x === null || y === null || x >= 2 ** zoom || y >= 2 ** zoom) {
    return new Response("Coordonnées de carte invalides.", { status: 400 });
  }

  const source = layer === "satellite"
    ? `https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX=${zoom}&TILEROW=${y}&TILECOL=${x}&FORMAT=image/jpeg`
    : `https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`;

  try {
    return await tileResponse(source);
  } catch {
    if (layer === "satellite") {
      try {
        return await tileResponse(`https://tile.openstreetmap.org/${zoom}/${x}/${y}.png`);
      } catch {
        // The response below is intentionally compact: it avoids broken image icons on unstable networks.
      }
    }

    return new Response("", { status: 204, headers: { "Cache-Control": "no-store" } });
  }
}
