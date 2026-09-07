---
package: rjm
name: _holds_checked_out_content
slug: holds-checked-out-content
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_repo_health.py, sha256: f7f2150b68774a2af74e27eb6a7ee68c4aa28d0e3fef28e6a0a60e59cebf6854}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _holds_checked_out_content

## Definition — verbatim
(used, not defined)

> "def _holds_checked_out_content(work_tree: Path) -> bool:" — scripts/validation/check_repo_health.py:309

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 309 | defined here | Helper function verifying directory holds entries besides .git. |

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
`_holds_checked_out_content` is a Python helper function verifying that a candidate worktree directory contains files other than `.git`, classified as `kind: name-only` per D-023.
