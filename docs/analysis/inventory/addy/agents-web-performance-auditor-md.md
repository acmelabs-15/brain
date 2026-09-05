---
package: addy
path: agents/web-performance-auditor.md
type: agent
bytes: 12278
unit: inv-addy-3
deprecated: false
aliases: []
memo_inputs:
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# agents/web-performance-auditor.md

## Purpose — required, verbatim
> "Web performance engineer focused on Core Web Vitals, loading, rendering, and network optimization. Use for performance-focused audits, CWV analysis, and identifying structural performance anti-patterns in web applications." — agents/web-performance-auditor.md:3

## Design intent — required
A persona agent acting as an expert Web Performance Engineer focused on Core Web Vitals (LCP, INP, CLS), loading performance, rendering optimization, and network efficiency. Provides two distinct modes: Quick mode (static code scan, unmeasured scorecard, potential impact tags) and Deep mode (data-driven interpretation of Lighthouse, PageSpeed Insights, CrUX field data, DevTools traces, or live Chrome DevTools MCP captures). Strictly enforces the Metric-Honesty Rule against fabricating synthetic numbers. Deliberately separated from /ship to keep pre-launch checks focused on web applications.

## Phase — required
addy:Review

## Inputs — required
Source code, Lighthouse JSON reports, PageSpeed Insights JSON responses, CrUX API responses, DevTools performance traces, and live URL targets via Chrome DevTools MCP.

## Outputs — required
Structured performance audit report with Scorecard, summary counts, prioritized findings with recommendations, positive observations, and next steps:
> "## Web Performance Audit" — agents/web-performance-auditor.md:127

## Invokes — required
- skill browser-testing-with-devtools — agents/web-performance-auditor.md:36
- reference references/performance-checklist.md — agents/web-performance-auditor.md:175
- skill performance-optimization — agents/web-performance-auditor.md:176
- doc docs/agents.md — agents/web-performance-auditor.md:184

## Invoked by — required
- command web-performance-auditor — commands/webperf.toml:20
- doc web-performance-auditor — docs/agents.md:10

## Concepts named — required, verbatim
- `Web Performance Auditor` — agents/web-performance-auditor.md:6 — defined here
- `Quick mode` — agents/web-performance-auditor.md:12 — defined here
- `Deep mode` — agents/web-performance-auditor.md:16 — defined here
- `Metric-Honesty Rule` — agents/web-performance-auditor.md:41 — defined here
- `Core Web Vitals` — agents/web-performance-auditor.md:57 — defined here
- `Loading` — agents/web-performance-auditor.md:69 — defined here
- `Rendering / JavaScript` — agents/web-performance-auditor.md:83 — defined here
- `Network` — agents/web-performance-auditor.md:101 — defined here
- `Web Performance Audit` — agents/web-performance-auditor.md:127 — defined here
- `Scorecard` — agents/web-performance-auditor.md:129 — defined here
- `Soft navigation` — agents/web-performance-auditor.md:66 — used here
- `Long Animation Frames` — agents/web-performance-auditor.md:67 — used here
- `Speculation Rules API` — agents/web-performance-auditor.md:74 — used here
- `View Transitions API` — agents/web-performance-auditor.md:90 — used here
- `bfcache` — agents/web-performance-auditor.md:91 — used here

## Structure
- Frontmatter metadata (name, description) — agents/web-performance-auditor.md:1-4
- Title and Role Statement — agents/web-performance-auditor.md:6-8
- Operating Modes (Quick mode, Deep mode) — agents/web-performance-auditor.md:10-28
- Tooling — agents/web-performance-auditor.md:29-40
- Metric-Honesty Rule — agents/web-performance-auditor.md:41-52
- Review Scope (Core Web Vitals, Loading, Rendering / JavaScript, Network) — agents/web-performance-auditor.md:53-113
- Severity Classification (Critical, High, Medium, Low, Info) — agents/web-performance-auditor.md:114-123
- Output Format (Scorecard, Summary, Findings, Positive Observations, Recommendations) — agents/web-performance-auditor.md:124-165
- Rules — agents/web-performance-auditor.md:166-179
- Composition — agents/web-performance-auditor.md:180-185

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Integrity rule: "**Never fabricate metrics.** An LLM reading static source code cannot measure real-world LCP, INP, or CLS." — agents/web-performance-auditor.md:43.
- Tool distinction: "Field and lab data are not interchangeable: field is what real users experienced, lab is a single synthetic run." — agents/web-performance-auditor.md:49.
- Exclusion from /ship: "Not included in `/ship` fan-out — performance audits apply to web applications only, not to utility libraries or CLI tools, so adding it to a global pre-launch fan-out would create noise in non-web projects." — agents/web-performance-auditor.md:183.

## Context cost
12278 bytes, ~2800 tokens. When invoked in Deep mode with traces or Lighthouse reports, context expands significantly depending on artifact size.
