import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <footer className="max-w-6xl mx-auto flex items-center justify-between px-6 py-8 text-xs font-mono border-t border-[#1a1a1a]">
        <span>
          <span className="text-[#6b6b6b]">~/</span>
          <span className="text-[#cbff3f]">sanchit.dev</span>
        </span>
        <span className="text-[#3a3a3a]">Sanchit Ahuja © 2026</span>
      </footer>
    </main>
  );
}
