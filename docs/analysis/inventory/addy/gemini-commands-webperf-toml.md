---
package: addy
path: .gemini/commands/webperf.toml
type: command
bytes: 1884
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/webperf.toml, sha256: 5b08fc19bacdb0f9984e9225a2c7913cef51249c9472f51169efa5a83f53a60b}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/webperf.toml

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — .gemini/commands/webperf.toml:1

## Design intent — required
Audits browser-facing web applications using dual assessment tiers (Quick mode static anti-pattern scan or Deep mode dynamic trace/Lighthouse analysis), enforcing measured-only metrics and prohibiting fabricated values.

## Phase — required
addy:review

## Inputs — required
Files, components, or diff under review (.gemini/commands/webperf.toml:22), optional audit data (Lighthouse JSON, PSI JSON, CrUX API response, DevTools trace) (.gemini/commands/webperf.toml:23), and target URL or page identifier (.gemini/commands/webperf.toml:24).

## Outputs — required
Comprehensive performance audit report featuring measured scorecard, ranked findings, positive observations, and proactive optimization recommendations (.gemini/commands/webperf.toml:27, 31).

## Invokes — required
- agent agents/web-performance-auditor.md — .gemini/commands/webperf.toml:20

## Invoked by — required
none

## Concepts named — required, verbatim
- `Deep mode` — .gemini/commands/webperf.toml:8 — defined here
- `Quick mode` — .gemini/commands/webperf.toml:16 — defined here
- `web-performance-auditor` — .gemini/commands/webperf.toml:20 — used here
- `scorecard` — .gemini/commands/webperf.toml:27 — used here

## Structure
- "## Determine the mode" — .gemini/commands/webperf.toml:6
- "## Run the audit" — .gemini/commands/webperf.toml:18
- "## Output" — .gemini/commands/webperf.toml:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Forms variant pair V4 (83% shared lines) with `commands/webperf.toml` in `docs/analysis/manifest/addy-duplicates.md`. In this Gemini version, the agent acts directly as the persona, whereas `commands/webperf.toml` instructs the harness to spawn the `web-performance-auditor` subagent tool.

## Context cost
1884 bytes, ~470 tokens.
