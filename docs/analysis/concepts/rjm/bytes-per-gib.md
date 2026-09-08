---
package: rjm
name: _BYTES_PER_GIB
slug: bytes-per-gib
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

# _BYTES_PER_GIB

## Definition — verbatim
(used, not defined)

> "_BYTES_PER_GIB = 1024**3" — scripts/validation/check_tmp_worktrees.py:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_tmp_worktrees.py | 58 | defined here | Constant defining the conversion factor from bytes to gibibytes (1024^3). |

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
`_BYTES_PER_GIB` is an internal Python arithmetic constant in `check_tmp_worktrees.py` for byte conversion rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
