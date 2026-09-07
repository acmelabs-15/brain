---
package: rjm
name: Completion Checkpoint
slug: completion-checkpoint
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/SKILL.md, sha256: 3d8237e4839c2714ee6e7ad4eaa523f285392c5ae35d22c0a7f68bcccf1c7277}
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Completion Checkpoint

## Definition — verbatim
> "## Completion Checkpoint" — .claude/skills/prompt-engineer/references/workflow.md:345
> "Before presenting the final prompt, verify:" — .claude/skills/prompt-engineer/references/workflow.md:347
> "## Completion Checkpoint" — .claude/skills/prompt-engineer/SKILL.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/workflow.md | 345 | defined here | Formal 13-item verification checklist gate guarding final prompt presentation. |
| .claude/skills/prompt-engineer/SKILL.md | 84 | used here | Cited in skill documentation as a required workflow component provided by the reference. |
| .claude/skills/prompt-engineer/SKILL.md | 136 | defined here | Defined as the final quality gate enforcing visual card format, reference citations, user approvals, and emphasis checks. |

## Consumes
Completed prompt optimization run artifacts, user approvals, and verification logs.

## Produces
Formal sign-off gate permitting final prompt presentation to the user upon passing all checklist criteria.

## When applied
As the final gating step before presenting optimized prompts to the user in Phase 4.

## Sub-concepts
none

## Part of
prompt-optimizer

## Implementation status
clean

## Design notes
The Completion Checkpoint acts as the definitive quality gate for prompt engineering workflows. It mandates that all prerequisite steps—operating context assessment, visual cards with quoted trigger conditions, upfront human approval, technique compatibility checks, anti-pattern audits, and emphasis budgets—are verified before delivering the final prompt.
