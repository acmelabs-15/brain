---
package: addy
path: agents/web-performance-auditor.md
type: agent
bytes: 12278
unit: inv-addy-3
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# agents/web-performance-auditor.md

## Purpose — required, verbatim
> "Web performance engineer focused on Core Web Vitals, loading, rendering, and network optimization. Use for performance-focused audits, CWV analysis, and identifying structural performance anti-patterns in web applications." — agents/web-performance-auditor.md:3

## Design intent — required
Specialist persona for evaluating web performance and Core Web Vitals. Implements dual operating modes (Quick mode for source code static analysis; Deep mode for interpreting Lighthouse, CrUX, PageSpeed Insights, DevTools traces, or Chrome DevTools MCP live captures). Enforces a strict Metric-Honesty Rule prohibiting fabricated metrics, requires framework identification before recommending idioms, and categorizes AI-generated performance anti-patterns across loading, rendering, and network layers.

## Phase — required
addy:Review

## Inputs — required
Source code, components, diffs; optionally Lighthouse JSON reports, PageSpeed Insights API responses, CrUX API field metrics, DevTools traces (Perfetto JSON), or Chrome DevTools MCP server/CLI outputs (agents/web-performance-auditor.md:20-26).

## Outputs — required
Web performance audit report following template (agents/web-performance-auditor.md:127-164) featuring a metrics scorecard (LCP, INP, CLS, Lighthouse score with data sources labeled or marked `not measured`), categorized findings with potential or measured impact, positive observations, and prioritized recommendations.

## Invokes — required
- skill browser-testing-with-devtools — agents/web-performance-auditor.md:36
- doc references/performance-checklist.md — agents/web-performance-auditor.md:175
- skill performance-optimization — agents/web-performance-auditor.md:176
- doc docs/agents.md — agents/web-performance-auditor.md:184

## Invoked by — required
- command web-performance-auditor — commands/webperf.toml:20

## Concepts named — required, verbatim
- `web-performance-auditor` — agents/web-performance-auditor.md:2 — defined here
- `Quick mode` — agents/web-performance-auditor.md:12 — defined here
- `Deep mode` — agents/web-performance-auditor.md:16 — defined here
- `Metric-Honesty Rule` — agents/web-performance-auditor.md:41 — defined here
- `Core Web Vitals` — agents/web-performance-auditor.md:57 — defined here
- `soft navigation` — agents/web-performance-auditor.md:66 — used here
- `Long Animation Frames` — agents/web-performance-auditor.md:67 — used here
- `Loading` — agents/web-performance-auditor.md:69 — defined here
- `Speculation Rules API` — agents/web-performance-auditor.md:74 — used here
- `Rendering / JavaScript` — agents/web-performance-auditor.md:83 — defined here
- `View Transitions API` — agents/web-performance-auditor.md:90 — used here
- `bfcache` — agents/web-performance-auditor.md:91 — used here
- `Network` — agents/web-performance-auditor.md:101 — defined here

## Structure
- # Web Performance Auditor — agents/web-performance-auditor.md:6
- ## Operating Modes — agents/web-performance-auditor.md:10
- ### Quick mode (default — no tool artifacts provided) — agents/web-performance-auditor.md:12
- ### Deep mode (activated when tool artifacts or live measurement are available) — agents/web-performance-auditor.md:16
- ## Tooling — agents/web-performance-auditor.md:29
- ## Metric-Honesty Rule — agents/web-performance-auditor.md:41
- ## Review Scope — agents/web-performance-auditor.md:53
- ### 1. Core Web Vitals — agents/web-performance-auditor.md:57
- ### 2. Loading — agents/web-performance-auditor.md:69
- ### 3. Rendering / JavaScript — agents/web-performance-auditor.md:83
- ### 4. Network — agents/web-performance-auditor.md:101
- ## Severity Classification — agents/web-performance-auditor.md:114
- ## Output Format — agents/web-performance-auditor.md:124
- ## Rules — agents/web-performance-auditor.md:166
- ## Composition — agents/web-performance-auditor.md:180

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly excluded from the general `/ship` fan-out because performance audits apply to web apps, not CLI tools or libraries (agents/web-performance-auditor.md:183). Catalogues framework-specific pitfalls for React, Vue, Angular, Svelte, and vanilla JS, plus specific AI-generated anti-patterns like state duplication, excessive `React.memo` wrapping, and sequential `await`s (agents/web-performance-auditor.md:92-113).

## Context cost
12278 bytes, ~2900 tokens.
