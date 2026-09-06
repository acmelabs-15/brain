---
package: addy
name: ACCEPTED
slug: accepted
kind: gate
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

# ACCEPTED

## Definition — verbatim
> "PROPOSED → ACCEPTED → (SUPERSEDED or DEPRECATED)" — skills/documentation-and-adrs/SKILL.md:96

## Also called — verbatim
> "Accepted" — skills/documentation-and-adrs/SKILL.md:54

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 96 | defined here | Specified as the agreed, active state in the ADR lifecycle transition model. |

## Consumes
A proposed ADR that has satisfied review requirements and achieved consensus.

## Produces
An active, authoritative architectural decision governing project implementation.

## When applied
Applied when an architectural decision is approved and adopted by the team or agent orchestrator.

## Sub-concepts
none

## Part of
adr-lifecycle

## Implementation status
clean

## Design notes
`ACCEPTED` designates an approved architectural decision as active project policy, establishing binding technical constraints that subsequent implementation and autonomous agents must follow.
