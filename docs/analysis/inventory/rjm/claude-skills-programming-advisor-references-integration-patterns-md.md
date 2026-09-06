---
package: rjm
path: .claude/skills/programming-advisor/references/integration-patterns.md
type: reference
bytes: 6330
unit: inv-rjm-138
in_scope_via: .claude/skills/programming-advisor/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/integration-patterns.md, sha256: d72997e89254016a87b70f528048433e30c877de4c478453118bb91f5743a667}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/programming-advisor/references/integration-patterns.md

## Purpose — required, verbatim
> "Integration Patterns Reference" — .claude/skills/programming-advisor/references/integration-patterns.md:1

## Design intent — required
Enables an AI coding agent to inspect an existing codebase, correctly detect its package manager (npm, yarn, pnpm, bun, pip, poetry, uv, pipenv, cargo, go, bundler, composer) and framework (Next.js, Nuxt, Vite+React, Angular, SvelteKit, Remix, Astro, Django, Flask, FastAPI, Rails, Sinatra), locate appropriate file placement directories (`src/components/`, `src/services/`, etc.), provide ready-to-run installation commands, and output syntactically valid starter integration code (e.g. Zod + React Hook Form, TanStack Query, Zustand, NextAuth, Prisma).

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/integration-patterns.md — .claude/skills/programming-advisor/SKILL.md:386

## Concepts named — required, verbatim
- `Integration Patterns Reference` — .claude/skills/programming-advisor/references/integration-patterns.md:1 — defined here
- `Package Manager Detection` — .claude/skills/programming-advisor/references/integration-patterns.md:3 — defined here
- `Framework Detection` — .claude/skills/programming-advisor/references/integration-patterns.md:20 — defined here
- `JavaScript/TypeScript` — .claude/skills/programming-advisor/references/integration-patterns.md:22 — defined here
- `Python` — .claude/skills/programming-advisor/references/integration-patterns.md:34 — defined here
- `Ruby` — .claude/skills/programming-advisor/references/integration-patterns.md:42 — defined here
- `Common Integration Locations` — .claude/skills/programming-advisor/references/integration-patterns.md:49 — defined here
- `React/Next.js Projects` — .claude/skills/programming-advisor/references/integration-patterns.md:51 — defined here
- `API/Backend Projects` — .claude/skills/programming-advisor/references/integration-patterns.md:64 — defined here
- `Starter Code Patterns` — .claude/skills/programming-advisor/references/integration-patterns.md:77 — defined here
- `Form Validation (Zod + React Hook Form)` — .claude/skills/programming-advisor/references/integration-patterns.md:79 — defined here
- `Data Fetching (TanStack Query)` — .claude/skills/programming-advisor/references/integration-patterns.md:122 — defined here
- `State Management (Zustand)` — .claude/skills/programming-advisor/references/integration-patterns.md:148 — defined here
- `Authentication (NextAuth.js)` — .claude/skills/programming-advisor/references/integration-patterns.md:173 — defined here
- `Database (Prisma)` — .claude/skills/programming-advisor/references/integration-patterns.md:192 — defined here
- `Version Compatibility Notes` — .claude/skills/programming-advisor/references/integration-patterns.md:224 — defined here

## Structure
# Integration Patterns Reference — .claude/skills/programming-advisor/references/integration-patterns.md:1
## Package Manager Detection — .claude/skills/programming-advisor/references/integration-patterns.md:3
## Framework Detection — .claude/skills/programming-advisor/references/integration-patterns.md:20
### JavaScript/TypeScript — .claude/skills/programming-advisor/references/integration-patterns.md:22
### Python — .claude/skills/programming-advisor/references/integration-patterns.md:34
### Ruby — .claude/skills/programming-advisor/references/integration-patterns.md:42
## Common Integration Locations — .claude/skills/programming-advisor/references/integration-patterns.md:49
### React/Next.js Projects — .claude/skills/programming-advisor/references/integration-patterns.md:51
### API/Backend Projects — .claude/skills/programming-advisor/references/integration-patterns.md:64
## Starter Code Patterns — .claude/skills/programming-advisor/references/integration-patterns.md:77
### Form Validation (Zod + React Hook Form) — .claude/skills/programming-advisor/references/integration-patterns.md:79
### Data Fetching (TanStack Query) — .claude/skills/programming-advisor/references/integration-patterns.md:122
### State Management (Zustand) — .claude/skills/programming-advisor/references/integration-patterns.md:148
### Authentication (NextAuth.js) — .claude/skills/programming-advisor/references/integration-patterns.md:173
### Database (Prisma) — .claude/skills/programming-advisor/references/integration-patterns.md:192
## Version Compatibility Notes — .claude/skills/programming-advisor/references/integration-patterns.md:224

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides concrete templates for integration planning, directly utilized by Step 8 of `programming-advisor/SKILL.md`. Includes package manager detection heuristics covering 12 ecosystems and lockfiles (including bun, uv, poetry, cargo).

## Context cost
6330 bytes, approximately 1580 tokens.
