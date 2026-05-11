export const siteContent = {
  sections: [
    { id: "intro", label: "Signal" },
    { id: "direction", label: "Direction" },
    { id: "lab", label: "Project One" },
    { id: "architecture", label: "Architecture" },
    { id: "workflow", label: "AI Workflow" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Proof" },
  ],
  hero: {
    eyebrow: "Jason Concepcion | Aspiring AI Engineer / Full-Stack Developer",
    kicker: "A scrollytelling portfolio for recruiters and engineering managers evaluating practical full-stack delivery, applied AI workflow, and a live housing analysis product.",
    title: "Building chat-first systems that turn public data into usable housing decisions.",
    summary:
      "This portfolio is structured as a guided narrative: define the direction, show the proof, explain the workflow, and make the next step obvious. The centerpiece is Student Reality Lab 2, a live housing analysis studio that lets users ask affordability questions, inspect supporting charts, and continue the analysis in the same thread.",
    audience: "Technical recruiters and engineering managers",
    focus: "Applied AI, full-stack delivery, and data orchestration",
    delivery: "Single-page scrollytelling portfolio paired with a deployed Render project",
    links: [
      { label: "Live Project", href: "https://student-reality-lab2-concepcion.onrender.com" },
      { label: "Portfolio Repo", href: "https://github.com/studentNJ/is219Final" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jason-concepcion/" },
    ],
  },
  direction: {
    title: "A believable AI engineer profile needs more than a hero statement.",
    summary:
      "The site leads with a narrow promise: combine frontend delivery, data integration, and responsible AI usage to build tools that help people act on complex information. That promise is supported by a live application, a clear architecture story, and visible decision-making instead of broad claims.",
    signals: [
      { label: "Audience", value: "People hiring for applied AI and engineering execution" },
      { label: "Work", value: "Scalable, user-facing products with strong technical reasoning" },
      { label: "Tone", value: "Technical, structured, and professionally grounded" },
      { label: "Story", value: "Problem -> live system -> judgment -> proof" },
    ],
  },
  featuredProject: {
    title: "Student Reality Lab 2 is the main proof block.",
    summary:
      "The live project is presented as Housing Analysis Studio: a chat-first workspace for rent burden, affordability, and metro-level housing evidence. Users can ask a housing question, inspect the supporting chart or tool output, and continue the analysis in the same thread.",
    tags: ["Next.js", "Conversational analytics", "API orchestration", "Affordability logic", "Render deployment"],
    panels: [
      {
        step: "Step 1",
        title: "Frame the problem",
        copy: "Housing and demographic data lives in fragmented sources. A user-facing experience has to reconcile inconsistent fields before it can explain rent burden and affordability in plain language.",
      },
      {
        step: "Step 2",
        title: "Show the system",
        copy: "The project combines a chat-first frontend, reusable schemas, domain logic, and data-source orchestration to turn multiple APIs into a coherent analysis flow.",
      },
      {
        step: "Step 3",
        title: "Surface the judgment",
        copy: "The portfolio calls out where AI helped with research, mapping, and debugging, then shows the human review required to keep data handling, charts, and claims credible.",
      },
      {
        step: "Step 4",
        title: "Land on outcomes",
        copy: "The result is a live deployed studio where answers, tool traces, and charts stay attached to the question that produced them, making the system easy to explain in a presentation.",
      },
    ],
  },
  architecture: {
    title: "The architecture section should reveal the system in stages as the reader scrolls.",
    stages: [
      {
        index: "01",
        name: "Source ingestion",
        copy: "HUD and Census-style APIs are queried and normalized into shared application shapes before any user-facing explanation happens.",
      },
      {
        index: "02",
        name: "Shared logic",
        copy: "Domain packages handle affordability calculations, metro comparisons, and response planning so the business logic does not live inside the UI layer.",
      },
      {
        index: "03",
        name: "Chat interface",
        copy: "A Next.js frontend turns the underlying logic into a guided conversational flow where charts, tool traces, and follow-up analysis remain attached to the same thread.",
      },
      {
        index: "04",
        name: "Deployment path",
        copy: "The finished portfolio connects the app to live Render hosting, environment-based configuration, and a delivery story centered on a working public demo.",
      },
    ],
  },
  workflow: {
    title: "AI belongs in the workflow section as a managed tool, not a magic trick.",
    steps: [
      {
        phase: "Research",
        title: "Role and portfolio research",
        copy: "Use AI to compare real AI engineering roles, extract recurring expectations, and pressure-test which project evidence best supports that direction.",
      },
      {
        phase: "Build",
        title: "Implementation acceleration",
        copy: "Use AI to draft refactors, map unfamiliar APIs, and accelerate troubleshooting while keeping system behavior and code quality under manual review.",
      },
      {
        phase: "Governance",
        title: "Human-in-the-loop correction",
        copy: "Document where generated output was revised, rejected, or constrained so the portfolio shows judgment instead of passive tool use.",
      },
      {
        phase: "Presentation",
        title: "Explain the process clearly",
        copy: "The final walkthrough should show not only what was built, but how AI was used responsibly within a real development workflow.",
      },
    ],
  },
  skills: {
    title: "Organize skills by how work gets done, not as a generic inventory.",
    groups: [
      {
        title: "Frontend delivery",
        items: ["Next.js app routing", "Responsive page systems", "Interaction design for scroll-driven storytelling"],
      },
      {
        title: "Data and orchestration",
        items: ["API integration", "Schema normalization", "Business logic design", "Environment-based configuration"],
      },
      {
        title: "AI-assisted workflow",
        items: ["Prompt-guided research", "Refactoring support", "Debugging assistance", "Human review and correction"],
      },
      {
        title: "Delivery and proof",
        items: ["GitHub-based visibility", "Documentation and project framing", "Presentation readiness", "Cloud deployment path"],
      },
    ],
  },
  contact: {
    title: "The final section should make the next click obvious.",
    summary:
      "The homepage needs visible proof and contact paths without forcing a reviewer to hunt. The live Housing Analysis Studio demo, portfolio repository, project repository, and LinkedIn profile are visible from the homepage so a reviewer can move directly from the portfolio narrative to the public proof.",
    links: [
      { label: "Open Housing Analysis Studio", href: "https://student-reality-lab2-concepcion.onrender.com" },
      { label: "Open Portfolio Repository", href: "https://github.com/studentNJ/is219Final" },
      { label: "Open Project Repository", href: "https://github.com/studentNJ/student-reality-lab2-Concepcion" },
      { label: "View LinkedIn Profile", href: "https://www.linkedin.com/in/jason-concepcion/" },
    ],
  },
} as const;