---
package: matt
name: Logic Prototype
slug: logic-prototype
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

# Logic Prototype

## Definition — verbatim
> "A single, self-contained HTML file (a **shareable demo**) that lets anyone drive a state model by clicking buttons." — skills/engineering/prototype/LOGIC.md:3

## Also called — verbatim
`shareable demo` — skills/engineering/prototype/LOGIC.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/LOGIC.md | 1 | defined here | Defined as an exploratory prototype shape producing a single self-contained HTML file for evaluating state models and logic interactively. |

## Consumes
Design uncertainty regarding business logic, state transitions, or data models.

## Produces
A standalone HTML file containing a portable logic module, readable state panel, free-play buttons, and guided scenario walkthroughs.

## When applied
Used when questions center on business logic, state transitions, or data shapes that require testing through concrete cases.

## Sub-concepts
shareable-demo, portable-module, pure-reducer, current-state, scenarios

## Part of
prototype

## Implementation status
clean

## Design notes
An exploratory prototyping pattern and artifact that encapsulates a state model or business logic in a zero-dependency HTML file, enabling non-technical stakeholders to test edge cases and state transitions by clicking buttons before production implementation.
