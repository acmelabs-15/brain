---
package: addy
name: ADR Template
slug: adr-template
kind: template
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

# ADR Template

## Definition — verbatim
> "### ADR Template" — skills/documentation-and-adrs/SKILL.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 46 | defined here | Heading introducing the standard Markdown template for Architecture Decision Records. |

## Consumes
Architectural context, constraints, technical requirements, evaluated options, and trade-offs.

## Produces
A structured ADR Markdown document with Status, Date, Context, Decision, Alternatives Considered, and Consequences sections.

## When applied
> "Only when no convention can be established do you apply the default below." — skills/documentation-and-adrs/SKILL.md:44

## Sub-concepts
decision, alternatives-considered, consequences

## Part of
architecture-decision-records

## Implementation status
clean

## Design notes
The `ADR Template` provides a structured, predictable format for recording architectural choices, ensuring engineers and agents capture the problem context, rejected alternatives with explicit trade-offs, and downstream consequences alongside the final decision.
