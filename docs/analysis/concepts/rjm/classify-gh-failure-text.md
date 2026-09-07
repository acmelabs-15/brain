---
package: rjm
name: classify_gh_failure_text
slug: classify-gh-failure-text
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/verify_github_auth.py, sha256: 4002c1260eee8c6c96768c5e14ff4ab9d9153b9664cac90a20003fcbd1fa5f87}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/validation/pr_commit_count.py, sha256: cb5a32b3515c33d1b879c79b391d4c3df5a688b7ab3d8933c89c30cbaa1eac3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# classify_gh_failure_text

## Definition — verbatim
(used, not defined)

> "def classify_gh_failure_text(text: str) -> GhAuthStatus:" — scripts/github_core/api.py:362

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/verify_github_auth.py | 23 | used here | Imported to classify failure outputs from GitHub CLI authentication checks. |
| scripts/github_core/api.py | 362 | defined here | Maps stderr and error output from gh commands to granular GhAuthStatus enum categories. |
| scripts/validation/pr_commit_count.py | 69 | used here | Imported to classify GitHub CLI failure text during PR commit counting. |

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
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
A Python error classification function (`classify_gh_failure_text`) mapping GitHub CLI errors to auth status enums, classified as `name-only` per D-023.
