---
package: rjm
name: reward bias
slug: reward-bias
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/avoiding-manufactured-work/SKILL.md, sha256: dabcb96a0c4d6575feac1b833b4402e6d81db7e20422444726beffd8edaeafc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# reward bias

## Definition — verbatim
(used, not defined)
> "Same root cause (skipping self-evaluation under reward bias), opposite timing." — .claude/skills/avoiding-manufactured-work/SKILL.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/avoiding-manufactured-work/SKILL.md | 14 | used here | Identified as the shared root cognitive flaw causing agents to skip self-evaluation before and after work. |

## Consumes
Model optimization biases prioritizing output production over critical evaluation.

## Produces
Omission of entry front-gates and exit stopping-gates across agent workflows.

## When applied
When diagnosing workflow failures where agents skip self-evaluation before or after execution.

## Sub-concepts
none

## Part of
avoiding-manufactured-work

## Implementation status
defects: missing-path

## Design notes
Reward bias is the underlying cognitive failure mode that causes agents to skip self-evaluation. Operating at both ends of a workflow, reward bias prompts models to skip front-gating before starting work (eagerly jumping into code) and skip stopping-checks after finishing work (manufacturing superfluous follow-ups). Recognizing reward bias allows rjm to place symmetric structural gates at both workflow entry and exit boundaries.
