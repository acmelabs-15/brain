---
package: rjm
name: mark_parallel_steps
slug: mark-parallel-steps
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/__init__.py, sha256: 316833540d80d438b732ca41c1a41c961c83f488b032c6b200b26ee5279021ab}
  - {path: scripts/workflow/parallel.py, sha256: 3fb8b63e69e35f7930303a658d1c962b584f8cfb364cafc2217d7b9996798353}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# mark_parallel_steps

## Definition — verbatim
(used, not defined)

> "def mark_parallel_steps(workflow: WorkflowDefinition) -> WorkflowDefinition:" — scripts/workflow/parallel.py:325

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/__init__.py | 23 | used here | Re-exported in workflow package initializer `__all__` list. |
| scripts/workflow/parallel.py | 325 | defined here | Function that annotates workflow steps with `StepKind.PARALLEL` for steps that can run concurrently with others in their group. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
A Python helper function in `scripts/workflow/parallel.py` that inspects step dependencies and marks steps eligible for concurrency with `StepKind.PARALLEL`, classified as name-only per D-023.
