---
package: addy
path: references/performance-checklist.md
type: doc
bytes: 13139
unit: inv-addy-3
---

# references/performance-checklist.md

## Purpose — required, verbatim
> "# Performance Checklist\n\nQuick reference checklist for web application performance. Use alongside the `performance-optimization` skill." — references/performance-checklist.md:1-3

## Design intent — required
Provides an exhaustive, production-grade reference checklist and operational guide for web application performance optimization across frontend, backend, network, database, caching, and measurement layers. It establishes concrete Core Web Vitals numerical thresholds (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1), structured TTFB waterfall triage, fine-grained frontend resource optimization (images, JS scheduling with `yieldToMain` and `scheduler.yield()`, CSS/fonts, bfcache preservation), backend database index and connection pool sizing strategies, formal taxonomy of caching patterns (cache-aside, read-through, write-through, write-behind, negative caching, stampede protection with request coalescing), CLI measurement commands, and a diagnostic anti-patterns matrix.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill `performance-optimization` — references/performance-checklist.md:3,135
- doc/tool `CrUX Vis` — references/performance-checklist.md:189

## Invoked by — required
- skill `skills/performance-optimization/SKILL.md` — skills/performance-optimization/SKILL.md:366,443
- skill `skills/shipping-and-launch/SKILL.md` — skills/shipping-and-launch/SKILL.md:270
- skill `skills/code-review-and-quality/SKILL.md` — skills/code-review-and-quality/SKILL.md:352
- agent `agents/web-performance-auditor.md` — agents/web-performance-auditor.md:175
- doc `README.md` — README.md:310
- doc `docs/getting-started.md` — docs/getting-started.md:134

