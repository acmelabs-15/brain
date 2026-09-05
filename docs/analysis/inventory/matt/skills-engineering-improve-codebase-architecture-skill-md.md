---
package: matt
path: skills/engineering/improve-codebase-architecture/SKILL.md
type: skill
bytes: 5993
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/improve-codebase-architecture/SKILL.md

## Purpose — required, verbatim
> "Surface architectural friction and propose **deepening opportunities**: refactors that turn shallow modules into deep ones. The aim is testability and AI-navigability." — skills/engineering/improve-codebase-architecture/SKILL.md:9

## Design intent — required
Provides an exploratory workflow to discover and sharpen architectural refactor opportunities across an existing codebase. Employs a YAGNI git history filter to bias exploration toward active change hotspots, spawns subagents to detect shallow modules and cross-seam leakage using the deletion test, visualizes candidates via a self-contained HTML report with side-by-side diagrams in the temp directory, and initiates an interactive grilling loop to resolve candidate designs, update `CONTEXT.md`, record ADRs, and explore alternatives via `codebase-design`.

## Phase — required
cross-phase

## Inputs — required
Codebase files, git commit history (`git log --oneline` — skills/engineering/improve-codebase-architecture/SKILL.md:23), project domain glossary (`CONTEXT.md` — skills/engineering/improve-codebase-architecture/SKILL.md:14), and architectural decision records (`docs/adr/` — skills/engineering/improve-codebase-architecture/SKILL.md:14).

## Outputs — required
Self-contained HTML report in OS temp directory (`<tmpdir>/architecture-review-<timestamp>.html` — skills/engineering/improve-codebase-architecture/SKILL.md:39), updates to `CONTEXT.md` (skills/engineering/improve-codebase-architecture/SKILL.md:68), and ADR files in `docs/adr/` (skills/engineering/improve-codebase-architecture/SKILL.md:70).

## Invokes — required
- skill codebase-design — skills/engineering/improve-codebase-architecture/SKILL.md:13
- doc HTML-REPORT.md — skills/engineering/improve-codebase-architecture/SKILL.md:58
- skill grilling — skills/engineering/improve-codebase-architecture/SKILL.md:64
- skill domain-modeling — skills/engineering/improve-codebase-architecture/SKILL.md:66

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:52
- doc README.md — README.md:197
- doc skills/engineering/README.md — skills/engineering/README.md:12
- doc docs/engineering/improve-codebase-architecture.md — docs/engineering/improve-codebase-architecture.md:3
- doc docs/engineering/codebase-design.md — docs/engineering/codebase-design.md:19

## Concepts named — required, verbatim
- `improve-codebase-architecture` — skills/engineering/improve-codebase-architecture/SKILL.md:2 — defined here
- `deepening opportunities` — skills/engineering/improve-codebase-architecture/SKILL.md:9 — defined here
- `codebase-design` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `module` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `interface` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `depth` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `seam` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `adapter` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `leverage` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `locality` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `deletion test` — skills/engineering/improve-codebase-architecture/SKILL.md:13 — used here
- `CONTEXT.md` — skills/engineering/improve-codebase-architecture/SKILL.md:14 — used here
- `ADRs` — skills/engineering/improve-codebase-architecture/SKILL.md:14 — used here
- `YAGNI` — skills/engineering/improve-codebase-architecture/SKILL.md:20 — used here
- `hot spots` — skills/engineering/improve-codebase-architecture/SKILL.md:23 — defined here
- `shallow` — skills/engineering/improve-codebase-architecture/SKILL.md:30 — used here
- `Tailwind` — skills/engineering/improve-codebase-architecture/SKILL.md:41 — used here
- `Mermaid` — skills/engineering/improve-codebase-architecture/SKILL.md:41 — used here
- `Recommendation strength` — skills/engineering/improve-codebase-architecture/SKILL.md:50 — defined here
- `Top recommendation` — skills/engineering/improve-codebase-architecture/SKILL.md:52 — defined here
- `HTML-REPORT.md` — skills/engineering/improve-codebase-architecture/SKILL.md:58 — used here
- `Grilling loop` — skills/engineering/improve-codebase-architecture/SKILL.md:62 — defined here
- `grilling` — skills/engineering/improve-codebase-architecture/SKILL.md:64 — used here
- `domain-modeling` — skills/engineering/improve-codebase-architecture/SKILL.md:66 — used here
- `design-it-twice` — skills/engineering/improve-codebase-architecture/SKILL.md:71 — used here

## Structure
- `name: improve-codebase-architecture` — skills/engineering/improve-codebase-architecture/SKILL.md:2
- `# Improve Codebase Architecture` — skills/engineering/improve-codebase-architecture/SKILL.md:7
- `## Process` — skills/engineering/improve-codebase-architecture/SKILL.md:16
- `### 1. Explore` — skills/engineering/improve-codebase-architecture/SKILL.md:18
- `### 2. Present candidates as an HTML report` — skills/engineering/improve-codebase-architecture/SKILL.md:37
- `### 3. Grilling loop` — skills/engineering/improve-codebase-architecture/SKILL.md:62

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Uses OS-specific commands (`xdg-open` on Linux, `open` on macOS, `start` on Windows) to automatically display the generated HTML report to the user. Features a strict interaction constraint: "Do NOT propose interfaces yet. After the file is written, ask the user: 'Which of these would you like to explore?'" (skills/engineering/improve-codebase-architecture/SKILL.md:60).

## Context cost
5,993 bytes (~1,498 tokens). When loading `HTML-REPORT.md` (6,641 bytes), `codebase-design` (6,446 bytes), `grilling` (4,374 bytes), and `domain-modeling` (3,331 bytes), total context expands to ~26,785 bytes (~6,696 tokens).
