---
package: rjm
name: trigger condition
slug: trigger-condition
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

# trigger condition

## Definition — verbatim
(used, not defined)

> "- [ ] No technique applied without matching trigger condition" — .claude/skills/prompt-engineer/SKILL.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/SKILL.md | 143 | used here | Verified in the completion checkpoint to enforce that every prompt technique applied matches an empirical trigger condition cited from references. |

## Consumes
Technique selection candidate and reference pattern trigger catalog.

## Produces
Validation gate approval confirming that a technique's prerequisites are genuinely satisfied by the target prompt context.

## When applied
Checked during Phase 2 technique selection and verified at the completion checkpoint prior to execution.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
In prompt-engineer, trigger conditions act as a strict gating mechanism that prevents cargo-culting or gratuitous prompting techniques by requiring agents to quote the exact empirical criteria justifying the pattern application.
