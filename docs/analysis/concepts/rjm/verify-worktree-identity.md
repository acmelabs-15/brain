---
package: rjm
name: verify_worktree_identity
slug: verify-worktree-identity
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# verify_worktree_identity

## Definition — verbatim
(used, not defined)

> "def verify_worktree_identity() -> None:" — scripts/eval/_runtime_parity.py:449

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_runtime_parity.py | 449 | defines | Asserts that cwd and the evaluator belong to the same worktree to prevent accidental execution across trees. |

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
A Python validation guard in the parity harness requiring current directory and evaluator to reside in the same git worktree, classified as name-only per D-023.
