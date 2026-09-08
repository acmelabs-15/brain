---
package: rjm
name: validate_tmp_worktrees
slug: validate-tmp-worktrees
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_tmp_worktrees.py, sha256: 5c02ec68da197cf638f52de26a2f088604475285cceff8c3c6adb1029a58078a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_tmp_worktrees

## Definition — verbatim
(used, not defined)

> "def validate_tmp_worktrees(repo_root: Path) -> bool:" — scripts/validation/check_tmp_worktrees.py:305

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_tmp_worktrees.py | 305 | defined here | Advisory validation entry point auditing for temporary worktrees and printing diagnostic warnings. |

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
`validate_tmp_worktrees` is a Python advisory gate function in `check_tmp_worktrees.py` providing a non-blocking pre-PR check rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
