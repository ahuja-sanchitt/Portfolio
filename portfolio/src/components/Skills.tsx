"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/resume";

const iconMap: Record<string, string> = {
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#161b22]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-[#58a6ff] uppercase tracking-widest mb-3">
            // skills
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-12">My toolkit.</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={0.07 * i}>
              <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-5 h-full">
                <div className="font-mono text-xs text-[#3fb950] uppercase tracking-widest mb-4">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const icon = iconMap[skill];
                    return (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.08, borderColor: "#58a6ff", color: "#58a6ff" }}
                        className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 bg-[#161b22] border border-[#30363d] text-[#e6edf3] rounded-md cursor-default transition-colors duration-150"
                      >
                        {icon && <i className={`${icon} text-sm`} />}
                        {skill}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
