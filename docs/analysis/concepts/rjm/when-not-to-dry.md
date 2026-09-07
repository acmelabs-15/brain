---
package: rjm
name: When NOT to DRY
slug: when-not-to-dry
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# When NOT to DRY

## Definition — verbatim
> "## When NOT to DRY" — .claude/skills/golden-principles/references/design-dry-principle.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 60 | defined here | Section heading establishing negative boundary conditions and heuristics where applying DRY is harmful. |

## Consumes
Candidate deduplication refactorings, superficially similar code fragments, and early abstraction proposals.

## Produces
Decisions to preserve deliberate duplication, delayed abstraction milestones, and decoupled module architectures.

## When applied
Consulted during code review, architectural design, and refactoring planning before unifying seemingly repetitive code structures.

## Sub-concepts
accidental-duplication, different-rates-of-change, rule-of-three

## Part of
dry-principle

## Implementation status
defects: missing-path

## Design notes
When NOT to DRY provides essential counter-heuristics within rjm's software architecture to prevent overzealous deduplication. It cautions engineers against creating false abstractions when code similarity is accidental, when components change for distinct business reasons, or before seeing three concrete instances. It ensures modular independence is not sacrificed for premature code reuse.
