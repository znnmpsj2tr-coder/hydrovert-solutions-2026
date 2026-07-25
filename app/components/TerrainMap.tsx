"use client";

import { LocateFixed, Map, Minus, Plus, RotateCcw, Satellite, Search, Undo2 } from "lucide-react";
import { KeyboardEvent, PointerEvent, useEffect, useMemo, useRef, useState } from "react";

type Point = { lat: number; lng: number };
type View = { lat: number; lng: number; zoom: number };
type DragState = { clientX: number; clientY: number; view: View } | null;
type Basemap = "plan" | "satellite";

const TILE_SIZE = 256;
const MIN_ZOOM = 4;
// Le niveau 19 est le dernier niveau réellement détaillé de l'orthophoto IGN.
// Au-delà, le serveur ne fournit plus de nouvelles images : on agrandirait seulement des pixels.
const MAX_ZOOM = 19;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function latLngToWorld(point: Point, zoom: number) {
  const size = TILE_SIZE * 2 ** zoom;
  const latitude = clamp(point.lat, -85.05112878, 85.05112878) * (Math.PI / 180);
  return {
    x: ((point.lng + 180) / 360) * size,
    y: ((1 - Math.asinh(Math.tan(latitude)) / Math.PI) / 2) * size,
  };
}

function worldToLatLng(point: { x: number; y: number }, zoom: number): Point {
  const size = TILE_SIZE * 2 ** zoom;
  const longitude = (point.x / size) * 360 - 180;
  const latitude = (Math.atan(Math.sinh(Math.PI * (1 - (2 * point.y) / size))) * 180) / Math.PI;
  return { lat: latitude, lng: longitude };
}

function polygonArea(points: Point[]) {
  if (points.length < 3) return 0;
  const radius = 6_371_008.8;
  const averageLatitude = points.reduce((total, point) => total + point.lat, 0) / points.length;
  const latitudeRadians = (averageLatitude * Math.PI) / 180;
  const projected = points.map((point) => ({
    x: radius * ((point.lng * Math.PI) / 180) * Math.cos(latitudeRadians),
    y: radius * ((point.lat * Math.PI) / 180),
  }));
  let sum = 0;
  for (let index = 0; index < projected.length; index += 1) {
    const next = projected[(index + 1) % projected.length];
    sum += projected[index].x * next.y - next.x * projected[index].y;
  }
  return Math.abs(sum) / 2;
}

