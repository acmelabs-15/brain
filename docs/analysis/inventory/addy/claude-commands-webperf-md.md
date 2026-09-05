---
package: addy
path: .claude/commands/webperf.md
type: command
bytes: 1974
unit: inv-addy-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude/commands/webperf.md, sha256: 74c0c1335f1397a5138a78eda4275e4e5deba16c4537f3a4b4971c3280d0ba27}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/commands/webperf.md

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — .claude/commands/webperf.md:2

## Design intent — required
Provides a targeted web performance diagnostic slash command for browser-facing applications, delegating analysis directly to the `web-performance-auditor` specialist persona in either Deep mode (leveraging real-world or lab telemetry like Lighthouse, CrUX, PageSpeed Insights, or DevTools traces) or Quick mode (static code inspection for performance anti-patterns).

## Phase — required
addy:Review

## Inputs — required
- Web application source code, components, or git diff
- Optional telemetry artifacts: Lighthouse JSON, PageSpeed Insights response, CrUX API data, Chrome DevTools performance traces, or live URL
- Operating mode hint (Quick mode or Deep mode)

## Outputs — required
- Performance audit report containing a sourced scorecard, ranked findings, positive observations, and proactive recommendations

## Invokes — required
- agent web-performance-auditor — .claude/commands/webperf.md:21

## Invoked by — required
none

## Concepts named — required, verbatim
- `web-performance-auditor` — .claude/commands/webperf.md:2 — used here
- `Deep mode` — .claude/commands/webperf.md:9 — defined here
- `Lighthouse` — .claude/commands/webperf.md:10 — used here
- `chrome-devtools` — .claude/commands/webperf.md:14 — used here
- `Quick mode` — .claude/commands/webperf.md:17 — defined here

## Structure
- `## Determine the mode`
- `## Run the audit`
- `## Output`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces a strict applicability boundary: intended solely for web applications, explicitly excluding CLIs, utilities, and backend-only code. Unlike `/ship`, no multi-agent merge is performed; the specialist agent report is returned directly to the user.

## Context cost
1974 bytes (~493 tokens). Invocations spawn the `web-performance-auditor` subagent persona.
