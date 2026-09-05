---
package: addy
path: commands/webperf.toml
type: command
bytes: 2031
unit: inv-addy-4
aliases: []
memo_inputs:
  - {path: commands/webperf.toml, sha256: a7ff4a4ab3c3e20e22edb7582542264813f2c6c11c9687878f3ff9f6e5b529be}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# commands/webperf.toml

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — commands/webperf.toml:1

## Design intent — required
Provides a specialized slash command (`/webperf`) targeting web applications that determines whether to run in Quick mode (source code heuristics) or Deep mode (Lighthouse, PSI, CrUX, DevTools traces, or Chrome DevTools MCP) and delegates to the `web-performance-auditor` subagent to generate an evidence-based performance scorecard. Without this command, web application performance audits would lack structured tooling inputs and Core Web Vitals discipline.

## Phase — required
addy:Review

## Inputs — required
- Files, components, or diff under review — commands/webperf.toml:22
- Artifact paths (Lighthouse JSON, PSI JSON, CrUX response, trace) or pasted JSON content — commands/webperf.toml:23
- Target URL or page name when known — commands/webperf.toml:24
- Environment variables: `$CRUX_API_KEY` or `$GOOGLE_API_KEY` when requesting CrUX data — commands/webperf.toml:11

## Outputs — required
- Full audit report containing scorecard, ranked list of findings, positive observations, and proactive recommendations — commands/webperf.toml:27, 31

## Invokes — required
- agent web-performance-auditor — commands/webperf.toml:20

## Invoked by — required
- entry point — invoked by the user or harness as a slash command (`/webperf`)

## Concepts named — required, verbatim
- `web performance audit` — commands/webperf.toml:1 — used here
- `Deep mode` — commands/webperf.toml:8 — defined here
- `Quick mode` — commands/webperf.toml:16 — defined here
- `scorecard` — commands/webperf.toml:27 — used here

## Structure
- description — commands/webperf.toml:1
- prompt — commands/webperf.toml:3
- Determine the mode — commands/webperf.toml:6
- Run the audit — commands/webperf.toml:18
- Output — commands/webperf.toml:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Part of VARIANT pair V4 in `docs/analysis/manifest/addy-duplicates.md` with `.gemini/commands/webperf.toml` (83% shared lines). Unlike `/ship`, this command is a single-persona command requiring no merge or synthesis step.

## Context cost
2,031 bytes (approx. 500 tokens) for this command file. Invokes `agents/web-performance-auditor.md` (6,400 bytes).
