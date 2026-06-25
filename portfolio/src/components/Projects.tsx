"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/resume";
import CountUp from "@/components/CountUp";

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

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-[#cbff3f] uppercase tracking-widest mb-3">
            // 03 — projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-12">
            Things I&apos;ve <span className="text-[#cbff3f]">shipped.</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={0.1 * i}>
              <motion.div
                whileHover={{ borderColor: "#cbff3f" }}
                className="bg-[#0d0d0d] border border-[#262626] rounded-3xl p-7 sm:p-8 transition-colors duration-200 grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] gap-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="font-mono text-xs text-[#6b6b6b]">
                      {String(i + 1).padStart(3, "0")}
                      {i === 0 && " / featured"}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-[#6b6b6b] hover:text-[#cbff3f] transition-colors duration-150"
                      >
                        View on GitHub ↗
                      </a>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{p.name}</h3>
                  <p className="text-sm text-[#9a9a9a] leading-relaxed mb-5">{p.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono bg-[#111111] border border-[#262626] text-[#cbff3f] px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-5 justify-center">
                  {p.highlights.map((h, j) => (
                    <div key={j} className="flex items-center gap-4 border-l-2 border-[#cbff3f] pl-4">
                      <CountUp
                        value={h.value}
                        className="text-2xl font-black text-[#cbff3f]/80 flex-shrink-0 leading-none"
                      />
                      <span className="text-sm text-[#9a9a9a] leading-snug">{h.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
