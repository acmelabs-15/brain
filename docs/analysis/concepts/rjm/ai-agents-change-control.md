---
package: rjm
name: ai-agents-change-control
slug: ai-agents-change-control
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: scripts/validation/skill_contract_test_baseline.txt, sha256: 136d084d2e2eaca5e79b320223bf3a4daeee5bafa569d350dc60491b5473c130}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ai-agents-change-control

## Definition — verbatim
(used, not defined)

> "Route the change itself through `ai-agents-change-control`." — .claude/skills/ai-agents-research-methodology/SKILL.md:147-148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 148 | used here | Mandatory governance routing mechanism for architectural decisions, rules, and policy changes. |
| scripts/validation/skill_contract_test_baseline.txt | 4 | defined here | Listed as an active skill in the contract test baseline documenting exit-code requirements. |

## Consumes
Proposed code modifications, architectural change classes, and ADR debate consensus artifacts.

## Produces
Enforced change validation ladders, required gate checklists, CI verification runs, and release approvals.

## When applied
Whenever modifying governance rules, agent templates, skills, or architectural contracts across the repository.

## Sub-concepts
none

## Part of
governance

## Implementation status
clean

## Design notes
The ai-agents-change-control framework enforces a rigorous verification ladder for repository changes. Rather than allowing informal or unvetted updates to governance rules or agent behaviors, change-control maps each modification to its required risk tier, mandating corresponding pre-PR validations, automated checks, and human sign-offs to protect repository invariants.
