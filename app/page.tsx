import { SectionNav } from "@/components/section-nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { SpecsModal } from "@/components/specs-modal";
import { TapAdvance } from "@/components/tap-advance";
import { siteContent } from "@/lib/site-content";

function LinkPill({
  label,
  href,
  variant = "secondary",
}: {
  label: string;
  href?: string | null;
  variant?: "primary" | "secondary";
}) {
  if (!href) {
    return <span className="pill pill-secondary pill-muted">{label}</span>;
  }

  return (
    <a className={`pill pill-${variant}`} href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

export default function HomePage() {
  return (
    <main>
      <ScrollProgress />
      <TapAdvance sectionIds={siteContent.sections.map((section) => section.id)} />
      <div className="page-shell">
        <SectionNav sections={siteContent.sections} />
        <div className="story-column">
          <section className="hero-panel" id="intro">
            <div className="eyebrow">{siteContent.hero.eyebrow}</div>
            <p className="hero-kicker">{siteContent.hero.kicker}</p>
            <h1>{siteContent.hero.title}</h1>
            <p className="hero-summary">{siteContent.hero.summary}</p>
            <div className="hero-actions">
              {siteContent.hero.links.map((link, index) => (
                <LinkPill
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  variant={index === 0 ? "primary" : "secondary"}
                />
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

          <section className="story-section feature-section" id="project">
            <div className="section-heading">
              <span>01</span>
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
                <div className="story-actions">
                  <SpecsModal
                    title={siteContent.specs.title}
                    triggerLabel={siteContent.featuredProject.cta}
                    content={siteContent.specs}
                  />
                </div>
              </div>
              <div className="project-panels project-bullets">
                {siteContent.featuredProject.bullets.map((bullet) => (
                  <article key={bullet}>
                    <p>{bullet}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="story-section architecture-section" id="proof">
            <div className="section-heading">
              <span>02</span>
              <div>
                <p>Build Method</p>
                <h2>{siteContent.proof.title}</h2>
              </div>
            </div>
            <div className="story-copy section-intro">
              <p>{siteContent.proof.summary}</p>
            </div>
            <div className="architecture-grid">
              {siteContent.proof.panels.map((panel) => (
                <article key={panel.title}>
                  <div className="stage-index">{panel.step}</div>
                  <h3>{panel.title}</h3>
                  <p>{panel.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="story-section closing-section" id="contact">
            <div className="section-heading">
              <span>03</span>
              <div>
                <p>Next Step</p>
                <h2>{siteContent.contact.title}</h2>
              </div>
            </div>
            <div className="split-section">
              <div className="story-copy">
                <p>{siteContent.contact.summary}</p>
                <div className="story-actions">
                  <SpecsModal
                    title={siteContent.specs.title}
                    triggerLabel="Review Technical Specs"
                    content={siteContent.specs}
                  />
                </div>
              </div>
              <div className="contact-stack">
                {siteContent.contact.links.map((link, index) => (
                  <LinkPill
                    key={link.label}
                    href={link.href}
                    label={link.label}
                    variant={index === 0 ? "primary" : "secondary"}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}