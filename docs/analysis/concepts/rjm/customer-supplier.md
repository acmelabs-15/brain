---
package: rjm
name: Customer-Supplier
slug: customer-supplier
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Customer-Supplier

## Definition — verbatim
> "- **Context Map**: the explicit description of how bounded contexts relate (Customer-Supplier, Conformist, Shared Kernel, Partnership, Open Host Service, Published Language)." — .claude/skills/software-engineering-library/references/domain-driven-design.md:24

## Also called — verbatim
"Customer / Supplier" — .claude/skills/software-engineering-library/references/domain-driven-design.md:197

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 24 | defined here | Listed as a primary context relationship pattern in the core vocabulary definition of Context Map. |

## Consumes
Upstream service capabilities and downstream operational requirements.

## Produces
Negotiated interface commitments and synchronized feature delivery roadmaps.

## When applied
Applied when downstream depends on upstream and has an established voice in negotiating upstream priorities and roadmap commitments.

## Sub-concepts
none

## Part of
context-map

## Implementation status
clean

## Design notes
Customer-Supplier establishes a cooperative dependency between two bounded contexts where the downstream consumer has legitimate leverage over upstream planning, ensuring upstream services support downstream operational needs.
