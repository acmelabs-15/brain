---
package: addy
path: external/code-review-and-quality.md
type: external-doc
bytes: 26687
unit: inv-addy-15
deprecated: false
aliases: []
memo_inputs:
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/code-review-and-quality.md

## Purpose — required, verbatim
> "Conducts multi-axis code review across correctness, readability, architecture, security, and performance. Change sizing (~100 lines), severity labels (Critical/Required/Optional/Nit), review speed norms, and splitting strategies." — external/code-review-and-quality.md:5

## Design intent — required
This documentation page provides the web catalog entry and external reference for Addy Osmani's `code-review-and-quality` skill, published at `skills.addy.ie`. It serves as the public documentation and discovery interface for the skill, communicating its core purpose, triggering conditions ("Before merging any change."), anatomy structure, CLI installation commands via the `skills` CLI, and placement within the "Review" lifecycle phase. Without it, developers and agents discovering skills via the web catalog would lack a high-level summary of review axes (correctness, readability, architecture, security, performance), sizing guidelines, severity taxonomy, and the direct pointer to the underlying repository implementation.

## Phase — required
addy:Review ("Review phase" — external/code-review-and-quality.md:5)

## Inputs — required
none (static HTML documentation page; conceptually describes evaluation applied before merge: "Before merging any change." — external/code-review-and-quality.md:5)

## Outputs — required
none (pure reference/documentation page)

## Invokes — required
none

## Invoked by — required
orphan (external web documentation page; not invoked by any in-scope file)

## Concepts named — required, verbatim
- `code-review-and-quality` — external/code-review-and-quality.md:5 — defined here
- `Review` — external/code-review-and-quality.md:5 — used here
- `Review phase` — external/code-review-and-quality.md:5 — used here
- `/review` — external/code-review-and-quality.md:5 — used here
- `multi-axis code review` — external/code-review-and-quality.md:5 — used here
- `correctness` — external/code-review-and-quality.md:5 — used here
- `readability` — external/code-review-and-quality.md:5 — used here
- `architecture` — external/code-review-and-quality.md:5 — used here
- `security` — external/code-review-and-quality.md:5 — used here
- `performance` — external/code-review-and-quality.md:5 — used here
- `Change sizing` — external/code-review-and-quality.md:5 — used here
- `Critical` — external/code-review-and-quality.md:5 — used here
- `Required` — external/code-review-and-quality.md:5 — used here
- `Optional` — external/code-review-and-quality.md:5 — used here
- `Nit` — external/code-review-and-quality.md:5 — used here
- `review speed norms` — external/code-review-and-quality.md:5 — used here
- `splitting strategies` — external/code-review-and-quality.md:5 — used here
- `skills CLI` — external/code-review-and-quality.md:6 — used here
- `Overview` — external/code-review-and-quality.md:10 — used here
- `When to Use` — external/code-review-and-quality.md:10 — used here
- `Process` — external/code-review-and-quality.md:10 — used here
- `Rationalizations` — external/code-review-and-quality.md:10 — used here
- `Red Flags` — external/code-review-and-quality.md:10 — used here
- `Verification` — external/code-review-and-quality.md:10 — used here
- `gates` — external/code-review-and-quality.md:12 — used here
- `lifecycle` — external/code-review-and-quality.md:12 — used here
- `code-simplification` — external/code-review-and-quality.md:12 — used here
- `Chesterton’s Fence` — external/code-review-and-quality.md:12 — used here
- `Rule of 500` — external/code-review-and-quality.md:12 — used here
- `/code-simplify` — external/code-review-and-quality.md:12 — used here
- `security-and-hardening` — external/code-review-and-quality.md:12 — used here
- `OWASP Top 10` — external/code-review-and-quality.md:12 — used here
- `auth patterns` — external/code-review-and-quality.md:12 — used here
- `dependency auditing` — external/code-review-and-quality.md:12 — used here
- `performance-optimization` — external/code-review-and-quality.md:12 — used here
- `Measure-first` — external/code-review-and-quality.md:12 — used here
- `Core Web Vitals` — external/code-review-and-quality.md:12 — used here
- `bundle analysis` — external/code-review-and-quality.md:12 — used here
- `N+1 fixes` — external/code-review-and-quality.md:12 — used here
- `/webperf` — external/code-review-and-quality.md:12 — used here

## Structure
- "code-review-and-quality" — external/code-review-and-quality.md:5 (h1: skill name)
- "Install just this skill" — external/code-review-and-quality.md:5 (h2: CLI installation commands)
- "How this skill is structured" — external/code-review-and-quality.md:8 (h2: skill workflow anatomy)
  - "Overview" — external/code-review-and-quality.md:10 (anatomy 01)
  - "When to Use" — external/code-review-and-quality.md:10 (anatomy 02)
  - "Process" — external/code-review-and-quality.md:10 (anatomy 03)
  - "Rationalizations" — external/code-review-and-quality.md:10 (anatomy 04)
  - "Red Flags" — external/code-review-and-quality.md:10 (anatomy 05)
  - "Verification" — external/code-review-and-quality.md:10 (anatomy 06)
- "Review phase" — external/code-review-and-quality.md:12 (h3: phase sidebar)
- "More in the Review phase" — external/code-review-and-quality.md:12 (h2: related skills grid)
- "Product" — external/code-review-and-quality.md:15 (h3: footer navigation)
- "Setup" — external/code-review-and-quality.md:15 (h3: footer navigation)
- "Resources" — external/code-review-and-quality.md:15 (h3: footer navigation)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift: external catalog summary "Conducts multi-axis code review across correctness, readability, architecture, security, and performance. Change sizing (~100 lines), severity labels (Critical/Required/Optional/Nit), review speed norms, and splitting strategies." — external/code-review-and-quality.md:5 differs from the in-repo skill description "Conducts multi-axis code review. Use before merging any change. Use when reviewing code written by yourself, another agent, or a human. Use when you need to assess code quality across multiple dimensions before it enters the main branch." — skills/code-review-and-quality/SKILL.md:3.
- doc-drift: external page claims a 6-part skill anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/code-review-and-quality.md:9) whereas skills/code-review-and-quality/SKILL.md implements 19 top-level markdown sections including dedicated sections for change sizing, multi-model review, and checklists.
- orphan: "https://skills.addy.ie/skills/code-review-and-quality/" — external/code-review-and-quality.md:1 — this external documentation snapshot is not referenced or invoked by any file in the source repository.

## Observations
- The page is built using Astro (`data-astro-cid-*`) and rendered as static HTML.
- Provides direct copyable commands for the Vercel-labs `skills` CLI: `npx skills add addyosmani/agent-skills --skill code-review-and-quality` (external/code-review-and-quality.md:8) and `npx skills add addyosmani/agent-skills` (external/code-review-and-quality.md:8).
- Explicitly links to the GitHub repository source file: `https://github.com/addyosmani/agent-skills/blob/main/skills/code-review-and-quality/SKILL.md` (external/code-review-and-quality.md:10).
- Categorizes `code-review-and-quality` alongside `code-simplification`, `security-and-hardening`, and `performance-optimization` within the `Review` phase (external/code-review-and-quality.md:12).

## Context cost
26687 bytes (~6672 tokens at 4 bytes/token). Follows 0 invoked files. Total: 26687 bytes (~6672 tokens).