export default function TerrainMap({ onAreaChange, onAddressChange }: { onAreaChange: (area: number) => void; onAddressChange?: (address: string) => void }) {
  const mapElement = useRef<HTMLDivElement>(null);
  const drag = useRef<DragState>(null);
  const [view, setView] = useState<View>({ lat: 46.6, lng: 2.4, zoom: 6 });
  const [zones, setZones] = useState<Point[][]>([[]]);
  const [activeZone, setActiveZone] = useState(0);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Saisissez une adresse ou utilisez votre position, puis tracez le contour du terrain.");
  const [searching, setSearching] = useState(false);
  const [viewport, setViewport] = useState({ width: 800, height: 430 });
  const [basemap, setBasemap] = useState<Basemap>("satellite");

  const zoneAreas = useMemo(() => zones.map((zone) => polygonArea(zone)), [zones]);
  const totalArea = useMemo(() => zoneAreas.reduce((total, area) => total + area, 0), [zoneAreas]);
  const points = zones[activeZone] ?? [];
  const centerWorld = useMemo(() => latLngToWorld(view, view.zoom), [view]);

  useEffect(() => {
    onAreaChange(totalArea);
  }, [onAreaChange, totalArea]);

  useEffect(() => {
    if (!mapElement.current) return;
    const observer = new ResizeObserver(([entry]) => setViewport({ width: entry.contentRect.width, height: entry.contentRect.height }));
    observer.observe(mapElement.current);
    return () => observer.disconnect();
  }, []);

  const tiles = useMemo(() => {
    const worldTiles = 2 ** view.zoom;
    const centerTileX = Math.floor(centerWorld.x / TILE_SIZE);
    const centerTileY = Math.floor(centerWorld.y / TILE_SIZE);
    const horizontal = Math.ceil(viewport.width / TILE_SIZE / 2) + 2;
    const vertical = Math.ceil(viewport.height / TILE_SIZE / 2) + 2;
    const result: Array<{ x: number; y: number; left: number; top: number; sourceX: number }> = [];
    for (let y = centerTileY - vertical; y <= centerTileY + vertical; y += 1) {
      if (y < 0 || y >= worldTiles) continue;
      for (let x = centerTileX - horizontal; x <= centerTileX + horizontal; x += 1) {
        const sourceX = ((x % worldTiles) + worldTiles) % worldTiles;
        result.push({ x, y, sourceX, left: x * TILE_SIZE - centerWorld.x + viewport.width / 2, top: y * TILE_SIZE - centerWorld.y + viewport.height / 2 });
      }
    }
    return result;
  }, [centerWorld.x, centerWorld.y, view.zoom, viewport.height, viewport.width]);

  function screenPoint(point: Point) {
    const world = latLngToWorld(point, view.zoom);
    return { x: world.x - centerWorld.x + viewport.width / 2, y: world.y - centerWorld.y + viewport.height / 2 };
  }

  function changeZoom(delta: number) {
    setView((current) => ({ ...current, zoom: clamp(current.zoom + delta, MIN_ZOOM, MAX_ZOOM) }));
  }

  function placePoint(clientX: number, clientY: number) {
    const rect = mapElement.current?.getBoundingClientRect();
    if (!rect) return;
    const world = {
      x: centerWorld.x + clientX - rect.left - viewport.width / 2,
      y: centerWorld.y + clientY - rect.top - viewport.height / 2,
    };
    setZones((current) => current.map((zone, index) => index === activeZone ? [...zone, worldToLatLng(world, view.zoom)] : zone));
    setStatus(`Point ajouté à la zone ${activeZone + 1}. Continuez autour de cette zone, puis consultez la surface estimée.`);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { clientX: event.clientX, clientY: event.clientY, view };
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const deltaX = event.clientX - drag.current.clientX;
    const deltaY = event.clientY - drag.current.clientY;
    if (Math.abs(deltaX) < 4 && Math.abs(deltaY) < 4) return;
    const initialWorld = latLngToWorld(drag.current.view, drag.current.view.zoom);
    const next = worldToLatLng({ x: initialWorld.x - deltaX, y: initialWorld.y - deltaY }, drag.current.view.zoom);
    setView({ ...next, zoom: drag.current.view.zoom });
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    const start = drag.current;
    drag.current = null;
    if (!start) return;
    const moved = Math.hypot(event.clientX - start.clientX, event.clientY - start.clientY);
    if (moved < 8) placePoint(event.clientX, event.clientY);
  }

  function locate() {
    if (!navigator.geolocation) { setStatus("La localisation n’est pas disponible sur cet appareil."); return; }
    navigator.geolocation.getCurrentPosition(
      (position) => { setView({ lat: position.coords.latitude, lng: position.coords.longitude, zoom: 19 }); setStatus("Position trouvée. Placez les points autour du terrain."); },
      () => setStatus("La position n’a pas été autorisée. Recherchez une adresse ci-dessus."),
      { enableHighAccuracy: true, timeout: 10_000 },
    );
  }

  async function searchAddress() {
    const address = query.trim();
    if (!address) return;
    setSearching(true);
    setStatus("Recherche de l’adresse…");
    try {
      const response = await fetch(`/api/geocode?q=${encodeURIComponent(address)}`);
      const result = await response.json() as { label?: string; lat?: number; lng?: number; error?: string };
      if (!response.ok || result.lat === undefined || result.lng === undefined) { setStatus(result.error ?? "Adresse introuvable. Vérifiez l’orthographe ou indiquez la commune."); return; }
      const label = result.label ?? address;
      setQuery(label);
      onAddressChange?.(label);
      setView({ lat: result.lat, lng: result.lng, zoom: 18 });
      setStatus("Adresse trouvée. Utilisez + pour le dernier niveau de précision, puis placez les points autour du terrain.");
    } catch {
      setStatus("La recherche d’adresse est temporairement indisponible. Utilisez « Ma position » ou déplacez la carte.");
    } finally {
      setSearching(false);
    }
  }

  function onSearchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") { event.preventDefault(); void searchAddress(); }
  }

  const tileUrl = (tile: { sourceX: number; y: number }) => `/api/tiles?layer=${basemap}&z=${view.zoom}&x=${tile.sourceX}&y=${tile.y}`;

  function addZone() {
    if (points.length < 3) return;
    setZones((current) => [...current, []]);
    setActiveZone(zones.length);
    setStatus(`Zone ${zones.length + 1} prête. Tracez cette nouvelle partie du terrain.`);
  }

  function undoPoint() {
    setZones((current) => current.map((zone, index) => index === activeZone ? zone.slice(0, -1) : zone));
  }

  function resetActiveZone() {
    setZones((current) => current.map((zone, index) => index === activeZone ? [] : zone));
    setStatus(`Zone ${activeZone + 1} effacée. Vous pouvez la retracer.`);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#dbe5d4] bg-[#fbfcfa]">
      <div className="border-b border-[#dbe5d4] px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-sm font-semibold text-[#18241d]">Tracez les limites de votre terrain</p><p className="mt-0.5 text-xs text-slate-500">{status}</p></div><div className="flex flex-wrap items-center gap-2"><button type="button" onClick={locate} className="inline-flex items-center gap-1.5 rounded-full border border-[#cce0bd] px-3 py-2 text-xs font-semibold text-[#315a31] transition hover:bg-[#eaf5df]"><LocateFixed size={15} /> Ma position</button><button type="button" onClick={undoPoint} disabled={!points.length} className="inline-flex items-center gap-1.5 rounded-full border border-[#dbe5d4] bg-white px-3 py-2 text-xs font-semibold text-[#315a31] transition hover:bg-[#eaf5df] disabled:cursor-not-allowed disabled:opacity-40" title="Supprime seulement le dernier point ajouté"><Undo2 size={15} /> Annuler</button><button type="button" onClick={resetActiveZone} disabled={!points.length} className="inline-flex items-center gap-1.5 rounded-full border border-[#dbe5d4] bg-white px-3 py-2 text-xs font-semibold text-[#315a31] transition hover:bg-[#eaf5df] disabled:cursor-not-allowed disabled:opacity-40" title="Efface uniquement la zone affichée"><RotateCcw size={15} /> Recommencer</button></div></div>
        <div className="mt-3 flex gap-2"><input value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={onSearchKeyDown} placeholder="Rechercher une adresse ou une commune" className="min-w-0 flex-1 rounded-xl border border-[#dbe5d4] bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#79b852]" /><button type="button" onClick={() => void searchAddress()} disabled={searching} className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#10271d] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#244c35] disabled:opacity-50"><Search size={16} /> {searching ? "Recherche…" : "Voir"}</button></div>
        <div className="mt-3 flex flex-wrap items-center gap-2"><span className="mr-1 text-xs font-semibold text-[#496145]">Zones :</span>{zones.map((zone, index) => <button key={`zone-${index}`} type="button" onClick={() => { setActiveZone(index); setStatus(`Zone ${index + 1} sélectionnée. Vous pouvez compléter ou corriger son tracé.`); }} className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${activeZone === index ? "border-[#79b852] bg-[#eaf5df] text-[#173722]" : "border-[#dbe5d4] bg-white text-[#496145] hover:bg-[#f3f7ef]"}`}>Zone {index + 1}{zoneAreas[index] >= 1 ? ` · ${Math.round(zoneAreas[index]).toLocaleString("fr-FR")} m²` : " · à tracer"}</button>)}<button type="button" onClick={addZone} disabled={points.length < 3} title={points.length < 3 ? "Terminez d’abord la zone actuelle avec au moins 3 points" : "Mesurer une autre partie séparée du terrain"} className="inline-flex items-center gap-1 rounded-full border border-dashed border-[#79b852] px-3 py-1.5 text-xs font-semibold text-[#315a31] transition hover:bg-[#eaf5df] disabled:cursor-not-allowed disabled:border-[#dbe5d4] disabled:text-[#aab8a4]"><Plus size={14} /> Ajouter une zone</button></div>
      </div>
      <div ref={mapElement} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp} className="relative h-[340px] w-full touch-none overflow-hidden bg-[#e7f1df] select-none sm:h-[430px]">
        {tiles.map((tile) => <img key={`${basemap}-${view.zoom}-${tile.x}-${tile.y}`} src={tileUrl(tile)} alt="" draggable={false} className="pointer-events-none absolute max-w-none" style={{ left: tile.left, top: tile.top, width: TILE_SIZE, height: TILE_SIZE }} />)}
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 size-full overflow-visible">{zones.map((zone, zoneIndex) => { const polygon = zone.map((point) => { const screen = screenPoint(point); return `${screen.x},${screen.y}`; }).join(" "); const active = zoneIndex === activeZone; return <g key={`drawing-${zoneIndex}`} opacity={active ? 1 : 0.65}>{zone.length >= 2 && <polyline points={polygon} fill="none" stroke={active ? "#79b852" : "#3f7a53"} strokeWidth="3" strokeDasharray="7 8" />}{zone.length >= 3 && <polygon points={polygon} fill={active ? "#a9df76" : "#83b993"} fillOpacity="0.3" stroke="#1e5a36" strokeWidth="2" />}{zone.map((point, pointIndex) => { const screen = screenPoint(point); return <g key={`${zoneIndex}-${point.lat}-${point.lng}`}><circle cx={screen.x} cy={screen.y} r="7" fill={active ? "#c0ea93" : "#e0efd5"} stroke="#1e5a36" strokeWidth="2" /><text x={screen.x} y={screen.y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="#173722">{pointIndex + 1}</text></g>; })}</g>; })}</svg>
        <div className="absolute left-3 top-3 flex overflow-hidden rounded-xl border border-[#cce0bd] bg-white shadow-sm">
          <button type="button" onClick={(event) => { event.stopPropagation(); setBasemap("plan"); }} onPointerDown={(event) => event.stopPropagation()} onPointerUp={(event) => event.stopPropagation()} onPointerMove={(event) => event.stopPropagation()} className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold transition ${basemap === "plan" ? "bg-[#eaf5df] text-[#173722]" : "text-[#496145] hover:bg-[#f4f8f1]"}`}><Map size={15} /> Plan</button>
          <button type="button" onClick={(event) => { event.stopPropagation(); setBasemap("satellite"); }} onPointerDown={(event) => event.stopPropagation()} onPointerUp={(event) => event.stopPropagation()} onPointerMove={(event) => event.stopPropagation()} className={`inline-flex items-center gap-1.5 border-l border-[#dbe5d4] px-3 py-2 text-xs font-semibold transition ${basemap === "satellite" ? "bg-[#eaf5df] text-[#173722]" : "text-[#496145] hover:bg-[#f4f8f1]"}`}><Satellite size={15} /> Satellite</button>
        </div>
        <div className="absolute bottom-3 right-3 overflow-hidden rounded-xl border border-[#cce0bd] bg-white shadow-sm"><div className="flex"><button type="button" onClick={(event) => { event.stopPropagation(); changeZoom(1); }} onPointerDown={(event) => event.stopPropagation()} onPointerUp={(event) => event.stopPropagation()} onPointerMove={(event) => event.stopPropagation()} disabled={view.zoom >= MAX_ZOOM} className="border-r border-[#dbe5d4] p-3 text-[#315a31] transition hover:bg-[#eaf5df] active:bg-[#d9efc9] disabled:cursor-not-allowed disabled:bg-[#f2f5ef] disabled:text-[#aab8a4]" aria-label="Zoomer la carte" title={view.zoom >= MAX_ZOOM ? "Niveau de précision maximal atteint" : "Zoomer la carte"}><Plus size={19} /></button><button type="button" onClick={(event) => { event.stopPropagation(); changeZoom(-1); }} onPointerDown={(event) => event.stopPropagation()} onPointerUp={(event) => event.stopPropagation()} onPointerMove={(event) => event.stopPropagation()} disabled={view.zoom <= MIN_ZOOM} className="p-3 text-[#315a31] transition hover:bg-[#eaf5df] active:bg-[#d9efc9] disabled:cursor-not-allowed disabled:bg-[#f2f5ef] disabled:text-[#aab8a4]" aria-label="Dézoomer la carte" title="Dézoomer la carte"><Minus size={19} /></button></div><p className="border-t border-[#e4edde] px-2 py-1 text-center text-[10px] font-semibold text-[#496145]">{view.zoom >= MAX_ZOOM ? "Précision maximale" : "Zoom précis"}</p></div>
        <span className="absolute bottom-2 left-2 rounded bg-white/85 px-1.5 py-1 text-[10px] text-slate-600">{basemap === "satellite" ? "© IGN / Géoportail" : "© OpenStreetMap contributors"}</span>
      </div>
      <div className="flex items-center justify-between gap-4 bg-[#f0f6eb] px-4 py-3"><span className="text-xs font-medium text-[#496145]">Zone {activeZone + 1} : {points.length} point{points.length > 1 ? "s" : ""} placé{points.length > 1 ? "s" : ""}</span><strong className="text-sm text-[#315a31]">{totalArea >= 1 ? `Total : ${Math.round(totalArea).toLocaleString("fr-FR")} m²` : "Surface à calculer"}</strong></div>
    </div>
  );
}
