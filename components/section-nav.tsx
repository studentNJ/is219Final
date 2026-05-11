"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
};

export function SectionNav({ sections }: { sections: readonly Section[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "intro");

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.setAttribute("data-in-view", entry.isIntersecting ? "true" : "false");
        });

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => {
      sectionElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [sections]);

  return (
    <aside className="side-nav" aria-label="Section navigation">
      <p>Portfolio Narrative</p>
      <h2>Single-page scrollytelling structure</h2>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a className={activeId === section.id ? "active" : ""} href={`#${section.id}`}>
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}