"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/resume";

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
    <section id="projects" className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-[#58a6ff] uppercase tracking-widest mb-3">
            // projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-12">Things I&apos;ve shipped.</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                className="bg-[#161b22] border border-[#30363d] rounded-2xl p-7 h-full relative overflow-hidden group transition-all duration-200 hover:border-[#58a6ff]"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#58a6ff] to-[#3fb950] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <h3 className="text-lg font-bold text-white mb-3">{p.name}</h3>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-[#21262d] border border-[#30363d] text-[#58a6ff] px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-[#8b949e] leading-relaxed">
                      <span className="text-[#3fb950] flex-shrink-0 mt-0.5">–</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: b.replace(
                            /(\d+%)/g,
                            '<strong class="text-white">$1</strong>'
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
