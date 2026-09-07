---
package: rjm
name: Decisions
slug: decisions
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
  - {path: .claude/skills/work-operating-model/SKILL.md, sha256: 5aca273423b51a4e91ac1deeba1ccee172dbde1cee2ece7742b4ad383e298273}
  - {path: .claude/skills/work-operating-model/references/entry-contract.md, sha256: 9bfe97c38efab32e56ef728c65d413db8603c60d9e0042d1e4cd6e29871fbab7}
  - {path: .claude/skills/work-operating-model/references/layer-questions.md, sha256: 48d8a3493d9e393d38398fe9b637b3fc84d7ccd2139c88f9a51453ea97a67f48}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Decisions

## Definition — verbatim
> "Who decides what, and how is the decision recorded?" — .claude/skills/work-operating-model/SKILL.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/learning-template.md | 51 | defined here | Phase 3 section of retrospective artifact containing Action Classification, SMART Validation, and Action Sequence. |
| .claude/skills/work-operating-model/references/entry-contract.md | 12 | defined here | Required top-level key in work-operating-model schema capturing decision rights and review triggers. |
| .claude/skills/work-operating-model/references/layer-questions.md | 24 | defined here | Layer 2 interview protocol investigating decision rights, documentation loci, and re-litigation risks. |
| .claude/skills/work-operating-model/SKILL.md | 52 | defined here | Layer 2 of the 5-layer operating model mapping governance authority and record locations. |

## Consumes
Diagnosed retrospective learnings or organizational interview responses on team governance.

## Produces
Action classifications (Keep/Drop/Add/Modify) and validated action sequences, or structured JSON decision-rights mappings.

## When applied
Applied during Phase 3 of retrospectives to plan corrective actions, and in Layer 2 of work-operating-model interviews to map governance authority.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Decisions operates across two complementary lifecycle contexts in rjm: as Phase 3 of the retrospective workflow where insights are converted into concrete, prioritized action plans (Keep/Drop/Add/Modify), and as Layer 2 of the work-operating-model interview framework mapping decision rights, authority boundaries, and documentation loci across teams.
