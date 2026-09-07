---
package: rjm
name: Event-driven
slug: event-driven
kind: pattern
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Event-driven

## Definition — verbatim
> "| **Event-driven** | WHEN [trigger] THE SYSTEM SHALL [action] | Triggered behaviors |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 50 | defined here | Defined in EARS patterns table as triggered behaviors following "WHEN [trigger] THE SYSTEM SHALL [action]". |

## Consumes
An identifiable event, user action, or system signal that initiates execution.

## Produces
A triggered requirement defining mandatory system behavior in direct response to an event.

## When applied
> "| **Event-driven** | WHEN [trigger] THE SYSTEM SHALL [action] | Triggered behaviors |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:50

## Sub-concepts
none

## Part of
ears

## Implementation status
clean

## Design notes
An EARS requirement pattern for specifying reactive system behaviors that execute when an explicit trigger occurs, establishing an unambiguous link between stimulus and response.
