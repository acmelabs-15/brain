---
package: rjm
name: EXCLUDED_PREFIXES
slug: excluded-prefixes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_push_lock_paths.py, sha256: 62161c502e0452a137d97f1f04b7777353fb9ed170994965ff1a78fa03e8473e}
  - {path: scripts/validation/check_worktree_recipes.py, sha256: 044f9938bfec5b84200b19419b7b1c067033d89a48c49202c59b6d549e32ac67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXCLUDED_PREFIXES

## Definition — verbatim
(used, not defined)

> "EXCLUDED_PREFIXES = (" — scripts/validation/check_push_lock_paths.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_paths.py | 54 | defined here | Constant tuple specifying directory path prefixes exempt from push-lock prescription validation. |
| scripts/validation/check_worktree_recipes.py | 94 | defined here | Constant tuple specifying directory path prefixes exempt from worktree prescription checking. |

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
defects: exit-code-mismatch

## Design notes
`EXCLUDED_PREFIXES` is a Python constant tuple identifier in validation scripts defining path prefixes exempt from prescription scans rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
