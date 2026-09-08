---
package: rjm
name: RULE_CITATION
slug: rule-citation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_tmp_worktrees.py, sha256: 5c02ec68da197cf638f52de26a2f088604475285cceff8c3c6adb1029a58078a}
  - {path: scripts/validation/check_worktree_recipes.py, sha256: 044f9938bfec5b84200b19419b7b1c067033d89a48c49202c59b6d549e32ac67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# RULE_CITATION

## Definition — verbatim
(used, not defined)

> "RULE_CITATION = \".claude/rules/universal.md MUST NOT 6 (git worktrees MUST be external)\"" — scripts/validation/check_tmp_worktrees.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_tmp_worktrees.py | 61 | defined here | Constant string defining the human-readable rule reference cited when temporary worktree violations are reported. |
| scripts/validation/check_worktree_recipes.py | 82 | defined here | Constant string defining the rule citation printed when bad worktree destination recipes are detected. |

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
clean in scripts/validation/check_tmp_worktrees.py; defects: exit-code-mismatch in scripts/validation/check_worktree_recipes.py

## Design notes
`RULE_CITATION` is a Python string constant across worktree validation scripts defining diagnostic rule error headers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
