# IS219 Final Portfolio

This repository contains a single-page professional portfolio built for the IS219 final project. The site presents an AI Engineer / Technical Problem Solver direction through a structured scrollytelling homepage built with Next.js.

Live portfolio website: https://is219final.onrender.com

The current implementation is a focused Next.js application, not a monorepo. It combines portfolio messaging, project framing, and presentation-ready sections in one site.

## Overview

The homepage is organized as a guided narrative for technical recruiters and engineering managers:

- signal the professional direction
- frame the featured project
- explain the architecture story
- show how AI fits into the workflow
- group skills by delivery workflow
- surface proof and contact links clearly

Most of the page copy lives in a single content file so the site can be revised quickly before final submission.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- CSS via `app/globals.css`

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── scroll-progress.tsx
│   └── section-nav.tsx
├── documentation/
│   ├── initialPlan.md
│   └── metrics.md
├── lib/
│   └── site-content.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Key Files

### `app/page.tsx`

Renders the full homepage, including the hero, narrative sections, and reusable link pills.

### `lib/site-content.ts`

Stores the portfolio copy and section data in a single object. If you need to change section labels, hero text, skills, or placeholder links, this is the main file to edit.

### `components/section-nav.tsx`

Provides the sticky section navigation and updates the active state based on scroll position.

### `components/scroll-progress.tsx`

Renders the progress bar at the top of the page based on scroll depth.

### `documentation/`

Contains planning and assignment-reference material used to shape the final portfolio:

- `initialPlan.md`: project direction, audience, and presentation framing
- `metrics.md`: assignment requirements and course guidance

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Create a production build

```bash
npm run build
```

### Run the production server

```bash
npm run start
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
```

## Content And Revision Notes

Current public links:

- Live portfolio: https://is219final.onrender.com
- Live project: https://student-reality-lab2-concepcion.onrender.com
- Portfolio repository: https://github.com/studentNJ/is219Final
- Project repository: https://github.com/studentNJ/student-reality-lab2-Concepcion
- LinkedIn: https://www.linkedin.com/in/jason-concepcion/

## Deployment Notes

This repo is ready for standard Next.js deployment targets such as Vercel or Render. No custom environment variables are required by the current codebase.

Before final submission, verify that:

- the public portfolio URL is live: https://is219final.onrender.com
- GitHub and LinkedIn links are real and visible on the page
- final copy matches the presentation narrative
- the featured project framing still aligns with the assignment goals

## Purpose Of This Repository

This repository supports the final IS219 presentation by packaging three things together:

- the built portfolio site
- the written planning materials behind it
- the technical framing for an AI-engineer-focused professional identity