import { SectionNav } from "@/components/section-nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { siteContent } from "@/lib/site-content";

function LinkPill({ label, href }: { label: string; href?: string | null }) {
  if (!href) {
    return <span className="pill pill-muted">{label}</span>;
  }

  return (
    <a className="pill" href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

export default function HomePage() {
  return (
    <main>
      <ScrollProgress />
      <div className="page-shell">
        <SectionNav sections={siteContent.sections} />
        <div className="story-column">
          <section className="hero-panel" id="intro">
            <div className="eyebrow">{siteContent.hero.eyebrow}</div>
            <p className="hero-kicker">{siteContent.hero.kicker}</p>
            <h1>{siteContent.hero.title}</h1>
            <p className="hero-summary">{siteContent.hero.summary}</p>
            <div className="hero-actions">
              {siteContent.hero.links.map((link) => (
                <LinkPill key={link.label} href={link.href} label={link.label} />
              ))}
            </div>
            <div className="hero-grid">
              <article>
                <span>Audience</span>
                <strong>{siteContent.hero.audience}</strong>
              </article>
              <article>
                <span>Focus</span>
                <strong>{siteContent.hero.focus}</strong>
              </article>
              <article>
                <span>Delivery</span>
                <strong>{siteContent.hero.delivery}</strong>
              </article>
            </div>
          </section>

          <section className="story-section" id="direction">
            <div className="section-heading">
              <span>01</span>
              <div>
                <p>Professional Direction</p>
                <h2>{siteContent.direction.title}</h2>
              </div>
            </div>
            <div className="story-copy">
              <p>{siteContent.direction.summary}</p>
              <div className="signal-list">
                {siteContent.direction.signals.map((signal) => (
                  <article key={signal.label}>
                    <span>{signal.label}</span>
                    <strong>{signal.value}</strong>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="story-section feature-section" id="lab">
            <div className="section-heading">
              <span>02</span>
              <div>
                <p>Featured Project</p>
                <h2>{siteContent.featuredProject.title}</h2>
              </div>
            </div>
            <div className="feature-layout">
              <div className="story-copy">
                <p>{siteContent.featuredProject.summary}</p>
                <div className="pill-row">
                  {siteContent.featuredProject.tags.map((tag) => (
                    <span className="outline-pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-panels">
                {siteContent.featuredProject.panels.map((panel) => (
                  <article key={panel.title}>
                    <span>{panel.step}</span>
                    <h3>{panel.title}</h3>
                    <p>{panel.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="story-section architecture-section" id="architecture">
            <div className="section-heading">
              <span>03</span>
              <div>
                <p>Architecture Reveal</p>
                <h2>{siteContent.architecture.title}</h2>
              </div>
            </div>
            <div className="architecture-grid">
              {siteContent.architecture.stages.map((stage) => (
                <article key={stage.name}>
                  <div className="stage-index">{stage.index}</div>
                  <h3>{stage.name}</h3>
                  <p>{stage.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="story-section" id="workflow">
            <div className="section-heading">
              <span>04</span>
              <div>
                <p>AI Workflow</p>
                <h2>{siteContent.workflow.title}</h2>
              </div>
            </div>
            <div className="workflow-grid">
              {siteContent.workflow.steps.map((step) => (
                <article key={step.title}>
                  <span>{step.phase}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="story-section" id="skills">
            <div className="section-heading">
              <span>05</span>
              <div>
                <p>Skills By Workflow</p>
                <h2>{siteContent.skills.title}</h2>
              </div>
            </div>
            <div className="skills-grid">
              {siteContent.skills.groups.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="story-section closing-section" id="contact">
            <div className="section-heading">
              <span>06</span>
              <div>
                <p>Proof And Visibility</p>
                <h2>{siteContent.contact.title}</h2>
              </div>
            </div>
            <div className="split-section">
              <div className="story-copy">
                <p>{siteContent.contact.summary}</p>
              </div>
              <div className="contact-stack">
                {siteContent.contact.links.map((link) => (
                  <LinkPill key={link.label} href={link.href} label={link.label} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}