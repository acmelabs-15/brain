---
package: rjm
name: Behavioral clarity
slug: behavioral-clarity
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

# Behavioral clarity

## Definition — verbatim
> "1. **Behavioral clarity**: Agent knows exactly what to do in common cases and edge cases" — .claude/skills/prompt-engineer/SKILL.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/SKILL.md | 17 | defined here | Defined as the first core success criterion achieved by an optimized system prompt. |

## Consumes
Candidate system prompt instructions, expected agent operational scenarios, and known edge cases.

## Produces
Explicit instructions and disambiguation rules defining exact agent behavior across standard and edge cases.

## When applied
> "Use when the user provides a prompt and wants it improved, refined, or reviewed for best practices." — .claude/skills/prompt-engineer/SKILL.md:42

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
In prompt-engineer, behavioral clarity ensures that prompt instructions leave no room for ambiguous interpretations, requiring explicit operational guidelines for both standard execution and edge cases so agents execute deterministically.
