---
package: addy
path: skills/performance-optimization/SKILL.md
type: skill
bytes: 21717
unit: inv-addy-19
---

# skills/performance-optimization/SKILL.md

## Purpose — required, verbatim
> "Optimizes application performance across frontend, backend, queries, and databases. Use when performance requirements exist, when you suspect performance regressions, when Core Web Vitals or load times need improvement, when N+1 query patterns need fixing, or when profiling reveals bottlenecks." — skills/performance-optimization/SKILL.md:3

(Overview statement: > "Measure before optimizing. Performance work without measurement is guessing — and guessing leads to premature optimization that adds complexity without improving what matters. Profile first, identify the actual bottleneck, fix it, measure again. Optimize only what measurements prove matters." — skills/performance-optimization/SKILL.md:10)

## Design intent — required
Addresses the systemic failure mode of premature, unmeasured, or speculative optimization in software engineering. Mandates a strict 5-stage empirical workflow: Measure baseline, Identify actual bottleneck via profiling, Fix the specific root cause, Verify against baseline with noise-aware statistical discipline ("neutral is a revert"), and Guard against regressions via CI performance budgets and RUM field alerts. Covers full-stack systems engineering across frontend (Core Web Vitals LCP/INP/CLS targets, image optimization with modern art direction/fetchpriority/responsive sizes, main-thread long task chunking, React re-render prevention, route-level bundle splitting), backend (N+1 query eradication, pagination limits, EXPLAIN ANALYZE query planning, composite index geometry, connection pool sizing and proxy multiplexing), and caching (layer selection, cache key design containing all variadic factors, single invalidation strategy, negative caching, and stampede prevention via coalescing or stale-while-revalidate). Integrates a historical optimization ledger (`PERF.md`) to record discarded/reverted experiments and prevent cyclic re-investigation of failed ideas.

## Phase — required
addy:Review

## Inputs — required
- Performance requirements, load time budgets, and response time SLAs — skills/performance-optimization/SKILL.md:14
- User or monitoring reports of slow behavior — skills/performance-optimization/SKILL.md:15
- Core Web Vitals telemetry scores below thresholds (LCP > 2.5s, INP > 200ms, CLS > 0.1) — skills/performance-optimization/SKILL.md:16, 24-28
- Suspected performance regressions or new high-traffic/large-dataset features — skills/performance-optimization/SKILL.md:17-18
- Synthetic profiling telemetry: Lighthouse audits, Chrome DevTools Performance traces, Chrome DevTools MCP captures, Network waterfall TTFB/asset timing — skills/performance-optimization/SKILL.md:44, 49-51, 81
- Real User Monitoring (RUM) field data: `web-vitals` library callbacks (`onLCP`, `onINP`, `onCLS`), CrUX p75 datasets — skills/performance-optimization/SKILL.md:45, 53-59, 413-415
- Database telemetry: `EXPLAIN ANALYZE` execution plans, query logs, slow query timings, connection pool wait stats — skills/performance-optimization/SKILL.md:65, 68-70, 94, 156-160, 189
- Reference checklist: `../../references/performance-checklist.md` — skills/performance-optimization/SKILL.md:366, 443

## Outputs — required
- Empirical baseline performance measurements with statistical variance bounds — skills/performance-optimization/SKILL.md:33, 40-71, 372-377, 484-486
- Bottleneck root cause identifications across frontend, backend, database, and network — skills/performance-optimization/SKILL.md:34, 99-120, 489
- Surgical code and configuration optimizations:
  - Database eager-loading joins replacing N+1 loops — skills/performance-optimization/SKILL.md:132-136
  - Paginated queries with limit/offset/cursor bounds — skills/performance-optimization/SKILL.md:144-150
  - Query-shape composite, partial, or expression indexes — skills/performance-optimization/SKILL.md:170-185
  - Sized connection pools and proxy multiplexing — skills/performance-optimization/SKILL.md:195-203
  - Responsive `<picture>` elements with art direction, modern formats (AVIF/WebP), `fetchpriority="high"`, and lazy loading — skills/performance-optimization/SKILL.md:216-267
  - Memoized React components (`React.memo`, `useMemo`) and stable option references — skills/performance-optimization/SKILL.md:278-293
  - Dynamic imports and route-level code splitting with `Suspense` — skills/performance-optimization/SKILL.md:302-315
  - Caching layer implementations with comprehensive cache keys, TTL/versioned invalidation, and stampede guards — skills/performance-optimization/SKILL.md:330-366
