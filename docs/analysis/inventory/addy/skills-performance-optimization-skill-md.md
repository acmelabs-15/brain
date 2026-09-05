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
verified: 2026-09-04 quote-check+coverage
---

# skills/performance-optimization/SKILL.md

## Purpose — required, verbatim
> "Measure before optimizing. Performance work without measurement is guessing — and guessing leads to premature optimization that adds complexity without improving what matters. Profile first, identify the actual bottleneck, fix it, measure again. Optimize only what measurements prove matters." — skills/performance-optimization/SKILL.md:10

## Design intent — required
Establishes a rigorous, measure-first performance optimization workflow (Measure -> Identify -> Fix -> Verify -> Guard) spanning frontend and backend layers. Eliminates guesswork, cargo-cult indexing, and premature optimization by requiring baseline profiling under reproducible conditions, targeting proven anti-patterns (N+1 queries, unindexed queries, connection pool exhaustion, oversized bundles, and stampede-prone caching), enforcing a strict keep/revert policy where neutral changes are always reverted, maintaining an experiment ledger of all attempts, and guarding against regressions via automated CI budgets and field telemetry.

## Phase — required
addy:Review

## Inputs — required
- Performance specifications and requirements: "load time budgets, response time SLAs" — skills/performance-optimization/SKILL.md:14
- User or monitoring reports: "Users or monitoring report slow behavior" — skills/performance-optimization/SKILL.md:15
- Core Web Vitals thresholds: "Core Web Vitals Targets" — skills/performance-optimization/SKILL.md:22
- Synthetic and RUM measurements: "Synthetic" — skills/performance-optimization/SKILL.md:44, "RUM" — skills/performance-optimization/SKILL.md:45
- Database query logs and plans: "Database query logging with timing" — skills/performance-optimization/SKILL.md:65, "EXPLAIN ANALYZE" — skills/performance-optimization/SKILL.md:157
- Profiler and waterfall traces: "DevTools Network waterfall" — skills/performance-optimization/SKILL.md:81, "Heap snapshot analysis" — skills/performance-optimization/SKILL.md:117, "CPU profiling" — skills/performance-optimization/SKILL.md:118
- Reference checklist: `../../references/performance-checklist.md` — skills/performance-optimization/SKILL.md:443

## Outputs — required
- Targeted code fixes: "N+1 Queries (Backend)" — skills/performance-optimization/SKILL.md:123, "Unbounded Data Fetching" — skills/performance-optimization/SKILL.md:138, "Missing Image Optimization (Frontend)" — skills/performance-optimization/SKILL.md:204, "Large Bundle Size" — skills/performance-optimization/SKILL.md:295, "Missing Caching (Backend)" — skills/performance-optimization/SKILL.md:317
- Keep or revert verification decisions: "Step 4: Verify (Keep or Revert)" — skills/performance-optimization/SKILL.md:368
- Experiment ledger recording kept and reverted attempts: "Log every attempt, including the reverted ones" — skills/performance-optimization/SKILL.md:391
- Regression guards and CI budgets: "Step 5: Guard Against Regression" — skills/performance-optimization/SKILL.md:403, "Lighthouse CI" — skills/performance-optimization/SKILL.md:437

## Invokes — required
- reference ../../references/performance-checklist.md — skills/performance-optimization/SKILL.md:443

## Invoked by — required
- command commands/review.toml — commands/review.toml:12
- agent agents/web-performance-auditor.md — agents/web-performance-auditor.md:176
- skill skills/code-review-and-quality/SKILL.md — skills/code-review-and-quality/SKILL.md:79
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:36
- skill skills/observability-and-instrumentation/SKILL.md — skills/observability-and-instrumentation/SKILL.md:22
- reference references/performance-checklist.md — references/performance-checklist.md:3
- doc README.md — README.md:271
- doc CLAUDE.md — CLAUDE.md:25

