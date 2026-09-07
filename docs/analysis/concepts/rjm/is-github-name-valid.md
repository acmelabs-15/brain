---
package: rjm
name: is_github_name_valid
slug: is-github-name-valid
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/github_core/validation.py, sha256: a07f30b4bc09a656e2c5f3d7109928f245a20055d0f60dd3f6165535b412afae}
  - {path: scripts/issue_triage.py, sha256: fcd6b841e0998709bc8e6c141ca452d89ea8238ba619daa7cbb301af9f851565}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_github_name_valid

## Definition — verbatim
(used, not defined)

> "def is_github_name_valid(name: str, name_type: str) -> bool:" — scripts/github_core/validation.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/api.py | 54 | used here | Imported and invoked to validate repository owner and repo names. |
| scripts/github_core/validation.py | 24 | defined here | Validation function checking GitHub owner or repo names against regex and directory alias rules. |
| scripts/issue_triage.py | 54 | used here | Imported and invoked to prevent command injection in issue triage repository parameters. |

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
defects: doc-drift, exit-code-mismatch, orphan

## Design notes
`is_github_name_valid` is a Python validation function identifier enforcing GitHub naming conventions to prevent command injection rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
