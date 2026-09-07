---
package: rjm
name: _BUCKET_TOKENS
slug: bucket-tokens
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_pr_churn.py, sha256: 027d16099d7ba9d03cbd30f7d78b433c82c8b84c715a4ae795f1547b21008f84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _BUCKET_TOKENS

## Definition — verbatim
(used, not defined)

> "wins, so the order of ``_BUCKET_TOKENS`` is part of the contract. The buckets" — scripts/eval/_pr_churn.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_pr_churn.py | 15 | defined here | Priority-ordered token mapping list defining regex patterns for classifying commit headlines into churn buckets. |

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
`_BUCKET_TOKENS` is an internal Python list constant in `_pr_churn.py` defining token patterns for commit message categorization rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