## Concepts named — required, verbatim
- `performance-optimization` — skills/performance-optimization/SKILL.md:2 — defined here
- `Core Web Vitals` — skills/performance-optimization/SKILL.md:3 — defined here
- `LCP` — skills/performance-optimization/SKILL.md:26 — defined here
- `Largest Contentful Paint` — skills/performance-optimization/SKILL.md:26 — defined here
- `INP` — skills/performance-optimization/SKILL.md:27 — defined here
- `Interaction to Next Paint` — skills/performance-optimization/SKILL.md:27 — defined here
- `CLS` — skills/performance-optimization/SKILL.md:28 — defined here
- `Cumulative Layout Shift` — skills/performance-optimization/SKILL.md:28 — defined here
- `The Optimization Workflow` — skills/performance-optimization/SKILL.md:30 — defined here
- `MEASURE` — skills/performance-optimization/SKILL.md:33 — defined here
- `IDENTIFY` — skills/performance-optimization/SKILL.md:34 — defined here
- `FIX` — skills/performance-optimization/SKILL.md:35 — defined here
- `VERIFY` — skills/performance-optimization/SKILL.md:36 — defined here
- `GUARD` — skills/performance-optimization/SKILL.md:37 — defined here
- `Synthetic` — skills/performance-optimization/SKILL.md:44 — defined here
- `RUM` — skills/performance-optimization/SKILL.md:45 — defined here
- `CrUX` — skills/performance-optimization/SKILL.md:45 — defined here
- `TTFB` — skills/performance-optimization/SKILL.md:81 — defined here
- `N+1 Queries` — skills/performance-optimization/SKILL.md:123 — defined here
- `Unbounded Data Fetching` — skills/performance-optimization/SKILL.md:138 — defined here
- `Queries That Ignore Their Index` — skills/performance-optimization/SKILL.md:152 — defined here
- `Connection Pool Exhaustion` — skills/performance-optimization/SKILL.md:187 — defined here
- `Missing Image Optimization` — skills/performance-optimization/SKILL.md:204 — defined here
- `Unnecessary Re-renders` — skills/performance-optimization/SKILL.md:269 — defined here
- `Large Bundle Size` — skills/performance-optimization/SKILL.md:295 — defined here
- `Missing Caching` — skills/performance-optimization/SKILL.md:317 — defined here
- `stampede` — skills/performance-optimization/SKILL.md:364 — defined here
- `Keep` — skills/performance-optimization/SKILL.md:382 — defined here
- `Revert` — skills/performance-optimization/SKILL.md:383 — defined here
- `Log every attempt, including the reverted ones` — skills/performance-optimization/SKILL.md:391 — defined here

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
- doc-drift · skills/performance-optimization/SKILL.md:3: Frontmatter description defines detailed trigger conditions (performance requirements, suspect regressions, Core Web Vitals, N+1 queries, profiling), while external catalog page external/performance-optimization.md:5 adds a directive to 'Run the audit via /webperf' which delegates to web-performance-auditor rather than invoking the skill directly.
- doc-drift · skills/performance-optimization/SKILL.md:8: Skill structures detailed workflow across 5 major phases (Measure, Identify, Fix, Verify, Guard) with extensive database and network subsections, whereas external/performance-optimization.md:9 asserts a generic 6-section anatomy.

## Observations
- Strict keep/revert rule (skills/performance-optimization/SKILL.md:387): "Neutral is a revert, not a keep". Unmeasured or neutral modifications accrete complexity without improving performance.
- Mandated experiment ledger (skills/performance-optimization/SKILL.md:391-401): logs all attempts, kept and reverted alike, preventing future contributors and agents from repeating failed optimizations.
- Database indexing discipline (skills/performance-optimization/SKILL.md:154-185): requires `EXPLAIN ANALYZE` before and after adding indexes, warns against low-selectivity indexes, leading wildcards, and function predicates, and highlights write taxation.
- Connection pool exhaustion diagnostics (skills/performance-optimization/SKILL.md:187-202): warns that raising pool size beyond database capacity moves the queue into the database, recommending connection multiplexing proxies instead.

## Context cost
21717 bytes, plus loads references/performance-checklist.md (13139 bytes). Total: 34856 bytes, ~8,500 tokens.
