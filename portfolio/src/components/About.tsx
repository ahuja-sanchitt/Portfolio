"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/data/resume";
import { MapPin, Zap } from "lucide-react";

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

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <p className="font-mono text-xs text-[#58a6ff] uppercase tracking-widest mb-3">
                // about me
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
                Obsessed with
                <br />
                building things right.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-[#8b949e] leading-relaxed mb-4">
                I didn&apos;t just learn to code. I learned to{" "}
                <span className="text-white font-semibold">own problems end-to-end.</span> From
                building my first Graph-RAG solution as an intern to shipping LLM-powered automation
                at scale, every project has pushed me to think deeper about systems, not just syntax.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#8b949e] leading-relaxed mb-4">
                I care about the <span className="text-white font-semibold">why</span> behind every
                feature: how it moves a metric, saves a team time, or makes a customer&apos;s
                experience feel effortless. That mindset is what got me promoted in 3 months, and
                it&apos;s what keeps me going deeper into AI.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-[#8b949e] leading-relaxed">
                MCA with <span className="text-white font-semibold">8.9 CGPA</span>, BCA with{" "}
                <span className="text-white font-semibold">9.1</span>. My real education has
                been in production.
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-4">
            {education.map((e, i) => (
              <FadeIn key={e.degree} delay={0.1 * i}>
                <motion.div
                  whileHover={{ borderColor: "#58a6ff", x: 4 }}
                  className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 transition-colors duration-200"
                >
                  <div className="font-bold text-white text-sm mb-1">{e.degree}</div>
                  <div className="text-xs text-[#8b949e]">{e.institution}</div>
                  <div className="flex items-center gap-4 mt-2 text-xs text-[#8b949e]">
                    <span className="text-[#3fb950] font-mono font-semibold">CGPA: {e.cgpa}</span>
                    <span>{e.period}</span>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ borderColor: "#58a6ff", x: 4 }}
                className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <MapPin size={14} className="text-[#58a6ff]" />
                  Gurugram, Haryana
                </div>
                <div className="text-xs text-[#8b949e]">Open to remote & hybrid roles</div>
              </motion.div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <motion.div
                whileHover={{ borderColor: "#58a6ff", x: 4 }}
                className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <Zap size={14} className="text-[#3fb950]" />
                  Core focus
                </div>
                <div className="text-xs text-[#8b949e]">
                  Backend Engineering · AI · LLMs · Python · Django · Systems Design
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
