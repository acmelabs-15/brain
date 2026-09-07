---
package: rjm
name: _cleanup_materialization
slug: cleanup-materialization
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/merge_tree_materialization.py, sha256: aeda3844a027c282ae04e33379a456f239d06f484aece396003e530861ba6b0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _cleanup_materialization

## Definition — verbatim
(used, not defined)

> "def _cleanup_materialization(index_path: Path, isolated_home: Path) -> bool:" — scripts/ci/merge_tree_materialization.py:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_materialization.py | 113 | defined here | Cleans up the temporary Git index file and isolated home directory used during tree materialization. |

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
defects: script-bug

## Design notes
`_cleanup_materialization` is an internal Python helper function removing temporary Git indices and homes used in merge-tree extraction rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
