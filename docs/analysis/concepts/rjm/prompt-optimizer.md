---
package: rjm
name: Prompt Optimizer
slug: prompt-optimizer
kind: role
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

# Prompt Optimizer

## Definition — verbatim
> "# Prompt Optimizer" — .claude/skills/prompt-engineer/SKILL.md:9
> "Optimizes system prompts by applying research-backed prompt engineering patterns. Human-in-the-loop phases: understand, plan, propose changes, receive approval, then integrate." — .claude/skills/prompt-engineer/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/SKILL.md | 9 | defined here | Defined as the primary agent role and capability responsible for systematic prompt optimization. |

## Consumes
Baseline system prompts, user improvement requests, and research pattern references.

## Produces
Optimized system prompts, visual change proposals, and verification debriefs.

## When applied
Triggered by phrases such as "optimize this prompt", "improve this system prompt", or "review my agent prompt".

## Sub-concepts
lightweight-process, full-process, completion-checkpoint

## Part of
none

## Implementation status
clean

## Design notes
Prompt Optimizer encapsulates the specialized capability of refining system prompts using research-grounded engineering patterns. By structuring optimization around human-in-the-loop phases (understand, plan, approve, integrate) and enforcing quote-first pattern selection, it prevents prompt drift and ensures predictable agent behavior.
