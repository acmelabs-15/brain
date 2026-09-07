---
package: rjm
name: Core vs Context
slug: core-vs-context
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Core vs Context

## Definition — verbatim
> "Distinguish capabilities that differentiate business from necessary commodities:" — templates/agents/architect.shared.md:600

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/high-level-advisor.md | 65 | used here | Investment prioritization framework distinguishing strategic differentiators from commodity context. |
| .claude/skills/adr-review/SKILL.md | 146 | used here | Architecture decision review criterion checking capability classification as Core or Context. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 82 | defined here | Specification dimension evaluating competitive differentiation versus commodity utility in buy-vs-build. |
| .claude/skills/programming-advisor/SKILL.md | 100 | used here | Decision handoff trigger deferring strategic capability investments to buy-vs-build. |
| templates/agents/architect.shared.md | 49 | used here | Architect role heuristic for distinguishing differentiating capabilities from commodities. |
| templates/agents/architect.shared.md | 598 | defined here | Section providing guidelines for core capability investment versus context outsourcing. |
| templates/agents/high-level-advisor.shared.md | 68 | used here | Shared reference citing investment prioritization between differentiators and commodities. |

## Consumes
Proposed software capabilities, architectural components, third-party vendor offerings.

## Produces
Classification into Core (custom build, competitive differentiator) or Context (buy/outsource, commodity).

## When applied
Applied during buy-vs-build evaluations, ADR reviews, and strategic architectural planning.

## Sub-concepts
none

## Part of
high-level-advisor

## Implementation status
defects: missing-path

## Design notes
Core vs Context (derived from Geoffrey Moore) prevents engineering organizations from squandering proprietary developer hours on non-differentiating commodities. By forcing a clean distinction between what differentiates the business and what is merely table stakes, it directs custom engineering effort exclusively to core value drivers.
