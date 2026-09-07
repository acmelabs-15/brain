---
package: rjm
name: ecADR
slug: ecadr
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ecADR

## Definition — verbatim
> "ecADR: Definition of Done" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 43 | defines | Section header establishing the ecADR framework (Evidence, Criteria, Agreement, Documentation, Realization/Review) as the Definition of Done for architectural decisions. |

## Consumes
Completed ADR draft, benchmark or prototype evidence, evaluation criteria, stakeholder agreement records, and realization schedules.

## Produces
Exit gate validation confirming that an architectural decision meets all quality standards required for accepted status.

## When applied
Enforced at the conclusion of ADR drafting and review to determine whether a decision record is complete and ready to be accepted.

## Sub-concepts
ecadr-checklist

## Part of
ad-quality-frameworks

## Implementation status
clean

## Design notes
ecADR functions as the exit gate complement to START's entry gate. It establishes five objective criteria—Evidence of feasibility, explicit Criteria for choice, stakeholder Agreement or logged dissent, comprehensive Documentation including downsides, and a Realization/Review plan—that an architectural decision must satisfy before being considered done. This prevents superficial or unverified decisions from entering the permanent architecture baseline.
