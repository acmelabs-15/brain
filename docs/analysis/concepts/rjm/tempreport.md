---
package: rjm
name: TempReport
slug: tempreport
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

# TempReport

## Definition — verbatim
(used, not defined)

> "class TempReport:" — scripts/validation/check_tmp_worktrees.py:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_tmp_worktrees.py | 73 | defined here | Dataclass capturing aggregate findings, disk statistics, and audit status for a temp-root scan. |

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
`TempReport` is a Python dataclass identifier in `check_tmp_worktrees.py` holding scan results and disk availability metrics rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
