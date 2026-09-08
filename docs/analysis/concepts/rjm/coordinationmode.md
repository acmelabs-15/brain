---
package: rjm
name: CoordinationMode
slug: coordinationmode
kind: pattern
package_phase: rjm:orchestrator
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/__init__.py, sha256: 316833540d80d438b732ca41c1a41c961c83f488b032c6b200b26ee5279021ab}
  - {path: scripts/workflow/coordinator.py, sha256: 96533bba2a008a5242f1442497a90e3887483432607e6ccf99ccb766348e6161}
  - {path: scripts/workflow/loader.py, sha256: 2c6b6b29ceef95cd8be24b14975396f72bbc4972f11fb49fcf5c21dcce6e80cd}
  - {path: scripts/workflow/schema.py, sha256: 63e7e4ed48ffcbf9e07c58bab7802e6c7545f873d22a9c366f7e83f9dce0bbde}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CoordinationMode

## Definition — verbatim
> "Coordination pattern for multi-agent workflows." — scripts/workflow/schema.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/__init__.py | 26 | used here | Re-exported in package initializer `__all__` list. |
| scripts/workflow/coordinator.py | 21 | used here | Imported to select and instantiate coordination strategies based on workflow mode. |
| scripts/workflow/loader.py | 19 | used here | Imported to parse and validate `coordination_mode` strings in workflow YAML definitions. |
| scripts/workflow/schema.py | 28 | defined here | Enum defining multi-agent coordination modes `CENTRALIZED`, `HIERARCHICAL`, and `MESH`. |

## Consumes
Workflow YAML configuration or programmatic pipeline specification.

## Produces
Typed coordination mode enum instance controlling strategy selection.

## When applied
Configured when defining a multi-agent workflow pipeline to dictate how agents coordinate.

## Sub-concepts
none

## Part of
workflowdefinition

## Implementation status
defects: doc-drift, orphan

## Design notes
`CoordinationMode` governs the topological orchestration pattern (`CENTRALIZED`, `HIERARCHICAL`, `MESH`) for multi-agent pipelines, dictating whether a single orchestrator manages all steps, a hierarchy of coordinators manages sub-trees, or agents collaborate peer-to-peer across a shared queue.