- Verification verdicts: strict Keep vs. Revert decisions, enforcing revert on neutral or regressive changes — skills/performance-optimization/SKILL.md:368-390, 487
- Optimization ledger entries (`PERF.md` or PR description) recording kept and reverted attempts to prevent recurring failed experiments — skills/performance-optimization/SKILL.md:391-402, 488
- Regression guards: CI performance budgets (`bundlesize`, `lhci autorun`) and RUM field alerts — skills/performance-optimization/SKILL.md:403-439, 495

## Invokes — required
- reference references/performance-checklist.md — skills/performance-optimization/SKILL.md:366, 443

## Invoked by — required
- agent agents/web-performance-auditor.md — agents/web-performance-auditor.md:176
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:36, 186
- skill skills/code-review-and-quality/SKILL.md — skills/code-review-and-quality/SKILL.md:79
- skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:311
- skill skills/observability-and-instrumentation/SKILL.md — skills/observability-and-instrumentation/SKILL.md:22
- reference references/performance-checklist.md — references/performance-checklist.md:3, 135
- command commands/review.toml — commands/review.toml:12
- command .claude/commands/review.md — .claude/commands/review.md:13
- command .gemini/commands/review.toml — .gemini/commands/review.toml:12
- doc CLAUDE.md — CLAUDE.md:25
- doc README.md — README.md:271, 370
- doc docs/getting-started.md — docs/getting-started.md:134
- doc docs/adoption-guide.md — docs/adoption-guide.md:63, 106
- doc docs/cursor-setup.md — docs/cursor-setup.md:161
- doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:79, 88
- config evals/cases/performance-optimization.json — evals/cases/performance-optimization.json:2, 43
- config evals/cases/frontend-ui-engineering.json — evals/cases/frontend-ui-engineering.json:29
- external-doc sources/addy-external/performance-optimization.md — sources/addy-external/performance-optimization.md:5, 8, 10, 11

