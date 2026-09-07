---
package: matt
name: Steps and completion criteria
slug: steps-and-completion-criteria
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Steps and completion criteria

## Definition — verbatim
> "Every step ends on a **completion criterion**, the condition that tells the agent the work is done." — skills/productivity/writing-for-agents/SKILL.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL.md | 45 | defined here | Section heading outlining how to bound sequential steps with checkable, demanding completion criteria. |

## Consumes
Procedural steps and sequential execution workflows in agent documentation.

## Produces
Robust "Done when..." termination boundaries with high clarity and demand that resist rushed execution.

## When applied
When designing or auditing procedural workflows to prevent premature completion.

## Sub-concepts
completion-criterion, post-completion-steps

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
Establishes the core behavioural lever for procedural agent execution. By requiring every step to terminate on clear, checkable, and demanding conditions, it prevents agents from declaring premature success or rushing through sequential tasks.
