---
package: addy
path: external/performance-optimization.md
type: doc
bytes: 26603
unit: inv-addy-27
aliases: []
memo_inputs:
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/performance-optimization.md

## Purpose — required, verbatim
> "Optimizes application performance across frontend, backend, queries, and databases. Measure-first approach - Core Web Vitals targets, profiling workflows, bundle analysis, and anti-pattern detection. Run the audit via /webperf." — external/performance-optimization.md:5

## Design intent — required
Web documentation and catalog entry on `skills.addy.ie` (`https://skills.addy.ie/skills/performance-optimization/`) for the `performance-optimization` skill. It provides developers and autonomous coding agents with a web-accessible summary of Addy's measure-first performance optimization methodology (Core Web Vitals targets, profiling workflows, bundle analysis, database and query optimization, and anti-pattern detection), quick CLI installation commands via the open `skills` CLI (`npx skills add addyosmani/agent-skills --skill performance-optimization`), structural anatomy, triggering conditions, navigation to the `/webperf` command and GitHub source (`skills/performance-optimization/SKILL.md`), and cross-references to peer Review-phase skills (`code-review-and-quality`, `code-simplification`, `security-and-hardening`). Without this page, developers and browser-based agents exploring the web catalog would lack an indexed entry point, installation snippets, and lifecycle context for performance engineering within the agent-skills suite.

## Phase — required
addy:Review

## Inputs — required
- Trigger condition: "Performance requirements exist or you suspect regressions." — external/performance-optimization.md:5
- Installation command: "npx skills add addyosmani/agent-skills --skill performance-optimization" — external/performance-optimization.md:8
- Full pack install command: "npx skills add addyosmani/agent-skills" — external/performance-optimization.md:8
- Canonical skill source link: `skills/performance-optimization/SKILL.md` — external/performance-optimization.md:10

## Outputs — required
none

## Invokes — required
- skill performance-optimization — external/performance-optimization.md:5
- command /webperf — external/performance-optimization.md:5
- command /review — external/performance-optimization.md:12
- skill code-review-and-quality — external/performance-optimization.md:12
- skill code-simplification — external/performance-optimization.md:12
- command /code-simplify — external/performance-optimization.md:12
- skill security-and-hardening — external/performance-optimization.md:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `performance-optimization` — external/performance-optimization.md:5 — defined here
- `Review phase` — external/performance-optimization.md:5, 12 — used here
- `/webperf` — external/performance-optimization.md:5 — used here
- `Core Web Vitals` — external/performance-optimization.md:5 — used here
- `Measure-first` — external/performance-optimization.md:5 — used here
- `bundle analysis` — external/performance-optimization.md:5 — used here
- `anti-pattern detection` — external/performance-optimization.md:5 — used here
- `skills CLI` — external/performance-optimization.md:6 — used here
- `anatomy` — external/performance-optimization.md:9 — defined here
- `Overview` — external/performance-optimization.md:10 — used here
- `When to Use` — external/performance-optimization.md:10 — used here
- `Process` — external/performance-optimization.md:10 — used here
- `Rationalizations` — external/performance-optimization.md:10 — used here
- `Red Flags` — external/performance-optimization.md:10 — used here
- `Verification` — external/performance-optimization.md:10 — used here
- `SKILL.md` — external/performance-optimization.md:10 — used here
- `/review` — external/performance-optimization.md:12 — used here
- `code-review-and-quality` — external/performance-optimization.md:12 — used here
- `Five-axis review` — external/performance-optimization.md:12 — used here
- `~100-line change sizing` — external/performance-optimization.md:12 — used here
- `severity labels` — external/performance-optimization.md:12 — used here
- `review-speed norms` — external/performance-optimization.md:12 — used here
- `code-simplification` — external/performance-optimization.md:12 — used here
- `/code-simplify` — external/performance-optimization.md:12 — used here
- `Chesterton’s Fence` — external/performance-optimization.md:12 — used here
- `the Rule of 500` — external/performance-optimization.md:12 — used here
- `security-and-hardening` — external/performance-optimization.md:12 — used here
- `OWASP Top 10` — external/performance-optimization.md:12 — used here
- `auth patterns` — external/performance-optimization.md:12 — used here
- `secrets` — external/performance-optimization.md:12 — used here
- `dependency auditing` — external/performance-optimization.md:12 — used here
- `full lifecycle` — external/performance-optimization.md:14 — used here
- `The lifecycle` — external/performance-optimization.md:15 — used here
- `Loop engineering` — external/performance-optimization.md:15 — used here

## Structure
- "performance-optimization" — external/performance-optimization.md:5
- "Install just this skill" — external/performance-optimization.md:5
- "How this skill is structured" — external/performance-optimization.md:8
- "Review phase" — external/performance-optimization.md:12
- "More in the Review phase" — external/performance-optimization.md:12
- "Product" — external/performance-optimization.md:15
- "Setup" — external/performance-optimization.md:15
- "Resources" — external/performance-optimization.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/performance-optimization.md:9: Page asserts "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" specifying six standardized sections (01 Overview to 06 Verification), but skills/performance-optimization/SKILL.md defines additional substantive sections beyond this anatomy: Core Web Vitals Targets, The Optimization Workflow, Where to Start Measuring, Database & Query Optimization, Network & Resource Loading, and See Also.
- doc-drift · external/performance-optimization.md:5: External doc summary ("Optimizes application performance across frontend, backend, queries, and databases. Measure-first approach - Core Web Vitals targets, profiling workflows, bundle analysis, and anti-pattern detection. Run the audit via /webperf.") differs from repository description in skills/performance-optimization/SKILL.md:3 ("Optimizes application performance across frontend, backend, queries, and databases. Use when performance requirements exist, when you suspect performance regressions, when Core Web Vitals or load times need improvement, when N+1 query patterns need fixing, or when profiling reveals bottlenecks.").
- internal-contradiction · external/performance-optimization.md:5, 12: Header badge associates the skill with command `/webperf` (line 5), whereas the sidebar card lists `Command /review` (line 12).
- cross-file-contradiction · external/performance-optimization.md:5: Directs users to "Run the audit via /webperf" (line 5), but command commands/webperf.toml:20 spawns the `web-performance-auditor` agent rather than directly executing `performance-optimization` as a skill; agents/web-performance-auditor.md:176 then delegates granular remediation back to skills/performance-optimization/SKILL.md.

## Observations
- External documentation web snapshot generated via Astro (`data-astro-cid-*`) representing the public catalog entry at `https://skills.addy.ie/skills/performance-optimization/`.
- Documents standalone skill installation via the Vercel open `skills` CLI using `npx skills add addyosmani/agent-skills --skill performance-optimization` or entire pack installation via `npx skills add addyosmani/agent-skills` (line 8).
- Integrates the skill into the `Review` phase taxonomy alongside sibling review skills `code-review-and-quality`, `code-simplification`, and `security-and-hardening`.
- Highlights the "Measure-first" rule, Core Web Vitals targets, bundle analysis, profiling workflows, and anti-pattern detection.
- Links directly to the `/webperf` command badge and the canonical skill definition on GitHub (`skills/performance-optimization/SKILL.md` on line 10).

## Context cost
26603 bytes, ~6650 tokens. As an external web landing page, it is accessed over HTTP by developers or browser-based agents rather than loaded directly into standard coding agent prompt contexts.
