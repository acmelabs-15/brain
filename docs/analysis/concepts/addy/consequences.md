---
package: addy
name: Consequences
slug: consequences
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Consequences

## Definition — verbatim
> "## Consequences" — skills/documentation-and-adrs/SKILL.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 86 | defined here | Section heading in the ADR template detailing positive, negative, and operational outcomes resulting from the decision. |

## Consumes
The adopted architectural decision and its anticipated technical, operational, and organizational impacts.

## Produces
An explicit list of trade-offs, downstream dependencies, required skills, and operational hosting requirements.

## When applied
Authored during ADR drafting to forecast and document the full impact of adopting the decision.

## Sub-concepts
none

## Part of
adr-template

## Implementation status
clean

## Design notes
The `Consequences` section explicitly outlines both benefits and trade-offs of an architectural decision, ensuring that downstream costs, operational overhead, and new requirements are consciously acknowledged before implementation.
