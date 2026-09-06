---
package: addy
path: .gemini/commands/webperf.toml
type: command
bytes: 1884
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/webperf.toml, sha256: 5b08fc19bacdb0f9984e9225a2c7913cef51249c9472f51169efa5a83f53a60b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .gemini/commands/webperf.toml

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — .gemini/commands/webperf.toml:1

## Design intent — required
Guides a web performance audit of browser-facing applications by activating the `web-performance-auditor` persona in Gemini CLI. Dynamically routes between Deep mode (when Lighthouse JSON, PageSpeed Insights, CrUX API, DevTools traces, or live Chrome DevTools MCP connections are available) and Quick mode (scanning source code for structural performance anti-patterns and flagging them as `potential impact`). Enforces honest metric reporting without fabricated values, producing a sourced scorecard, ranked findings, positive observations, and proactive recommendations.

## Phase — required
addy:Review

## Inputs — required
- Source files, components, or diff under review — .gemini/commands/webperf.toml:22
- Performance artifacts: Lighthouse JSON report, PageSpeed Insights JSON, CrUX API response, DevTools performance trace — .gemini/commands/webperf.toml:9, 10, 11, 12, 23
- Live target URL or page name — .gemini/commands/webperf.toml:24

## Outputs — required
- Web performance audit report including scorecard, ranked findings, positive observations, and proactive recommendations — .gemini/commands/webperf.toml:27, 31

## Invokes — required
- agent web-performance-auditor — .gemini/commands/webperf.toml:20

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `/webperf` — .gemini/commands/webperf.toml:4 — defined here
- `Deep mode` — .gemini/commands/webperf.toml:8 — defined here
- `Chrome DevTools MCP CLI` — .gemini/commands/webperf.toml:9, 14 — used here
- `PageSpeed Insights` — .gemini/commands/webperf.toml:10 — used here
- `CrUX API` — .gemini/commands/webperf.toml:11 — used here
- `Quick mode` — .gemini/commands/webperf.toml:16 — defined here
- `potential impact` — .gemini/commands/webperf.toml:16 — defined here
- `web-performance-auditor` — .gemini/commands/webperf.toml:20 — used here
- `agents/web-performance-auditor.md` — .gemini/commands/webperf.toml:20 — used here

## Structure
- `## Determine the mode` — .gemini/commands/webperf.toml:6
- `## Run the audit` — .gemini/commands/webperf.toml:18
- `## Output` — .gemini/commands/webperf.toml:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Forms variant V4 in the duplication ledger with `commands/webperf.toml` (83% shared lines). In `.gemini/commands/webperf.toml`, line 9 and line 14 provide specific CLI invocation examples using `npx -p chrome-devtools-mcp chrome-devtools`. It enforces an anti-fabrication data rule: "only populated with sourced values — mark unmeasured fields not measured, never fabricate metrics" (.gemini/commands/webperf.toml:27).

## Context cost
1,884 bytes (~470 tokens). If invoked agent is loaded: `agents/web-performance-auditor.md` (4,424 bytes).
