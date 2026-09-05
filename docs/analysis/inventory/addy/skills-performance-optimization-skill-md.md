---
package: addy
path: skills/performance-optimization/SKILL.md
type: skill
bytes: 21717
unit: inv-addy-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/performance-optimization/SKILL.md

## Purpose — required, verbatim
> "Optimizes application performance across frontend, backend, queries, and databases. Use when performance requirements exist, when you suspect performance regressions, when Core Web Vitals or load times need improvement, when N+1 query patterns need fixing, or when profiling reveals bottlenecks." — skills/performance-optimization/SKILL.md:3

## Design intent — required
Enforces a rigorous measure-first optimization discipline across frontend, backend, database query, and caching layers to prevent premature optimization and unproven code complexity. The workflow mandates establishing real-data baselines (synthetic and RUM), isolating root bottlenecks, applying targeted fixes, strictly reverting changes that produce neutral or noise-level deltas, logging all attempts in an optimization ledger, and establishing regression guards via performance budgets.

## Phase — required
addy:Review

## Inputs — required
- Performance requirements, SLAs, or reported regressions — skills/performance-optimization/SKILL.md:14-17
- Synthetic measurements (Lighthouse, Chrome DevTools Performance trace) and RUM data (web-vitals, CrUX) — skills/performance-optimization/SKILL.md:44-45
- Database execution plans:
> "EXPLAIN ANALYZE" — skills/performance-optimization/SKILL.md:157

## Outputs — required
- Measured performance fixes addressing verified bottlenecks across queries, connection pools, images, bundles, and caching — skills/performance-optimization/SKILL.md:121-366
- Optimization ledger recording kept and reverted attempts:
> "Keep a short ledger so a discarded idea stays discarded" — skills/performance-optimization/SKILL.md:393
- Performance regression guards:
> "JavaScript bundle: < 200KB gzipped (initial load)" — skills/performance-optimization/SKILL.md:423

## Invokes — required
- reference ../../references/performance-checklist.md — skills/performance-optimization/SKILL.md:443

## Invoked by — required
- doc README.md — README.md:271
- config CLAUDE.md — CLAUDE.md:25
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:36
- skill skills/code-review-and-quality/SKILL.md — skills/code-review-and-quality/SKILL.md:79
- skill skills/observability-and-instrumentation/SKILL.md — skills/observability-and-instrumentation/SKILL.md:22
- agent agents/web-performance-auditor.md — agents/web-performance-auditor.md:176

## Concepts named — required, verbatim
- `performance-optimization` — skills/performance-optimization/SKILL.md:2 — defined here
- `Core Web Vitals` — skills/performance-optimization/SKILL.md:22 — used here
- `LCP` — skills/performance-optimization/SKILL.md:26 — defined here
- `Largest Contentful Paint` — skills/performance-optimization/SKILL.md:26 — defined here
- `INP` — skills/performance-optimization/SKILL.md:27 — defined here
- `Interaction to Next Paint` — skills/performance-optimization/SKILL.md:27 — defined here
- `CLS` — skills/performance-optimization/SKILL.md:28 — defined here
- `Cumulative Layout Shift` — skills/performance-optimization/SKILL.md:28 — defined here
- `The Optimization Workflow` — skills/performance-optimization/SKILL.md:30 — defined here
- `Synthetic` — skills/performance-optimization/SKILL.md:44 — defined here
- `RUM` — skills/performance-optimization/SKILL.md:45 — defined here
- `N+1 Queries` — skills/performance-optimization/SKILL.md:123 — defined here
- `Unbounded Data Fetching` — skills/performance-optimization/SKILL.md:138 — defined here
- `EXPLAIN ANALYZE` — skills/performance-optimization/SKILL.md:157 — used here
- `Connection Pool Exhaustion` — skills/performance-optimization/SKILL.md:187 — defined here
- `Image Optimization` — skills/performance-optimization/SKILL.md:204 — defined here
- `Re-renders` — skills/performance-optimization/SKILL.md:269 — defined here
- `Bundle Size` — skills/performance-optimization/SKILL.md:295 — defined here
- `Caching` — skills/performance-optimization/SKILL.md:317 — defined here
- `Keep or Revert` — skills/performance-optimization/SKILL.md:368 — defined here
- `PERF.md` — skills/performance-optimization/SKILL.md:401 — defined here
- `Guard Against Regression` — skills/performance-optimization/SKILL.md:403 — defined here

## Structure
- # Performance Optimization — skills/performance-optimization/SKILL.md:6
- ## Overview — skills/performance-optimization/SKILL.md:8
- ## When to Use — skills/performance-optimization/SKILL.md:12
- ## Core Web Vitals Targets — skills/performance-optimization/SKILL.md:22
- ## The Optimization Workflow — skills/performance-optimization/SKILL.md:30
- ### Step 1: Measure — skills/performance-optimization/SKILL.md:40
- ### Where to Start Measuring — skills/performance-optimization/SKILL.md:73
- ### Step 2: Identify the Bottleneck — skills/performance-optimization/SKILL.md:99
- ### Step 3: Fix Common Anti-Patterns — skills/performance-optimization/SKILL.md:121
- #### N+1 Queries (Backend) — skills/performance-optimization/SKILL.md:123
- #### Unbounded Data Fetching — skills/performance-optimization/SKILL.md:138
- #### Queries That Ignore Their Index — skills/performance-optimization/SKILL.md:152
- #### Connection Pool Exhaustion — skills/performance-optimization/SKILL.md:187
- #### Missing Image Optimization (Frontend) — skills/performance-optimization/SKILL.md:204
- #### Unnecessary Re-renders (React) — skills/performance-optimization/SKILL.md:269
- #### Large Bundle Size — skills/performance-optimization/SKILL.md:295
- #### Missing Caching (Backend) — skills/performance-optimization/SKILL.md:317
- ### Step 4: Verify (Keep or Revert) — skills/performance-optimization/SKILL.md:368
- #### Log every attempt, including the reverted ones — skills/performance-optimization/SKILL.md:391
- ### Step 5: Guard Against Regression — skills/performance-optimization/SKILL.md:403
- ## See Also — skills/performance-optimization/SKILL.md:441
- ## Common Rationalizations — skills/performance-optimization/SKILL.md:446
- ## Red Flags — skills/performance-optimization/SKILL.md:462
- ## Verification — skills/performance-optimization/SKILL.md:480

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Reversion rule: "\"Neutral\" is a revert, not a keep." — skills/performance-optimization/SKILL.md:387
- Attempt logging: "Keep a short ledger so a discarded idea stays discarded" — skills/performance-optimization/SKILL.md:393
- Core Web Vitals targets: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 — skills/performance-optimization/SKILL.md:26-28

## Context cost
21717 bytes, ~5100 tokens. Standalone skill prompt; references external checklist references/performance-checklist.md.
