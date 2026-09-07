---
package: rjm
name: check_push_lock_paths.py
slug: check-push-lock-paths-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_push_lock_before_commit.py, sha256: 539d0cd22f8e575f3f1c1f6b32d9b19b5d499c93288c944020b6b69e026b1e44}
  - {path: scripts/validation/check_worktree_recipes.py, sha256: 044f9938bfec5b84200b19419b7b1c067033d89a48c49202c59b6d549e32ac67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_push_lock_paths.py

## Definition — verbatim
(used, not defined)

> "``check_push_lock_paths.py``:" — scripts/validation/check_push_lock_before_commit.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 23 | used here | Cited in docstring alongside push-lock.md as the authority establishing the canonical lock path format. |
| scripts/validation/check_worktree_recipes.py | 53 | used here | Cited in docstring as precedent for retrospective and archive path exclusion carve-outs. |

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
`check_push_lock_paths.py` is the filename of a validation gate script rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
