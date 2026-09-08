---
package: rjm
name: get_strategy
slug: get-strategy
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

# get_strategy

## Definition — verbatim
(used, not defined)

> "def get_strategy(mode: CoordinationMode) -> CoordinationStrategy:" — scripts/workflow/coordinator.py:164

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/coordinator.py | 164 | defined here | Factory function returning the CoordinationStrategy instance corresponding to a given CoordinationMode. |
| scripts/workflow/__init__.py | 14 | used here | Re-exported function symbol in the workflow package public interface. |

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
`get_strategy` is a Python factory function identifier instantiating coordination strategies in `coordinator.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
