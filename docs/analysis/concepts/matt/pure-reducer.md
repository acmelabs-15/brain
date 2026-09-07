---
package: matt
name: pure reducer
slug: pure-reducer
kind: pattern
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

# pure reducer

## Definition — verbatim
> "- **A pure reducer**: `(state, action) => state`. Good when actions are discrete events and state is a single value." — skills/engineering/prototype/LOGIC.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/LOGIC.md | 28 | defined here | Recommended as an ideal portable module shape when actions are discrete events and state is a single value. |

## Consumes
A sequence of discrete actions and an initial state object.

## Produces
A pure transition function returning the next state without side effects.

## When applied
When implementing the portable logic module of a logic prototype whose domain logic is event-driven.

## Sub-concepts
none

## Part of
portable-module

## Implementation status
clean

## Design notes
A functional state pattern recommended for logic prototypes that isolates event-driven state transitions into a pure `(state, action) => state` function, ensuring deterministic behavior and direct portability into production code.
