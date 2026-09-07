---
package: rjm
name: Context Map
slug: context-map
kind: artifact
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

# Context Map

## Definition — verbatim
> "- **Context Map**: the explicit description of how bounded contexts relate (Customer-Supplier, Conformist, Shared Kernel, Partnership, Open Host Service, Published Language)." — .claude/skills/software-engineering-library/references/domain-driven-design.md:24

## Also called — verbatim
`Context Mapping` — .claude/skills/software-engineering-library/references/domain-driven-design.md:185

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 24 | defined here | Core vocabulary entry defining a context map as the explicit description of how bounded contexts relate. |

## Consumes
Bounded context boundaries, component dependency models, and subsystem integration requirements.

## Produces
An architectural artifact documenting inter-context relationships and translation strategies.

## When applied
Applied when two contexts must integrate, when team ownership boundaries are established, or when drafting architecture decision records.

## Sub-concepts
customer-supplier, conformist, shared-kernel, partnership, open-host-service

## Part of
none

## Implementation status
clean

## Design notes
A Context Map serves as the definitive structural record of relationships between bounded contexts. In complex agent systems, it makes dependencies explicit, preventing hidden couplings and clarifying where translation layers or shared models exist.
