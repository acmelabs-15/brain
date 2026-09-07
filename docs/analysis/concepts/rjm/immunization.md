---
package: rjm
name: _IMMUNIZATION
slug: immunization
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_repo_health_report.py, sha256: 740b36ed275f8f61a8db2b37fa1c1fc738a7b050c8306cb0c00e5e8b1055fdbf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _IMMUNIZATION

## Definition — verbatim
(used, not defined)

> "_IMMUNIZATION = " — scripts/validation/check_repo_health_report.py:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 52 | defined here | Command string specifying worktree-scoped immunization against core.bare corruption. |

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
`_IMMUNIZATION` is a Python string constant holding the Git command used to immunize worktrees against `core.bare` corruption, classified as `kind: name-only` per D-023.