## Concepts named — required, verbatim
- `Performance Checklist` — references/performance-checklist.md:1 — defined here
- `performance-optimization` — references/performance-checklist.md:3,135 — used here
- `Core Web Vitals Targets` — references/performance-checklist.md:7,15 — defined here
- `LCP (Largest Contentful Paint)` — references/performance-checklist.md:19 — defined here
- `INP (Interaction to Next Paint)` — references/performance-checklist.md:20 — defined here
- `CLS (Cumulative Layout Shift)` — references/performance-checklist.md:21 — defined here
- `TTFB Diagnosis` — references/performance-checklist.md:8,23 — defined here
- `TTFB` — references/performance-checklist.md:25 — used here
- `DevTools Network waterfall` — references/performance-checklist.md:25 — used here
- `DNS resolution` — references/performance-checklist.md:27 — used here
- `dns-prefetch` — references/performance-checklist.md:27 — used here
- `preconnect` — references/performance-checklist.md:27,75 — used here
- `TCP/TLS handshake` — references/performance-checklist.md:28 — used here
- `HTTP/2` — references/performance-checklist.md:28,74 — used here
- `edge deployment` — references/performance-checklist.md:28,129 — used here
- `keep-alive` — references/performance-checklist.md:28 — used here
- `Server processing` — references/performance-checklist.md:29 — used here
- `Frontend Checklist` — references/performance-checklist.md:9,31 — defined here
- `WebP` — references/performance-checklist.md:34,233 — used here
- `AVIF` — references/performance-checklist.md:34 — used here
- `srcset` — references/performance-checklist.md:35 — used here
- `sizes` — references/performance-checklist.md:35 — used here
- `width` and `height` — references/performance-checklist.md:36 — used here
- `loading="lazy"` — references/performance-checklist.md:37 — used here
- `decoding="async"` — references/performance-checklist.md:37 — used here
- `fetchpriority="high"` — references/performance-checklist.md:38 — used here
- `Code splitting` — references/performance-checklist.md:42 — used here
- `dynamic import()` — references/performance-checklist.md:42 — used here
- `Tree shaking` — references/performance-checklist.md:43 — used here
- `sideEffects: false` — references/performance-checklist.md:43 — used here
- `Web Workers` — references/performance-checklist.md:45,235 — used here
- `React.memo()` — references/performance-checklist.md:46 — used here
- `useMemo()` — references/performance-checklist.md:47 — used here
- `useCallback()` — references/performance-checklist.md:47 — used here
- `Long tasks` — references/performance-checklist.md:48,190,235 — used here
- `main thread` — references/performance-checklist.md:48,235 — used here
- `yieldToMain` — references/performance-checklist.md:49,235 — defined here
- `scheduler.yield()` — references/performance-checklist.md:50,235 — used here
- `scheduler.postTask()` — references/performance-checklist.md:50 — used here
- `isInputPending()` — references/performance-checklist.md:50 — used here
- `requestIdleCallback` — references/performance-checklist.md:51 — used here
- `facade` — references/performance-checklist.md:53 — used here
- `Critical CSS` — references/performance-checklist.md:56 — used here
- `CSS-in-JS runtime cost` — references/performance-checklist.md:58 — used here
- `WOFF2` — references/performance-checklist.md:62,64 — used here
- `font-display: swap` — references/performance-checklist.md:65 — used here
- `FOIT` — references/performance-checklist.md:65 — used here
- `unicode-range` — references/performance-checklist.md:66 — used here
- `Variable fonts` — references/performance-checklist.md:67 — used here
- `size-adjust` — references/performance-checklist.md:68 — used here
- `ascent-override` — references/performance-checklist.md:68 — used here
- `descent-override` — references/performance-checklist.md:68 — used here
- `System font stack` — references/performance-checklist.md:69 — used here
- `content hashing` — references/performance-checklist.md:72 — used here
- `Cache-Control` — references/performance-checklist.md:73,85 — used here
- `HTTP/3` — references/performance-checklist.md:74 — used here
- `fetchpriority` — references/performance-checklist.md:76 — used here
- `layout thrashing` — references/performance-checklist.md:80,232 — used here
- `forced synchronous layouts` — references/performance-checklist.md:80 — used here
- `virtualization` — references/performance-checklist.md:82 — used here
- `content-visibility: auto` — references/performance-checklist.md:84 — used here
- `contain-intrinsic-size` — references/performance-checklist.md:84 — used here
- `bfcache` — references/performance-checklist.md:85 — used here
- `back/forward cache` — references/performance-checklist.md:85 — used here
- `Backend Checklist` — references/performance-checklist.md:10,87 — defined here
- `N+1 query` — references/performance-checklist.md:90,223 — used here
- `eager loading` — references/performance-checklist.md:90 — used here
- `Connection pooling` — references/performance-checklist.md:93,113,228 — defined here
- `Slow query logging` — references/performance-checklist.md:94 — used here
- `Query plans` — references/performance-checklist.md:96 — defined here
- `EXPLAIN ANALYZE` — references/performance-checklist.md:97,226 — used here
- `Seq Scan` — references/performance-checklist.md:98 — used here
- `Composite index` — references/performance-checklist.md:100,104 — used here
- `Index strategy` — references/performance-checklist.md:103 — defined here
- `Covering index` — references/performance-checklist.md:106 — used here
- `index-only scan` — references/performance-checklist.md:106 — used here
- `Partial index` — references/performance-checklist.md:107 — used here
- `Expression index` — references/performance-checklist.md:108 — used here
- `Full-text or trigram index` — references/performance-checklist.md:109 — used here
- `pgbouncer` — references/performance-checklist.md:118 — used here
- `RDS Proxy` — references/performance-checklist.md:118 — used here
- `p95` — references/performance-checklist.md:121 — used here
- `Response compression` — references/performance-checklist.md:124 — used here
- `brotli` — references/performance-checklist.md:124 — used here
- `Redis` — references/performance-checklist.md:125 — used here
- `CDN` — references/performance-checklist.md:125,128 — used here
- `Horizontal scaling` — references/performance-checklist.md:130 — used here
- `Health check endpoint` — references/performance-checklist.md:131 — used here
- `Caching Strategies` — references/performance-checklist.md:11,133 — defined here
- `Cache-aside` — references/performance-checklist.md:141 — defined here
- `Read-through` — references/performance-checklist.md:142 — defined here
- `Write-through` — references/performance-checklist.md:143 — defined here
- `Write-behind` — references/performance-checklist.md:144 — defined here
- `write-back` — references/performance-checklist.md:144 — defined here
- `Negative caching` — references/performance-checklist.md:146 — defined here
- `Request coalescing` — references/performance-checklist.md:154 — defined here
- `stampede protection` — references/performance-checklist.md:141,154,179,231 — defined here
- `loadOnce` — references/performance-checklist.md:161 — defined here
- `stale-while-revalidate` — references/performance-checklist.md:170,179,231 — used here
- `Cache checklist` — references/performance-checklist.md:172 — defined here
- `Measurement Commands` — references/performance-checklist.md:12,185 — defined here
- `CrUX Vis` — references/performance-checklist.md:189 — used here
- `RUM` — references/performance-checklist.md:189 — used here
- `DevTools Performance panel` — references/performance-checklist.md:190 — used here
- `CPU throttling` — references/performance-checklist.md:191 — used here
- `Lighthouse CLI` — references/performance-checklist.md:194 — used here
- `webpack-bundle-analyzer` — references/performance-checklist.md:198 — used here
- `vite-bundle-visualizer` — references/performance-checklist.md:200 — used here
- `bundlesize` — references/performance-checklist.md:203 — used here
- `web-vitals` — references/performance-checklist.md:205,206 — used here
- `web-vitals/attribution` — references/performance-checklist.md:212 — used here
- `Common Anti-Patterns` — references/performance-checklist.md:13,219 — defined here
- `Time to Interactive` — references/performance-checklist.md:234 — used here
- `Memory leaks` — references/performance-checklist.md:236 — used here

## Structure
- `# Performance Checklist` — line 1
- `## Table of Contents` — line 5
- `## Core Web Vitals Targets` — line 15
- `## TTFB Diagnosis` — line 23
- `## Frontend Checklist` — line 31
  - `### Images` — line 33
  - `### JavaScript` — line 40
  - `### CSS` — line 55
  - `### Fonts` — line 60
  - `### Network` — line 71
  - `### Rendering` — line 79
- `## Backend Checklist` — line 87
  - `### Database` — line 89
    - `#### Query plans` — line 96
    - `#### Index strategy` — line 103
    - `#### Connection pooling` — line 113
  - `### API` — line 120
  - `### Infrastructure` — line 127
- `## Caching Strategies` — line 133
  - `### Read and write patterns` — line 137
  - `### Negative caching` — line 146
  - `### Request coalescing (stampede protection)` — line 154
  - `### Cache checklist` — line 172
- `## Measurement Commands` — line 185
  - `### INP field data and DevTools workflow` — line 187
- `## Common Anti-Patterns` — line 219

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Deep, highly actionable guidance spanning frontend render lifecycle, network transport, database indexing semantics, and concurrency control.
- Provides TypeScript code for in-memory request coalescing (`loadOnce`), verified executable with Bun.
- Explicitly differentiates symptom vs cause in caching (e.g. negative caching should have shorter TTL, origin errors must never be cached).
- Bridges measurement tooling (`CrUX Vis`, `Lighthouse CLI`, `web-vitals/attribution`) directly into anti-pattern remediation.

## Context cost
13,139 bytes (~3,285 tokens).
