---
package: addy
name: ADRs
slug: adrs
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

# ADRs

## Definition — verbatim
> "## Architecture Decision Records (ADRs)" — skills/documentation-and-adrs/SKILL.md:23
> "ADRs capture the reasoning behind significant technical decisions. They're the highest-value documentation you can write." — skills/documentation-and-adrs/SKILL.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 23 | defines | Cited as primary mechanism for capturing technical rationale and architectural context. |

## Consumes
Architectural proposals, technical evaluation criteria, evaluated alternatives, and accepted trade-offs.

## Produces
Version-controlled Architecture Decision Records documenting context, options, decision, and consequences.

## When applied
Applied when choosing major dependencies, designing data models, selecting auth strategies, or making decisions expensive to reverse.

## Sub-concepts
none

## Part of
documentation-and-adrs

## Implementation status
clean

## Design notes
Architecture Decision Records (ADRs) are structured, version-controlled documents capturing the context, alternatives considered, and consequences of key technical decisions. By preserving institutional memory, ADRs prevent endless re-litigation of choices and guide future engineers and autonomous agents.
