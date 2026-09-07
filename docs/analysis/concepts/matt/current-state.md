---
package: matt
name: Current state
slug: current-state
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/prototype/LOGIC.md, sha256: f61c7d249e786a79ef289018901c348271e1798dd0b0bc5607b5c6f4d4a01ab9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Current state

## Definition — verbatim
> "2. **Current state**: the full relevant state, rendered as a readable panel (labelled fields, not a raw JSON dump), re-rendered after every click so the change is visible. Where it helps a non-developer follow, call out what just changed." — skills/engineering/prototype/LOGIC.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/LOGIC.md | 44 | defined here | Required visual panel in a logic prototype displaying current state attributes and highlighting changes after each interaction. |

## Consumes
The state object produced by the portable logic module after an action dispatch.

## Produces
A human-readable visual panel with labeled fields that highlights recent state changes.

## When applied
Rendered in the logic prototype HTML interface immediately following every button interaction or scenario step.

## Sub-concepts
none

## Part of
logic-prototype

## Implementation status
clean

## Design notes
A dedicated visual panel in a logic prototype that presents the complete relevant state in human-readable domain terms rather than raw JSON, allowing non-developers to observe state transitions immediately after each interaction.
