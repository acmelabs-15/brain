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
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/programming-advisor/references/integration-patterns.md

## Purpose — required, verbatim
> "Integration Patterns Reference" — .claude/skills/programming-advisor/references/integration-patterns.md:1 (no explicit purpose statement)

## Design intent — required
Provides detection heuristics, directory structure layouts, and concrete starter code patterns for integrating external packages and architectural patterns into user projects across JavaScript/TypeScript, Python, and Ruby. Maps lockfiles and configuration files to their corresponding package managers and frameworks, specifying standard file locations and verified starter code for validation schemas, data fetching, state management, authentication handlers, and ORM database models.

## Phase — required
rjm:spec

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill programming-advisor — .claude/skills/programming-advisor/SKILL.md:386

## Concepts named — required, verbatim
- `Package Manager Detection` — .claude/skills/programming-advisor/references/integration-patterns.md:3 — defined here
- `Framework Detection` — .claude/skills/programming-advisor/references/integration-patterns.md:20 — defined here
- `Common Integration Locations` — .claude/skills/programming-advisor/references/integration-patterns.md:49 — defined here
- `Starter Code Patterns` — .claude/skills/programming-advisor/references/integration-patterns.md:77 — defined here
- `Form Validation` — .claude/skills/programming-advisor/references/integration-patterns.md:79 — defined here
- `Data Fetching` — .claude/skills/programming-advisor/references/integration-patterns.md:122 — defined here
- `State Management` — .claude/skills/programming-advisor/references/integration-patterns.md:148 — defined here
- `Authentication` — .claude/skills/programming-advisor/references/integration-patterns.md:173 — defined here
- `Database` — .claude/skills/programming-advisor/references/integration-patterns.md:192 — defined here
- `Version Compatibility Notes` — .claude/skills/programming-advisor/references/integration-patterns.md:224 — defined here

## Structure
- `## Package Manager Detection` — .claude/skills/programming-advisor/references/integration-patterns.md:3
- `## Framework Detection` — .claude/skills/programming-advisor/references/integration-patterns.md:20
- `### JavaScript/TypeScript` — .claude/skills/programming-advisor/references/integration-patterns.md:22
- `### Python` — .claude/skills/programming-advisor/references/integration-patterns.md:34
- `### Ruby` — .claude/skills/programming-advisor/references/integration-patterns.md:42
- `## Common Integration Locations` — .claude/skills/programming-advisor/references/integration-patterns.md:49
- `### React/Next.js Projects` — .claude/skills/programming-advisor/references/integration-patterns.md:51
- `### API/Backend Projects` — .claude/skills/programming-advisor/references/integration-patterns.md:64
- `## Starter Code Patterns` — .claude/skills/programming-advisor/references/integration-patterns.md:77
- `### Form Validation (Zod + React Hook Form)` — .claude/skills/programming-advisor/references/integration-patterns.md:79
- `### Data Fetching (TanStack Query)` — .claude/skills/programming-advisor/references/integration-patterns.md:122
- `### State Management (Zustand)` — .claude/skills/programming-advisor/references/integration-patterns.md:148
- `### Authentication (NextAuth.js)` — .claude/skills/programming-advisor/references/integration-patterns.md:173
- `### Database (Prisma)` — .claude/skills/programming-advisor/references/integration-patterns.md:192
- `## Version Compatibility Notes` — .claude/skills/programming-advisor/references/integration-patterns.md:224

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Supplies automated or human agents with exact directory layout templates for React/Next.js (`src/components`, `src/hooks`, `src/lib`, `src/services`, `src/schemas`) and API/backend projects (`src/controllers`, `src/services`, `src/models`, `src/middleware`).
- Features a concise version compatibility table warning about major breaking shifts (e.g. React Query v5 vs v4, Next.js 14 App Router, Prisma 5 Rust engine, TypeScript 5 requirement for tRPC v11).

## Context cost
6330 bytes (~1580 tokens). Loads no external files.
