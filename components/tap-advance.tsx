"use client";

import { useEffect } from "react";

const MOBILE_BREAKPOINT = 720;

export function TapAdvance({ sectionIds }: { sectionIds: readonly string[] }) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        return;
      }

      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      if (target.closest("a, button, input, textarea, select, [role='dialog']")) {
        return;
      }

      if (event.clientY < window.innerHeight * (2 / 3)) {
        return;
      }

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

      if (sections.length === 0) {
        return;
      }

      const currentIndex = sections.reduce((bestIndex, section, index) => {
        const bestDistance = Math.abs(sections[bestIndex].getBoundingClientRect().top);
        const nextDistance = Math.abs(section.getBoundingClientRect().top);

        return nextDistance < bestDistance ? index : bestIndex;
      }, 0);

      const nextSection = sections[currentIndex + 1];
      if (!nextSection) {
        return;
      }

      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [sectionIds]);

  return null;
}
