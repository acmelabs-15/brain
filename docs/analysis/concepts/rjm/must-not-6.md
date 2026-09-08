---
package: rjm
name: MUST NOT 6
slug: must-not-6
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_worktree_recipes.py, sha256: 044f9938bfec5b84200b19419b7b1c067033d89a48c49202c59b6d549e32ac67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# MUST NOT 6

## Definition — verbatim
(used, not defined)

> "MUST NOT 6 states the binding rule verbatim:" — scripts/validation/check_worktree_recipes.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_worktree_recipes.py | 4 | used here | Universal repository rule section cited in docstring as requiring git worktrees to be external. |

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
A rule clause identifier from repository universal rules governing git worktree placement, classified as `kind: name-only` per D-023.
