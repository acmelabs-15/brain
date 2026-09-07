---
package: rjm
name: traction goal
slug: traction-goal
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/traction.md, sha256: 2f8e8bcb6eb1f87e80aee296179b4ce681a9ea641bac43930d093f9c0d369f2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# traction goal

## Definition — verbatim
> "define your traction goal as a number (users, revenue, or a critical-path metric) so a test result has a clear pass or fail." — .claude/skills/business-strategy/references/traction.md:58-59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/traction.md | 58 | defined here | Concrete numerical target defining explicit pass/fail criteria for distribution experiments. |

## Consumes
Financial runway models, investor milestones, or breakeven operational requirements.

## Produces
Objective quantitative metric for judging channel test success and justifying continued spend.

## When applied
Established before beginning Inner Ring channel experiments.

## Sub-concepts
none

## Part of
bullseye-channel-selection

## Implementation status
clean

## Design notes
A traction goal establishes an unambiguous numeric target (such as 50 paying customers or $5k MRR) that channel experiments must move. In rjm, defining an objective numeric goal beforehand prevents founders from subjectively moving goalposts or tolerating unprofitable channel experiments.
