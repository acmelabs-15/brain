---
package: matt
name: state machine
slug: state-machine
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/prototype/LOGIC.md, sha256: f61c7d249e786a79ef289018901c348271e1798dd0b0bc5607b5c6f4d4a01ab9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# state machine

## Definition — verbatim
> "- **A state machine**: explicit states and transitions." — skills/engineering/prototype/LOGIC.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/triage.md | 27 | defined here | Section heading introducing the two-category, five-state issue tracker classification scheme. |
| external/triage.md | 25 | defined here | External guide section defining the state machine governing incoming work. |
| skills/engineering/prototype/LOGIC.md | 29 | defined here | Architectural logic pattern providing explicit states and transitions for prototyping stateful domains. |

## Consumes
Discrete events, legal transition rules, and domain entity state definitions.

## Produces
A deterministic state transition model governing issue lifecycles or application domain logic.

## When applied
Applied when structuring triage issue progression or when prototyping domain logic where "which actions are even legal right now" is part of the question.

## Sub-concepts
triage-roles, state-role, state-transitions

## Part of
triage, prototype

## Implementation status
clean

## Design notes
A state machine in matt provides explicit state roles and bounded transition paths for complex processes. In triage, it restricts issues to a strict two-category by five-state grid to prevent backlog ambiguity. In prototyping, it formalizes domain lifecycles when action legality depends directly on current state.
