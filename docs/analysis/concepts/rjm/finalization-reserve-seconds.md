---
package: rjm
name: FINALIZATION_RESERVE_SECONDS
slug: finalization-reserve-seconds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/establish_ai_review_deadline.py, sha256: 54901cf4d6d02196ebc876a3be82c92f9e8bb550d804f5e1027d13daa35a2a0a}
  - {path: scripts/ci/validate_ai_review_budgets.py, sha256: de7d1421fc018fd012bdff9445d2e318792c6afdad487f8e8bbffd6ee087266a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FINALIZATION_RESERVE_SECONDS

## Definition — verbatim
(used, not defined)

> "FINALIZATION_RESERVE_SECONDS = 60" — scripts/ci/establish_ai_review_deadline.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/establish_ai_review_deadline.py | 17 | defined here | Constant defining buffer time in seconds reserved for post-model finalization and cleanup. |
| scripts/ci/validate_ai_review_budgets.py | 23 | defined here | Constant defining finalization reserve seconds used to validate workflow timeout budgets. |

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
A timeout reserve constant defining seconds reserved for review action cleanup rather than an operational lifecycle concept.
