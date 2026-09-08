---
package: rjm
name: REASON_TEMP
slug: reason-temp
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

# REASON_TEMP

## Definition — verbatim
(used, not defined)

> "REASON_TEMP = \"names a temp-filesystem path; a reclaim takes the only copy of unpushed work\"" — scripts/validation/check_worktree_recipes.py:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_worktree_recipes.py | 123 | defined here | Constant explanation string reported when a worktree recipe targets a temporary filesystem destination. |

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
A module-level string constant identifier in `check_worktree_recipes.py`, classified as `kind: name-only` per D-023.
