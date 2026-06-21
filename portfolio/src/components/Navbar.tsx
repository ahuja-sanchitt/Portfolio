"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["About", "Experience", "Projects", "Skills"];

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
          scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.a href="#" className="font-mono text-sm font-medium" whileHover={{ scale: 1.05 }}>
            <span className="text-[#6b6b6b]">~/</span>
            <span className="text-[#cbff3f]">sanchit.dev</span>
          </motion.a>

          <ul className="hidden md:flex gap-8">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleNav(link)}
                  className="font-mono lowercase text-[#8a8a8a] hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleNav("Contact")}
            className="hidden md:inline-flex font-mono lowercase text-xs font-semibold bg-[#cbff3f] text-[#0a0a0a] px-4 py-2 rounded-full cursor-pointer"
          >
            contact
          </motion.button>

          <button
            className="md:hidden text-[#8a8a8a] hover:text-white"
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
            className="fixed top-16 inset-x-0 z-40 bg-[#0d0d0d] border-b border-[#1a1a1a] md:hidden"
          >
            <ul className="flex flex-col py-4">
              {[...links, "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNav(link)}
                    className="w-full text-left px-6 py-3 font-mono lowercase text-[#8a8a8a] hover:text-white hover:bg-[#161616] transition-colors text-sm"
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
