---
package: matt
name: away from the keyboard
slug: away-from-the-keyboard
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# away from the keyboard

## Definition — verbatim
(used, not defined)
> "The task is scoped tightly enough to run with you [away from the keyboard](https://www.aihero.dev/ai-coding-dictionary/afk)" — docs/engineering/ask-matt.md:43

## Also called — verbatim
`AFK` — docs/productivity/writing-for-agents.md:13

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 43 | used here | Phase boundary option table row describing subagents taking tasks that run away from the keyboard. |
| external/ask-matt.md | 43 | used here | External catalog documentation detailing AFK task delegation. |

## Consumes
A task with clear boundaries, unambiguous success criteria, and automated verification.

## Produces
Autonomous completion of work or verification reports without developer supervision.

## When applied
When a task can run safely to completion without interactive user steering or clarifications.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An execution posture and readiness criteria in matt's lifecycle representing tasks suitable for autonomous agent execution without developer presence. Tasks marked for AFK execution (such as automated linting, background research, or parallel code reviews) must be tightly scoped and deterministic, freeing the human developer from micromanagement while ensuring unmonitored work cannot derail core project state.
