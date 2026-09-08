---
package: rjm
name: find_ready_steps
slug: find-ready-steps
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/__init__.py, sha256: 316833540d80d438b732ca41c1a41c961c83f488b032c6b200b26ee5279021ab}
  - {path: scripts/workflow/coordinator.py, sha256: 96533bba2a008a5242f1442497a90e3887483432607e6ccf99ccb766348e6161}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# find_ready_steps

## Definition — verbatim
(used, not defined)

> "def find_ready_steps(" — scripts/workflow/coordinator.py:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/coordinator.py | 174 | defined here | Determines which unexecuted workflow steps have satisfied dependencies and are ready for execution. |
| scripts/workflow/__init__.py | 13 | used here | Re-exported function symbol in the workflow package public interface. |

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
`find_ready_steps` is a Python function identifier querying ready steps during dynamic workflow scheduling in `coordinator.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
