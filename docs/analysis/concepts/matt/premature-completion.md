---
package: matt
name: premature completion
slug: premature-completion
kind: pattern
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# premature completion

## Definition — verbatim
> "A vague bound (\"understanding reached\") invites **premature completion**: ending the step before it is genuinely done, attention slipping to _being done_." — skills/productivity/writing-for-agents/SKILL.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 28 | defined here | Names premature completion as the failure mode held in check by demanding completion criteria. |
| external/writing-for-agents.md | 42 | defined here | Identifies the tendency of agents to declare success early when steps lack sharp termination bounds. |
| skills/productivity/writing-for-agents/SKILL.md | 49 | defined here | Defines premature completion as ending a step prematurely when vague bounds allow attention to rush ahead. |

## Consumes
Vague completion bounds or visible post-completion steps.

## Produces
Incomplete, hurried, or defective task outcomes.

## When applied
Anti-pattern that emerges during sequential multi-step executions.

## Sub-concepts
none

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
A pervasive failure mode in AI agents where the model rushes through a step to reach the finish line, tempted by visible subsequent steps in context. It is counteracted first by sharpening the step's completion boundary, and second by splitting sequential steps across context boundaries.
