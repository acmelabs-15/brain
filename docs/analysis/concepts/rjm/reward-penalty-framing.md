---
package: rjm
name: Reward/Penalty Framing
slug: reward-penalty-framing
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Reward/Penalty Framing

## Definition — verbatim
> "The monetary penalty creates behavioral weight through gamification, but the UX explanation provides _reasoning_ for the priority." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1389

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1369 | defined here | Defined as a behavioral shaping pattern applying simulated penalties, rewards, and UX explanations to weight priorities. |

## Consumes
Critical behavioral boundaries, high-impact failure modes, and operational priorities.

## Produces
Gamified penalty phrases (such as `-$1000`) paired with UX rationales in prompt instructions.

## When applied
> "What matters is establishing that this error is categorically worse than alternatives." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1391

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Reward/Penalty Framing combines gamified synthetic penalties (e.g. assigning a hypothetical -$1000 cost to a specific error) with user experience explanations to anchor agent priorities. It establishes that certain errors are categorically worse than others, guiding trade-off decisions under uncertainty.
