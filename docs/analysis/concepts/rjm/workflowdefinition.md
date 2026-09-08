---
package: rjm
name: WorkflowDefinition
slug: workflowdefinition
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

# WorkflowDefinition

## Definition — verbatim
> "Complete workflow pipeline definition." — scripts/workflow/schema.py:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/__init__.py | 30 | used here | Re-exported in package initializer `__all__` list. |
| scripts/workflow/coordinator.py | 22 | used here | Imported to determine step execution order and build multi-agent execution plans. |
| scripts/workflow/executor.py | 20 | used here | Imported to drive pipeline execution and iteration loops over defined steps. |
| scripts/workflow/loader.py | 22 | used here | Imported as the target dataclass produced when loading and parsing YAML workflow files. |
| scripts/workflow/parallel.py | 24 | used here | Imported to analyze step dependencies and annotate steps with parallel markers. |
| scripts/workflow/schema.py | 86 | defined here | Dataclass modeling a full workflow pipeline with steps, iterations, metadata, and coordination mode. |

## Consumes
Workflow YAML specification file or programmatic step configurations.

## Produces
Validated pipeline specification ready for scheduling and execution.

## When applied
Instantiated before pipeline execution to validate topology, dependencies, and coordinator rules.

## Sub-concepts
workflowstep, coordinationmode

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
`WorkflowDefinition` is the central declarative model for multi-agent workflows in rjm, containing ordered steps, iteration bounds for refinement loops, coordination mode topology, and built-in structural validation logic.
