---
package: rjm
name: Completion Gate
slug: completion-gate
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Completion Gate

## Definition — verbatim
(used, not defined)

> "Session completion does not require a session log." — .claude/agents/orchestrator.md:216

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 214 | defined here | Mandatory exit gate enforcing pre-close verification and durable handoff capture before ending a session. |
| src/claude/orchestrator.md | 214 | defined here | Mandatory exit gate enforcing pre-close verification and durable handoff capture before ending a session. |
| templates/agents/orchestrator.shared.md | 225 | defined here | Mandatory exit gate enforcing pre-close verification and durable handoff capture before ending a session. |

## Consumes
Completed delegation results, synthesis document, budget tracking, open issue state.

## Produces
Verified exit approval or blocker surfacing in transcript and per-issue handoff.

## When applied
Evaluated at session termination before concluding work.

## Sub-concepts
pre-close-sequence, failure-path

## Part of
session-end-gate

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
The Completion Gate is a blocking exit checkpoint that prevents an orchestrator from dropping work or concluding prematurely. It verifies that all agent delegations have resolved, synthesis is complete, budget limits are respected, and durable continuity records are written, turning session wrap-up into a verifiable condition.
