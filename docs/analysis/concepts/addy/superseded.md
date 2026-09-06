---
package: addy
name: SUPERSEDED
slug: superseded
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

# SUPERSEDED

## Definition — verbatim
> "When a decision changes, write a new ADR that references and supersedes the old one." — skills/documentation-and-adrs/SKILL.md:100

## Also called — verbatim
> "Superseded by ADR-XXX" — skills/documentation-and-adrs/SKILL.md:54

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 96 | defined here | Specified as a terminal state in the ADR lifecycle transition model when a decision is replaced by a newer ADR. |

## Consumes
A prior accepted ADR and a newly accepted ADR that invalidates and replaces it.

## Produces
An updated historical ADR status pointing to the superseding ADR.

## When applied
Applied to an existing accepted ADR when a subsequent architectural decision modifies or reverses its technical direction.

## Sub-concepts
none

## Part of
adr-lifecycle

## Implementation status
clean

## Design notes
`SUPERSEDED` marks a former architectural decision as replaced, ensuring historical rationale remains intact and traceable without misleading future engineers into following outdated guidance.
