"use client";

import { useEffect, useId, useState } from "react";

type SpecsContent = {
  eyebrow: string;
  title: string;
  summary: string;
  groups: readonly {
    title: string;
    items: readonly string[];
  }[];
  links: readonly {
    label: string;
    href: string;
  }[];
};

export function SpecsModal({
  content,
  title,
  triggerLabel,
}: {
  content: SpecsContent;
  title: string;
  triggerLabel: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button className="outline-button" type="button" onClick={() => setIsOpen(true)}>
        {triggerLabel}
      </button>
      {isOpen ? (
        <div className="modal-root" role="presentation" onClick={() => setIsOpen(false)}>
          <div
            aria-labelledby={titleId}
            aria-modal="true"
            className="modal-card"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <p className="modal-eyebrow">{content.eyebrow}</p>
                <h2 id={titleId}>{title}</h2>
              </div>
              <button aria-label="Close specs" className="modal-close" type="button" onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
            <p className="modal-summary">{content.summary}</p>
            <div className="modal-grid">
              {content.groups.map((group) => (
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
            <div className="modal-links">
              {content.links.map((link) => (
                <a key={link.label} className="pill" href={link.href} rel="noreferrer" target="_blank">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
