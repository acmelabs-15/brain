---
package: addy
path: commands/webperf.toml
type: command
bytes: 2031
unit: inv-addy-4
aliases: []
memo_inputs:
  - {path: commands/webperf.toml, sha256: a7ff4a4ab3c3e20e22edb7582542264813f2c6c11c9687878f3ff9f6e5b529be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# commands/webperf.toml

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — commands/webperf.toml:1

## Design intent — required
Defines the `/webperf` slash command for auditing web applications. Dynamically selects between Deep mode (when external metrics artifacts like Lighthouse reports, PageSpeed Insights, CrUX responses, or DevTools traces are present) and Quick mode (structural static code inspection), and delegates execution to the `web-performance-auditor` subagent persona.

## Phase — required
cross-phase

## Inputs — required
- Target scope: "The files, components, or diff under review" — commands/webperf.toml:22
- Target page: "The target URL or page name when known" — commands/webperf.toml:24
- Performance artifacts: "Lighthouse JSON report file" — commands/webperf.toml:9, "PageSpeed Insights JSON response" — commands/webperf.toml:10, "CrUX API response" — commands/webperf.toml:11, "DevTools performance trace" — commands/webperf.toml:12

## Outputs — required
- Performance audit report: "Return the full audit report to the user. No synthesis or merge step is needed — this is a single-persona command." — commands/webperf.toml:31
- Scorecard and ranked findings: "scorecard (only populated with sourced values — mark unmeasured fields `not measured`, never fabricate metrics), a ranked list of findings, positive observations, and proactive recommendations." — commands/webperf.toml:27

## Invokes — required
- agent web-performance-auditor — commands/webperf.toml:20

## Invoked by — required
none

## Concepts named — required, verbatim
- `web-performance-auditor` — commands/webperf.toml:1, 20 — used here
- `Deep mode` — commands/webperf.toml:8 — defined here
- `Quick mode` — commands/webperf.toml:16 — defined here
- `Lighthouse` — commands/webperf.toml:9, 10 — used here
- `PageSpeed Insights` — commands/webperf.toml:10 — used here
- `CrUX` — commands/webperf.toml:10, 11 — used here
- `DevTools performance trace` — commands/webperf.toml:12 — used here
- `chrome-devtools MCP` — commands/webperf.toml:13 — used here
- `potential impact` — commands/webperf.toml:16 — used here
- `scorecard` — commands/webperf.toml:27 — used here

## Structure
- description — commands/webperf.toml:1
- prompt — commands/webperf.toml:3
- `## Determine the mode` — commands/webperf.toml:6
- `## Run the audit` — commands/webperf.toml:18
- `## Output` — commands/webperf.toml:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Variant of `.gemini/commands/webperf.toml` (VARIANT V4 in duplication ledger, 83% shared lines, analyzed in `_divergence/gemini-commands-webperf-toml--commands-webperf-toml.md`). Canonical member of the pair. Explicitly warns against hardcoding `$CRUX_API_KEY` or `$GOOGLE_API_KEY` in configuration files (line 11). Uses subagent tool spawning via the CLI rather than prompting the agent to adopt a persona in-context.

## Context cost
2031 bytes, approximately 510 tokens.
