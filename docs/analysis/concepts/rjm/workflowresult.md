---
package: rjm
name: WorkflowResult
slug: workflowresult
kind: artifact
package_phase: rjm:orchestrator
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/__init__.py, sha256: 316833540d80d438b732ca41c1a41c961c83f488b032c6b200b26ee5279021ab}
  - {path: scripts/workflow/executor.py, sha256: 94c569d87858f3652c216790776eeff033739470b100bdb581c07d3d73df09e4}
  - {path: scripts/workflow/schema.py, sha256: 63e7e4ed48ffcbf9e07c58bab7802e6c7545f873d22a9c366f7e83f9dce0bbde}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# WorkflowResult

## Definition — verbatim
> "Aggregated result from a complete workflow execution." — scripts/workflow/schema.py:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/__init__.py | 31 | used here | Re-exported in package initializer `__all__` list. |
| scripts/workflow/executor.py | 21 | used here | Imported to construct and return the overall pipeline outcome from `WorkflowExecutor.execute`. |
| scripts/workflow/schema.py | 191 | defined here | Dataclass encapsulating workflow name, overall status, step result list, completed iterations, and final output. |

## Consumes
Completed `StepResult` objects and workflow execution state.

## Produces
Aggregated execution summary and final output string.

## When applied
Returned at the conclusion of workflow execution to summarize success, step traces, and final artifacts.

## Sub-concepts
stepresult, workflowstatus

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
`WorkflowResult` aggregates the full execution trace of a workflow pipeline, tracking whether the workflow succeeded or failed, how many refinement iterations were completed, individual step outputs, and the final output text.
