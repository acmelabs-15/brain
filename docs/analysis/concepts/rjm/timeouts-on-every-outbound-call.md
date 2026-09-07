---
package: rjm
name: Timeouts on Every Outbound Call
slug: timeouts-on-every-outbound-call
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Timeouts on Every Outbound Call

## Definition — verbatim
> "## Timeouts on Every Outbound Call" — .claude/skills/software-engineering-library/references/release-it.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 40 | defined here | Core pattern section mandating bounded connect and read timeouts on every outbound call crossing a process boundary. |

## Consumes
Outbound HTTP calls, child process invocations, MCP requests, queue reads, and network filesystem operations.

## Produces
Configured connect and read timeouts on external service adapters and integration boundaries.

## When applied
Applied whenever executing any network, subprocess, or external request that crosses a process or host boundary.

## Sub-concepts
none

## Part of
release-it

## Implementation status
defects: missing-path

## Design notes
A core stability technique in rjm requiring explicit connect and read timeouts for every outbound call crossing process or network boundaries. Bounded timeouts prevent hanging remote dependencies from exhausting worker slots, stalling orchestrator turns, or freezing agent execution.
