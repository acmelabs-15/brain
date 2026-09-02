---
package: addy
path: .gemini/commands/webperf.toml
type: command
bytes: 1884
unit: inv-addy-1
---

# .gemini/commands/webperf.toml

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — .gemini/commands/webperf.toml:1

## Design intent — required
Provides an automated performance auditing workflow specialized for browser-facing web applications. It dynamically determines whether to execute a Deep mode (grounded in live measurements, Lighthouse/PageSpeed Insights JSON reports, CrUX field data, or DevTools traces) or a Quick mode (static code scan for structural performance anti-patterns), enforcing a strict anti-hallucination metric-honesty rule. Without it, web performance evaluations either hallucinate performance numbers or fail to incorporate real-world field metrics.

## Phase — required
`addy:Verify`

## Inputs — required
- Files, components, or diffs under review — .gemini/commands/webperf.toml:22
- Performance artifacts (optional for Deep mode): Lighthouse JSON report, PageSpeed Insights JSON response, CrUX API response, DevTools performance trace — .gemini/commands/webperf.toml:9-12, 23
- Live URL or page name (optional) — .gemini/commands/webperf.toml:13, 24

## Outputs — required
- Full web performance audit report (.gemini/commands/webperf.toml:27, 31) containing:
  - Sourced scorecard (unmeasured metrics explicitly marked `not measured`)
  - Ranked findings (labeled `potential impact` in Quick mode)
  - Positive observations
  - Proactive recommendations

## Invokes — required
- persona/tool web-performance-auditor (agents/web-performance-auditor.md) — .gemini/commands/webperf.toml:20
- external-tool chrome-devtools MCP server (lighthouse_audit, performance_*) — .gemini/commands/webperf.toml:13
- external-tool Chrome DevTools MCP CLI (npx -p chrome-devtools-mcp chrome-devtools) — .gemini/commands/webperf.toml:9, 14
- external-tool Lighthouse CLI (npx lighthouse) — .gemini/commands/webperf.toml:9
- external-tool PageSpeed Insights / CrUX API — .gemini/commands/webperf.toml:10, 11

## Invoked by — required
none

## Concepts named — required, verbatim
- `web-performance-auditor` — .gemini/commands/webperf.toml:1, 20 — used here
- `Deep mode` — .gemini/commands/webperf.toml:8 — defined here
- `Lighthouse JSON report` — .gemini/commands/webperf.toml:9 — used here
- `Chrome DevTools MCP CLI` — .gemini/commands/webperf.toml:9, 14 — used here
- `PageSpeed Insights` — .gemini/commands/webperf.toml:10 — used here
- `CrUX API` — .gemini/commands/webperf.toml:11 — used here
- `DevTools performance trace` — .gemini/commands/webperf.toml:12 — used here
- `chrome-devtools MCP server` — .gemini/commands/webperf.toml:13 — used here
- `Quick mode` — .gemini/commands/webperf.toml:16 — defined here
- `potential impact` — .gemini/commands/webperf.toml:16 — defined here
- `not measured` — .gemini/commands/webperf.toml:27 — defined here
- `single-persona command` — .gemini/commands/webperf.toml:31 — defined here

## Structure
- `## Determine the mode` — .gemini/commands/webperf.toml:6
- `## Run the audit` — .gemini/commands/webperf.toml:18
- `## Output` — .gemini/commands/webperf.toml:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Clear scope boundary enforcement: explicitly restricted to web applications and forbidden on utility libraries, CLIs, or server-only code (.gemini/commands/webperf.toml:4).
- Single-persona architecture: unlike `/ship`, no multi-agent fan-out or merge step is used (.gemini/commands/webperf.toml:31).
- Strict metric honesty: unmeasured scorecard metrics must be labeled `not measured` and static findings marked `potential impact` (.gemini/commands/webperf.toml:16, 27).

## Context cost
- File size: 1,884 bytes (~470 tokens).
- Transitive context cost when invoked: loads `agents/web-performance-auditor.md` (12,278 bytes), totaling ~14,162 bytes (~3,540 tokens) before diffs and JSON reports.
