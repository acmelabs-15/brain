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
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/programming-advisor/references/common-solutions.md

## Purpose — required, verbatim
> "Common Solutions - Don't Reinvent These" — .claude/skills/programming-advisor/references/common-solutions.md:1

## Design intent — required
Catalogs mature, battle-tested open source libraries, frameworks, and commercial services across 11 common functional domains (auth, data handling, UI, backend infra, API/networking, CLI, testing, PDFs, email, payments, AI/ML, devops). It equips agents with instant alternatives to custom implementation and articulates the specific engineering hazards (security vulnerabilities, edge cases, timezone traps, distributed state, regulatory compliance) that make building from scratch economically and technically unfavorable.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/common-solutions.md — .claude/skills/programming-advisor/SKILL.md:384

## Concepts named — required, verbatim
- `Authentication & Authorization` — .claude/skills/programming-advisor/references/common-solutions.md:3 — defined here
- `User auth` — .claude/skills/programming-advisor/references/common-solutions.md:7 — defined here
- `API auth` — .claude/skills/programming-advisor/references/common-solutions.md:8 — defined here
- `RBAC/Permissions` — .claude/skills/programming-advisor/references/common-solutions.md:9 — defined here
- `Data Handling` — .claude/skills/programming-advisor/references/common-solutions.md:11 — defined here
- `Form validation` — .claude/skills/programming-advisor/references/common-solutions.md:15 — defined here
- `Date/time` — .claude/skills/programming-advisor/references/common-solutions.md:16 — defined here
- `State management` — .claude/skills/programming-advisor/references/common-solutions.md:17 — defined here
- `Data fetching` — .claude/skills/programming-advisor/references/common-solutions.md:18 — defined here
- `UI Components` — .claude/skills/programming-advisor/references/common-solutions.md:20 — defined here
- `Component library` — .claude/skills/programming-advisor/references/common-solutions.md:24 — defined here
- `Data tables` — .claude/skills/programming-advisor/references/common-solutions.md:25 — defined here
- `Forms` — .claude/skills/programming-advisor/references/common-solutions.md:26 — defined here
- `Charts` — .claude/skills/programming-advisor/references/common-solutions.md:27 — defined here
- `Rich text editor` — .claude/skills/programming-advisor/references/common-solutions.md:28 — defined here
- `Backend Infrastructure` — .claude/skills/programming-advisor/references/common-solutions.md:30 — defined here
- `ORM/Database` — .claude/skills/programming-advisor/references/common-solutions.md:34 — defined here
- `Job queues` — .claude/skills/programming-advisor/references/common-solutions.md:35 — defined here
- `Caching` — .claude/skills/programming-advisor/references/common-solutions.md:36 — defined here
- `Rate limiting` — .claude/skills/programming-advisor/references/common-solutions.md:37 — defined here
- `File uploads` — .claude/skills/programming-advisor/references/common-solutions.md:38 — defined here
- `API & Networking` — .claude/skills/programming-advisor/references/common-solutions.md:40 — defined here
- `HTTP client` — .claude/skills/programming-advisor/references/common-solutions.md:44 — defined here
- `WebSocket` — .claude/skills/programming-advisor/references/common-solutions.md:45 — defined here
- `API framework` — .claude/skills/programming-advisor/references/common-solutions.md:46 — defined here
- `GraphQL` — .claude/skills/programming-advisor/references/common-solutions.md:47 — defined here
- `tRPC` — .claude/skills/programming-advisor/references/common-solutions.md:48 — defined here
- `CLI & DevTools` — .claude/skills/programming-advisor/references/common-solutions.md:50 — defined here
- `CLI framework` — .claude/skills/programming-advisor/references/common-solutions.md:54 — defined here
- `Logging` — .claude/skills/programming-advisor/references/common-solutions.md:55 — defined here
- `Config mgmt` — .claude/skills/programming-advisor/references/common-solutions.md:56 — defined here
- `Process mgmt` — .claude/skills/programming-advisor/references/common-solutions.md:57 — defined here
- `Testing` — .claude/skills/programming-advisor/references/common-solutions.md:59 — defined here
- `Unit testing` — .claude/skills/programming-advisor/references/common-solutions.md:63 — defined here
- `E2E testing` — .claude/skills/programming-advisor/references/common-solutions.md:64 — defined here
- `API testing` — .claude/skills/programming-advisor/references/common-solutions.md:65 — defined here
- `Load testing` — .claude/skills/programming-advisor/references/common-solutions.md:66 — defined here
- `PDF & Documents` — .claude/skills/programming-advisor/references/common-solutions.md:68 — defined here
- `PDF creation` — .claude/skills/programming-advisor/references/common-solutions.md:72 — defined here
- `PDF parsing` — .claude/skills/programming-advisor/references/common-solutions.md:73 — defined here
- `Excel/CSV` — .claude/skills/programming-advisor/references/common-solutions.md:74 — defined here
- `Word docs` — .claude/skills/programming-advisor/references/common-solutions.md:75 — defined here
- `Email & Notifications` — .claude/skills/programming-advisor/references/common-solutions.md:77 — defined here
- `Email sending` — .claude/skills/programming-advisor/references/common-solutions.md:81 — defined here
- `Email templates` — .claude/skills/programming-advisor/references/common-solutions.md:82 — defined here
- `Push notifications` — .claude/skills/programming-advisor/references/common-solutions.md:83 — defined here
- `Payments & Commerce` — .claude/skills/programming-advisor/references/common-solutions.md:85 — defined here
- `Payments` — .claude/skills/programming-advisor/references/common-solutions.md:89 — defined here
- `Subscriptions` — .claude/skills/programming-advisor/references/common-solutions.md:90 — defined here
- `Tax calculation` — .claude/skills/programming-advisor/references/common-solutions.md:91 — defined here
- `AI & ML` — .claude/skills/programming-advisor/references/common-solutions.md:93 — defined here
- `LLM integration` — .claude/skills/programming-advisor/references/common-solutions.md:97 — defined here
- `Vector DB` — .claude/skills/programming-advisor/references/common-solutions.md:98 — defined here
- `Embeddings` — .claude/skills/programming-advisor/references/common-solutions.md:99 — defined here
- `DevOps & Deployment` — .claude/skills/programming-advisor/references/common-solutions.md:101 — defined here
- `Container orchestration` — .claude/skills/programming-advisor/references/common-solutions.md:105 — defined here
- `CI/CD` — .claude/skills/programming-advisor/references/common-solutions.md:106 — defined here
- `Infrastructure` — .claude/skills/programming-advisor/references/common-solutions.md:107 — defined here
- `Monitoring` — .claude/skills/programming-advisor/references/common-solutions.md:108 — defined here
- `Search Queries to Find More` — .claude/skills/programming-advisor/references/common-solutions.md:110 — defined here

