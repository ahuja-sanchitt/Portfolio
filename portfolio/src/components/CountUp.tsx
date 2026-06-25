"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

function parseValue(raw: string): { prefix: string; number: number; suffix: string } | null {
  const match = raw.match(/^([+\-]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] };
}

export default function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const displayRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-40px" });
  const parsed = parseValue(value);

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (!inView || !parsed) return;
    motionVal.set(parsed.number);
  }, [inView, parsed, motionVal]);

  useEffect(() => {
    if (!parsed) return;
    return spring.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(latest).toString();
      }
    });
  }, [spring, parsed]);

  if (!parsed) {
    return (
      <span ref={containerRef} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={containerRef} className={className}>
      {parsed.prefix}
      <span ref={displayRef}>0</span>
      {parsed.suffix}
    </span>
  );
}
