export const siteContent = {
  sections: [
    { id: "intro", label: "Intro" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Featured Project" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Jason Manuel Concepcion | Computer Science Student",
    kicker:
      "NJIT computer science student building full-stack and data-driven projects with a focus on clear product thinking, practical engineering, and shipped coursework.",
    title: "I build practical software, data tools, and web experiences that are easy to explain and ready to review.",
    summary:
      "This portfolio reflects both shipped work and the academic foundation behind it: software engineering, data visualization, machine learning, and the stack I use to turn assignments into polished deliverables.",
    audience: "Recruiters, hiring managers, and internship teams",
    focus: "Full-stack development, data visualization, and software engineering",
    delivery: "Resume-backed highlights, live project proof, and direct contact links",
    board: [
      {
        label: "Degree",
        value: "B.S. in Computer Science at NJIT",
      },
      {
        label: "Graduation",
        value: "Expected December 2026",
      },
      {
        label: "Location",
        value: "Hazlet, New Jersey",
      },
      {
        label: "Strengths",
        value: "React, Node.js, D3.js, SQL, Git/GitHub",
      },
      {
        label: "Coursework",
        value: "Software Engineering, Data Viz, Machine Learning, Systems",
      },
    ],
    links: [
      { label: "View Featured Project", href: "https://student-reality-lab2-concepcion.onrender.com" },
      { label: "GitHub", href: "https://github.com/studentNJ" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jason-concepcion" },
      { label: "Email", href: "mailto:jasonmconcepcion659@gmail.com" },
    ],
  },
  education: {
    title: "Education and coursework that support the build work.",
    summary:
      "I am pursuing a Bachelor of Science in Computer Science at New Jersey Institute of Technology. The coursework below maps directly to the engineering problems I want to solve in internships and early-career roles.",
    school: "New Jersey Institute of Technology (NJIT)",
    degree: "Bachelor of Science in Computer Science",
    graduation: "Expected Graduation: December 2026",
    courses: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Database System Design",
      "Machine Learning",
      "Data Visualization",
      "Computer Networks",
      "Software Engineering Design",
      "Cybersecurity",
      "Programming Language Concepts",
    ],
  },
  skills: {
    title: "Technical skills grounded in coursework and hands-on project work.",
    summary:
      "The stack here comes directly from the resume: languages I write, frameworks I build with, and the supporting tools I use for delivery, collaboration, and analysis.",
    groups: [
      {
        title: "Languages",
        items: ["Python", "Java", "C", "C++", "SQL", "JavaScript"],
      },
      {
        title: "Web and frameworks",
        items: ["React", "Node.js", "Express", "HTML", "CSS", "Next.js"],
      },
      {
        title: "Tools and technologies",
        items: ["Linux", "Git", "GitHub", "MySQL", "REST APIs", "D3.js"],
      },
      {
        title: "Core concepts",
        items: [
          "Data Structures",
          "Algorithms",
          "Object-Oriented Programming",
          "Database Design",
          "Networking Fundamentals",
        ],
      },
    ],
  },
  experience: {
    title: "Academic work that translates cleanly into portfolio proof.",
    summary:
      "These courses produced the strongest evidence on the resume. Each one sharpened a different part of the engineering stack: collaboration, visualization, and applied machine learning.",
    roles: [
      {
        course: "CS 490: Guided Design in Software Engineering",
        focus: "Team-based software delivery and engineering process",
        bullets: [
          "Engineered a comprehensive software system using Agile methodologies, including Scrum, to streamline development processes.",
          "Built with modern web technologies including JavaScript, React, Node.js, and Express.js.",
          "Used Git and GitHub for version control, collaboration, and integration across the software development workflow.",
          "Produced technical documentation and design diagrams to support implementation and communication.",
        ],
      },
      {
        course: "CS 450: Data Visualization",
        focus: "Turning raw datasets into readable interfaces and insight",
        bullets: [
          "Built interactive visualizations using JavaScript and D3.js.",
          "Transformed raw datasets into meaningful visual insights with attention to clarity and usability.",
          "Focused on performance, readable design, and stronger communication through data.",
        ],
      },
      {
        course: "CS 375: Introduction to Machine Learning",
        focus: "Applied ML workflows and result analysis",
        bullets: [
          "Implemented supervised learning algorithms and evaluated model performance.",
          "Worked with real datasets for classification and prediction tasks.",
          "Analyzed outcomes using statistical reasoning and visualization techniques.",
        ],
      },
    ],
  },
  featuredProject: {
    title: "Student Reality Lab 2 is the clearest live proof of my current work.",
    summary:
      "Alongside coursework, this project shows how I package research, interface design, and full-stack implementation into a public demo that a recruiter can explore immediately.",
    tags: ["Next.js", "React", "Node.js", "Conversational analytics", "Render deployment"],
    bullets: [
      "Unifies housing and demographic sources into one chat-driven workflow.",
      "Keeps charts, answers, and tool traces attached to the question that produced them.",
      "Extends the resume with a live example of product thinking, technical implementation, and polish.",
    ],
    cta: "View Specs",
  },
  contact: {
    title: "The next step should be direct.",
    summary:
      "If the portfolio and coursework look relevant, the reviewer should be able to reach me, open the code, and inspect the live project without hunting for basic information.",
    details: [
      {
        label: "Email",
        value: "jasonmconcepcion659@gmail.com",
      },
      {
        label: "Location",
        value: "Hazlet, NJ",
      },
      {
        label: "Phone",
        value: "848-444-8555",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/jason-concepcion",
      },
    ],
    links: [
      { label: "Email Jason", href: "mailto:jasonmconcepcion659@gmail.com" },
      { label: "Open LinkedIn Profile", href: "https://www.linkedin.com/in/jason-concepcion" },
      { label: "Open GitHub Profile", href: "https://github.com/studentNJ" },
      { label: "Open Housing Analysis Studio", href: "https://student-reality-lab2-concepcion.onrender.com" },
      { label: "Open Portfolio Repository", href: "https://github.com/studentNJ/is219Final" },
      { label: "Open Project Repository", href: "https://github.com/studentNJ/student-reality-lab2-Concepcion" },
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