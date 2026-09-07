---
package: rjm
name: Trim and stack
slug: trim-and-stack
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/100m-offers.md, sha256: fde6a6a0e100b4c276fa3e6fc64fee0911f7e1c4c6eab33e7a7e1c0705ad9052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Trim and stack

## Definition — verbatim
> "5. Trim and stack. Cut low-value, high-cost deliverables. Keep high-value," — .claude/skills/business-strategy/references/100m-offers.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/100m-offers.md | 50 | defined here | Core offer optimization step cutting expensive low-value deliverables while packaging high-value elements into an itemized value stack. |

## Consumes
Unfiltered inventory of obstacle-solving deliverables, delivery cost estimates, and perceived buyer value ratings.

## Produces
An optimized, high-margin offer bundle structured as an itemized stack whose declared value dwarfs the asking price.

## When applied
Applied after brainstorming deliverables that resolve buyer obstacles to ensure operational viability and margin health.

## Sub-concepts
none

## Part of
100m-offers

## Implementation status
clean

## Design notes
An offer refinement technique in rjm's business strategy toolkit. It eliminates operationally burdensome deliverables that provide little perceived value while keeping low-cost, high-impact items, presenting the remaining components as an itemized stack that makes the final asking price appear heavily discounted.
