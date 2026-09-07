---
package: rjm
name: Session Coordination Protocol
slug: session-coordination-protocol
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Session Coordination Protocol

## Definition — verbatim
> "When running parallel agents, coordinate through per-issue handoffs and Serena memory instead of per-agent session logs." — .agents/AGENT-SYSTEM.md:1465-1466

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1462 | defines | Defines the orchestrator aggregation protocol and atomic commit message formatting for parallel executions. |

## Consumes
Outputs, per-issue handoffs, and execution evidence from completed parallel agent runs.

## Produces
An aggregated summary, updated shared memory context, and a single atomic git commit referencing all touched issues and PRs.

## When applied
> "When running parallel agents, coordinate through per-issue handoffs and Serena memory instead of per-agent session logs." — .agents/AGENT-SYSTEM.md:1465-1466

## Sub-concepts
none

## Part of
parallel-execution

## Implementation status
clean

## Design notes
An operational protocol standardizing how the orchestrator aggregates results from parallel agent executions. By requiring coordination via per-issue handoffs and memory rather than isolated session logs, the orchestrator synthesizes findings across parallel streams and creates a single consolidated git commit referencing all affected issues.
