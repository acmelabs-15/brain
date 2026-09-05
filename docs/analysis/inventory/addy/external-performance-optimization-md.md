---
package: addy
path: external/performance-optimization.md
type: external-doc
bytes: 26603
unit: inv-addy-27
deprecated: false
aliases: []
memo_inputs:
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/performance-optimization.md

## Purpose — required, verbatim
> "Optimizes application performance across frontend, backend, queries, and databases. Measure-first approach - Core Web Vitals targets, profiling workflows, bundle analysis, and anti-pattern detection. Run the audit via /webperf." — external/performance-optimization.md:5

## Design intent — required
This external documentation page provides the web catalog entry and public documentation for Addy Osmani's `performance-optimization` skill, published at `skills.addy.ie`. It serves as the discovery interface and web reference for the skill, communicating its core purpose, triggering conditions ("Performance requirements exist or you suspect regressions."), standardized six-part anatomy structure, command-line installation instructions via the `skills` CLI, and classification under the "Review" lifecycle phase. Without this page, developers and autonomous agents browsing the public catalog would lack an external summary of performance optimization dimensions (Core Web Vitals, profiling, bundle analysis, anti-patterns), installation commands, related review-phase tooling, and the direct link to the canonical `SKILL.md` in the GitHub repository.

## Phase — required
addy:Review ("Review phase" — external/performance-optimization.md:5)

## Inputs — required
none (static HTML documentation page; conceptually describes trigger conditions: "Performance requirements exist or you suspect regressions." — external/performance-optimization.md:5)

## Outputs — required
none (pure reference/documentation page)

## Invokes — required
- command /webperf — external/performance-optimization.md:5
- skill performance-optimization — external/performance-optimization.md:8
- doc SKILL.md — external/performance-optimization.md:11
- command /review — external/performance-optimization.md:12
- skill code-review-and-quality — external/performance-optimization.md:12
- skill code-simplification — external/performance-optimization.md:12
- skill security-and-hardening — external/performance-optimization.md:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `performance-optimization` — external/performance-optimization.md:5 — defined here
- `Review` — external/performance-optimization.md:5 — used here
- `Review phase` — external/performance-optimization.md:5 — used here
- `/webperf` — external/performance-optimization.md:5 — used here
- `Measure-first` — external/performance-optimization.md:5 — used here
- `Core Web Vitals` — external/performance-optimization.md:5 — used here
- `profiling workflows` — external/performance-optimization.md:5 — used here
- `bundle analysis` — external/performance-optimization.md:5 — used here
- `anti-pattern detection` — external/performance-optimization.md:5 — used here
- `#performance` — external/performance-optimization.md:5 — used here
- `#web-vitals` — external/performance-optimization.md:5 — used here
- `skills CLI` — external/performance-optimization.md:6 — used here
- `anatomy` — external/performance-optimization.md:9 — used here
- `Overview` — external/performance-optimization.md:10 — used here
- `When to Use` — external/performance-optimization.md:10 — used here
- `Process` — external/performance-optimization.md:10 — used here
- `Rationalizations` — external/performance-optimization.md:10 — used here
- `Red Flags` — external/performance-optimization.md:10 — used here
- `Verification` — external/performance-optimization.md:10 — used here
- `gates` — external/performance-optimization.md:12 — used here
- `/review` — external/performance-optimization.md:12 — used here
- `lifecycle` — external/performance-optimization.md:12 — used here
- `code-review-and-quality` — external/performance-optimization.md:12 — used here
- `five-axis review` — external/performance-optimization.md:12 — used here
- `~100-line change sizing` — external/performance-optimization.md:12 — used here
- `severity labels` — external/performance-optimization.md:12 — used here
- `review-speed norms` — external/performance-optimization.md:12 — used here
- `code-simplification` — external/performance-optimization.md:12 — used here
- `Chesterton’s Fence` — external/performance-optimization.md:12 — used here
- `Rule of 500` — external/performance-optimization.md:12 — used here
- `/code-simplify` — external/performance-optimization.md:12 — used here
- `security-and-hardening` — external/performance-optimization.md:12 — used here
- `OWASP Top 10` — external/performance-optimization.md:12 — used here
- `auth patterns` — external/performance-optimization.md:12 — used here
- `dependency auditing` — external/performance-optimization.md:12 — used here

## Structure
- "performance-optimization" — external/performance-optimization.md:5
- "Install just this skill" — external/performance-optimization.md:5
- "How this skill is structured" — external/performance-optimization.md:8
  - "Overview" — external/performance-optimization.md:10
  - "When to Use" — external/performance-optimization.md:10
  - "Process" — external/performance-optimization.md:10
  - "Rationalizations" — external/performance-optimization.md:10
  - "Red Flags" — external/performance-optimization.md:10
  - "Verification" — external/performance-optimization.md:10
- "Review phase" — external/performance-optimization.md:12
- "More in the Review phase" — external/performance-optimization.md:12
- "code-review-and-quality" — external/performance-optimization.md:12
- "code-simplification" — external/performance-optimization.md:12
- "security-and-hardening" — external/performance-optimization.md:12
- "Product" — external/performance-optimization.md:15
- "Setup" — external/performance-optimization.md:15
- "Resources" — external/performance-optimization.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift: external catalog summary "Optimizes application performance across frontend, backend, queries, and databases. Measure-first approach - Core Web Vitals targets, profiling workflows, bundle analysis, and anti-pattern detection. Run the audit via /webperf." — external/performance-optimization.md:5 differs from in-repo skill description "description: Optimizes application performance across frontend, backend, queries, and databases. Use when performance requirements exist, when you suspect performance regressions, when Core Web Vitals or load times need improvement, when N+1 query patterns need fixing, or when profiling reveals bottlenecks." — skills/performance-optimization/SKILL.md:3.
- doc-drift: external page claims a 6-part skill anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/performance-optimization.md:9) whereas skills/performance-optimization/SKILL.md implements 9 top-level markdown sections including dedicated sections for Core Web Vitals targets, workflow steps, and anti-patterns, and does not contain Rationalizations or Red Flags sections.
- orphan: "https://skills.addy.ie/skills/performance-optimization/" — external/performance-optimization.md:1 — this external documentation snapshot is not referenced or invoked by any file in the source repository.

## Observations
- The page is built using Astro (`data-astro-cid-*`) and rendered as static HTML.
- Provides copyable installation commands for the Vercel-labs `skills` CLI: "npx skills add addyosmani/agent-skills --skill performance-optimization" — external/performance-optimization.md:8 and "npx skills add addyosmani/agent-skills" — external/performance-optimization.md:8.
- Explicitly links to the GitHub repository source file: "https://github.com/addyosmani/agent-skills/blob/main/skills/performance-optimization/SKILL.md" — external/performance-optimization.md:10.
- Categorizes `performance-optimization` alongside `code-review-and-quality`, `code-simplification`, and `security-and-hardening` within the `Review` phase ("Review phase" — external/performance-optimization.md:5).
- Associates the skill with slash command "/webperf" — external/performance-optimization.md:5.

## Context cost
26603 bytes (~6651 tokens at 4 bytes/token). Follows 0 invoked files. Total: 26603 bytes (~6651 tokens).
