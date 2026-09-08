---
package: rjm
name: WorkflowStep
slug: workflowstep
kind: artifact
package_phase: rjm:orchestrator
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/__init__.py, sha256: 316833540d80d438b732ca41c1a41c961c83f488b032c6b200b26ee5279021ab}
  - {path: scripts/workflow/coordinator.py, sha256: 96533bba2a008a5242f1442497a90e3887483432607e6ccf99ccb766348e6161}
  - {path: scripts/workflow/executor.py, sha256: 94c569d87858f3652c216790776eeff033739470b100bdb581c07d3d73df09e4}
  - {path: scripts/workflow/loader.py, sha256: 2c6b6b29ceef95cd8be24b14975396f72bbc4972f11fb49fcf5c21dcce6e80cd}
  - {path: scripts/workflow/parallel.py, sha256: 3fb8b63e69e35f7930303a658d1c962b584f8cfb364cafc2217d7b9996798353}
  - {path: scripts/workflow/schema.py, sha256: 63e7e4ed48ffcbf9e07c58bab7802e6c7545f873d22a9c366f7e83f9dce0bbde}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# WorkflowStep

## Definition — verbatim
> "Single step in a workflow pipeline." — scripts/workflow/schema.py:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/__init__.py | 33 | used here | Re-exported in package initializer `__all__` list. |
| scripts/workflow/coordinator.py | 23 | used here | Imported to type and manipulate steps during topology-based execution scheduling. |
| scripts/workflow/executor.py | 23 | used here | Imported to type steps passed to `StepRunner` and executed in workflow loops. |
| scripts/workflow/loader.py | 23 | used here | Imported as the step model returned by `_parse_step` when deserializing YAML definitions. |
| scripts/workflow/parallel.py | 26 | used here | Imported to represent steps batched for parallel execution and re-annotated with parallel kinds. |
| scripts/workflow/schema.py | 62 | defined here | Dataclass representing an individual workflow step, including name, agent, kind, inputs, and subordinates. |

## Consumes
Step configuration in workflow definitions.

## Produces
Discrete execution unit dispatched to an agent or runner.

## When applied
Defined as part of a `WorkflowDefinition` to configure an agent invocation step.

## Sub-concepts
stepref, stepkind

## Part of
workflowdefinition

## Implementation status
defects: doc-drift, orphan

## Design notes
`WorkflowStep` defines the atomic unit of execution in an agent pipeline, configuring the agent type to invoke, input dependency references, prompt templates, retry policies, execution conditions, priorities, and hierarchical coordinator/subordinate relationships.
