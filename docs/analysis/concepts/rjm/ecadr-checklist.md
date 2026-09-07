---
package: rjm
name: ecADR Checklist
slug: ecadr-checklist
kind: checklist
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

# ecADR Checklist

## Definition — verbatim
> "ecADR Checklist" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 55 | defines | Section heading introducing the five-point verification checklist operationalizing the ecADR Definition of Done criteria. |

## Consumes
Finalized ADR draft, evidence artifacts, evaluation tables, stakeholder consensus or dissent records, and implementation schedules.

## Produces
Completed five-item markdown verification checklist attesting to decision completeness and rigor.

## When applied
Executed by authors and reviewing agents when finalizing an ADR prior to marking it accepted or merging into the main branch.

## Sub-concepts
none

## Part of
ecadr

## Implementation status
clean

## Design notes
The ecADR Checklist provides an actionable, checkbox-driven audit enforcing the ecADR Definition of Done. By requiring explicit attestation that evidence exists, evaluation criteria are documented, stakeholders are aligned, negative consequences are recorded, and a realization plan with review dates is in place, it ensures decision records are robust, accountable, and operationally viable.
