"use client";

import { motion, type Transition } from "framer-motion";
import { personal } from "@/data/resume";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" } as Transition,
});

export default function Hero() {
  const [firstName, ...rest] = personal.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="flex items-center pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_360px] gap-12 items-center">
        <div>
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 bg-[#111111] border border-[#cbff3f]/30 rounded-full px-4 py-1.5 text-xs font-mono lowercase text-[#cbff3f] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#cbff3f] animate-pulse" />
              available for opportunities
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl font-black leading-[1.05] tracking-tight mb-4"
            {...fadeUp(0.2)}
          >
            <span className="text-white">{firstName}</span>
            <br />
            <span className="text-white">
              {lastName}
              <span className="text-[#cbff3f]">.</span>
            </span>
          </motion.h1>

          <motion.div className="flex items-baseline gap-3 flex-wrap mb-8" {...fadeUp(0.25)}>
            <span className="text-2xl sm:text-3xl font-bold text-white">Backend Engineer</span>
            <span className="text-sm font-mono text-[#6b6b6b]">// systems that think &amp; scale</span>
          </motion.div>

          <motion.div className="max-w-xl mb-10" {...fadeUp(0.3)}>
            <p className="text-lg text-[#9a9a9a] leading-relaxed">
              I build backend services at the intersection of{" "}
              <span className="text-white font-semibold">AI, automation and product</span>, turning
              complex workflows into seamless experiences. Started with graph databases and LLMs;
              now owning core systems where AI is at the heart of everything I ship.
            </p>
          </motion.div>

          <motion.div className="flex gap-4 flex-wrap" {...fadeUp(0.4)}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-[#cbff3f] text-[#0a0a0a] font-semibold px-5 py-2.5 rounded-lg text-sm cursor-pointer"
            >
              Get in touch →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, borderColor: "#cbff3f", color: "#cbff3f" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 border border-[#262626] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors cursor-pointer"
            >
              See my work
            </motion.button>
          </motion.div>
        </div>

        <motion.div className="relative" {...fadeUp(0.3)}>
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-[#cbff3f]/40 pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden border border-[#262626] aspect-[4/5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt={personal.name}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 inset-x-0 bg-[#0a0a0a]/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between text-xs font-mono">
              <span className="text-[#9a9a9a]">Gurugram, IN</span>
              <span className="text-[#cbff3f]">open to remote · hybrid</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
