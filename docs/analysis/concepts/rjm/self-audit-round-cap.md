---
package: rjm
name: Self-audit round cap
slug: self-audit-round-cap
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Self-audit round cap

## Definition — verbatim
> "**Self-audit round cap (hard stop).** `/review` runs each axis once per invocation; no internal fix-and-re-review loop." — .claude/skills/review/SKILL.md:33

## Also called — verbatim
> "hard stop" — .claude/skills/review/SKILL.md:33

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 33 | defined here | Defines the 3-round execution limit on autonomous review-and-fix loops. |

## Consumes
Invocation round count tracked by calling command, agent, or workflow.

## Produces
Mandatory escalation to the human operator with open findings if non-PASS verdict persists at round 3.

## When applied
Applies to any automated chain executing fix-and-re-review cycles without an intervening human checkpoint.

## Sub-concepts
hard-stop

## Part of
review

## Implementation status
defects: missing-path, doc-drift

## Design notes
The self-audit round cap enforces an absolute upper bound of three rounds on automated fix-and-review loops, preventing autonomous agents from thrashing indefinitely or accumulating excessive token expenditures. If an issue cannot be cleanly resolved within three iterations, rjm halts execution and escalates directly to the human operator.
