---
package: rjm
name: Core
slug: core
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Core

## Definition — verbatim
> "- **Subdomain**: a coherent slice of the domain. **Core** is what differentiates the product, **Supporting** is necessary but not differentiating, **Generic** is commodity that any team would solve the same way." — .claude/skills/software-engineering-library/references/domain-driven-design.md:15

## Also called — verbatim
> "**Purpose:** Determine if capability is Core (competitive differentiator) or Context (table stakes)." — .claude/skills/buy-vs-build-framework/SKILL.md:75

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 12 | defined here | Cited in explicit requirements distinguishing core differentiators from context table stakes. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 83 | defined here | Classification tag in skill specification defining Core attributes (differentiator, high impact, build bias). |
| .claude/skills/buy-vs-build-framework/SKILL.md | 75 | used here | Defines the purpose of Phase 1 to determine if a capability is Core (competitive differentiator). |
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 15 | defined here | Core subdomain definition in DDD reference stating it is what differentiates the product. |

## Consumes
Domain analysis, business model, and competitive differentiator definitions.

## Produces
Strategic mandate to invest primary engineering talent and build custom software to preserve competitive advantage.

## When applied
When assessing whether a software domain or technical capability is the primary source of business differentiation.

## Sub-concepts
none

## Part of
core-vs-context-classification

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-doc

## Design notes
A central strategic and architectural classification across rjm. Both in buy-vs-build analysis and Domain-Driven Design references, Core denotes the unique, non-commodity capabilities that differentiate the product and justify proprietary in-house implementation.
