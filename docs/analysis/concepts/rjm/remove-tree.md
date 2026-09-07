---
package: rjm
name: remove_tree
slug: remove-tree
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

# remove_tree

## Definition — verbatim
(used, not defined)

> "def remove_tree(path: Path, label: str) -> str | None:" — scripts/ci/merge_tree_materialization.py:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_materialization.py | 93 | defined here | Robustly deletes temporary directories with exponential retry delays and error diagnostics. |

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
`remove_tree` is a Python utility function identifier providing robust temporary tree deletion with retry logic rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
