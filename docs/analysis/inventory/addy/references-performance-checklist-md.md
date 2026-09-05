---
package: addy
path: references/performance-checklist.md
type: doc
bytes: 13139
unit: inv-addy-35
deprecated: false
aliases: []
memo_inputs:
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# references/performance-checklist.md

## Purpose — required, verbatim
> "Quick reference checklist for web application performance. Use alongside the `performance-optimization` skill." — references/performance-checklist.md:3

## Design intent — required
Provides an actionable operational runbook and baseline checklist covering frontend and backend web application performance. Spans Core Web Vitals numerical targets, TTFB diagnostic workflows, frontend optimization across images, JavaScript chunking, CSS, web fonts, network protocols, and rendering pipelines. On the backend, provides exhaustive checks for database execution plans, indexing strategies, connection pool sizing, API latency, and caching architectures (including cache-aside, write-behind, negative caching, and stampede prevention). Also provides concrete measurement commands and a reference table of common anti-patterns and their remediations.

## Phase — required
cross-phase

## Inputs — required
Web application codebase, database query plans (`EXPLAIN ANALYZE`), network waterfall profiles, bundle analyzer outputs, and real-user monitoring (RUM) or synthetic performance metrics.

## Outputs — required
none

## Invokes — required
- skill performance-optimization — references/performance-checklist.md:3

## Invoked by — required
- skill skills/performance-optimization/SKILL.md — skills/performance-optimization/SKILL.md:366
- skill skills/shipping-and-launch/SKILL.md — skills/shipping-and-launch/SKILL.md:270
- skill skills/code-review-and-quality/SKILL.md — skills/code-review-and-quality/SKILL.md:352
- agent agents/web-performance-auditor.md — agents/web-performance-auditor.md:175
- doc README.md — README.md:310
- doc docs/getting-started.md — docs/getting-started.md:134
- script scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:142

## Concepts named — required, verbatim
- `Core Web Vitals Targets` — references/performance-checklist.md:15 — defined here
- `LCP` — references/performance-checklist.md:19 — defined here
- `Largest Contentful Paint` — references/performance-checklist.md:19 — defined here
- `INP` — references/performance-checklist.md:20 — defined here
- `Interaction to Next Paint` — references/performance-checklist.md:20 — defined here
- `CLS` — references/performance-checklist.md:21 — defined here
- `Cumulative Layout Shift` — references/performance-checklist.md:21 — defined here
- `TTFB Diagnosis` — references/performance-checklist.md:23 — defined here
- `yieldToMain` — references/performance-checklist.md:49 — defined here
- `bfcache` — references/performance-checklist.md:85 — defined here
- `EXPLAIN ANALYZE` — references/performance-checklist.md:97 — defined here
- `Cache-aside` — references/performance-checklist.md:141 — defined here
- `Read-through` — references/performance-checklist.md:142 — defined here
- `Write-through` — references/performance-checklist.md:143 — defined here
- `Write-behind` — references/performance-checklist.md:144 — defined here
- `Negative caching` — references/performance-checklist.md:146 — defined here
- `Request coalescing` — references/performance-checklist.md:154 — defined here
- `stampede protection` — references/performance-checklist.md:154 — defined here
- `Cache checklist` — references/performance-checklist.md:172 — defined here
- `Measurement Commands` — references/performance-checklist.md:185 — defined here
- `Common Anti-Patterns` — references/performance-checklist.md:219 — defined here
- `N+1 queries` — references/performance-checklist.md:223 — defined here
- `Layout thrashing` — references/performance-checklist.md:232 — defined here

## Structure
- # Performance Checklist — references/performance-checklist.md:1
- ## Table of Contents — references/performance-checklist.md:5
- ## Core Web Vitals Targets — references/performance-checklist.md:15
- ## TTFB Diagnosis — references/performance-checklist.md:23
- ## Frontend Checklist — references/performance-checklist.md:31
- ### Images — references/performance-checklist.md:33
- ### JavaScript — references/performance-checklist.md:40
- ### CSS — references/performance-checklist.md:55
- ### Fonts — references/performance-checklist.md:60
- ### Network — references/performance-checklist.md:71
- ### Rendering — references/performance-checklist.md:79
- ## Backend Checklist — references/performance-checklist.md:87
- ### Database — references/performance-checklist.md:89
- #### Query plans — references/performance-checklist.md:96
- #### Index strategy — references/performance-checklist.md:103
- #### Connection pooling — references/performance-checklist.md:113
- ### API — references/performance-checklist.md:120
- ### Infrastructure — references/performance-checklist.md:127
- ## Caching Strategies — references/performance-checklist.md:133
- ### Read and write patterns — references/performance-checklist.md:137
- ### Negative caching — references/performance-checklist.md:146
- ### Request coalescing (stampede protection) — references/performance-checklist.md:154
- ### Cache checklist — references/performance-checklist.md:172
- ## Measurement Commands — references/performance-checklist.md:185
- ### INP field data and DevTools workflow — references/performance-checklist.md:187
- ## Common Anti-Patterns — references/performance-checklist.md:219

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Includes a TypeScript implementation snippet for in-flight request coalescing (`loadOnce`) on lines 158-168 to prevent cache stampedes. Provides rigorous database indexing guidelines requiring execution plan verification (`EXPLAIN ANALYZE`) before and after adding indexes, noting that unused indexes incur write overhead without benefit. Formulates exact font delivery best practices including variable fonts, metric overrides (`size-adjust`, `ascent-override`, `descent-override`), and WOFF2 exclusivity.

## Context cost
13139 bytes, ~3280 tokens.
