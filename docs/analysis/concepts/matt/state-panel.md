---
package: matt
name: state panel
slug: state-panel
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# state panel

## Definition — verbatim
> "It carries a labelled state panel that re-renders after every click, free-play buttons for poking at the model in any order, and tabbed **guided walkthroughs** (one scenario per tab, each with the ordered buttons to press underneath it)." — docs/engineering/prototype.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/prototype.md | 19 | defined here | Describes the reactive UI component inside logic prototypes that visually re-renders model state. |

## Consumes
State changes emitted by the prototype's underlying logic machine.

## Produces
Real-time, domain-labelled visual display of active state, variables, and transition history.

## When applied
Rendered inside single shareable HTML prototypes on every user interaction.

## Sub-concepts
none

## Part of
single-shareable-html-file

## Implementation status
clean

## Design notes
A state panel provides immediate visual telemetry of the internal state machine inside a prototype HTML file. By re-rendering domain states after every button click, it lets evaluators see exactly how transitions occur during free play and guided walkthroughs.
