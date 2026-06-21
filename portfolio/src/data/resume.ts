export const personal = {
  name: "Sanchit Ahuja",
  title: "Software Engineer",
  tagline: "Backend engineer who builds systems that think and scale.",
  location: "Gurugram, Haryana",
  email: "sanchitahujafas@gmail.com",
  phone: "+91-7042673467",
  github: "https://github.com/ahuja-sanchitt",
  linkedin: "https://www.linkedin.com/in/sanchit-ahuja-088a871a4/",
  available: true,
};


export const about = [
  "Backend engineer who builds systems that think and scale. My work sits at the intersection of AI, automation and product, turning complex workflows into seamless experiences for both customers and the teams serving them.",
  "Started with graph databases and LLMs, and have only gone deeper since. Now owning core backend services where AI and automation are at the heart of everything I ship.",
  "Always open to interesting conversations and new opportunities in Backend Engineering and AI.",
];

export const experience = [
  {
    role: "Software Engineer",
    type: "Full-time · Promoted from Intern",
    company: "Spinny",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4WGnO-HU2tk8pf7Gp7OBZlkrDnkVNU6r1Q&s",
    location: "Gurugram, Haryana",
    period: "Oct 2024 – Present",
    duration: "1 yr 8 mos",
    current: true,
    bullets: [
      "Joined as an intern and converted to full-time within 3 months based on performance and ownership.",
      "Backend Engineer on Spinny's Platform team, working across Customer Experience with sole ownership of the Warranty Service.",
      "Designed and delivered multiple workflows within Spinny's consumer Account Section (Warranty, Insurance, RC Transfer and Instant Query Resolution) using server-driven UI, keeping experiences dynamic without app deployments.",
      "Engineered an automation layer that reads customer queries, pulls the right data, and closes tickets without agent intervention, reducing human intervention by 30% and resolution timelines significantly.",
      "Developed AI-powered features into the internal CRM: conversation summaries across tickets, chats and calls, and an AI message enhancer for agents, contributing to a 40% reduction in First Response Time.",
      "Revamped the Warranty Service for scalability, reworking core logic to support new plans alongside legacy systems, building real-time coverage signals, and launching a conditional Denial Bot that routes non-covered tickets to an LLM for automated resolution.",
    ],
  },
  {
    role: "Software Engineer Intern",
    type: "Internship",
    company: "Ultipa",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQEnlrVKGhUjIg/company-logo_200_200/company-logo_200_200/0/1654086783061/ultipa_logo?e=2147483647&v=beta&t=bgI00n1P1tBxOAEQhrfgz5QgqbOu4QpZSY5Toh_imLc",
    location: "Pleasanton, CA · Remote",
    period: "Jan 2024 – Aug 2024",
    duration: "8 mos",
    current: false,
    bullets: [
      "Refactored and expanded the Python SDK, revamping 35+ existing functions and introducing 20+ new ones, contributing to a 15% increase in user adoption.",
      "Built a comprehensive unit test suite for the SDK, increasing test coverage by 50% and surfacing critical bugs early in the development cycle.",
      "Engineered a Graph-RAG (Retrieval Augmented Generation) solution, combining graph database traversal with LLMs to significantly improve information retrieval accuracy.",
      "Guided an internal team and an external client through Ultipa DB integration, ensuring smooth onboarding and adoption.",
    ],
  },
  {
    role: "Software Developer Intern",
    type: "Internship",
    company: "Growth Loops Technology",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHl3aG7s7nPMw/company-logo_200_200/company-logo_200_200/0/1704002003585/growth_loop_technology_logo?e=2147483647&v=beta&t=hge9yjnpg7JpjvmRGuXqr4aCUfeo460rls3DAlhZOcI",
    location: "Kolkata, West Bengal · Remote",
    period: "Oct 2023 – Dec 2023",
    duration: "3 mos",
    current: false,
    bullets: [
      "Developed RESTful APIs using Django and FastAPI to support multiple internal and client-facing projects.",
      "Played a key role in building a custom CRM system end-to-end, from initial concept through to deployment, improving a client's customer data management and interaction tracking by 35%.",
      "Collaborated closely with senior engineers to identify and resolve bugs and implement feature enhancements.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Bharati Vidyapeeth's Institute of Computers Applications and Management",
    location: "New Delhi",
    period: "Aug 2022 – Jul 2024",
    cgpa: "8.9",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Vivekananda Institute of Professional Studies",
    location: "New Delhi",
    period: "Jul 2019 – Jun 2022",
    cgpa: "9.1",
  },
];

export const projects = [
  {
    name: "claude-decision-log",
    tags: ["Claude Code", "Bash", "Slash Commands", "Open Source"],
    link: "https://github.com/ahuja-sanchitt/claude-decision-log",
    summary:
      "A zero-dependency Claude Code extension that auto-logs every non-trivial architecture decision, with tradeoffs, straight to an append-only docs/DECISIONS.md as you build.",
    highlights: [
      { value: "Auto-logged", label: "Every non-trivial architecture decision logged to docs/DECISIONS.md as it happens" },
      { value: "Per-app logs", label: "Decision logs live next to the code they affect, each numbered independently" },
      { value: "2 slash commands", label: "/log-decision and /decisions to log, backfill, or summarize on demand" },
      { value: "1-command install", label: "Open-sourced with a Bash installer that works across any project" },
    ],
    bullets: [
      "Built a zero-dependency Claude Code extension that automatically logs every non-trivial architecture decision, with its tradeoffs, to an append-only docs/DECISIONS.md as it happens.",
      "Designed per-app decision logs that live next to the code they affect, each numbered independently, plus a project-wide log for cross-cutting choices.",
      "Shipped /log-decision and /decisions slash commands to manually log, backfill, or summarize the decision trail on demand.",
      "Added an optional pre-commit hook that nudges, never blocks, when code changed in an app without a matching decision logged.",
      "Open-sourced the tool with a one-command Bash installer that works across any project.",
    ],
  },
  {
    name: "InboxPilot",
    tags: ["React", "FastAPI", "Gmail API", "GPT-4o-mini", "OAuth 2.0"],
    link: "https://github.com/ahuja-sanchitt/InboxPilot",
    summary:
      "A full-stack AI email assistant that connects to Gmail, triages and summarizes your inbox, and drafts replies, all gated behind OAuth sign-in and a mandatory send preview.",
    highlights: [
      { value: "Full-stack AI", label: "Gmail-connected assistant that triages, summarizes, and acts on your inbox" },
      { value: "Smart triage", label: "Sorts mail into Needs Reply, Action Required, and FYI with a reason" },
      { value: "Bulk send", label: "Personalized {{variable}} mail at scale, gated behind a mandatory preview" },
    ],
    bullets: [
      "Built a full-stack AI email assistant that connects to Gmail and uses an LLM to triage, summarize, and act on a user's inbox, shipped as a web app with Google OAuth sign-in.",
      "Engineered AI-powered inbox summarization and smart triage, sorting mail into priority buckets like Needs Reply, Action Required, and FYI with a one-line rationale for each.",
      "Built bulk drafting and sending with {{variable}} placeholders for personalized mail at scale, gated behind a mandatory preview step before anything sends.",
      "Designed a stateless, database-free architecture that fetches everything live from the Gmail API per request, removing stored user data and privacy liability entirely.",
      "Kept OAuth tokens in an httponly cookie instead of localStorage, keeping them inaccessible to client-side scripts.",
    ],
  },
  {
    name: "Graph Chatbot",
    tags: ["Python", "Graph DB", "GPT-4", "Chroma DB", "RAG"],
    summary:
      "Integrated graph databases with LLMs to ground responses in structured knowledge, pairing Chroma DB vector retrieval with hallucination-reduction techniques for accurate, fast answers.",
    highlights: [
      { value: "+20%", label: "chatbot accuracy by grounding LLMs in graph data" },
      { value: "+40%", label: "storage & retrieval efficiency with Chroma DB vectors" },
      { value: "-60%", label: "inaccurate replies via hallucination-reduction" },
    ],
    bullets: [
      "Integrated graph databases with LLMs to boost chatbot accuracy by 20%.",
      "Deployed Chroma DB for vector operations, increasing storage & retrieval efficiency by 40%.",
      "Applied hallucination-reduction techniques, cutting inaccurate replies by 60%.",
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C++"],
  },
  {
    category: "Backend & Infra",
    items: ["Django", "Django REST", "FastAPI", "Microservices", "Kafka", "gRPC", "GraphQL", "Celery", "Redis", "Docker", "Kubernetes", "REST API", "Server Driven UI"],
  },
  {
    category: "AI / LLMs",
    items: ["LLMs", "RAG", "Graph-RAG", "AI Integration", "Automation"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Graph DB (Ultipa)"],
  },
  {
    category: "Tools & Platforms",
    items: ["AWS", "Git", "GitHub", "Bitbucket", "Jira", "Postman", "Shell", "Claude"],
  },
  {
    category: "Engineering",
    items: ["System Design", "Scalable Architecture", "DSA", "Unit Testing", "SDK Development"],
  },
];

export const certifications = [
  {
    name: "AWS Cloud Technical Essentials",
    description: "Foundational training in core AWS services, cloud security, and architecture",
  },
  {
    name: "Django Web Framework by Meta",
    description: "Certified in professional Django development by Meta",
  },
];
