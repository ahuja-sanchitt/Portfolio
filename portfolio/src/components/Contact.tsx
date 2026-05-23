"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/data/resume";
import { Mail, Phone } from "lucide-react";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

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

const contactLinks = [
  {
    icon: <Mail size={16} />,
    label: "Email me",
    href: `mailto:${personal.email}`,
    value: personal.email,
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    href: personal.linkedin,
    value: "sanchit-ahuja",
  },
  {
    icon: <Phone size={16} />,
    label: "Call me",
    href: `tel:${personal.phone}`,
    value: personal.phone,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#161b22]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-[#58a6ff] uppercase tracking-widest mb-3 text-center">
            // contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 text-center">
            Let&apos;s connect.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-xl mx-auto mt-10">
            <div className="relative bg-[#0d1117] border border-[#30363d] rounded-2xl p-10 text-center overflow-hidden">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-[#58a6ff]/5 pointer-events-none blur-2xl" />

              <h3 className="text-2xl font-bold text-white mb-3">
                I&apos;m open to the right opportunity.
              </h3>
              <p className="text-[#8b949e] text-sm mb-8 leading-relaxed">
                Whether it&apos;s a backend role, a challenging problem, or just a good conversation
                about distributed systems, I&apos;m listening.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap">
                {contactLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    whileHover={{ y: -3, borderColor: "#58a6ff", color: "#58a6ff" }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 border border-[#30363d] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    {link.icon}
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
