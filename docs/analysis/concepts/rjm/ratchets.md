---
package: rjm
name: RATCHETS
slug: ratchets
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/merge_tree_ratchet_registry.py, sha256: eaa4167914b5f6f546a258a8dec7ed8ed0de02369eabec21885d10bf20dc9f2e}
  - {path: scripts/validation/checks_ratchet.py, sha256: f11eedc4dca23178e7d74dc884946ff7010c35fc54cfc9f35a6bdd3051c79156}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RATCHETS

## Definition — verbatim
(used, not defined)

> "RATCHETS: tuple[MergeTreeRatchet, ...] = (" — scripts/ci/merge_tree_ratchet_registry.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_ratchet_registry.py | 34 | defined here | Defines the tuple of registered ratchets evaluated during merge-tree verification. |
| scripts/validation/checks_ratchet.py | 62 | defined here | Defines the aggregate tuple of registered ratchets executed during local pre-PR checks. |

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
`RATCHETS` is a Python module constant identifier holding tuples of registered ratchet instances rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
