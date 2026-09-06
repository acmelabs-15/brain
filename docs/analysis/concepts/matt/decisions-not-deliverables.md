---
package: matt
name: decisions, not deliverables
slug: decisions-not-deliverables
kind: pattern
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# decisions, not deliverables

## Definition — verbatim
> "The map produces **decisions, not deliverables**; it's done when nothing is left to decide before someone builds the thing." — CHANGELOG.md:195

## Also called — verbatim
`Plan, don't do` — CHANGELOG.md:195

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 195 | defined here | Core operating philosophy of wayfinder separating planning from implementation |

## Consumes
A wayfinder mapping session and emerging decision tickets

## Produces
Settled architectural and product decisions rather than production code

## When applied
During wayfinder charting and resolution sessions

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
clean

## Design notes
This pattern establishes that the primary objective of wayfinder is to eliminate uncertainty and make all requisite decisions before building, preventing agents from prematurely writing product code inside the planning map.
