---
package: rjm
name: get_connected_ids
slug: get-connected-ids
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/show_traceability_graph.py, sha256: e9b88963e496c97a549a3156d97c00b7aed0f63b8317ba49cb10edf1ccc3b3cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_connected_ids

## Definition — verbatim
(used, not defined)

> "def get_connected_ids(" — scripts/traceability/show_traceability_graph.py:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/show_traceability_graph.py | 67 | defined here | Recursive traversal function gathering connected node IDs in forward or backward direction up to a specified depth. |

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
defects: other

## Design notes
A graph traversal helper function in `show_traceability_graph.py` finding reachable spec IDs in a specified direction, classified as `name-only` per D-023.
