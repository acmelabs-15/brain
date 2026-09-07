---
package: rjm
name: Definition of Done
slug: definition-of-done
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Definition of Done

## Definition — verbatim
> "When can an AD be considered done? Five criteria gate exit from documentation:" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:45

## Also called — verbatim
> "ecADR" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:43

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 220 | defined here | Section heading "### Definition of Done (ecADR)" specifying the five completion criteria for architectural decisions. |
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 43 | defined here | Defines ecADR as the Definition of Done gating exit from decision documentation to implementation. |
| templates/agents/architect.shared.md | 235 | defined here | Section heading "### Definition of Done (ecADR)" establishing the five completion criteria for architectural decisions. |

## Consumes
Architectural decision candidates, evaluated alternatives, decision drivers, and validation evidence from spikes or prototypes.

## Produces
Completed, agreed Architectural Decision Record (ADR) approved for implementation.

## When applied
When an architectural decision record is being finalized to gate exit from documentation to implementation.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
In rjm's architectural governance framework, Definition of Done adapts Olaf Zimmermann's ecADR model into a strict completion gate for architectural decisions. It ensures that an architectural choice is never considered complete merely because documentation has been drafted; rather, it demands concrete evidence of feasibility, multi-option criteria evaluation, stakeholder consensus, formal documentation, and a clear realization and review schedule before implementation begins.
