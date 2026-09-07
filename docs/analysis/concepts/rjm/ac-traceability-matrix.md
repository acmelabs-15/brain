---
package: rjm
name: AC Traceability Matrix
slug: ac-traceability-matrix
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AC Traceability Matrix

## Definition — verbatim
> "## AC Traceability Matrix" — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 29 | defined here | Section heading introducing the table mapping high-level requirement acceptance criteria to specific implementing sub-tasks. |

## Consumes
requirements-acceptance-criteria

## Produces
sub-task-mappings

## When applied
> "Every AC in REQ-004 maps to at least one sub-task." — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:31

## Sub-concepts
none

## Part of
specification-hierarchy

## Implementation status
defects: doc-drift

## Design notes
A structural mapping artifact within task specifications in rjm that links each requirement acceptance criterion directly to owning sub-tasks. It guarantees end-to-end requirement traceability across the specification hierarchy (REQ -> DESIGN -> TASK), ensuring no requirements are lost during implementation breakdown.
