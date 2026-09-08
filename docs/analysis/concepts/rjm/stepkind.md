---
package: rjm
name: StepKind
slug: stepkind
kind: pattern
package_phase: rjm:orchestrator
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/__init__.py, sha256: 316833540d80d438b732ca41c1a41c961c83f488b032c6b200b26ee5279021ab}
  - {path: scripts/workflow/loader.py, sha256: 2c6b6b29ceef95cd8be24b14975396f72bbc4972f11fb49fcf5c21dcce6e80cd}
  - {path: scripts/workflow/parallel.py, sha256: 3fb8b63e69e35f7930303a658d1c962b584f8cfb364cafc2217d7b9996798353}
  - {path: scripts/workflow/schema.py, sha256: 63e7e4ed48ffcbf9e07c58bab7802e6c7545f873d22a9c366f7e83f9dce0bbde}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# StepKind

## Definition — verbatim
> "Classification of a workflow step." — scripts/workflow/schema.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/__init__.py | 27 | used here | Re-exported in package initializer `__all__` list. |
| scripts/workflow/loader.py | 20 | used here | Imported to parse and validate step kind values from YAML step configurations. |
| scripts/workflow/parallel.py | 22 | used here | Imported to set `StepKind.PARALLEL` on workflow steps eligible for concurrent execution. |
| scripts/workflow/schema.py | 20 | defined here | Enum classifying workflow steps as `AGENT`, `PARALLEL`, or `CONDITIONAL`. |

## Consumes
Workflow step definition configuration.

## Produces
Typed enum classification for execution scheduling.

## When applied
Specified on workflow steps to determine whether execution invokes a single agent, a concurrent group, or evaluates branching conditions.

## Sub-concepts
none

## Part of
workflowstep

## Implementation status
defects: doc-drift, orphan

## Design notes
`StepKind` classifies steps in a workflow pipeline into `agent` (standard single-agent prompt execution), `parallel` (concurrent batch execution), or `conditional` (evaluating output predicates before execution), allowing executors to route steps to appropriate handlers.
