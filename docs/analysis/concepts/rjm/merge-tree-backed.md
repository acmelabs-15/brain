---
package: rjm
name: MERGE_TREE_BACKED
slug: merge-tree-backed
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/cli_exit_contract_ratchet.py, sha256: 70922e7da82e56e1d9e67083a1a4aed6ed4a29d53e56346cfad7214a517c78f7}
  - {path: scripts/ci/ruff_count_ratchet.py, sha256: e8ec4aae7eeeb3ebec27b426f609c8a04849394340012720a17c92248ac33fd6}
  - {path: scripts/ci/subprocess_encoding_count_ratchet.py, sha256: f7908eed342041ee0688b4a809507595c39326ac8b2cea3c46a67166e1aca99e}
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
  - {path: scripts/ci/type_ignore_count_ratchet.py, sha256: 2bd382be93600e1610f8c48e5eb6371620f8a846d1f6e271df96e0aea04cee6b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MERGE_TREE_BACKED

## Definition — verbatim
(used, not defined)

> "This baseline is registered in ``merge_tree_ratchet_registry.py::RATCHETS``." — scripts/ci/cli_exit_contract_ratchet.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/cli_exit_contract_ratchet.py | 68 | defined here | Declared as `True` in `__all__` and passed to `count_ratchet.run` to indicate registry backing. |
| scripts/ci/ruff_count_ratchet.py | 55 | defined here | Declared as `True` in `__all__` for merge tree registry registration. |
| scripts/ci/subprocess_encoding_count_ratchet.py | 52 | defined here | Declared as `False` because the ratchet runs only in pytest without merge tree verification. |
| scripts/ci/taste_count_ratchet.py | 71 | defined here | Declared as `True` indicating participation in merge tree ratchet checking. |
| scripts/ci/type_ignore_count_ratchet.py | 62 | defined here | Declared as `True` registering the type-ignore count baseline in the merge tree. |

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
defects: orphan

## Design notes
`MERGE_TREE_BACKED` is a Python module-level boolean constant identifier indicating whether a ratchet baseline participates in synthetic merge-tree verification rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
