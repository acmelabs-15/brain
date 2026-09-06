---
package: addy
path: references/performance-checklist.md
type: doc
bytes: 13139
unit: inv-addy-35
aliases: []
memo_inputs:
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# references/performance-checklist.md

## Purpose — required, verbatim
> "Quick reference checklist for web application performance. Use alongside the `performance-optimization` skill." — references/performance-checklist.md:3

## Design intent — required
Comprehensive, production-oriented reference checklist and diagnostic playbook for full-stack web performance optimization. It establishes quantitative targets for Google Core Web Vitals (LCP, INP, CLS) and TTFB, structured across frontend assets (images, JS bundle splitting, critical CSS, WOFF2 font subsetting, content-visibility rendering) and backend subsystems (database query plan analysis with EXPLAIN ANALYZE, indexing strategies, connection pooling, and API latency). Furthermore, it codifies caching patterns (cache-aside, read-through, write-through, write-behind, negative caching, request coalescing stampede protection) and CLI measurement tooling (Lighthouse, bundle visualizers, web-vitals attribution) paired with an anti-pattern remediation table.

## Phase — required
cross-phase

## Inputs — required
Web application codebase, frontend asset configurations, bundle analysis files (stats.json), database schemas and query plans (EXPLAIN ANALYZE), API latency metrics, RUM/CrUX telemetry data.

## Outputs — required
none

## Invokes — required
- skill performance-optimization — references/performance-checklist.md:3

## Invoked by — required
- doc README.md — README.md:310
- doc docs/getting-started.md — docs/getting-started.md:134
- agent agents/web-performance-auditor.md — agents/web-performance-auditor.md:175
- skill skills/performance-optimization — skills/performance-optimization/SKILL.md:366
- skill skills/shipping-and-launch — skills/shipping-and-launch/SKILL.md:270
- skill skills/code-review-and-quality — skills/code-review-and-quality/SKILL.md:352

## Concepts named — required, verbatim
- `Performance Checklist` — references/performance-checklist.md:1 — defined here
- `performance-optimization` — references/performance-checklist.md:3, 135 — used here
- `Core Web Vitals Targets` — references/performance-checklist.md:7, 15 — defined here
- `TTFB Diagnosis` — references/performance-checklist.md:8, 23 — defined here
- `Frontend Checklist` — references/performance-checklist.md:9, 31 — defined here
- `Backend Checklist` — references/performance-checklist.md:10, 87 — defined here
- `Caching Strategies` — references/performance-checklist.md:11, 133 — defined here
- `Measurement Commands` — references/performance-checklist.md:12, 185 — defined here
- `Common Anti-Patterns` — references/performance-checklist.md:13, 219 — defined here
- `LCP` — references/performance-checklist.md:19 — used here
- `Largest Contentful Paint` — references/performance-checklist.md:19 — used here
- `INP` — references/performance-checklist.md:20 — used here
- `Interaction to Next Paint` — references/performance-checklist.md:20 — used here
- `CLS` — references/performance-checklist.md:21 — used here
- `Cumulative Layout Shift` — references/performance-checklist.md:21 — used here
- `yieldToMain` — references/performance-checklist.md:49, 235 — used here
- `scheduler.yield()` — references/performance-checklist.md:50, 235 — used here
- `scheduler.postTask()` — references/performance-checklist.md:50 — used here
- `isInputPending()` — references/performance-checklist.md:50 — used here
- `requestIdleCallback` — references/performance-checklist.md:51 — used here
- `content-visibility: auto` — references/performance-checklist.md:84 — used here
- `contain-intrinsic-size` — references/performance-checklist.md:84 — used here
- `bfcache` — references/performance-checklist.md:85 — used here
- `EXPLAIN ANALYZE` — references/performance-checklist.md:97, 226 — used here
- `Cache-aside` — references/performance-checklist.md:141 — defined here
- `Read-through` — references/performance-checklist.md:142 — defined here
- `Write-through` — references/performance-checklist.md:143 — defined here
- `Write-behind` — references/performance-checklist.md:144 — defined here
- `Negative caching` — references/performance-checklist.md:146 — defined here
- `Request coalescing` — references/performance-checklist.md:154 — defined here
- `stampede protection` — references/performance-checklist.md:141, 154 — defined here
- `stale-while-revalidate` — references/performance-checklist.md:170, 179, 231 — used here

## Structure
- # Performance Checklist
- ## Table of Contents
- ## Core Web Vitals Targets
- ## TTFB Diagnosis
- ## Frontend Checklist
- ### Images
- ### JavaScript
- ### CSS
- ### Fonts
- ### Network
- ### Rendering
- ## Backend Checklist
- ### Database
- #### Query plans
- #### Index strategy
- #### Connection pooling
- ### API
- ### Infrastructure
- ## Caching Strategies
- ### Read and write patterns
- ### Negative caching
- ### Request coalescing (stampede protection)
- ### Cache checklist
- ## Measurement Commands
- ### INP field data and DevTools workflow
- ## Common Anti-Patterns

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Detailed caching pattern comparison table (Cache-aside, Read-through, Write-through, Write-behind) highlighting use cases and pitfalls.
- Complete in-flight request coalescing TypeScript snippet (`inFlight = new Map<string, Promise<unknown>>()`) preventing cache stampedes.
- Database query performance methodology: requiring `EXPLAIN ANALYZE` before and after index modification, reverting any index that fails to change the query execution plan.
- Practical modern browser scheduling guidance targeting INP: breaking long tasks (> 50ms) using `scheduler.yield()` or `yieldToMain`, and leveraging `content-visibility: auto` with `contain-intrinsic-size` for deferred rendering.

## Context cost
13139 bytes, ~3280 tokens. Supplementary performance reference loaded on demand during optimization or launch audits.
