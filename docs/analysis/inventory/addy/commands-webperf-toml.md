---
package: addy
path: commands/webperf.toml
type: command
bytes: 2031
unit: inv-addy-4
deprecated: false
aliases: []
memo_inputs:
  - {path: commands/webperf.toml, sha256: a7ff4a4ab3c3e20e22edb7582542264813f2c6c11c9687878f3ff9f6e5b529be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# commands/webperf.toml

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — commands/webperf.toml:1

## Design intent — required
Provides a specialist slash command `/webperf` targeting web applications to perform performance audits via the `web-performance-auditor` subagent, dynamically selecting between data-driven Deep mode and static-analysis Quick mode.

## Phase — required
`addy:Audit`

## Inputs — required
- Target artifacts: `The files, components, or diff under review` — commands/webperf.toml:22
- Measurement traces: `Any artifact paths (Lighthouse JSON, PSI JSON, CrUX response, trace) or pasted JSON content` — commands/webperf.toml:23
- Location metadata: `The target URL or page name when known` — commands/webperf.toml:24
- Operating mode: `A note on which mode you expect (Quick or Deep), so the agent surfaces missing inputs if Deep was intended` — commands/webperf.toml:25

## Outputs — required
- Performance audit report: `The subagent returns a scorecard` — commands/webperf.toml:27

## Invokes — required
- agent web-performance-auditor — commands/webperf.toml:20

## Invoked by — required
none

## Concepts named — required, verbatim
- `Deep mode` — commands/webperf.toml:8 — defined here
- `Quick mode` — commands/webperf.toml:16 — defined here
- `web-performance-auditor` — commands/webperf.toml:1, 20 — used here
- `scorecard` — commands/webperf.toml:27 — defined here

## Structure
- ## Determine the mode — commands/webperf.toml:6
- ## Run the audit — commands/webperf.toml:18
- ## Output — commands/webperf.toml:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Forms VARIANT pair V4 with `.gemini/commands/webperf.toml` (83% shared lines). In this version, the command spawns the `web-performance-auditor` subagent via CLI tool calling rather than adopting the persona directly in the main context loop, and notes environment variable syntax `$CRUX_API_KEY` / `$GOOGLE_API_KEY`.

## Context cost
2031 bytes (~510 tokens). Spawns the `web-performance-auditor` subagent in an isolated context loop and returns the complete scorecard.
