---
package: rjm
name: BaselineState
slug: baselinestate
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/merge_tree_ratchet_check.py, sha256: accf975a25438d5accc844379fb857d685029146cca96ef12df3474a7cc26747}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BaselineState

## Definition — verbatim
(used, not defined)

> "class BaselineState(Enum):" — scripts/ci/merge_tree_ratchet_check.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_ratchet_check.py | 77 | defined here | Defines an enumeration representing baseline resolution states (VALUE, MISSING, MALFORMED, EXTERNAL). |

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
`BaselineState` is a Python Enum class identifier representing baseline parsing and resolution outcomes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
