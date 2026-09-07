---
package: rjm
name: Parallel Execution Readiness
slug: parallel-execution-readiness
kind: checklist
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

# Parallel Execution Readiness

## Definition — verbatim
> "## Parallel Execution Readiness" — .agents/AGENT-SYSTEM.md:1336

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1336 | defines | Prerequisites checklist verified by the orchestrator prior to launching parallel agent tasks. |

## Consumes
Candidate tasks proposed for concurrent execution, repository worktree status, and API budget metrics.

## Produces
A verified prerequisites readiness assessment authorizing or blocking parallel agent dispatch.

## When applied
> "Before launching parallel agents, verify:" — .agents/AGENT-SYSTEM.md:1333

## Sub-concepts
none

## Part of
parallel-execution

## Implementation status
clean

## Design notes
A pre-flight verification checklist evaluated by the orchestrator before dispatching parallel agents. It requires confirming task independence, absence of shared file modifications, sufficient API rate limit headroom, preparation of isolated worktree directories, and orchestrator aggregation capacity to prevent coordination failures mid-run.
