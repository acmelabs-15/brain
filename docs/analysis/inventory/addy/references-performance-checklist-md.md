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
verified: 2026-09-05 quote-check+coverage
---

# references/performance-checklist.md

## Purpose — required, verbatim
> "Quick reference checklist for web application performance. Use alongside the `performance-optimization` skill." — references/performance-checklist.md:3

## Design intent — required
Operational and review checklist standardizing performance verification across web applications. Supplements the `performance-optimization` skill with concrete Core Web Vitals thresholds (LCP, INP, CLS), TTFB waterfall diagnostic steps, frontend optimization rules (images, JavaScript execution budgets, font loading, rendering performance), backend database query tuning guidelines (EXPLAIN ANALYZE baselining, index strategies, connection pool sizing), caching patterns (cache-aside, read/write-through, negative caching, request coalescing), CLI measurement commands, and a structured catalog of common performance anti-patterns.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill performance-optimization — references/performance-checklist.md:3

## Invoked by — required
- agent web-performance-auditor — agents/web-performance-auditor.md:175
- doc docs/getting-started.md — docs/getting-started.md:134
- doc README.md — README.md:310
- skill shipping-and-launch — skills/shipping-and-launch/SKILL.md:270
- skill code-review-and-quality — skills/code-review-and-quality/SKILL.md:352
- skill performance-optimization — skills/performance-optimization/SKILL.md:443

## Concepts named — required, verbatim
- `Core Web Vitals` — references/performance-checklist.md:15 — used here
- `LCP` — references/performance-checklist.md:19 — used here
- `INP` — references/performance-checklist.md:20 — used here
- `CLS` — references/performance-checklist.md:21 — used here
- `TTFB` — references/performance-checklist.md:23 — used here
- `yieldToMain` — references/performance-checklist.md:49 — defined here
- `Cache-aside` — references/performance-checklist.md:141 — defined here
- `Read-through` — references/performance-checklist.md:142 — defined here
- `Write-through` — references/performance-checklist.md:143 — defined here
- `Write-behind` — references/performance-checklist.md:144 — defined here
- `Negative caching` — references/performance-checklist.md:146 — defined here
- `Request coalescing` — references/performance-checklist.md:154 — defined here
- `performance-optimization` — references/performance-checklist.md:3 — used here

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
- ## Measurement Commands — references/performance-checklist.md:186
- ### INP field data and DevTools workflow — references/performance-checklist.md:188
- ## Common Anti-Patterns — references/performance-checklist.md:219

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Cache key scoping requirement: "No per-user data cached under a key that does not identify the user" — references/performance-checklist.md:176
- Negative cache rationale: "A key that misses on every lookup (a nonexistent user ID probed in a loop, a 404 asset) sends every request to the origin, which is a cache that only protects the happy path." — references/performance-checklist.md:148
- Query baseline principle: "it is the baseline" — references/performance-checklist.md:97

## Context cost
13139 bytes (~3285 tokens). Reference document loaded alongside performance-optimization or review skills.
