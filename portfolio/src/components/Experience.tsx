"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/resume";

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

function CompanyLogo({ logo, company }: { logo: string; company: string }) {
  if (logo) {
    return (
      <div className="mt-1 w-10 h-10 rounded-xl flex-shrink-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={`${company} logo`}
          referrerPolicy="no-referrer"
          className="object-cover w-full h-full"
        />
      </div>
    );
  }
  return (
    <div className="mt-1 w-10 h-10 rounded-xl flex-shrink-0 bg-[#21262d] border border-[#30363d] flex items-center justify-center text-xs font-bold text-[#58a6ff]">
      {company.slice(0, 2).toUpperCase()}
    </div>
  );
}

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 bg-[#161b22]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-[#58a6ff] uppercase tracking-widest mb-3">
            // experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-12">Where I&apos;ve built.</h2>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {experience.map((job, i) => (
            <FadeIn key={`${job.company}-${job.period}`} delay={0.1 * i}>
              <motion.div
                layout
                className={`bg-[#0d1117] border rounded-2xl overflow-hidden transition-colors duration-200 ${
                  expanded === i ? "border-[#58a6ff]" : "border-[#30363d] hover:border-[#58a6ff]/50"
                }`}
              >
                <button
                  className="w-full text-left p-6 flex items-start justify-between gap-4 cursor-pointer"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className="flex items-start gap-4">
                    <CompanyLogo logo={job.logo} company={job.company} />
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-bold text-white">{job.role}</span>
                        {job.current && (
                          <span className="text-[10px] font-mono bg-[#3fb950]/10 border border-[#3fb950]/30 text-[#3fb950] px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-[#8b949e] mt-0.5">
                        {job.company} · <span className="text-[#8b949e]/70">{job.type}</span>
                      </div>
                      <div className="text-xs text-[#8b949e]/60 mt-0.5">{job.location}</div>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-mono text-xs text-[#58a6ff]">{job.period}</div>
                    <div className="font-mono text-xs text-[#8b949e]/60 mt-0.5">{job.duration}</div>
                    <div className="text-[#8b949e] text-lg mt-1">
                      {expanded === i ? "−" : "+"}
                    </div>
                  </div>
                </button>

                <AnimatedContent open={expanded === i}>
                  <ul className="px-6 pb-6 space-y-3 border-t border-[#30363d] pt-4">
                    {job.bullets.map((b, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.06 }}
                        className="flex gap-3 text-sm text-[#8b949e] leading-relaxed"
                      >
                        <span className="text-[#58a6ff] mt-0.5 flex-shrink-0">▸</span>
                        <span dangerouslySetInnerHTML={{ __html: b.replace(/(\d+%|\d+ mos|\d+\+ \w+)/g, '<strong class="text-white">$1</strong>') }} />
                      </motion.li>
                    ))}
                  </ul>
                </AnimatedContent>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedContent({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}
