---
package: rjm
name: visual card template
slug: visual-card-template
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/SKILL.md, sha256: 3d8237e4839c2714ee6e7ad4eaa523f285392c5ae35d22c0a7f68bcccf1c7277}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# visual card template

## Definition — verbatim
(used, not defined)

> "Contains: Detailed Phase 0-4 workflows, visual card template, completion checkpoint." — .claude/skills/prompt-engineer/SKILL.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/SKILL.md | 84 | used here | Referenced as an essential planning template provided in `references/workflow.md` for structuring prompt changes. |

## Consumes
Diagnosed prompt defect, proposed replacement technique, and scoped prompt segment.

## Produces
Standardized visual card presentation documenting SCOPE, PROBLEM, TECHNIQUE, and BEFORE/AFTER content.

## When applied
During Phase 2 (Plan with Visual Cards) when preparing proposed modifications for user review and approval.

## Sub-concepts
visual-card-format

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
The visual card template provides a structured visual layout for communicating prompt modifications in prompt-engineer, allowing human reviewers to quickly evaluate the problem, applied pattern, and exact before/after diffs prior to execution.
