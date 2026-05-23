"use client";

import { motion, type Transition } from "framer-motion";
import { Mail } from "lucide-react";
import { personal } from "@/data/resume";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" } as Transition,
});

export default function Hero() {
  return (
    <section className="flex items-center pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1.5 text-xs font-mono text-[#3fb950] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl font-black leading-[1.05] tracking-tight mb-4"
          {...fadeUp(0.2)}
        >
          <span className="text-white">{personal.name}</span>
          <br />
          <span className="bg-gradient-to-r from-[#58a6ff] to-[#3fb950] bg-clip-text text-transparent">
            Backend Engineer.
          </span>
        </motion.h1>

        <motion.p
          className="text-sm font-mono text-[#8b949e] mb-8 tracking-wide"
          {...fadeUp(0.25)}
        >
          <span className="text-[#58a6ff]">Backend</span> <span className="text-[#30363d]">·</span>{" "}
          <span className="text-[#3fb950]">AI</span> <span className="text-[#30363d]">·</span>{" "}
          Systems at Scale
        </motion.p>

        <motion.div className="max-w-2xl space-y-4 mb-10" {...fadeUp(0.3)}>
          <p className="text-lg text-[#8b949e] leading-relaxed">
            Backend engineer who builds{" "}
            <span className="text-white font-semibold">systems that think and scale.</span> My work
            sits at the intersection of AI, automation and product, turning complex workflows into
            seamless experiences for both customers and the teams serving them.
          </p>
          <p className="text-[#8b949e] leading-relaxed">
            Started with graph databases and LLMs, and have only gone deeper since. Now owning core
            backend services where{" "}
            <span className="text-white font-semibold">
              AI and automation are at the heart of everything I ship.
            </span>
          </p>
          <p className="text-[#8b949e] leading-relaxed">
            Always open to interesting conversations and new opportunities in{" "}
            <span className="text-white font-semibold">Backend Engineering and AI.</span>
          </p>
        </motion.div>

        <motion.div className="flex gap-4 flex-wrap" {...fadeUp(0.4)}>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(88,166,255,0.3)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-[#58a6ff] text-[#0d1117] font-semibold px-5 py-2.5 rounded-lg text-sm cursor-pointer"
          >
            <Mail size={16} />
            Get in touch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, borderColor: "#58a6ff", color: "#58a6ff" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 border border-[#30363d] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors cursor-pointer"
          >
            See my work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
