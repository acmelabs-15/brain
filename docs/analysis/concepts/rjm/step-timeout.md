---
package: rjm
name: _step_timeout
slug: step-timeout
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

# _step_timeout

## Definition — verbatim
(used, not defined)

> "def _step_timeout(step: Mapping[str, object]) -> int | None:" — scripts/ci/validate_ai_review_budgets.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/validate_ai_review_budgets.py | 56 | defined here | Helper function extracting the timeout-minutes property from a workflow step with-block, falling back to default. |

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
`_step_timeout` is an internal Python helper function identifier extracting step timeout configurations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
