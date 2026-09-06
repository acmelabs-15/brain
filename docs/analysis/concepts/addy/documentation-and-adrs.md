---
package: addy
name: documentation-and-adrs
slug: documentation-and-adrs
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/documentation-and-adrs.json, sha256: 63369e93c8eccc4bd11dfd3830a28f25b5d50bf09844d3d2c7d5643f9051fd9e}
  - {path: external/deprecation-and-migration.md, sha256: a1d9b5a8d3237126b624e386d75e89e29bc5112edd61057bfa2fa97003050a23}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# documentation-and-adrs

## Definition — verbatim
> "Document decisions, not just code. The most valuable documentation captures the *why* — the context, constraints, and trade-offs that led to a decision." — skills/documentation-and-adrs/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/documentation-and-adrs.json | 2 | used here | Target skill identifier in evaluation test cases. |
| external/deprecation-and-migration.md | 12 | used here | Related skill card in the Ship phase on external web catalog. |
| external/documentation-and-adrs.md | 1 | defined here | Title and summary defining documentation-and-adrs on external web catalog. |
| external/git-workflow-and-versioning.md | 12 | used here | Related skill card in the Ship phase on external web catalog. |
| README.md | 280 | used here | Catalogs skill scope, ADR authoring, and documentation triggers under the Ship phase. |
| references/definition-of-done.md | 44 | used here | Cited in Definition of Done checklist for recording preserved architectural decisions. |
| skills/documentation-and-adrs/SKILL.md | 2 | defined here | Defines ADR authoring conventions, documentation standards, and timeless language rules. |

## Consumes
Architectural proposals, technical evaluation trade-offs, system constraints, and public API changes.

## Produces
Architecture Decision Records (ADRs), public API documentation, and inline rationale.

## When applied
When making significant architectural decisions, choosing between competing technologies, modifying public APIs, or shipping features.

## Sub-concepts
adr, trade-offs, timeless-language

## Part of
addy:Ship

## Implementation status
clean

## Design notes
documentation-and-adrs ensures that engineering reasoning survives beyond initial implementation. By capturing the architectural context, rejected alternatives, constraints, and consequences in structured ADRs written in timeless language, it equips future maintainers and agents to understand why the system was designed this way and prevents accidental reversal of deliberate decisions.