## Concepts named — required, verbatim
- `performance-optimization` — skills/performance-optimization/SKILL.md:2 — defined here
- `Performance Optimization` — skills/performance-optimization/SKILL.md:6 — defined here
- `Measure before optimizing` — skills/performance-optimization/SKILL.md:10 — defined here
- `premature optimization` — skills/performance-optimization/SKILL.md:10, 20 — defined here
- `bottleneck` — skills/performance-optimization/SKILL.md:10, 34, 35, 99, 489 — defined here
- `load time budgets` — skills/performance-optimization/SKILL.md:14 — used here
- `response time SLAs` — skills/performance-optimization/SKILL.md:14 — used here
- `Core Web Vitals` — skills/performance-optimization/SKILL.md:16, 22, 490 — used here
- `LCP` — skills/performance-optimization/SKILL.md:26, 107, 210, 406, 490 — used here
- `Largest Contentful Paint` — skills/performance-optimization/SKILL.md:26 — used here
- `INP` — skills/performance-optimization/SKILL.md:27, 109, 406, 490 — used here
- `Interaction to Next Paint` — skills/performance-optimization/SKILL.md:27 — used here
- `CLS` — skills/performance-optimization/SKILL.md:28, 108, 490 — used here
- `Cumulative Layout Shift` — skills/performance-optimization/SKILL.md:28 — used here
- `The Optimization Workflow` — skills/performance-optimization/SKILL.md:30 — defined here
- `MEASURE` — skills/performance-optimization/SKILL.md:33, 40 — defined here
- `IDENTIFY` — skills/performance-optimization/SKILL.md:34, 99 — defined here
- `FIX` — skills/performance-optimization/SKILL.md:35, 121 — defined here
- `VERIFY` — skills/performance-optimization/SKILL.md:36, 368 — defined here
- `GUARD` — skills/performance-optimization/SKILL.md:37, 403 — defined here
- `baseline` — skills/performance-optimization/SKILL.md:33, 372, 417, 484 — defined here
- `Synthetic` — skills/performance-optimization/SKILL.md:44, 49, 410, 495 — defined here
- `Lighthouse` — skills/performance-optimization/SKILL.md:44, 49, 429, 438 — used here
- `DevTools Performance tab` — skills/performance-optimization/SKILL.md:44, 50 — used here
- `RUM` — skills/performance-optimization/SKILL.md:45, 53, 413 — used here
- `Real user data` — skills/performance-optimization/SKILL.md:45 — used here
- `web-vitals` — skills/performance-optimization/SKILL.md:45, 54, 413 — used here
- `CrUX` — skills/performance-optimization/SKILL.md:45, 414 — used here
- `Chrome DevTools MCP` — skills/performance-optimization/SKILL.md:51 — used here
- `Performance trace` — skills/performance-optimization/SKILL.md:51, 109 — used here
- `Application Performance Monitoring` — skills/performance-optimization/SKILL.md:64 — used here
- `APM` — skills/performance-optimization/SKILL.md:64 — used here
- `Where to Start Measuring` — skills/performance-optimization/SKILL.md:73 — defined here
- `bundle size` — skills/performance-optimization/SKILL.md:80, 110, 295, 434, 472, 491 — used here
- `code splitting` — skills/performance-optimization/SKILL.md:80, 110, 305 — used here
- `TTFB` — skills/performance-optimization/SKILL.md:81 — used here
- `network waterfall` — skills/performance-optimization/SKILL.md:81, 85, 107 — used here
- `dns-prefetch` — skills/performance-optimization/SKILL.md:82 — used here
- `preconnect` — skills/performance-optimization/SKILL.md:82, 399 — used here
- `HTTP/2` — skills/performance-optimization/SKILL.md:83 — used here
- `edge deployment` — skills/performance-optimization/SKILL.md:83, 327 — used here
- `keep-alive` — skills/performance-optimization/SKILL.md:83 — used here
- `render-blocking resources` — skills/performance-optimization/SKILL.md:85, 107 — used here
- `main thread` — skills/performance-optimization/SKILL.md:87, 109 — used here
- `long tasks` — skills/performance-optimization/SKILL.md:87, 109, 398 — used here
- `re-renders` — skills/performance-optimization/SKILL.md:88, 269, 272 — used here
- `controlled component overhead` — skills/performance-optimization/SKILL.md:88 — used here
- `animation jank` — skills/performance-optimization/SKILL.md:89 — used here
- `layout thrashing` — skills/performance-optimization/SKILL.md:89 — used here
- `forced reflows` — skills/performance-optimization/SKILL.md:89 — used here
- `N+1 fetches` — skills/performance-optimization/SKILL.md:92 — used here
- `N+1 queries` — skills/performance-optimization/SKILL.md:94, 116, 123, 126, 454, 465, 492 — used here
- `indexes` — skills/performance-optimization/SKILL.md:94, 116, 152, 154, 166, 170, 180, 455, 466, 493 — used here
- `connection pool` — skills/performance-optimization/SKILL.md:95, 187, 192, 195, 202, 457, 469 — used here
- `lock contention` — skills/performance-optimization/SKILL.md:96 — used here
- `GC pauses` — skills/performance-optimization/SKILL.md:96 — used here
- `layout shift attribution` — skills/performance-optimization/SKILL.md:108 — used here
- `heap snapshot analysis` — skills/performance-optimization/SKILL.md:117 — used here
- `CPU profiling` — skills/performance-optimization/SKILL.md:118 — used here
- `regex backtracking` — skills/performance-optimization/SKILL.md:118 — used here
- `latency` — skills/performance-optimization/SKILL.md:119, 406, 427 — used here
- `unbounded data fetching` — skills/performance-optimization/SKILL.md:138 — used here
- `pagination` — skills/performance-optimization/SKILL.md:144, 470 — used here
- `Queries That Ignore Their Index` — skills/performance-optimization/SKILL.md:152 — defined here
- `query plan` — skills/performance-optimization/SKILL.md:154, 185, 455, 466, 493 — used here
- `EXPLAIN ANALYZE` — skills/performance-optimization/SKILL.md:157, 185 — used here
- `Seq Scan` — skills/performance-optimization/SKILL.md:166, 180 — used here
- `stale statistics` — skills/performance-optimization/SKILL.md:167 — used here
- `Sort node` — skills/performance-optimization/SKILL.md:168 — used here
- `composite index` — skills/performance-optimization/SKILL.md:170 — used here
- `selectivity` — skills/performance-optimization/SKILL.md:178 — used here
- `partial index` — skills/performance-optimization/SKILL.md:180 — used here
- `leading wildcard` — skills/performance-optimization/SKILL.md:181 — used here
- `trigram index` — skills/performance-optimization/SKILL.md:181 — used here
- `full-text index` — skills/performance-optimization/SKILL.md:181 — used here
- `expression index` — skills/performance-optimization/SKILL.md:182 — used here
- `write cost` — skills/performance-optimization/SKILL.md:183, 185, 455, 493 — used here
- `Connection Pool Exhaustion` — skills/performance-optimization/SKILL.md:187 — defined here
- `idle sessions` — skills/performance-optimization/SKILL.md:189 — used here
- `max_connections` — skills/performance-optimization/SKILL.md:196 — used here
- `connectionTimeoutMillis` — skills/performance-optimization/SKILL.md:198 — used here
- `pgbouncer` — skills/performance-optimization/SKILL.md:202 — used here
- `RDS Proxy` — skills/performance-optimization/SKILL.md:202 — used here
- `Image Optimization` — skills/performance-optimization/SKILL.md:204 — defined here
- `art direction` — skills/performance-optimization/SKILL.md:213 — used here
- `resolution switching` — skills/performance-optimization/SKILL.md:214 — used here
- `fetchpriority="high"` — skills/performance-optimization/SKILL.md:253 — used here
- `lazy loading` — skills/performance-optimization/SKILL.md:258, 263, 300, 471 — used here
- `decoding="async"` — skills/performance-optimization/SKILL.md:264 — used here
- `stable reference` — skills/performance-optimization/SKILL.md:278 — used here
- `React.memo` — skills/performance-optimization/SKILL.md:283, 474 — used here
- `useMemo` — skills/performance-optimization/SKILL.md:288, 474 — used here
- `tree-shaking` — skills/performance-optimization/SKILL.md:298 — used here
- `sideEffects: false` — skills/performance-optimization/SKILL.md:299 — used here
- `dynamic import` — skills/performance-optimization/SKILL.md:302 — used here
- `route-level code splitting` — skills/performance-optimization/SKILL.md:305 — used here
- `caching` — skills/performance-optimization/SKILL.md:317, 319, 456, 467, 494 — used here
- `in-process cache` — skills/performance-optimization/SKILL.md:325 — used here
- `shared cache` — skills/performance-optimization/SKILL.md:326 — used here
- `CDN cache` — skills/performance-optimization/SKILL.md:327 — used here
- `CACHE_TTL` — skills/performance-optimization/SKILL.md:331 — used here
- `immutable` — skills/performance-optimization/SKILL.md:347 — used here
- `content hashing` — skills/performance-optimization/SKILL.md:347 — used here
- `Cache-Control` — skills/performance-optimization/SKILL.md:350, 351 — used here
- `cache key` — skills/performance-optimization/SKILL.md:354, 467, 494 — defined here
- `invalidation strategy` — skills/performance-optimization/SKILL.md:356, 468 — defined here
- `TTL` — skills/performance-optimization/SKILL.md:360 — used here
- `event or tag based invalidation` — skills/performance-optimization/SKILL.md:361 — used here
- `versioned keys` — skills/performance-optimization/SKILL.md:362 — used here
- `cache stampede` — skills/performance-optimization/SKILL.md:364 — defined here
- `stale-while-revalidate` — skills/performance-optimization/SKILL.md:364 — used here
- `request coalescing` — skills/performance-optimization/SKILL.md:364, 366 — used here
- `negative caching` — skills/performance-optimization/SKILL.md:366 — used here
- `Keep or Revert` — skills/performance-optimization/SKILL.md:368 — defined here
- `cold cache` — skills/performance-optimization/SKILL.md:372 — used here
- `warm cache` — skills/performance-optimization/SKILL.md:372 — used here
- `change one thing at a time` — skills/performance-optimization/SKILL.md:374 — defined here
- `run-to-run variance` — skills/performance-optimization/SKILL.md:376, 412, 486 — defined here
- `"Neutral" is a revert` — skills/performance-optimization/SKILL.md:387, 458, 487 — defined here
- `correctness gates the metric` — skills/performance-optimization/SKILL.md:389 — defined here
- `optimization ledger` — skills/performance-optimization/SKILL.md:391-402, 488 — defined here
- `PERF.md` — skills/performance-optimization/SKILL.md:401 — used here
- `Guard Against Regression` — skills/performance-optimization/SKILL.md:403 — defined here
- `p95 latency` — skills/performance-optimization/SKILL.md:406, 427 — used here
- `synthetic CI gate` — skills/performance-optimization/SKILL.md:410, 495 — defined here
- `performance budget` — skills/performance-optimization/SKILL.md:411, 420, 495 — defined here
- `field monitoring` — skills/performance-optimization/SKILL.md:413, 495 — defined here
- `p75 movement` — skills/performance-optimization/SKILL.md:413 — used here
- `Time to Interactive` — skills/performance-optimization/SKILL.md:428 — used here
- `Lighthouse Performance score` — skills/performance-optimization/SKILL.md:429 — used here
- `bundlesize` — skills/performance-optimization/SKILL.md:435 — used here
- `Lighthouse CI` — skills/performance-optimization/SKILL.md:437, 438 — used here
- `lhci` — skills/performance-optimization/SKILL.md:438 — used here

