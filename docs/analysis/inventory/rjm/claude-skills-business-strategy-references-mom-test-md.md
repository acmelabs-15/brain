---
package: rjm
path: .claude/skills/business-strategy/references/mom-test.md
type: reference
bytes: 6531
unit: inv-rjm-93
in_scope_via: .claude/skills/business-strategy/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/business-strategy/references/mom-test.md, sha256: 09980e08320f81700c21cb6346b6ea1b094637ea4566dc81d071508d84d090d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/business-strategy/references/mom-test.md

## Purpose — required, verbatim
> "Use this when you are about to talk to a potential customer, user, or buyer and you need to learn whether a problem is real before you build a solution for it." — .claude/skills/business-strategy/references/mom-test.md:10-11

## Design intent — required
Distills Rob Fitzpatrick's The Mom Test into an actionable interviewing guide designed to extract genuine evidence of customer pain rather than polite compliments or unreliable predictions of future behavior. It forces conversations away from pitching the founder's idea and onto the customer's actual past actions, existing workarounds, and concrete costs (time and money). Without it, founders risk building products based on false-positive feedback from friendly conversations that fail to convert to actual purchases.

## Phase — required
rjm:Discovery

## Inputs — required
- Target customer interview conversations on real workflows: "Talk about their life, not your idea. Open on their work, their goals, their" — .claude/skills/business-strategy/references/mom-test.md:33
- Concrete historical episodes, metrics, and existing hacks: "Dig for the last time it happened. Concrete episodes expose real cost: time" — .claude/skills/business-strategy/references/mom-test.md:38
- Post-interview checklist responses (7 criteria, 10 points total): "Score each item after an interview. 1 point each unless noted." — .claude/skills/business-strategy/references/mom-test.md:54

## Outputs — required
- Verbatim interview notes distinguishing actions from hypothetical statements: "Take notes verbatim and review for facts versus fluff. Separate what they did" — .claude/skills/business-strategy/references/mom-test.md:49
- Tangible commitment or advancement signals: "Deflect compliments; mine for commitment and advancement. Praise is the sound" — .claude/skills/business-strategy/references/mom-test.md:44
- Scored validation assessment (pass threshold: 7/10): "Total possible: 10. Pass threshold: 7 or higher. Below 7, the interview leaned on" — .claude/skills/business-strategy/references/mom-test.md:64

## Invokes — required
none

## Invoked by — required
- skill business-strategy — .claude/skills/business-strategy/SKILL.md:46

## Concepts named — required, verbatim
- `The Mom Test` — .claude/skills/business-strategy/references/mom-test.md:1 — defined here
- `Discovery mode` — .claude/skills/business-strategy/references/mom-test.md:18 — defined here
- `Validation mode` — .claude/skills/business-strategy/references/mom-test.md:19 — defined here
- `commitment and advancement` — .claude/skills/business-strategy/references/mom-test.md:44 — defined here
- `facts versus fluff` — .claude/skills/business-strategy/references/mom-test.md:49 — defined here
- `Lean Startup` — .claude/skills/business-strategy/references/mom-test.md:85 — used here
- `build-measure-learn` — .claude/skills/business-strategy/references/mom-test.md:85 — used here
- `jobs-to-be-done` — .claude/skills/business-strategy/references/mom-test.md:89 — used here

## Structure
- # The Mom Test — .claude/skills/business-strategy/references/mom-test.md:1
- ## When to use — .claude/skills/business-strategy/references/mom-test.md:8
- ## Decision tree — .claude/skills/business-strategy/references/mom-test.md:15
- ## Core framework — .claude/skills/business-strategy/references/mom-test.md:31
- ## Scored checklist — .claude/skills/business-strategy/references/mom-test.md:52
- ## Honest limitations — .claude/skills/business-strategy/references/mom-test.md:67
- ## Conflicts with other frameworks — .claude/skills/business-strategy/references/mom-test.md:83
- ## Example — .claude/skills/business-strategy/references/mom-test.md:95

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Clearly separates problem validation from solution or market size validation: "It tells you whether a problem is real. It does not tell you whether your specific solution wins, nor whether you can reach buyers cheaply." (.claude/skills/business-strategy/references/mom-test.md:69-71).
- Filters out praise and hypothetical future intentions as conversational noise, treating only past behavior and costly commitment as valid data (.claude/skills/business-strategy/references/mom-test.md:3-5, 44-46, 49-50).
- Harmonizes with Lean Startup through sequencing: conduct discovery interviews before writing code, handing off to build-measure-learn only when a problem surpasses the pass threshold (.claude/skills/business-strategy/references/mom-test.md:86-88).

## Context cost
6531 bytes. Approximately 1650 tokens.
