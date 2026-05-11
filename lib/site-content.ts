export const siteContent = {
  sections: [
    { id: "intro", label: "Hook" },
    { id: "project", label: "Project" },
    { id: "proof", label: "Proof" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Jason Concepcion | Aspiring AI Engineer / Full-Stack Developer",
    kicker: "AI engineer portfolio built for recruiters and engineering managers scanning for shipped work, technical judgment, and live product proof.",
    title: "I build chat-first tools that turn messy public data into clear housing decisions.",
    summary:
      "The strongest proof is Student Reality Lab 2: a deployed housing analysis studio where users ask affordability questions, inspect the evidence, and keep the investigation in one thread.",
    audience: "Recruiters and hiring managers evaluating execution",
    focus: "Applied AI workflow, product delivery, and data systems",
    delivery: "Live public demo paired with a portfolio built for fast review",
    board: [
      {
        label: "Audience",
        value: "Recruiters and engineering managers",
      },
      {
        label: "Vibe",
        value: "Technical, credible, and product-focused",
      },
      {
        label: "Look",
        value: "Housing analytics studio with dashboard-style proof",
      },
      {
        label: "Proof",
        value: "Live deployment, GitHub repos, and technical specs",
      },
      {
        label: "Build",
        value: "Next.js, API orchestration, AI workflow, data normalization",
      },
    ],
    links: [
      { label: "Live Project", href: "https://student-reality-lab2-concepcion.onrender.com" },
      { label: "Portfolio Repo", href: "https://github.com/studentNJ/is219Final" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jason-concepcion/" },
    ],
  },
  featuredProject: {
    title: "Student Reality Lab 2 proves the work.",
    summary:
      "I built a housing analysis studio because rental data is fragmented, hard to compare, and usually impossible to explain quickly to real users.",
    tags: ["Next.js", "Conversational analytics", "API orchestration", "Affordability logic", "Render deployment"],
    bullets: [
      "Unifies housing and demographic sources into one chat-driven workflow.",
      "Keeps charts, answers, and tool traces attached to the question that produced them.",
      "Turns a messy research task into a live demo that is easy to explain in interviews.",
    ],
    cta: "View Specs",
  },
  proof: {
    title: "The build story is simple: fetch, normalize, explain, ship.",
    summary:
      "This portfolio does not need six sections of theory. It needs one clear view of how I turn data, interface, and AI-assisted workflow into a usable product.",
    panels: [
      {
        step: "01",
        title: "Normalize the inputs",
        copy: "Pull fragmented public datasets into shared shapes before any user-facing explanation happens.",
      },
      {
        step: "02",
        title: "Keep logic out of the UI",
        copy: "Affordability rules and response planning live in reusable logic instead of presentation components.",
      },
      {
        step: "03",
        title: "Use AI with supervision",
        copy: "AI accelerates research, refactors, and debugging, but the final claims, data handling, and UX decisions stay under manual review.",
      },
      {
        step: "04",
        title: "Ship visible proof",
        copy: "The outcome is a public demo, a portfolio narrative, and a codebase that can be inspected without guesswork.",
      },
    ],
  },
  contact: {
    title: "The next click should be obvious.",
    summary:
      "If the work looks credible, the reviewer should be able to open the live product, inspect the code, and reach me without hunting through extra copy.",
    links: [
      { label: "Open Housing Analysis Studio", href: "https://student-reality-lab2-concepcion.onrender.com" },
      { label: "Open Portfolio Repository", href: "https://github.com/studentNJ/is219Final" },
      { label: "Open Project Repository", href: "https://github.com/studentNJ/student-reality-lab2-Concepcion" },
      { label: "View LinkedIn Profile", href: "https://www.linkedin.com/in/jason-concepcion/" },
    ],
  },
  specs: {
    eyebrow: "Technical Deep Dive",
    title: "What is behind the demo",
    summary:
      "The public homepage stays short. These notes surface the deeper architecture, workflow, and delivery choices that support the project.",
    groups: [
      {
        title: "System design",
        items: [
          "Chat-first interface built to keep the user question, evidence, and follow-up reasoning in one place.",
          "Shared business logic for affordability calculations and response planning, instead of burying domain rules inside UI components.",
          "Public-data normalization step that reconciles inconsistent fields before explanation or charting begins.",
        ],
      },
      {
        title: "AI workflow",
        items: [
          "Used AI for role research, debugging support, and refactor drafting when it accelerated delivery.",
          "Rejected or revised generated output whenever it blurred domain logic, introduced shaky claims, or weakened the UX.",
          "Kept human review on data handling, wording, product framing, and final implementation decisions.",
        ],
      },
      {
        title: "Delivery proof",
        items: [
          "Live application deployed publicly on Render.",
          "Portfolio code and project code both visible on GitHub.",
          "Narrative optimized for recruiter review first, technical inspection second.",
        ],
      },
    ],
    links: [
      { label: "Open Live Demo", href: "https://student-reality-lab2-concepcion.onrender.com" },
      { label: "Open Project Repo", href: "https://github.com/studentNJ/student-reality-lab2-Concepcion" },
      { label: "Open Portfolio Repo", href: "https://github.com/studentNJ/is219Final" },
    ],
  },
} as const;