---
package: addy
name: DEPRECATED
slug: deprecated
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

# DEPRECATED

## Definition — verbatim
> "PROPOSED → ACCEPTED → (SUPERSEDED or DEPRECATED)" — skills/documentation-and-adrs/SKILL.md:96

## Also called — verbatim
> "Deprecated" — skills/documentation-and-adrs/SKILL.md:54

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 96 | defined here | Specified as a terminal state in the ADR lifecycle transition model when an architectural approach is retired without direct replacement. |

## Consumes
An accepted ADR whose technical recommendation or technology is no longer in use or supported.

## Produces
A retired ADR status recording the discontinuation of the architectural approach.

## When applied
Applied when an architectural decision is abandoned or decommissioned without a successor ADR.

## Sub-concepts
none

## Part of
adr-lifecycle

## Implementation status
clean

## Design notes
`DEPRECATED` identifies an architectural decision that is permanently retired without replacement, signaling that the pattern or technology must no longer be used while preserving historical context.
