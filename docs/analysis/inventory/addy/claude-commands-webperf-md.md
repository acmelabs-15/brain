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
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/webperf.md

## Purpose — required, verbatim
> "Run a web performance audit via the web-performance-auditor persona" — .claude/commands/webperf.md:2

## Design intent — required
Audits browser-facing web applications by delegating to the specialized `web-performance-auditor` persona. It determines whether runtime data is available to run Deep mode (using Lighthouse reports, PageSpeed Insights, CrUX API data, DevTools traces, or Chrome DevTools MCP tools) or Quick mode (source code heuristic analysis labeled strictly as potential impact), and outputs the complete audit report without requiring multi-agent synthesis.

## Phase — required
addy:Review

## Inputs — required
- Mode determination artifacts: Lighthouse JSON report, PageSpeed Insights JSON response, CrUX API response, DevTools performance trace, or live URL with Chrome DevTools MCP — .claude/commands/webperf.md:10, 11, 12, 13, 14
- Files, components, or diff under review — .claude/commands/webperf.md:23
- Target URL or page name when known — .claude/commands/webperf.md:25

## Outputs — required
- Full audit report from `web-performance-auditor` returned to user containing a scorecard, ranked findings, positive observations, and proactive recommendations — .claude/commands/webperf.md:28, 32

## Invokes — required
- agent web-performance-auditor — .claude/commands/webperf.md:21

## Invoked by — required
none

## Concepts named — required, verbatim
`web-performance-auditor` — .claude/commands/webperf.md:2, 21 — used here
`Deep mode` — .claude/commands/webperf.md:9 — defined here
`Lighthouse` — .claude/commands/webperf.md:10, 11 — used here
`PageSpeed Insights` — .claude/commands/webperf.md:11 — used here
`CrUX` — .claude/commands/webperf.md:11, 12, 24 — used here
`chrome-devtools` — .claude/commands/webperf.md:14, 15 — used here
`Quick mode` — .claude/commands/webperf.md:17 — defined here
`potential impact` — .claude/commands/webperf.md:17 — defined here
`scorecard` — .claude/commands/webperf.md:28 — defined here

## Structure
- `## Determine the mode` — .claude/commands/webperf.md:7
- `## Run the audit` — .claude/commands/webperf.md:19
- `## Output` — .claude/commands/webperf.md:30

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces a metric-honesty policy: in Quick mode where real performance measurements are absent, all findings must be explicitly tagged as `potential impact`. The scorecard is populated only with sourced values.

## Context cost
1974 bytes, approximately 480 tokens.