## Structure
- Performance Optimization (line 6)
- Overview (line 8)
- When to Use (line 12)
- Core Web Vitals Targets (line 22)
- The Optimization Workflow (line 30)
  - Step 1: Measure (line 40)
  - Where to Start Measuring (line 73)
  - Step 2: Identify the Bottleneck (line 99)
  - Step 3: Fix Common Anti-Patterns (line 121)
    - N+1 Queries (Backend) (line 123)
    - Unbounded Data Fetching (line 138)
    - Queries That Ignore Their Index (line 152)
    - Connection Pool Exhaustion (line 187)
    - Missing Image Optimization (Frontend) (line 204)
    - Unnecessary Re-renders (React) (line 269)
    - Large Bundle Size (line 295)
    - Missing Caching (Backend) (line 317)
  - Step 4: Verify (Keep or Revert) (line 368)
    - Log every attempt, including the reverted ones (line 391)
  - Step 5: Guard Against Regression (line 403)
- See Also (line 441)
- Common Rationalizations (line 446)
- Red Flags (line 462)
- Verification (line 480)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · skills/performance-optimization/SKILL.md:401 · Mentions `PERF.md` ("A section in the PR description or a `PERF.md` in the repo both work.") as a repository ledger file, but no template or instance of `PERF.md` exists in the repository.
- missing-path · skills/performance-optimization/SKILL.md:435 · Mentions `npx bundlesize --config bundlesize.config.json` as a CI regression guard example, but `bundlesize.config.json` does not exist in the repository.
- doc-drift · skills/performance-optimization/SKILL.md:366, 443 vs docs/skill-anatomy.md:111-119 · Relative markdown links to `../../references/performance-checklist.md` break when installing the single skill in isolation via `npx skills add addyosmani/agent-skills --skill performance-optimization`, because single-skill installations copy only `skills/performance-optimization/`, omitting root `references/`.
- doc-drift · commands/review.toml:12 vs agents/web-performance-auditor.md:176, 183 and commands/webperf.toml:4 · Command routing inconsistency: `commands/review.toml:12` instructs agents to use `performance-optimization` during `/review` for backend and query checks ("5. **Performance** — No N+1 queries? No unbounded ops? (Use performance-optimization skill)"), whereas `agents/web-performance-auditor.md:183` and `commands/webperf.toml:4` tie performance audits to `/webperf`, which explicitly restricts scope: "targets web applications specifically. Do not use it for utility libraries, CLIs, or server-only code with no browser-facing output." This creates an unresolved routing split between browser-only audits (`/webperf`) and full-stack/backend performance reviews (`/review`).
- doc-drift · sources/addy-external/performance-optimization.md:5, 11 vs commands/webperf.toml:1 and commands/review.toml:12 · External website inconsistency: The top header of the published web page displays badge `/webperf` and description "Run the audit via /webperf", but the sidebar card simultaneously lists `Command: /review` under `Review phase`.
- doc-drift · skills/using-agent-skills/SKILL.md:146-162 vs skills/performance-optimization/SKILL.md:2 · In `skills/using-agent-skills/SKILL.md:146-162` (`Lifecycle Sequence`), `performance-optimization` is omitted from the canonical 16-step linear feature lifecycle, even though it appears in the Quick Reference matrix under the Review phase (line 186).
- doc-drift · sources/addy-external/performance-optimization.md:9-10 vs skills/performance-optimization/SKILL.md:30 · The external page claims all skills follow an identical anatomy including `03 Process (Step-by-step workflow)`. The skill in fact uses `## The Optimization Workflow` with major custom sections (`## Core Web Vitals Targets`, `### Where to Start Measuring`, `### Step 3: Fix Common Anti-Patterns`, and `## See Also`).
- script-bug · evals/fixtures/performance-optimization/benchmark.js:3-4 vs workspace environment · `benchmark.js` and `products.js` use CommonJS syntax (`require`, `module.exports`) without a local `package.json` specifying `"type": "commonjs"`. In environments where the parent repository specifies `"type": "module"`, invoking `node evals/fixtures/performance-optimization/benchmark.js` fails with `ReferenceError: require is not defined in ES module scope`. (Runs cleanly under `bun`).

