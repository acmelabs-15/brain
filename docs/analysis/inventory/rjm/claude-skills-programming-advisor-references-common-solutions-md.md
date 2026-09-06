---
package: rjm
path: .claude/skills/programming-advisor/references/common-solutions.md
type: reference
bytes: 5290
unit: inv-rjm-138
in_scope_via: .claude/skills/programming-advisor/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/common-solutions.md, sha256: 3577dd2865763e902d1d075f8e753a02cb50cca084f394adc473b139343bb0fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/programming-advisor/references/common-solutions.md

## Purpose — required, verbatim
> "Common Solutions - Don't Reinvent These" — .claude/skills/programming-advisor/references/common-solutions.md:1 (no explicit purpose statement)

## Design intent — required
Comprehensive catalog of standard software engineering problem spaces and established open-source libraries, SaaS solutions, and frameworks across 12 technical categories (auth, data handling, UI, backend infra, API, CLI, testing, documents, email, payments, AI/ML, DevOps). Explains the technical, security, and operational pitfalls ("Why Not to Build") of building custom solutions, pointing engineers and agents toward proven alternatives before custom development is attempted.

## Phase — required
rjm:spec

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill programming-advisor — .claude/skills/programming-advisor/SKILL.md:384

## Concepts named — required, verbatim
- `Authentication & Authorization` — .claude/skills/programming-advisor/references/common-solutions.md:3 — defined here
- `Data Handling` — .claude/skills/programming-advisor/references/common-solutions.md:11 — defined here
- `UI Components` — .claude/skills/programming-advisor/references/common-solutions.md:20 — defined here
- `Backend Infrastructure` — .claude/skills/programming-advisor/references/common-solutions.md:30 — defined here
- `API & Networking` — .claude/skills/programming-advisor/references/common-solutions.md:40 — defined here
- `CLI & DevTools` — .claude/skills/programming-advisor/references/common-solutions.md:50 — defined here
- `Testing` — .claude/skills/programming-advisor/references/common-solutions.md:59 — defined here
- `PDF & Documents` — .claude/skills/programming-advisor/references/common-solutions.md:68 — defined here
- `Email & Notifications` — .claude/skills/programming-advisor/references/common-solutions.md:77 — defined here
- `Payments & Commerce` — .claude/skills/programming-advisor/references/common-solutions.md:85 — defined here
- `AI & ML` — .claude/skills/programming-advisor/references/common-solutions.md:93 — defined here
- `DevOps & Deployment` — .claude/skills/programming-advisor/references/common-solutions.md:101 — defined here
- `Search Queries to Find More` — .claude/skills/programming-advisor/references/common-solutions.md:110 — defined here

## Structure
- `## Authentication & Authorization` — .claude/skills/programming-advisor/references/common-solutions.md:3
- `## Data Handling` — .claude/skills/programming-advisor/references/common-solutions.md:11
- `## UI Components` — .claude/skills/programming-advisor/references/common-solutions.md:20
- `## Backend Infrastructure` — .claude/skills/programming-advisor/references/common-solutions.md:30
- `## API & Networking` — .claude/skills/programming-advisor/references/common-solutions.md:40
- `## CLI & DevTools` — .claude/skills/programming-advisor/references/common-solutions.md:50
- `## Testing` — .claude/skills/programming-advisor/references/common-solutions.md:59
- `## PDF & Documents` — .claude/skills/programming-advisor/references/common-solutions.md:68
- `## Email & Notifications` — .claude/skills/programming-advisor/references/common-solutions.md:77
- `## Payments & Commerce` — .claude/skills/programming-advisor/references/common-solutions.md:85
- `## AI & ML` — .claude/skills/programming-advisor/references/common-solutions.md:93
- `## DevOps & Deployment` — .claude/skills/programming-advisor/references/common-solutions.md:101
- `## Search Queries to Find More` — .claude/skills/programming-advisor/references/common-solutions.md:110

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Organizes 12 core domains into clear problem/solution/rationale tables highlighting specific operational failure modes of DIY code (e.g., timezone bugs in date handling, accessibility failure in custom UI, distributed systems race conditions in custom rate limiters, PCI compliance burdens in payments).
- Provides standardized search query templates for package registries (npm, pip, crates) and GitHub awesome-lists to aid automated or human discovery.

## Context cost
5290 bytes (~1320 tokens). Loads no external files.
