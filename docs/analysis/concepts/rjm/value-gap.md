---
package: rjm
name: Value Gap
slug: value-gap
kind: technique
package_phase: rjm:support
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/negotiation.md, sha256: 1caac2daaa29dde1d3f672383afb71a93b165b4d6f9fb267c62081e03994aff4}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Value Gap

## Definition — verbatim
> "Never recommend accepting any offer without first quantifying the value gap." — .claude/agents/negotiation.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/negotiation.md | 99 | defined here | Quantitative comparison of current offer net value vs. achievable value. |
| templates/agents/negotiation.shared.md | 105 | defined here | Shared template block requiring dollar-quantified delta and reasoning between current and achievable values. |

## Consumes
Current offer terms, market comps, and maximum achievable valuation models.

## Produces
Explicit numerical and percentage gap between current offer net value and achievable value with evidentiary rationale.

## When applied
Mandatory gate applied before making any recommendation to accept, counter, or reject an offer.

## Sub-concepts
none

## Part of
analyze-map-the-zone

## Implementation status
clean

## Design notes
Value Gap enforces strict mathematical quantification of the difference between an incoming offer and the full achievable value under optimal negotiation. In rjm, it prevents premature acceptance of "good enough" proposals by making the uncaptured value explicitly visible.
