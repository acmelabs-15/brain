---
package: addy
name: ADR Lifecycle
slug: adr-lifecycle
kind: pattern
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

# ADR Lifecycle

## Definition — verbatim
> "PROPOSED → ACCEPTED → (SUPERSEDED or DEPRECATED)" — skills/documentation-and-adrs/SKILL.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 93 | defined here | Section heading and state transition model defining the lifecycle states and rules for ADR evolution. |

## Consumes
Drafted, active, or modified Architecture Decision Records.

## Produces
Managed state transitions preserving decision history without deleting past records.

## When applied
Governs the status and evolution of all ADRs from initial proposal to acceptance and eventual deprecation or replacement.

## Sub-concepts
proposed, accepted, superseded, deprecated

## Part of
architecture-decision-records

## Implementation status
clean

## Design notes
The `ADR Lifecycle` defines the formal state transitions for technical decisions, enforcing an append-and-supersede rule where historical decisions remain permanently on record rather than being deleted or silently modified.
