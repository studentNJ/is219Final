# IS219 Final Portfolio Repository

This repository is the working space for my IS219 final professional portfolio. It combines planning materials for the final presentation with the main technical project that supports my target direction as an AI engineer and full-stack problem solver.

## Professional Direction

This portfolio is positioned around an AI Engineer identity focused on full-stack infrastructure, intelligent data orchestration, and practical use of generative AI in a serious development workflow.

Core signal for the project:

- AI engineer / technical problem solver
- Audience: technical recruiters and engineering managers
- Focus: scalable, data-driven, user-facing software
- Workflow: AI-assisted research, refactoring, debugging, and documentation with human review and correction

## Featured Technical Project

The main implementation in this repository is **Student Reality Lab v2**, a chat-first housing affordability application built as a monorepo.

It is designed to demonstrate:

- API orchestration across housing and census-style data sources
- data normalization and affordability analysis
- a user-facing chat interface built with Next.js
- shared schemas and domain logic across packages
- local persistence for conversation history
- AI-supported planning and orchestration patterns

The application supports prompts for metro comparisons, affordability calculations, trend summaries, live housing lookups, and chart-oriented responses.

## Repository Structure

```text
.
├── references/
│   └── planning/
│       ├── initialPlan.md
│       └── metrics.md
└── student-reality-lab2-Concepcion/
    ├── apps/
    ├── packages/
    ├── tests/
    ├── scripts/
    └── README.md
```

## What Is In This Repo

### `references/`

Planning materials for the final portfolio submission, including:

- initial positioning and project framing
- assignment requirements and evaluation criteria
- presentation context for the final review

### `student-reality-lab2-Concepcion/`

The active project monorepo containing:

- `apps/web`: Next.js web application
- `packages/domain`: affordability and metro data logic
- `packages/shared`: shared schemas and utilities
- `packages/mcp-server`: tool implementations
- `packages/db`: Prisma and SQLite persistence
- `tests`: domain, shared, server, web, and e2e coverage

## Why This Project Fits The Portfolio

This repository is intended to show evidence of the criteria described in the planning documents:

- a clear future-facing technical identity
- believable work aligned to AI engineering and applied software development
- intentional use of AI as part of a professional workflow
- project proof that goes beyond visuals and includes architecture, logic, and data handling
- an implementation that can be run, tested, and discussed during presentation

## Local Development

The main application lives in `student-reality-lab2-Concepcion/`.

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
cd student-reality-lab2-Concepcion
npm install
```

### Database Setup

```bash
npm run db:generate
npm run db:push
```

### Run The App

```bash
npm run dev
```

Then open `http://localhost:3000`.

### Useful Commands

```bash
npm run typecheck
npm run test
npm run test:web
npm run test:e2e
```

## Environment Notes

The application can use environment variables such as:

- `DATABASE_URL`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- `HUD_API_KEY`
- `CENSUS_API_KEY`

If no OpenAI API key is configured, the app still supports its fallback rule-based planning path for covered prompt types.

## Portfolio Submission Notes

Before final submission, this README should point reviewers to:

- Hosted portfolio URL: add deployed site link here
- GitHub profile or repository link: add public GitHub link here
- LinkedIn profile: add updated LinkedIn link here

These links should remain easy to find so the repository supports the final presentation and grading requirements.

## Presentation Focus

For the final presentation, this repository supports discussion of:

- the professional direction being pursued
- the research and planning behind the portfolio
- how AI was used intentionally during development
- the architecture and implementation choices in Student Reality Lab v2
- how the work was revised into a more credible professional portfolio project