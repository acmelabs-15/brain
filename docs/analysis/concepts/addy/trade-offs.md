---
package: addy
name: trade-offs
slug: trade-offs
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/documentation-and-adrs.json, sha256: 63369e93c8eccc4bd11dfd3830a28f25b5d50bf09844d3d2c7d5643f9051fd9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# trade-offs

## Definition — verbatim
> "Trade-offs and rejected options are recorded, not just the winning choice" — evals/cases/documentation-and-adrs.json:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/documentation-and-adrs.json | 39 | used here | Expectation requiring that trade-offs and rejected alternatives are explicitly recorded in ADRs. |

## Consumes
Competing technical options, architectural alternatives, and operational constraints.

## Produces
Documented evaluation comparing advantages, drawbacks, and reasons for selecting one approach over others.

## When applied
When authoring architecture decision records, selecting system dependencies, or resolving design tensions.

## Sub-concepts
none

## Part of
documentation-and-adrs

## Implementation status
clean

## Design notes
Trade-offs embodies the deliberate analysis of competing strengths and weaknesses inherent in any technical choice. In addy's documentation philosophy, capturing why rejected alternatives were discarded is just as important as recording the chosen solution, ensuring future maintainers do not repeat evaluated mistakes.
