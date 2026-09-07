---
package: rjm
name: Dependencies
slug: dependencies
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/003-pr-60-plan-critique.md, sha256: f6bcc9ac4bbf0d3838e7230fe466babdf046b8cc160ae3e1b7e2f20848b1c21b}
  - {path: .claude/skills/work-operating-model/SKILL.md, sha256: 5aca273423b51a4e91ac1deeba1ccee172dbde1cee2ece7742b4ad383e298273}
  - {path: .claude/skills/work-operating-model/references/entry-contract.md, sha256: 9bfe97c38efab32e56ef728c65d413db8603c60d9e0042d1e4cd6e29871fbab7}
  - {path: .claude/skills/work-operating-model/references/layer-questions.md, sha256: 48d8a3493d9e393d38398fe9b637b3fc84d7ccd2139c88f9a51453ea97a67f48}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Dependencies

## Definition — verbatim
> "Who do you wait on, and who waits on you?" — .claude/skills/work-operating-model/SKILL.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 24 | used here | Evaluated as an evaluation criterion scoring 10/10 for establishing a clear prerequisite chain in the remediation plan. |
| .claude/skills/work-operating-model/references/entry-contract.md | 13 | defined here | Defined as a required top-level key in the operating model JSON document schema. |
| .claude/skills/work-operating-model/references/layer-questions.md | 41 | defined here | Defined as Layer 3 of the interview protocol, exploring upstream and downstream blocking relationships and contracts. |
| .claude/skills/work-operating-model/SKILL.md | 53 | defined here | Defined as Layer 3 of the 5-layer operating model framework, mapping team interdependencies. |
| templates/agents/roadmap.shared.md | 113 | defined here | Defined as a core section of the epic template documenting blocking work and prerequisite decisions. |

## Consumes
Organizational context, team interviews, task plans, and epic roadmaps.

## Produces
Dependency graphs, upstream/downstream mappings with criticality ratings, and prerequisite checklists.

## When applied
When conducting team operating model discovery, authoring roadmap epics, or evaluating plan sequencing.

## Sub-concepts
none

## Part of
operating-model, epic-structure, evaluation-criteria

## Implementation status
defects: cross-file-contradiction (.agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95); doc-drift (templates/agents/roadmap.shared.md:94); clean in .claude/skills/work-operating-model/SKILL.md, references/entry-contract.md, and references/layer-questions.md

## Design notes
`Dependencies` captures external and internal prerequisite relationships that can block progress, ensuring cross-team and cross-task commitments are documented with explicit contracts, SLAs, and ownership rather than left implicit.
