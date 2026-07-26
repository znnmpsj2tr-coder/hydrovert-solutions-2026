"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Move } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import type { PointerEvent, ReactNode } from "react";

type Action = { href: string; label: string };

type InteractiveServiceHeroProps = {
  label: string;
  title: ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryAction: Action;
  secondaryAction: Action;
  aside?: ReactNode;
};

const clamp = (value: number, maximum: number) => Math.max(-maximum, Math.min(maximum, value));

export default function InteractiveServiceHero({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  primaryAction,
  secondaryAction,
  aside,
}: InteractiveServiceHeroProps) {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const dragStart = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const updateHover = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const box = heroRef.current?.getBoundingClientRect();
    if (!box) return;
    setHover({
      x: clamp((event.clientX - (box.left + box.width / 2)) / (box.width / 2), 1),
      y: clamp((event.clientY - (box.top + box.height / 2)) / (box.height / 2), 1),
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || (event.target as HTMLElement).closest("a, button")) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y };
    setDragging(true);
    updateHover(event);
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    updateHover(event);
    if (!dragStart.current) return;
    setPan({
      x: clamp(dragStart.current.panX + (event.clientX - dragStart.current.x) * 0.07, 28),
      y: clamp(dragStart.current.panY + (event.clientY - dragStart.current.y) * 0.055, 20),
    });
  };

  const stopDragging = () => {
    dragStart.current = null;
    setDragging(false);
  };

  const imageX = pan.x + hover.x * 9;
  const imageY = pan.y + hover.y * 7;

  return (
    <section
      ref={heroRef}
      className={`group relative isolate min-h-[680px] select-none overflow-hidden bg-[#10271d] px-6 pb-20 pt-32 text-white sm:min-h-[720px] sm:px-8 lg:min-h-[780px] lg:px-12 lg:pb-28 lg:pt-40 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onPointerLeave={() => {
        setHover({ x: 0, y: 0 });
        stopDragging();
      }}
    >
      <motion.div
        className="absolute -inset-10"
        initial={reduceMotion ? false : { opacity: 0, scale: 1.17 }}
        animate={{
          opacity: 1,
          x: reduceMotion ? 0 : imageX,
          y: reduceMotion ? 0 : imageY,
          scale: reduceMotion ? 1.1 : dragging ? 1.145 : 1.12,
        }}
        transition={{
          opacity: { duration: 1.1, ease: "easeOut" },
          scale: { duration: dragging ? 0.18 : 1.6, ease: "easeOut" },
          x: { type: "spring", stiffness: 90, damping: 22, mass: 0.6 },
          y: { type: "spring", stiffness: 90, damping: 22, mass: 0.6 },
        }}
        aria-hidden="true"
      >
        <Image src={imageSrc} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-center" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,28,18,.96)_0%,rgba(7,28,18,.82)_43%,rgba(7,28,18,.35)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(192,234,147,.24),transparent_27%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:42px_42px]" />
      <motion.div
        className="pointer-events-none absolute -top-1/2 h-[180%] w-40 rotate-[18deg] bg-gradient-to-r from-transparent via-white/[.06] to-transparent blur-xl"
        initial={reduceMotion ? false : { left: "-25%" }}
        animate={reduceMotion ? undefined : { left: "125%" }}
        transition={{ duration: 4.8, delay: 1.1, ease: "easeInOut" }}
      />

      <motion.div
        className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end"
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
        }}
      >
        <div className="cursor-default">
          <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }} className="text-base font-extrabold uppercase tracking-[0.32em] text-[#c9efa6] sm:text-lg">
            {label}
          </motion.p>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 34 }, visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } } }} className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.065em] sm:text-6xl lg:text-[5rem] lg:leading-[.93] xl:text-[6.3rem] xl:leading-[.91]">
            {title}
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75 } } }} className="mt-8 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
            {description}
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryAction.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c0ea93] px-7 py-4 font-bold text-[#10271d] transition hover:scale-[1.03] hover:bg-white">
              {primaryAction.label} <ArrowRight size={18} />
            </Link>
            <Link href={secondaryAction.href} className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/[.03] px-7 py-4 font-semibold transition hover:bg-white/10">
              {secondaryAction.label}
            </Link>
          </motion.div>
        </div>
        {aside ? (
          <motion.div variants={{ hidden: { opacity: 0, x: 36 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }} className="cursor-default rounded-[2rem] border border-white/20 bg-[#10271d]/55 p-7 backdrop-blur-md sm:p-9">
            {aside}
          </motion.div>
        ) : null}
      </motion.div>

      <div className="absolute bottom-7 right-6 hidden items-center gap-2 rounded-full border border-white/15 bg-[#10271d]/65 px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur md:flex lg:right-12">
        <Move size={15} className={dragging ? "text-[#c9efa6]" : ""} />
        Cliquez et déplacez l&apos;image
      </div>
    </section>
  );
}
