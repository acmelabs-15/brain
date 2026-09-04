---
package: addy
path: .gemini/commands/webperf.toml
type: command
bytes: 1884
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .gemini/commands/webperf.toml, sha256: 5b08fc19bacdb0f9984e9225a2c7913cef51249c9472f51169efa5a83f53a60b}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/webperf.toml

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — .gemini/commands/webperf.toml:1

## Design intent — required
Provides an automated performance auditing workflow specialized for browser-facing web applications. It dynamically determines whether to execute a Deep mode (grounded in live measurements, Lighthouse/PageSpeed Insights JSON reports, CrUX field data, or DevTools traces) or a Quick mode (static code scan for structural performance anti-patterns), enforcing a strict anti-hallucination metric-honesty rule.

## Phase — required
addy:REVIEW

## Inputs — required
- Files, components, or diffs under review
- Performance artifacts (optional for Deep mode: Lighthouse JSON, PageSpeed Insights JSON, CrUX API response, DevTools trace)
- Live URL or page name

## Outputs — required
- Full web performance audit report (scorecard, ranked findings, positive observations, recommendations)

## Invokes — required
- agent web-performance-auditor — .gemini/commands/webperf.toml:1,20

## Invoked by — required
none

## Concepts named — required, verbatim
- `web-performance-auditor` — .gemini/commands/webperf.toml:1,20 — used here
- `Deep mode` — .gemini/commands/webperf.toml:8 — defined here
- `Lighthouse JSON report` — .gemini/commands/webperf.toml:9 — used here
- `Chrome DevTools MCP CLI` — .gemini/commands/webperf.toml:9,14 — used here
- `PageSpeed Insights` — .gemini/commands/webperf.toml:10 — used here
- `CrUX API` — .gemini/commands/webperf.toml:11 — used here
- `DevTools performance trace` — .gemini/commands/webperf.toml:12 — used here
- `chrome-devtools MCP server` — .gemini/commands/webperf.toml:13 — used here
- `Quick mode` — .gemini/commands/webperf.toml:16 — defined here
- `potential impact` — .gemini/commands/webperf.toml:16 — defined here
- `not measured` — .gemini/commands/webperf.toml:27 — defined here
- `single-persona command` — .gemini/commands/webperf.toml:31 — defined here

## Structure
- ## Determine the mode
- ## Run the audit
- ## Output

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
VARIANT pair V4 with `commands/webperf.toml` (divergence documented in `_divergence/divergence-commands-webperf-toml--gemini-commands-webperf-toml.md`).

## Context cost
1884 bytes, ~470 tokens. Transitive context cost: loads `agents/web-performance-auditor.md` (12278 bytes), totaling ~14162 bytes (~3540 tokens).
