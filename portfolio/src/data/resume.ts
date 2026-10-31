export const personal = {
  name: "Sanchit Ahuja",
  title: "AI Engineer",
  tagline: "AI engineer who builds LLM systems that think and scale.",
  location: "Gurugram, Haryana",
  email: "sanchitahujafas@gmail.com",
  phone: "+91-7042673467",
  github: "https://github.com/ahuja-sanchitt",
  linkedin: "https://www.linkedin.com/in/sanchit-ahuja-088a871a4/",
  available: true,
};


export const about = [
  "AI engineer who builds LLM systems that think and scale. I ship production agents, from multi-agent support platforms to guardrailed tool-calling agents, plus the LLMOps layer that keeps them reliable, observable and cheap.",
  "Started with graph databases and Graph-RAG, and have only gone deeper since. Now building agents that resolve real customer tickets at scale, on top of backend services I own end-to-end.",
  "Always open to interesting conversations and new opportunities in AI Engineering and Backend.",
];

export const experience = [
  {
    role: "Software Development Engineer",
    type: "Full-time · Promoted from Intern in 3 months",
    company: "Spinny",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4WGnO-HU2tk8pf7Gp7OBZlkrDnkVNU6r1Q&s",
    location: "Gurugram, Haryana",
    period: "Oct 2024 – Present",
    duration: "2 yrs 1 mo",
    current: true,
    built: [
      { title: "Multi-agent support platform", description: "8 LLM chat & voice agents on n8n with human-in-the-loop handoff" },
      { title: "Guardrailed warranty agent", description: "Fail-closed policy checks plus a ReAct tool-calling agent (4 tools, Redis memory) with human escalation" },
      { title: "LLM intent classification", description: "250+ categories with taxonomy-validated outputs" },
      { title: "LLMOps layer & gateway", description: "Multi-provider (OpenAI, Gemini) for 17 workflows: structured outputs, fail-open, versioned prompts, cost tracing" },
      { title: "Context engineering", description: "Code-built context for grounded replies; ~190K LLM summaries/month of calls, voice notes and chats" },
    ],
    impact: [
      { value: "-37%", label: "resolution time across ~30K monthly tickets" },
      { value: "18%", label: "of monthly tickets handled by AI agents" },
      { value: "43%", label: "of warranty conversations resolved end to end" },
      { value: "80%", label: "of \"issue not listed\" tickets auto-classified (10.1K/quarter)" },
    ],
    facts: [
      { label: "Warranty Service ownership", value: "100% of warranty flows" },
      { label: "LLM gateway volume", value: "~270K calls/mo · ~1B tokens/qtr" },
      { label: "Prompt cache hit rate", value: "up to 56%" },
      { label: "Customer categories corrected", value: "26%" },
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
    built: [
      { title: "Python SDK", description: "Refactored 35+ functions, shipped 20+ new ones" },
      { title: "Test Suite", description: "Comprehensive unit tests surfacing critical bugs early" },
      { title: "Graph-RAG", description: "Combined graph traversal with LLMs for better retrieval accuracy" },
    ],
    impact: [
      { value: "+15%", label: "increase in user adoption" },
      { value: "+50%", label: "increase in test coverage" },
    ],
    facts: [
      { label: "Ultipa DB integration", value: "client + internal team" },
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
    built: [
      { title: "REST APIs", description: "Django & FastAPI APIs for internal and client-facing projects" },
      { title: "Custom CRM", description: "End-to-end build, from concept through deployment" },
    ],
    impact: [
      { value: "+35%", label: "improvement in customer data management & tracking" },
    ],
    facts: [],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Guru Gobind Singh Indraprastha University (GGSIPU)",
    location: "New Delhi",
    period: "Aug 2022 – Jul 2024",
    cgpa: "8.9",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Guru Gobind Singh Indraprastha University (GGSIPU)",
    location: "New Delhi",
    period: "Jul 2019 – Jun 2022",
    cgpa: "9.1",
  },
];

export const projects = [
  {
    name: "JevBenchmarking",
    tags: ["Python", "FastAPI", "OpenAI", "OpenRouter", "Postgres", "Streaming", "Vercel"],
    link: "https://github.com/ahuja-sanchitt/JevBenchmarking",
    summary:
      "A public demo that races the same production support task against OpenAI and Jev at the same instant, streams each answer back as it lands, and keeps a permanent record of latency and cost for every run.",
    highlights: [
      { value: "~9× faster", label: "and ~10× cheaper than gpt-4.1 on ticket recategorisation" },
      { value: "~63× cheaper", label: "and ~4× faster on the urgency prioritiser (9/9 agreement)" },
      { value: "100 questions", label: "fused into one request: 13 areas, 170 categories, multi-label warranty" },
    ],
    bullets: [
      "Benchmarked two production LLM features, 170-category ticket recategorisation and an urgency prioritiser, with OpenAI called exactly as production calls it (same prompts, strict JSON schema, temperatures).",
      "Designed a fused 100-question request (area choice + per-area leaf choices + 87 yes/no warranty faults) that matches hierarchical accuracy in a single round trip instead of tripling latency with a chain.",
      "Cut input tokens 19% with identical answers via an A/B test on warranty-fault wording; oversized requests split recursively and run both halves in parallel.",
      "Streams results as they arrive, persists every race in Postgres, and enforces per-IP rate limits (salted IP hashes) and a daily spend cap across serverless instances.",
      "Built under explicit honesty rules: measured, unscripted timings, sourced cost figures, reasoning tokens shown separately, and failed races never declare a winner.",
    ],
  },
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
      { value: "100+ clones", label: "Open-sourced with a one-command Bash installer that works across any project" },
    ],
    bullets: [
      "Built a zero-dependency Claude Code extension that automatically logs every non-trivial architecture decision, with its tradeoffs, to an append-only docs/DECISIONS.md as it happens.",
      "Designed per-app decision logs that live next to the code they affect, each numbered independently, plus a project-wide log for cross-cutting choices.",
      "Shipped /log-decision and /decisions slash commands to manually log, backfill, or summarize the decision trail on demand.",
      "Added an optional pre-commit hook that nudges, never blocks, when code changed in an app without a matching decision logged.",
      "Open-sourced the tool with a one-command Bash installer that works across any project; 100+ clones so far.",
    ],
  },
  {
    name: "Lodestar",
    tags: ["React", "FastAPI", "OpenAI", "Redis", "Prometheus/Grafana", "Apollo.io"],
    link: "https://github.com/ahuja-sanchitt/ResumeRanker",
    summary:
      "A full-stack AI co-pilot that scores your resume against any job description with an explainable, multi-signal match, then preps you for the interview and drafts cold outreach, all the way to a Gmail draft.",
    highlights: [
      { value: "3", label: "scoring signals: embeddings, skill-coverage & LLM judgement" },
      { value: "SHA-256", label: "cached prompts, resumes & JDs: identical inputs skip the LLM" },
      { value: "Grafana", label: "live Prometheus observability built in" },
    ],
    bullets: [
      "Built hybrid scoring that blends embeddings, skill-coverage, and LLM judgement into one explainable match score with matched/missing skills and improvement suggestions.",
      "Implemented SHA-256 fingerprinting with Redis caching so identical prompt and resume/JD inputs skip repeat embedding/LLM calls entirely, cutting OpenAI cost and latency.",
      "Shipped Prometheus/Grafana observability and per-IP rate limiting on the API.",
      "Added live interview prep powered by web search — company-specific rounds, common question types, and sample questions with source citations.",
      "Wired Apollo.io contact discovery into an LLM-drafted cold email flow that lands in a Gmail draft, never auto-sent.",
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
    items: ["Python", "C++", "SQL"],
  },
  {
    category: "AI / LLMs",
    items: ["OpenAI", "Gemini", "Claude", "RAG", "Graph-RAG", "Vector Databases", "Embeddings", "ReAct Agents", "Multi-Agent Systems", "Tool Calling", "MCP", "Prompt & Context Engineering", "Structured Outputs", "Guardrails", "Prompt Caching"],
  },
  {
    category: "LLMOps",
    items: ["Evals", "LLM-as-Judge", "Tracing", "Prompt Versioning", "n8n", "LangChain", "LangGraph", "Pydantic"],
  },
  {
    category: "Backend",
    items: ["Django", "Django REST", "FastAPI", "Microservices", "Kafka", "Celery", "gRPC", "GraphQL", "REST API", "Server Driven UI"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Graph DB (Ultipa)"],
  },
  {
    category: "Infra & Tools",
    items: ["Docker", "Kubernetes", "AWS", "Grafana", "Prometheus", "Kibana", "Git", "GitHub", "Bitbucket", "Postman", "Jira", "Shell"],
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
