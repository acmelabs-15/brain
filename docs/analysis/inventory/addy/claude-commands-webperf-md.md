---
package: addy
path: .claude/commands/webperf.md
type: command
bytes: 1974
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .claude/commands/webperf.md, sha256: 74c0c1335f1397a5138a78eda4275e4e5deba16c4537f3a4b4971c3280d0ba27}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/commands/webperf.md

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — .claude/commands/webperf.md:2

## Design intent — required
Executes browser-facing web performance audits by automatically selecting between Deep mode (when Lighthouse reports, PageSpeed Insights, CrUX API data, DevTools traces, or Chrome DevTools MCP are available) and Quick mode (source code static anti-pattern scan), spawning the `web-performance-auditor` subagent persona to return a structured performance scorecard and prioritized recommendations.

## Phase — required
addy:REVIEW

## Inputs — required
- Target files, components, or git diff
- Performance artifacts (Lighthouse JSON, PSI JSON, CrUX response, DevTools trace) or live URL with MCP
- Expected mode flag (Deep vs Quick)

## Outputs — required
- Web performance audit report (scorecard, ranked findings, positive observations, recommendations)

## Invokes — required
- agent web-performance-auditor — .claude/commands/webperf.md:2,21

## Invoked by — required
none

## Concepts named — required, verbatim
- `web-performance-auditor` — .claude/commands/webperf.md:2,21 — used here
- `Deep mode` — .claude/commands/webperf.md:9 — defined here
- `Chrome DevTools MCP` — .claude/commands/webperf.md:10,15 — used here
- `Lighthouse` — .claude/commands/webperf.md:10,11,24 — used here
- `PageSpeed Insights` — .claude/commands/webperf.md:11 — used here
- `CrUX` — .claude/commands/webperf.md:11,12,24 — used here
- `Quick mode` — .claude/commands/webperf.md:17 — defined here
- `scorecard` — .claude/commands/webperf.md:28 — defined here

## Structure
- Target scope restriction
- ## Determine the mode
- ## Run the audit
- ## Output

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Scoped strictly to web applications: "Do not use it for utility libraries, CLIs, or server-only code with no browser-facing output" (.claude/commands/webperf.md:5).
- Integrates Chrome DevTools MCP CLI and MCP server tools directly.

## Context cost
1974 bytes, ~495 tokens. Transitive cost: spawns `web-performance-auditor` (12278 bytes, ~3070 tokens).
