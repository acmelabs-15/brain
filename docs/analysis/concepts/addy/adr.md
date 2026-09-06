---
package: addy
name: ADR
slug: adr
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/documentation-and-adrs.json, sha256: 63369e93c8eccc4bd11dfd3830a28f25b5d50bf09844d3d2c7d5643f9051fd9e}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ADR

## Definition — verbatim
> "ADRs capture the reasoning behind significant technical decisions. They're the highest-value documentation you can write." — skills/documentation-and-adrs/SKILL.md:25

## Also called — verbatim
Architecture Decision Records — skills/documentation-and-adrs/SKILL.md:23

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/documentation-and-adrs.json | 6 | used here | Prompt requesting authoring an ADR for a database technology choice. |
| external/documentation-and-adrs.md | 5 | used here | Mentioned in meta description and summary as Architecture Decision Records. |

## Consumes
Problem context, decision drivers, candidate architectures, and evaluated trade-offs.

## Produces
An Architecture Decision Record document capturing context, decision, alternatives, and consequences.

## When applied
When choosing major dependencies, designing data models, selecting auth strategies, or making decisions expensive to reverse.

## Sub-concepts
trade-offs, timeless-language

## Part of
documentation-and-adrs

## Implementation status
clean

## Design notes
An ADR (Architecture Decision Record) is a structured document capturing the context, decision, alternatives, and consequences of a significant technical choice. By making architectural reasoning explicit and permanent, ADRs prevent future developers and agents from relitigating settled decisions or accidentally reversing intentional compromises.
