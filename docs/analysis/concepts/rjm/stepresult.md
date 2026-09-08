---
package: rjm
name: StepResult
slug: stepresult
kind: artifact
package_phase: rjm:orchestrator
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/__init__.py, sha256: 316833540d80d438b732ca41c1a41c961c83f488b032c6b200b26ee5279021ab}
  - {path: scripts/workflow/executor.py, sha256: 94c569d87858f3652c216790776eeff033739470b100bdb581c07d3d73df09e4}
  - {path: scripts/workflow/parallel.py, sha256: 3fb8b63e69e35f7930303a658d1c962b584f8cfb364cafc2217d7b9996798353}
  - {path: scripts/workflow/schema.py, sha256: 63e7e4ed48ffcbf9e07c58bab7802e6c7545f873d22a9c366f7e83f9dce0bbde}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# StepResult

## Definition — verbatim
> "Output from executing a single workflow step." — scripts/workflow/schema.py:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/__init__.py | 29 | used here | Re-exported in package initializer `__all__` list. |
| scripts/workflow/executor.py | 19 | used here | Imported to record individual step execution outcomes during sequential and refinement workflows. |
| scripts/workflow/parallel.py | 23 | used here | Imported to store per-step execution results within parallel batch execution. |
| scripts/workflow/schema.py | 175 | defined here | Dataclass encapsulating step name, execution status, output text, error message, and iteration number. |

## Consumes
Executed workflow step output or caught execution exception.

## Produces
Structured step outcome record for downstream input chaining and pipeline reporting.

## When applied
Generated immediately upon completion or failure of each workflow step.

## Sub-concepts
none

## Part of
workflowresult

## Implementation status
defects: doc-drift, orphan

## Design notes
`StepResult` captures the execution outcome of an individual workflow step, including status (`COMPLETED`, `FAILED`, `SKIPPED`), string output, error message, and iteration index, enabling downstream steps to consume outputs or halt execution upon failure.
