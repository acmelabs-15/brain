---
package: addy
path: commands/webperf.toml
type: command
bytes: 2031
unit: inv-addy-11
---

# commands/webperf.toml

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — commands/webperf.toml:1

## Design intent — required
Provides a dedicated web performance audit slash-command for browser-facing applications, executing either a quantitative Deep mode audit when external performance telemetry (Lighthouse, PSI, CrUX, DevTools traces, or Chrome DevTools MCP) is available or a qualitative Quick mode static code analysis when telemetry is absent, delegating execution to the `web-performance-auditor` subagent persona.

## Phase — required
`addy:Review`

## Inputs — required
- Target files, components, or diff under review — commands/webperf.toml:22
- Performance telemetry artifacts: Lighthouse JSON report, PageSpeed Insights JSON response, CrUX API response, DevTools performance trace — commands/webperf.toml:9-12, 23
- Target URL or page name — commands/webperf.toml:13, 24
- Expected mode flag (Deep or Quick) — commands/webperf.toml:25
- Environment variables `$CRUX_API_KEY` or `$GOOGLE_API_KEY` for CrUX API calls — commands/webperf.toml:11

## Outputs — required
- Web performance audit report (scorecard populated only with sourced values, ranked list of findings with `potential impact` labels in Quick mode, positive observations, and proactive recommendations) — commands/webperf.toml:16, 27, 31

## Invokes — required
- agent web-performance-auditor — commands/webperf.toml:1, 20
- tool chrome-devtools-mcp — commands/webperf.toml:9, 13, 14

## Invoked by — required
- config .claude-plugin/plugin.json — .claude-plugin/plugin.json:11
- script scripts/validate-commands.js — scripts/validate-commands.js:33

## Concepts named — required, verbatim
- `web-performance-auditor` — commands/webperf.toml:1, 20 — used here
- `Deep mode` — commands/webperf.toml:8 — defined here
- `Lighthouse` — commands/webperf.toml:9, 10, 23 — used here
- `PageSpeed Insights` — commands/webperf.toml:10 — used here
- `CrUX` — commands/webperf.toml:10, 11, 23 — used here
- `DevTools performance trace` — commands/webperf.toml:12 — used here
- `chrome-devtools MCP` — commands/webperf.toml:13, 14 — used here
- `Quick mode` — commands/webperf.toml:16 — defined here
- `potential impact` — commands/webperf.toml:16 — used here
- `scorecard` — commands/webperf.toml:27 — used here

## Structure
- TOML key: `description` — commands/webperf.toml:1
- TOML key: `prompt` — commands/webperf.toml:3-32
  - Scope constraint — commands/webperf.toml:4
  - `## Determine the mode` — commands/webperf.toml:6
  - `## Run the audit` — commands/webperf.toml:18
  - `## Output` — commands/webperf.toml:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Description is identical to `.claude/commands/webperf.md` and `.gemini/commands/webperf.toml`, verified by `scripts/validate-commands.js`.
- Contains an explicit negative trigger at line 4: "Do not use it for utility libraries, CLIs, or server-only code with no browser-facing output."
- Metric integrity mandate: "mark unmeasured fields `not measured`, never fabricate metrics" (commands/webperf.toml:27).
- Single-persona architecture: returns the subagent report directly without a merge phase (commands/webperf.toml:31).

## Context cost
2,031 bytes (~508 tokens). Transitive cost: loads `agents/web-performance-auditor.md` (12,278 bytes, ~3,070 tokens) plus any provided metric JSON files.
