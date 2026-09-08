---
package: rjm
name: portability_git
slug: portability-git
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_baseline.py, sha256: 713e756f9d9bf1db3006bc3cf53182484d338b62c39b18292fd60f1fcba5cca6}
  - {path: scripts/validation/portability_floor.py, sha256: 880eb845d61bfdbabbe2065af1621f298c96a33719f50ed694a30a69e461f9d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# portability_git

## Definition — verbatim
(used, not defined)

> "from scripts.validation.portability_git import git_timeout_problem, run_git" — scripts/validation/portability_baseline.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_baseline.py | 38 | used here | Imported module providing git query execution and timeout handling helpers. |
| scripts/validation/portability_floor.py | 22 | used here | Imported module used to query committed blobs and check baseline recording in git history. |

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
A Python module identifier in `portability_baseline.py` and `portability_floor.py`, classified as name-only per D-023.
