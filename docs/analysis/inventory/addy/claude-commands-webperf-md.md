---
package: addy
path: .claude/commands/webperf.md
type: command
bytes: 1974
unit: inv-addy-4
---

# .claude/commands/webperf.md

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — .claude/commands/webperf.md:2

## Design intent — required
Executes browser-facing web performance audits by automatically selecting between Deep mode (when Lighthouse reports, PageSpeed Insights, CrUX API data, DevTools traces, or Chrome DevTools MCP are available) and Quick mode (source code static anti-pattern scan), spawning the `web-performance-auditor` subagent persona to return a structured performance scorecard and prioritized recommendations.

## Phase — required
`addy:Review`

## Inputs — required
- Target files, components, or git diff
- Performance artifacts (Lighthouse JSON, PSI JSON, CrUX response, DevTools trace) or live URL with MCP
- Expected mode flag (Deep vs Quick)

## Outputs — required
- Web performance audit report (scorecard, ranked findings, positive observations, recommendations)

## Invokes — required
- agent web-performance-auditor — .claude/commands/webperf.md:2, 21

## Invoked by — required
none

## Concepts named — required, verbatim
- `web-performance-auditor` — .claude/commands/webperf.md:2, 21 — used here
- `Deep mode` — .claude/commands/webperf.md:9 — defined here
- `Chrome DevTools MCP` — .claude/commands/webperf.md:10, 14, 15 — used here
- `Lighthouse` — .claude/commands/webperf.md:10, 11, 14, 24 — used here
- `PageSpeed Insights` — .claude/commands/webperf.md:11 — used here
- `CrUX` — .claude/commands/webperf.md:11, 12, 24 — used here
- `Quick mode` — .claude/commands/webperf.md:17 — defined here
- `scorecard` — .claude/commands/webperf.md:28 — defined here

## Structure
- `---` (frontmatter: description) — .claude/commands/webperf.md:1-3
- Target scope restriction — .claude/commands/webperf.md:5
- `## Determine the mode` — .claude/commands/webperf.md:7
- `## Run the audit` — .claude/commands/webperf.md:19
- `## Output` — .claude/commands/webperf.md:30

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Scoped strictly to web applications: "Do not use it for utility libraries, CLIs, or server-only code with no browser-facing output" (.claude/commands/webperf.md:5).
- Integrates Chrome DevTools MCP CLI and MCP server tools directly.

## Context cost
- File size: 1,974 bytes (~495 tokens).
- Transitive cost when invoked: spawns `web-performance-auditor` subagent (12,278 bytes, ~3,070 tokens).
