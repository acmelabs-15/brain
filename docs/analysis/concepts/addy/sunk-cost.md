---
package: addy
name: sunk cost
slug: sunk-cost
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/README.md, sha256: 9d67d641f2b710661462fce67370b25adcc60ad99d2149342f55cb33e025aa2b}
  - {path: evals/cases/incremental-implementation.json, sha256: 3f40c3955e0cccd725711818da2c4e3eac5c6eff0129afadea5cf8b74e558813}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# sunk cost

## Definition — verbatim
(used, not defined)
> "Discipline skills also include pressure cases for time pressure, sunk cost, and authority pressure; these verify that the workflow still holds when the prompt argues for skipping it." — evals/README.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/incremental-implementation.json | 46 | used here | Eval case expected output requiring the agent to reject sunk cost rationalizations for batching unverified code. |
| evals/README.md | 38 | used here | Describes sunk cost as one of the pressure test dimensions used to evaluate agent discipline. |

## Consumes
none

## Produces
none

## When applied
When an agent or user is tempted to merge an unverified or messy batch of changes because effort was already spent.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Sunk cost serves as an evaluation pressure vector in Addy's eval harness. It tests an agent's discipline to ensure that past effort is never accepted as a justification to bypass incremental verification or commit unverified batches.
