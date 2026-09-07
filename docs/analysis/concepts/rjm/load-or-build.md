---
package: rjm
name: load_or_build
slug: load-or-build
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/test_selection/import_graph.py, sha256: 67f96c39ec954d4380d904f09f4d6a77168f8f7b443f9a7c5a0742c752752d5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# load_or_build

## Definition — verbatim
(used, not defined)

> "def load_or_build(" — scripts/test_selection/import_graph.py:317

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 317 | defined here | Compatibility wrapper returning only the forward import graph dictionary via load_or_build_data. |

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
clean

## Design notes
`load_or_build` is a Python compatibility function identifier in `scripts/test_selection/import_graph.py` providing cached access to the forward import graph dictionary rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
