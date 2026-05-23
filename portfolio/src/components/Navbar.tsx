"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (section: string) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0d1117]/90 backdrop-blur-md border-b border-[#30363d]" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a
            href="#"
            className="font-mono text-sm text-[#58a6ff] font-medium"
            whileHover={{ scale: 1.05 }}
          >
            sanchit.dev
          </motion.a>

          <ul className="hidden md:flex gap-8">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleNav(link)}
                  className="text-[#8b949e] hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-[#8b949e] hover:text-white"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 inset-x-0 z-40 bg-[#161b22] border-b border-[#30363d] md:hidden"
          >
            <ul className="flex flex-col py-4">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNav(link)}
                    className="w-full text-left px-6 py-3 text-[#8b949e] hover:text-white hover:bg-[#21262d] transition-colors text-sm font-medium"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
