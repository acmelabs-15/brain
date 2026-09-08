---
package: rjm
name: StepRef
slug: stepref
kind: pattern
package_phase: rjm:orchestrator
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/__init__.py, sha256: 316833540d80d438b732ca41c1a41c961c83f488b032c6b200b26ee5279021ab}
  - {path: scripts/workflow/loader.py, sha256: 2c6b6b29ceef95cd8be24b14975396f72bbc4972f11fb49fcf5c21dcce6e80cd}
  - {path: scripts/workflow/schema.py, sha256: 63e7e4ed48ffcbf9e07c58bab7802e6c7545f873d22a9c366f7e83f9dce0bbde}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# StepRef

## Definition — verbatim
> "Reference to another step by name." — scripts/workflow/schema.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/__init__.py | 28 | used here | Re-exported in package initializer `__all__` list. |
| scripts/workflow/loader.py | 21 | used here | Imported to instantiate step references from `inputs_from` YAML lists. |
| scripts/workflow/schema.py | 52 | defined here | Dataclass representing a named reference to another step to model dependencies. |

## Consumes
Prior step identifier string.

## Produces
Named step reference modeling dataflow dependency.

## When applied
Used in `WorkflowStep.inputs_from` to declare which predecessor step outputs should be supplied as inputs.

## Sub-concepts
none

## Part of
workflowstep

## Implementation status
defects: doc-drift, orphan

## Design notes
`StepRef` models upstream dependency links between workflow steps, enabling the workflow executor and coordinator to build dependency DAGs, resolve input chaining, and detect topological readiness.
