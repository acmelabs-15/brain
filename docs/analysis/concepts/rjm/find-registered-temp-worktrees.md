---
package: rjm
name: find_registered_temp_worktrees
slug: find-registered-temp-worktrees
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

# find_registered_temp_worktrees

## Definition — verbatim
(used, not defined)

> "def find_registered_temp_worktrees(paths: list[str], temp_root: Path) -> list[str]:" — scripts/validation/check_tmp_worktrees.py:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_tmp_worktrees.py | 127 | defined here | Helper function filtering a list of registered worktree paths to return those residing under the temp root. |

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
`find_registered_temp_worktrees` is a Python filtering helper function in `check_tmp_worktrees.py` identifying registered worktrees under temporary directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
