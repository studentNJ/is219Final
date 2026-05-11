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
    eyebrow: "AI Engineer / Technical Problem Solver",
    kicker: "A scrollytelling portfolio for recruiters and engineering managers evaluating practical full-stack and AI delivery.",
    title: "Building systems that turn messy data into usable decisions.",
    summary:
      "This portfolio is structured as a guided narrative: define the direction, show the proof, explain the workflow, and make the next step obvious. The centerpiece is Student Reality Lab v2, a housing affordability platform framed as an API orchestration problem instead of a classroom demo.",
    audience: "Technical recruiters and engineering managers",
    focus: "Applied AI, full-stack delivery, and data orchestration",
    delivery: "Single-page scrollytelling site built in phases",
    links: [
      { label: "Add live portfolio URL", href: null },
      { label: "Add GitHub profile URL", href: null },
      { label: "Add LinkedIn profile URL", href: null },
    ],
  },
  direction: {
    title: "A believable AI engineer profile needs more than a hero statement.",
    summary:
      "The site leads with a narrow promise: combine frontend delivery, data integration, and responsible AI usage to build tools that help people act on complex information. That promise is then supported by architecture, project framing, and visible decision-making rather than broad claims.",
    signals: [
      { label: "Audience", value: "People hiring for applied AI and engineering execution" },
      { label: "Work", value: "Scalable, user-facing products with strong technical reasoning" },
      { label: "Tone", value: "Technical, structured, and professionally grounded" },
      { label: "Story", value: "Problem -> system -> judgment -> proof" },
    ],
  },
  featuredProject: {
    title: "Student Reality Lab v2 becomes the main proof block.",
    summary:
      "Instead of presenting the project as a generic assignment, the page positions it as a system that consolidates housing and census-style inputs into a clear affordability workflow. The narrative should show what the project solves, how the architecture works, and where AI helped accelerate the implementation without replacing judgment.",
    tags: ["Next.js", "API orchestration", "Data normalization", "Affordability logic", "AI-assisted workflow"],
    panels: [
      {
        step: "Step 1",
        title: "Frame the problem",
        copy: "Housing and demographic data lives in fragmented sources. A user-facing experience has to reconcile inconsistent fields before it can explain affordability in plain language.",
      },
      {
        step: "Step 2",
        title: "Show the system",
        copy: "The project combines a frontend chat surface, reusable schemas, domain logic, and data-source orchestration to turn multiple APIs into a coherent application flow.",
      },
      {
        step: "Step 3",
        title: "Surface the judgment",
        copy: "The portfolio should call out where AI helped with research, mapping, and debugging, then show the human review required to keep data handling and claims credible.",
      },
      {
        step: "Step 4",
        title: "Land on outcomes",
        copy: "End the section with concrete proof: the architecture map, supported workflows, deployment path, and how the system can be explained quickly in a presentation.",
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
        copy: "A Next.js frontend turns the underlying logic into a guided conversational flow that can answer comparison and affordability prompts in a usable format.",
      },
      {
        index: "04",
        name: "Deployment path",
        copy: "The finished portfolio should connect the app to live hosting, environment-based configuration, and a GitHub-backed delivery story.",
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
      "The homepage needs visible proof and contact paths without forcing a reviewer to hunt. Keep the GitHub, LinkedIn, live site, and project source visible in the hero and again at the end of the page so the presentation and submission requirements are covered from the homepage itself.",
    links: [
      { label: "Add live demo", href: null },
      { label: "Add GitHub repository", href: null },
      { label: "Add LinkedIn", href: null },
      { label: "Add resume or contact link", href: null },
    ],
  },
} as const;