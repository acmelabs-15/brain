---
package: matt
name: subagents
slug: subagents
kind: role
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

# subagents

## Definition — verbatim
(used, not defined)
> "Mid-phase there is nothing to decide: continue, or split what is left into [subagents](https://www.aihero.dev/ai-coding-dictionary/subagent)." — docs/engineering/ask-matt.md:36

## Also called — verbatim
`sub-agent` — docs/engineering/code-review.md:3
`subagent` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:14

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 36 | used here | Recommends splitting remaining tasks into subagents when mid-phase work must be decomposed without clearing context. |
| external/ask-matt.md | 42 | used here | External catalog documentation explaining subagent delegation at phase boundaries. |

## Consumes
A tightly-scoped, self-contained task specification capable of running without interactive steering.

## Produces
An execution report or specific artifact returned to the parent agent.

## When applied
When work can be executed away from the keyboard or in parallel without polluting the parent session context.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug (recursive delegation bug where code review sub-agents re-invoked code review in runaway loops)

## Design notes
Secondary agent processes spawned by the primary session to execute bounded tasks in independent context windows. In matt, subagents are used to maintain context cleanliness during heavy analysis (such as running the Standards and Spec axes of code review) or to execute unattended background tasks while the developer remains focused on the primary session.
