---
package: rjm
name: SESSION END GATE
slug: session-end-gate
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SESSION END GATE

## Definition — verbatim
(used, not defined)

> "Terminate when ALL TODO items are checked off AND the SESSION END GATE passes." — .claude/agents/orchestrator.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 64 | used here | Critical verification condition required before terminating an orchestration session. |
| src/claude/orchestrator.md | 64 | used here | Critical verification condition required before terminating an orchestration session. |

## Consumes
All completed task items, verified TODO checklist state, and pre-close sequence artifacts.

## Produces
Terminal approval to close the active orchestration session and return control to the user.

## When applied
Evaluated at the conclusion of an orchestration session after all delegated tasks and synthesis have completed.

## Sub-concepts
completion-gate, pre-close-sequence

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift

## Design notes
The session end gate ensures that an orchestrator agent does not abandon an active session or report premature completion while open TODO items or unverified deliverables remain. It couples task list completion with formal exit criteria, preventing partial solutions from being presented as finished work.