## Structure
# Common Solutions - Don't Reinvent These — .claude/skills/programming-advisor/references/common-solutions.md:1
## Authentication & Authorization — .claude/skills/programming-advisor/references/common-solutions.md:3
## Data Handling — .claude/skills/programming-advisor/references/common-solutions.md:11
## UI Components — .claude/skills/programming-advisor/references/common-solutions.md:20
## Backend Infrastructure — .claude/skills/programming-advisor/references/common-solutions.md:30
## API & Networking — .claude/skills/programming-advisor/references/common-solutions.md:40
## CLI & DevTools — .claude/skills/programming-advisor/references/common-solutions.md:50
## Testing — .claude/skills/programming-advisor/references/common-solutions.md:59
## PDF & Documents — .claude/skills/programming-advisor/references/common-solutions.md:68
## Email & Notifications — .claude/skills/programming-advisor/references/common-solutions.md:77
## Payments & Commerce — .claude/skills/programming-advisor/references/common-solutions.md:85
## AI & ML — .claude/skills/programming-advisor/references/common-solutions.md:93
## DevOps & Deployment — .claude/skills/programming-advisor/references/common-solutions.md:101
## Search Queries to Find More — .claude/skills/programming-advisor/references/common-solutions.md:110

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
A cheat sheet mapping typical software development requirements to standard ecosystem solutions, explicitly focusing on the TypeScript/JavaScript, Python, and Rust ecosystems. Includes search query templates for discovering additional packages via GitHub Awesome lists and package registry searches.

## Context cost
5290 bytes, approximately 1320 tokens.
