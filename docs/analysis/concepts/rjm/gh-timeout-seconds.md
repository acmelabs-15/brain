---
package: rjm
name: GH_TIMEOUT_SECONDS
slug: gh-timeout-seconds
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
  - {path: scripts/gh_retry_helpers.py, sha256: c89bd3c3d70fed06aa06c88d1d2d6cadbaca7930afc4ebab86ca53f2a1013051}
  - {path: scripts/scope_pr_base.py, sha256: 76a9c6117162cb2952a23e156f446c41da4573183334115690e28da4a824364f}
  - {path: scripts/validation/active_plan_closeout.py, sha256: ff907bbadd21f365e739dbb46fb15c8a6d851a03644bb202e283ce2c1510d602}
  - {path: scripts/validation/check_dual_priority_labels.py, sha256: 0a9a6320c38db8908cb300092f87e7e96b51b3672aa115743e270266c54d4504}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GH_TIMEOUT_SECONDS

## Definition — verbatim
(used, not defined)

> "GH_TIMEOUT_SECONDS = 60" — scripts/gh_retry_helpers.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_ai_review_context.py | 32 | used here | Imported timeout constant specifying execution limit for GitHub CLI operations. |
| scripts/gh_retry_helpers.py | 20 | defined here | Constant setting standard command timeout in seconds for GitHub CLI operations. |
| scripts/scope_pr_base.py | 34 | defined here | Constant setting subprocess timeout in seconds for GitHub PR scoping queries. |
| scripts/validation/active_plan_closeout.py | 17 | defined here | Constant setting subprocess timeout in seconds for GitHub plan closeout checks. |
| scripts/validation/check_dual_priority_labels.py | 48 | defined here | Constant setting subprocess timeout in seconds for GitHub priority label checks. |

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
`GH_TIMEOUT_SECONDS` is a configuration constant identifier defining subprocess execution timeouts for GitHub CLI commands rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
