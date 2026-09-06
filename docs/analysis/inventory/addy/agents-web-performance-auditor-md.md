---
package: addy
path: agents/web-performance-auditor.md
type: agent
bytes: 12278
unit: inv-addy-3
aliases: []
memo_inputs:
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# agents/web-performance-auditor.md

## Purpose — required, verbatim
> "Web performance engineer focused on Core Web Vitals, loading, rendering, and network optimization. Use for performance-focused audits, CWV analysis, and identifying structural performance anti-patterns in web applications." — agents/web-performance-auditor.md:3

## Design intent — required
Persona definition for an experienced Web Performance Engineer conducting web performance audits across Core Web Vitals, loading, rendering, and network layers. Operates in Quick mode (static code scans tagging potential impact) and Deep mode (parsing live tool captures, Lighthouse, CrUX, PageSpeed Insights, or DevTools traces), strictly governed by the Metric-Honesty Rule forbidding metric fabrication.

## Phase — required
addy:Review

## Inputs — required
Web application source code, live URLs, Lighthouse JSON reports, PageSpeed Insights JSON, CrUX API field data, DevTools performance traces, and Chrome DevTools MCP live traces.

## Outputs — required
Web Performance Audit reports featuring an honesty-verified Scorecard (LCP, INP, CLS, Lighthouse Performance), summary counts, categorized findings (Critical, High, Medium, Low, Info), positive observations, and prioritized recommendations.

## Invokes — required
- skill skills/browser-testing-with-devtools — agents/web-performance-auditor.md:36
- reference references/performance-checklist.md — agents/web-performance-auditor.md:175
- skill skills/performance-optimization/SKILL.md — agents/web-performance-auditor.md:176
- doc docs/agents.md — agents/web-performance-auditor.md:184

## Invoked by — required
none

## Concepts named — required, verbatim
- `Web Performance Auditor` — agents/web-performance-auditor.md:6 — defined here
- `Operating Modes` — agents/web-performance-auditor.md:10 — defined here
- `Quick mode` — agents/web-performance-auditor.md:12 — defined here
- `Deep mode` — agents/web-performance-auditor.md:16 — defined here
- `Metric-Honesty Rule` — agents/web-performance-auditor.md:41 — defined here
- `Never fabricate metrics` — agents/web-performance-auditor.md:43 — defined here
- `Core Web Vitals` — agents/web-performance-auditor.md:57 — used here
- `Loading` — agents/web-performance-auditor.md:69 — defined here
- `Rendering / JavaScript` — agents/web-performance-auditor.md:83 — defined here
- `Network` — agents/web-performance-auditor.md:101 — defined here
- `Severity Classification` — agents/web-performance-auditor.md:114 — defined here
- `Critical` — agents/web-performance-auditor.md:118 — defined here
- `High` — agents/web-performance-auditor.md:119 — defined here
- `Medium` — agents/web-performance-auditor.md:120 — defined here
- `Low` — agents/web-performance-auditor.md:121 — defined here
- `Info` — agents/web-performance-auditor.md:122 — defined here
- `Web Performance Audit` — agents/web-performance-auditor.md:127 — defined here
- `Scorecard` — agents/web-performance-auditor.md:129 — defined here

## Structure
- frontmatter (name, description)
- # Web Performance Auditor
- ## Operating Modes
- ### Quick mode (default — no tool artifacts provided)
- ### Deep mode (activated when tool artifacts or live measurement are available)
- ## Tooling
- ## Metric-Honesty Rule
- ## Review Scope
- ### 1. Core Web Vitals
- ### 2. Loading
- ### 3. Rendering / JavaScript
- ### 4. Network
- ## Severity Classification
- ## Output Format
- ## Rules
- ## Composition

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Deliberately excluded from the `/ship` fan-out because performance audits apply strictly to web applications rather than CLI tools or libraries, avoiding noisy reports in non-web projects (line 183).

## Context cost
12278 bytes (~3069 tokens).
