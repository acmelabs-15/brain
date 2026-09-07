---
package: rjm
name: Stacking compatibility
slug: stacking-compatibility
kind: gate
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

# Stacking compatibility

## Definition — verbatim
(used, not defined)

> "- [ ] Stacking compatibility checked; no conflicts" — .claude/skills/prompt-engineer/SKILL.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/SKILL.md | 144 | used here | Verified in the completion checkpoint to ensure multiple combined prompting techniques do not introduce mutual interference or contradictory instructions. |

## Consumes
Set of proposed prompting techniques intended for joint application in a prompt.

## Produces
Verification verdict confirming the absence of contradictory instructions or mutual interference among combined patterns.

## When applied
Evaluated during technique selection in Phase 2 and gated at the completion checkpoint.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
In prompt-engineer, stacking compatibility serves as a critical coherence gate to verify that combining multiple prompt engineering patterns does not create contradictory constraints or degrade model reasoning.
