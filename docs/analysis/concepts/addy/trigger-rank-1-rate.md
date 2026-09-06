---
package: addy
name: trigger rank-1 rate
slug: trigger-rank-1-rate
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/README.md, sha256: 9d67d641f2b710661462fce67370b25adcc60ad99d2149342f55cb33e025aa2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# trigger rank-1 rate

## Definition — verbatim
> "The Tier-2 run prints a **trigger rank-1 rate** (share of positive prompts that rank their skill first, not merely top-k)." — evals/README.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/README.md | 86 | defined here | Defined as the metric measuring the share of positive trigger prompts ranking their intended skill first. |

## Consumes
Positive trigger prompts and skill descriptions evaluated via Tier-2 TF-IDF routing.

## Produces
A percentage metric enforced in CI with a minimum floor (--min-rank1 80).

## When applied
During Tier-2 deterministic eval execution and CI validation.

## Sub-concepts
none

## Part of
evals-framework

## Implementation status
defects: doc-drift

## Design notes
A key quality metric and gate ensuring skills route deterministically from realistic user prompts and that skill descriptions do not drift into ambiguity.
