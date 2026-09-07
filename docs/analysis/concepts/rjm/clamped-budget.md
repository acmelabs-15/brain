---
package: rjm
name: _clamped_budget
slug: clamped-budget
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_generated_staleness.py, sha256: 1be3095eed20c44cb26605bb6632317cdaf00ab7551f9eef44d94386b0979e5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _clamped_budget

## Definition — verbatim
(used, not defined)

> "def _clamped_budget(now: float) -> float:" — scripts/validation/check_generated_staleness.py:277

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_generated_staleness.py | 277 | defined here | Helper function calculating effective timeout budget clamped against outer environment caps. |

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
_clamped_budget is an internal Python helper function identifier clamping execution budgets rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
