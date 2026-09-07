---
package: rjm
name: init_scratch_repo
slug: init-scratch-repo
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

# init_scratch_repo

## Definition — verbatim
(used, not defined)

> "def init_scratch_repo(scratch: Path) -> bool:" — scripts/ci/merge_tree_materialization.py:197

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_materialization.py | 197 | defined here | Commits a materialized tree inside an isolated git environment to support tools requiring a repository. |

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
`init_scratch_repo` is a Python function identifier wrapping scratch repository initialization in an isolated environment rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
