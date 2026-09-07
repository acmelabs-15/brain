---
package: matt
name: shareable demo
slug: shareable-demo
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

# shareable demo

## Definition — verbatim
> "A single, self-contained HTML file (a **shareable demo**) that lets anyone drive a state model by clicking buttons." — skills/engineering/prototype/LOGIC.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/LOGIC.md | 3 | defined here | Defined as a single, self-contained HTML file that lets anyone drive a state model by clicking buttons. |

## Consumes
A state model, business logic question, or data shape requiring interactive validation.

## Produces
A standalone, zero-dependency HTML demo file runnable via double-click in any browser.

## When applied
When a design question concerns business logic, state transitions, or data shape that looks reasonable on paper but needs validation against concrete cases.

## Sub-concepts
portable-module, pure-reducer, current-state, scenarios

## Part of
logic-prototype

## Implementation status
clean

## Design notes
A zero-dependency interactive HTML artifact produced by the logic prototyping workflow, designed so non-developers such as designers, product managers, or domain experts can interactively test state models and discover conceptual edge cases without installing development tooling.
