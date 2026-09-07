---
package: rjm
name: Evidence Sufficiency Principle
slug: evidence-sufficiency-principle
kind: pattern
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-021-model-routing-strategy.md, sha256: 5d49be2ab0d07492878d0fc5c63a6f45c604052a7d3ad92aa170730b0b94ba0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evidence Sufficiency Principle

## Definition — verbatim
> "**Conservative stance**: Insufficient evidence forbids PASS" — .agents/architecture/ADR-021-model-routing-strategy.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-021-model-routing-strategy.md | 81 | defined here | Core review governance rule dictating that models cannot pass pull requests without complete evidence. |

## Consumes
Review context mode, diff completeness, and supporting document evidence.

## Produces
Strict constraints on permitted gate verdicts (forbidding PASS on partial or summary context).

## When applied
Applied across all AI quality gates and local review invocations when determining PR verdicts.

## Sub-concepts
none

## Part of
tiered-model-routing-strategy

## Implementation status
defects: missing-path

## Design notes
A foundational review rule stating that an absence of observable defects must never be conflated with evidence of correctness. Under this principle, when a review agent receives an incomplete diff, summary-only context, or missing specification documents, it is mechanically forbidden from emitting a PASS verdict, preventing silent regressions caused by model hallucination.
