---
package: rjm
name: MergeTreeRatchet
slug: mergetreeratchet
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/merge_tree_ratchet_registry.py, sha256: eaa4167914b5f6f546a258a8dec7ed8ed0de02369eabec21885d10bf20dc9f2e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MergeTreeRatchet

## Definition — verbatim
(used, not defined)

> "class MergeTreeRatchet:" — scripts/ci/merge_tree_ratchet_registry.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_ratchet_registry.py | 21 | defined here | Dataclass defining a registered merge-tree ratchet with label, baseline path, and counter module. |

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
`MergeTreeRatchet` is a Python dataclass identifier encapsulating configuration for ratchets executed on synthetic merge trees rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