## Observations
- "Neutral is a Revert" Principle: One of the most rigorous methodological contributions in the catalog. Defines explicit decision criteria at line 387: changes that do not demonstrably beat the baseline within statistical noise (run-to-run variance) must be reverted immediately rather than retained as harmless, preventing the insidious accumulation of unearned codebase complexity.
- Optimization Ledger Pattern: Mandates logging every optimization attempt—especially reverted ones—in PR descriptions or a `PERF.md` file (lines 391-402). Solves the recurring organizational amnesia where agents or engineers repeatedly test previously disproven optimization hypotheses across quarters.
- Query Plan Discipline over Intuition: Counters common database guessing ("just add an index") by requiring `EXPLAIN ANALYZE` before and after changes. Analyzes index geometry (composite index column ordering: equality first, then range/sort), warns against taxing writes on write-heavy tables, and flags when sequential scans are genuinely superior for low-selectivity data.
- Connection Pool Exhaustion Analysis: Accurately distinguishes between execution slowness and connection wait latency, warning that expanding pool sizes moves bottlenecks into unobservable database queues and prescribing proxy multiplexing (pgbouncer, RDS Proxy) for serverless autoscaling environments.
- Caching Discipline & Stampede Mitigation: Explicitly covers cache key composition (binding tenant, viewer, locale, and permissions to prevent data leakage across users), mandates choosing exactly one invalidation strategy, details negative caching, and provides concrete patterns for request coalescing and `stale-while-revalidate` to avoid stampedes.
- Dual-Layer Regression Guarding: Combines deterministic synthetic CI checks (performance budgets for bundles, Lighthouse CI) with attributed RUM field telemetry (`web-vitals` library, CrUX p75 tracking) to ensure that laboratory gains persist in real-world user conditions.

## Context cost
File size: 21,717 bytes (~5,429 tokens). References `references/performance-checklist.md` (13,139 bytes, ~3,285 tokens). Total combined context when checklist is loaded is 34,856 bytes (~8,714 tokens). If invoked alongside `evals/cases/performance-optimization.json` (1,688 bytes) and fixtures (`benchmark.js` 464 bytes, `products.js` 393 bytes), total context is ~37,401 bytes (~9,350 tokens).
