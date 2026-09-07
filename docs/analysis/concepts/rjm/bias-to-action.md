---
package: rjm
name: Bias to action
slug: bias-to-action
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

# Bias to action

## Definition — verbatim
> "4. **Bias to action.** Internal and reversible: act. Flag what you assumed in" — .claude/skills/autoplan/SKILL.md:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 158 | defined here | Default execution rule favoring immediate action on internal and reversible decisions while noting assumptions. |

## Consumes
Internal, low-risk implementation decisions encountered during task execution.

## Produces
Uninterrupted progress accompanied by documented assumptions surfaced in the final gate.

## When applied
When encountering decisions that are internal to the codebase and easily reversible.

## Sub-concepts
none

## Part of
phase-3-execute-with-defaults

## Implementation status
clean

## Design notes
Bias to action empowers agents to maintain momentum during implementation. If a decision is internal and reversible, the agent is directed to act decisively rather than pausing to seek human permission. To preserve developer oversight, all assumptions made under this bias are recorded and surfaced in the Phase 4 summary gate.
