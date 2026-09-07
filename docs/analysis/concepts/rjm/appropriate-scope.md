---
package: rjm
name: Appropriate scope
slug: appropriate-scope
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

# Appropriate scope

## Definition — verbatim
> "2. **Appropriate scope**: Complex tasks get decomposition; simple tasks don't trigger overthinking" — .claude/skills/prompt-engineer/SKILL.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/SKILL.md | 18 | defined here | Defined as the second core success criterion of prompt optimization, balancing task decomposition against unnecessary complexity. |

## Consumes
Prompt requirements and operational complexity assessments.

## Produces
Calibrated prompt structure providing task decomposition for complex workloads without inducing overthinking on simple tasks.

## When applied
> "Use when the user provides a prompt and wants it improved, refined, or reviewed for best practices." — .claude/skills/prompt-engineer/SKILL.md:42

## Sub-concepts
simple-prompts, complex-prompts

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
In prompt-engineer, appropriate scope prevents both under-engineering complex workflows and over-engineering simple queries, ensuring model depth and chain-of-thought match the intrinsic complexity of the user request.
