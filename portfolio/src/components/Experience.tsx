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
    <div className="mt-1 w-10 h-10 rounded-xl flex-shrink-0 bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-xs font-bold text-[#cbff3f]">
      {company.slice(0, 2).toUpperCase()}
    </div>
  );
}

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="font-mono text-xs text-[#cbff3f] uppercase tracking-widest mb-3">
                // 02 — experience
              </p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
                Where I&apos;ve <span className="text-[#cbff3f]">built.</span>
              </h2>
            </div>
            <div className="font-mono text-xs text-[#6b6b6b] hidden sm:flex items-center gap-1.5">
              <span className="text-[#cbff3f]">▸</span>
              click any role to expand
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {experience.map((job, i) => (
            <FadeIn key={`${job.company}-${job.period}`} delay={0.1 * i}>
              <div className="flex gap-4">
                <div className="flex flex-col items-center w-3 flex-shrink-0 pt-7">
                  <span
                    className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      job.current ? "bg-[#cbff3f]" : "bg-[#0d0d0d] border-2 border-[#4a4a4a]"
                    }`}
                  />
                  {i < experience.length - 1 && (
                    <div className="w-px bg-[#262626] flex-1 mt-2" />
                  )}
                </div>

                <motion.div
                  layout
                  className={`flex-1 bg-[#0a0a0a] border rounded-2xl overflow-hidden transition-colors duration-200 ${
                    expanded === i ? "border-[#cbff3f]" : "border-[#262626] hover:border-[#cbff3f]/50"
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
                            <span className="text-[10px] font-mono bg-[#cbff3f]/10 border border-[#cbff3f]/30 text-[#cbff3f] px-2 py-0.5 rounded-full uppercase">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-[#9a9a9a] mt-0.5">
                          {job.company} · <span className="text-[#6b6b6b]">{job.type}</span>
                        </div>
                        <div className="text-xs text-[#6b6b6b] mt-0.5">{job.location}</div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-mono text-xs text-[#cbff3f]">{job.period}</div>
                      <div className="font-mono text-xs text-[#6b6b6b] mt-0.5">{job.duration}</div>
                      <div className="text-[#9a9a9a] text-lg mt-1">
                        {expanded === i ? "−" : "+"}
                      </div>
                    </div>
                  </button>

                  <AnimatedContent open={expanded === i}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-6 pt-4 border-t border-[#262626]">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#6b6b6b] mb-4">
                          What I built
                        </div>
                        <div className="flex flex-col divide-y divide-[#1a1a1a]">
                          {job.built.map((b, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.06 }}
                              className="border-l-2 border-white/20 pl-4 py-3 first:pt-0 last:pb-0"
                            >
                              <div className="font-bold text-white text-sm mb-1">{b.title}</div>
                              <div className="text-xs text-[#9a9a9a] leading-relaxed">{b.description}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="md:border-l md:border-[#262626] md:pl-8">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#6b6b6b] mb-4">
                          Impact
                        </div>
                        <div
                          className={`grid gap-3 mb-3 ${
                            job.impact.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
                          }`}
                        >
                          {job.impact.map((stat, j) => (
                            <div key={j} className="bg-[#141414] border border-[#262626] rounded-xl p-4">
                              <div className="text-2xl sm:text-3xl font-black text-[#cbff3f]/85 leading-none mb-2">
                                {stat.value}
                              </div>
                              <div className="text-xs text-[#9a9a9a] leading-snug">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        {job.facts.length > 0 && (
                          <div className="flex flex-col gap-2">
                            {job.facts.map((fact, j) => (
                              <div
                                key={j}
                                className="flex items-center justify-between gap-3 bg-[#141414] border border-[#262626] rounded-xl px-4 py-3"
                              >
                                <span className="text-xs text-[#9a9a9a]">{fact.label}</span>
                                <span className="text-xs font-mono text-white whitespace-nowrap">{fact.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedContent>
                </motion.div>
              </div>
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
