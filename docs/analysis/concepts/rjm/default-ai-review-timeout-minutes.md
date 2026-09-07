---
package: rjm
name: DEFAULT_AI_REVIEW_TIMEOUT_MINUTES
slug: default-ai-review-timeout-minutes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/validate_ai_review_budgets.py, sha256: de7d1421fc018fd012bdff9445d2e318792c6afdad487f8e8bbffd6ee087266a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFAULT_AI_REVIEW_TIMEOUT_MINUTES

## Definition — verbatim
(used, not defined)

> "DEFAULT_AI_REVIEW_TIMEOUT_MINUTES = 5" — scripts/ci/validate_ai_review_budgets.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/validate_ai_review_budgets.py | 20 | defined here | Constant specifying default step timeout fallback (5 minutes) for ai-review action steps. |

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
defects: orphan

## Design notes
`DEFAULT_AI_REVIEW_TIMEOUT_MINUTES` is a configuration constant identifier setting default action timeout minutes in budget validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
