---
package: rjm
name: GhAuthStatus
slug: ghauthstatus
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/assign_bot_reviewer.py, sha256: 16383cb10afb0de419d0af21fc4c6eae32b02146e40224606224d23cabe6f1fe}
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
  - {path: scripts/ci/verify_github_auth.py, sha256: 4002c1260eee8c6c96768c5e14ff4ab9d9153b9664cac90a20003fcbd1fa5f87}
  - {path: scripts/github_core/__init__.py, sha256: 8eff83b2be69b5158b6f035088b9e9a74d814704ddfc2364caf814b86c248031}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/validation/pr_commit_count.py, sha256: cb5a32b3515c33d1b879c79b391d4c3df5a688b7ab3d8933c89c30cbaa1eac3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GhAuthStatus

## Definition — verbatim
(used, not defined)

> "class GhAuthStatus(Enum):" — scripts/github_core/api.py:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/assign_bot_reviewer.py | 53 | used here | Imported to handle and classify GitHub CLI authentication and rate-limiting outcomes. |
| .github/scripts/measure_workflow_coalescing.py | 33 | used here | Imported to verify GitHub authentication preflight before computing coalescing metrics. |
| scripts/ci/verify_github_auth.py | 22 | used here | Imported to assert authenticated status or report failure classifications in CI. |
| scripts/github_core/__init__.py | 13 | used here | Re-exported from github_core module namespace. |
| scripts/github_core/api.py | 170 | defined here | Defined as an Enum classifying GitHub CLI authentication preflight outcomes. |
| scripts/validation/pr_commit_count.py | 68 | used here | Imported to validate GitHub authentication before querying PR commit history. |

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
defects: exit-code-mismatch, doc-drift, script-bug, orphan

## Design notes
GhAuthStatus is a Python enumeration class classifying GitHub authentication preflight results rather than an independent software lifecycle concept.
