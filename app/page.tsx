import Image from "next/image";
import { SectionNav } from "@/components/section-nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { SpecsModal } from "@/components/specs-modal";
import { TapAdvance } from "@/components/tap-advance";
import resumePreview from "@/image.png";
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
          <section className="hero-panel" data-in-view="true" id="intro">
            <div className="hero-layout">
              <div className="hero-main">
                <div className="hero-copy">
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
                </div>
              </div>
              <aside className="hero-aside" aria-label="Resume preview panel">
                <p className="hero-aside-label">Resume Preview</p>
                <figure className="hero-media">
                  <Image
                    alt="Resume preview for Jason Manuel Concepcion"
                    className="hero-image"
                    placeholder="blur"
                    priority
                    src={resumePreview}
                  />
                </figure>
              </aside>
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

          <section className="story-section" id="education">
            <div className="section-heading">
              <span>01</span>
              <div>
                <p>Education</p>
                <h2>{siteContent.education.title}</h2>
              </div>
            </div>
            <div className="feature-layout">
              <div className="story-copy">
                <p>{siteContent.education.summary}</p>
                <div className="story-actions">
                  <div className="project-panels project-bullets">
                    <article>
                      <span>School</span>
                      <h3>{siteContent.education.school}</h3>
                      <p>{siteContent.education.degree}</p>
                    </article>
                    <article>
                      <span>Timeline</span>
                      <h3>{siteContent.education.graduation}</h3>
                      <p>Based in Hazlet, New Jersey and actively building portfolio-ready coursework.</p>
                    </article>
                  </div>
                </div>
              </div>
              <div className="project-panels">
                {siteContent.education.courses.map((course) => (
                  <article key={course}>
                    <p>{course}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="story-section" id="skills">
            <div className="section-heading">
              <span>02</span>
              <div>
                <p>Technical Skills</p>
                <h2>{siteContent.skills.title}</h2>
              </div>
            </div>
            <div className="story-copy section-intro">
              <p>{siteContent.skills.summary}</p>
            </div>
            <div className="project-panels skills-grid">
              {siteContent.skills.groups.map((group) => (
                <article key={group.title}>
                  <span>{group.title}</span>
                  <h3>{group.title}</h3>
                  <div className="pill-row">
                    {group.items.map((item) => (
                      <span className="outline-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="story-section" id="experience">
            <div className="section-heading">
              <span>03</span>
              <div>
                <p>Academic Experience</p>
                <h2>{siteContent.experience.title}</h2>
              </div>
            </div>
            <div className="story-copy section-intro">
              <p>{siteContent.experience.summary}</p>
            </div>
            <div className="experience-stack">
              {siteContent.experience.roles.map((role) => (
                <article key={role.course} className="experience-card">
                  <div className="section-heading compact-heading">
                    <span>{role.course.split(":")[0].replace("CS ", "")}</span>
                    <div>
                      <p>{role.focus}</p>
                      <h3>{role.course}</h3>
                    </div>
                  </div>
                  <div className="project-panels project-bullets">
                    {role.bullets.map((bullet) => (
                      <article key={bullet}>
                        <p>{bullet}</p>
                      </article>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="story-section feature-section" id="project">
            <div className="section-heading">
              <span>04</span>
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

          <section className="story-section closing-section" id="contact">
            <div className="section-heading">
              <span>05</span>
              <div>
                <p>Next Step</p>
                <h2>{siteContent.contact.title}</h2>
              </div>
            </div>
            <div className="split-section">
              <div className="story-copy">
                <p>{siteContent.contact.summary}</p>
                <div className="project-panels contact-details-grid">
                  {siteContent.contact.details.map((detail) => (
                    <article key={detail.label}>
                      <span>{detail.label}</span>
                      <h3>{detail.value}</h3>
                    </article>
                  ))}
                </div>
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