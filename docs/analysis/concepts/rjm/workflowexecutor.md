---
package: rjm
name: WorkflowExecutor
slug: workflowexecutor
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/__init__.py, sha256: 316833540d80d438b732ca41c1a41c961c83f488b032c6b200b26ee5279021ab}
  - {path: scripts/workflow/executor.py, sha256: 94c569d87858f3652c216790776eeff033739470b100bdb581c07d3d73df09e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# WorkflowExecutor

## Definition — verbatim
(used, not defined)

> "class WorkflowExecutor:" — scripts/workflow/executor.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/executor.py | 45 | defined here | Class executing declarative agent workflow definitions with output chaining, conditions, and refinement loops. |
| scripts/workflow/__init__.py | 16 | used here | Re-exported class in the workflow package public interface. |

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
`WorkflowExecutor` is a Python class identifier managing workflow step invocation and output chaining in `executor.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
