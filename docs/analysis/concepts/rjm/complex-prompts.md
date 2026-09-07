---
package: rjm
name: Complex prompts
slug: complex-prompts
kind: pattern
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

# Complex prompts

## Definition — verbatim
> "**Complex prompts** (use full process):" — .claude/skills/prompt-engineer/SKILL.md:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/SKILL.md | 123 | defined here | Defined in Phase 0 triage as prompts with multiple functional sections, conditional behaviors, or tool orchestration that require the full optimization process. |

## Consumes
Multi-section prompt candidate, tool descriptions, and rule hierarchies.

## Produces
Triage routing decision directing prompt through the full 5-phase optimization process with visual card planning.

## When applied
Applied in Phase 0 when prompt text spans multiple sections, incorporates conditional logic, or directs tool orchestration.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
In prompt-engineer, complex prompts define the comprehensive triage tier, triggering the full phased workflow (understand, plan with visual cards, user approval, execute, verify) to prevent regressions in complex agent behavior.
