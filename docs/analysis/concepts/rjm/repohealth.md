---
package: rjm
name: RepoHealth
slug: repohealth
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_repo_health.py, sha256: f7f2150b68774a2af74e27eb6a7ee68c4aa28d0e3fef28e6a0a60e59cebf6854}
  - {path: scripts/validation/check_repo_health_report.py, sha256: 740b36ed275f8f61a8db2b37fa1c1fc738a7b050c8306cb0c00e5e8b1055fdbf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RepoHealth

## Definition — verbatim
(used, not defined)

> "class RepoHealth:" — scripts/validation/check_repo_health_report.py:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 58 | defined here | Dataclass definition holding repository health status and Git configuration scope metadata. |
| scripts/validation/check_repo_health.py | 86 | used here | Imported and instantiated to represent diagnosis verdicts in the health gate. |

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
`RepoHealth` is an internal Python dataclass representing repository health verification verdicts and scope inspection results, classified as `kind: name-only` per D-023.
