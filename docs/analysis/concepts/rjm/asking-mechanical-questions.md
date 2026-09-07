---
package: rjm
name: Asking mechanical questions
slug: asking-mechanical-questions
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Asking mechanical questions

## Definition — verbatim
> "- **Asking mechanical questions.**" — .claude/skills/autoplan/SKILL.md:203

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 203 | defined here | Anti-pattern condemning agent hesitation and rhetorical questions regarding mandatory mechanical procedures. |

## Consumes
Hesitation or simulated politeness when confronting deterministic tasks.

## Produces
Unnecessary conversational turns, developer annoyance, and stalled execution.

## When applied
Identified as an anti-pattern during task execution; whenever one defensible answer exists, the agent must act.

## Sub-concepts
none

## Part of
autoplan

## Implementation status
clean

## Design notes
Asking mechanical questions is an anti-pattern where agents ask rhetorical or unnecessary permission questions (such as 'Should I run the tests?') for actions that are mandatory or have only one defensible answer. In rjm, such questions are banned; agents are required to execute deterministic tasks silently and report results at the final gate.
