"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications } from "@/data/resume";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-[#cbff3f] uppercase tracking-widest mb-3">
            // 05 — certifications
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-12">Credentials.</h2>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.name} delay={0.1 * i}>
              <motion.div
                whileHover={{ x: 6, borderColor: "#cbff3f" }}
                className="flex items-center gap-5 bg-[#111111] border border-[#262626] rounded-xl p-5 transition-colors duration-200"
              >
                <span className="text-lg font-black text-[#cbff3f] font-mono flex-shrink-0 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="font-bold text-white text-base">{cert.name}</div>
                  <div className="text-sm text-[#9a9a9a] mt-1">{cert.description}</div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
