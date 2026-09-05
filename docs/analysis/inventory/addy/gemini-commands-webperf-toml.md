---
package: addy
path: .gemini/commands/webperf.toml
type: command
bytes: 1884
unit: inv-addy-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .gemini/commands/webperf.toml, sha256: 5b08fc19bacdb0f9984e9225a2c7913cef51249c9472f51169efa5a83f53a60b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .gemini/commands/webperf.toml

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — .gemini/commands/webperf.toml:1

## Design intent — required
Defines `/webperf` command for Gemini CLI targeting web applications specifically. Selects between Deep mode (when empirical performance artifacts like Lighthouse, PSI, CrUX, traces, or live DevTools MCP sessions are available) and Quick mode (static code scan for structural anti-patterns), executing as the `web-performance-auditor` persona to deliver a verified scorecard and ranked findings.

## Phase — required
addy:Review

## Inputs — required
Files, components, or diff under review (.gemini/commands/webperf.toml:22); target URL or page name (.gemini/commands/webperf.toml:24); optional Deep mode artifacts: Lighthouse JSON, PSI JSON, CrUX API response, DevTools performance trace, or live Chrome DevTools MCP connection (.gemini/commands/webperf.toml:9-14,23).

## Outputs — required
Performance audit report featuring a scorecard with verified metrics, ranked list of findings, positive observations, and proactive recommendations (.gemini/commands/webperf.toml:27,31).

## Invokes — required
- agent web-performance-auditor — .gemini/commands/webperf.toml:20

## Invoked by — required
none

## Concepts named — required, verbatim
- `web-performance-auditor` — .gemini/commands/webperf.toml:1 — used here
- `Deep mode` — .gemini/commands/webperf.toml:8 — defined here
- `Quick mode` — .gemini/commands/webperf.toml:16 — defined here
- `potential impact` — .gemini/commands/webperf.toml:16 — defined here
- `scorecard` — .gemini/commands/webperf.toml:27 — defined here

## Structure
- "## Determine the mode" — .gemini/commands/webperf.toml:6
- "## Run the audit" — .gemini/commands/webperf.toml:18
- "## Output" — .gemini/commands/webperf.toml:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Forms VARIANT pair V4 with `commands/webperf.toml`. In `.gemini/commands/webperf.toml`, the command instructs the agent to adopt the persona directly in the current context ("Act as the web-performance-auditor persona"), whereas `commands/webperf.toml` instructs the harness to "Spawn the `web-performance-auditor` subagent".

## Context cost
1884 bytes, ~470 tokens.
