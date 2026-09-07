---
package: rjm
name: classify_pr_fetch_failure
slug: classify-pr-fetch-failure
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
  - {path: scripts/ci/failure_classification.py, sha256: ac3e3891e6118e9b0a356e05751826f7733646b305b8c3a01fd7e2ae28d83337}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# classify_pr_fetch_failure

## Definition — verbatim
(used, not defined)

> "def classify_pr_fetch_failure(" — scripts/ci/failure_classification.py:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_ai_review_context.py | 227 | used here | Imported helper function classifying errors encountered during PR retrieval. |
| scripts/ci/failure_classification.py | 70 | defined here | Function categorizing PR fetch failure details into specific error classifications. |

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
`classify_pr_fetch_failure` is a Python error classification function identifier in `failure_classification.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
