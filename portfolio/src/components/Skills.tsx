"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/resume";

const iconMap: Record<string, string | { type: "img"; src: string }> = {
  "Claude": { type: "img", src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude.png" },
  "Python":           "devicon-python-plain colored",
  "C++":              "devicon-cplusplus-plain colored",
  "Django":           "devicon-django-plain colored",
  "Django REST":      "devicon-django-plain colored",
  "FastAPI":          "devicon-fastapi-plain colored",
  "Docker":           "devicon-docker-plain colored",
  "Kubernetes":       "devicon-kubernetes-plain colored",
  "Redis":            "devicon-redis-plain colored",
  "MySQL":            "devicon-mysql-plain colored",
  "MongoDB":          "devicon-mongodb-plain colored",
  "GraphQL":          "devicon-graphql-plain colored",
  "Git":              "devicon-git-plain colored",
  "GitHub":           "devicon-github-original",
  "AWS":              "devicon-amazonwebservices-plain-wordmark colored",
  "Jira":             "devicon-jira-plain colored",
  "Postman":          "devicon-postman-plain colored",
  "Bitbucket":        "devicon-bitbucket-original colored",
  "Shell":            "devicon-bash-plain",
};

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

function SkillCard({ group, delay }: { group: (typeof skills)[number]; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-[#0d0d0d] border border-[#262626] rounded-xl p-5">
        <div className="font-mono text-xs text-[#cbff3f] uppercase tracking-widest mb-4">
          {group.category}
        </div>
        <div className="flex flex-wrap gap-2">
          {group.items.map((skill) => {
            const icon = iconMap[skill];
            return (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.08, borderColor: "#cbff3f", color: "#cbff3f" }}
                className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1.5 bg-[#111111] border border-[#262626] text-[#d4d4d4] rounded-md cursor-default transition-colors duration-150"
              >
                {icon && typeof icon === "string" && <i className={`${icon} text-sm`} />}
                {icon && typeof icon === "object" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={icon.src} alt={skill} className="w-3.5 h-3.5 object-contain" referrerPolicy="no-referrer" />
                )}
                {skill}
              </motion.span>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Skills() {
  const columns: (typeof skills[number])[][] = [[], [], []];
  skills.forEach((group, i) => columns[i % 3].push(group));

  return (
    <section id="skills" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-[#cbff3f] uppercase tracking-widest mb-3">
            // 04 — skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-12">
            My <span className="text-[#cbff3f]">toolkit.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {columns.map((col, c) => (
            <div key={c} className="flex flex-col gap-5">
              {col.map((group, i) => (
                <SkillCard key={group.category} group={group} delay={0.07 * (c + i * 3)} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
