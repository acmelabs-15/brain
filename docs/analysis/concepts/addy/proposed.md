---
package: addy
name: PROPOSED
slug: proposed
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

# PROPOSED

## Definition — verbatim
> "PROPOSED → ACCEPTED → (SUPERSEDED or DEPRECATED)" — skills/documentation-and-adrs/SKILL.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 96 | defined here | Specified as the initial status state in the ADR lifecycle transition diagram. |

## Consumes
An architectural problem, context, requirements, drafted decision, and evaluated alternatives.

## Produces
A proposed ADR document submitted for stakeholder review and evaluation prior to acceptance.

## When applied
Assigned as the initial status of an ADR upon creation when the proposal is under active consideration.

## Sub-concepts
none

## Part of
adr-lifecycle

## Implementation status
clean

## Design notes
`PROPOSED` marks an Architecture Decision Record as an open proposal under review, preventing unapproved architectural ideas from being treated as binding constraints before team or orchestrator consensus is achieved.
