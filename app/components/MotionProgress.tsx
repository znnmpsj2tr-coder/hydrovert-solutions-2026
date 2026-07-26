"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function MotionProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: .25 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[90] h-[3px] origin-left bg-[#c0ea93]"
    />
  );
}
