---
package: rjm
name: State-driven
slug: state-driven
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

# State-driven

## Definition — verbatim
> "| **State-driven** | WHILE [condition] THE SYSTEM SHALL [action] | Condition-dependent behaviors |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 51 | defined here | Defined in EARS patterns table as condition-dependent behaviors following "WHILE [condition] THE SYSTEM SHALL [action]". |

## Consumes
A persistent system state, operational mode, or ongoing environmental condition.

## Produces
A condition-dependent requirement active throughout the duration of the state.

## When applied
> "| **State-driven** | WHILE [condition] THE SYSTEM SHALL [action] | Condition-dependent behaviors |" — .agents/architecture/ADR-032-ears-requirements-syntax.md:51

## Sub-concepts
none

## Part of
ears

## Implementation status
clean

## Design notes
An EARS requirement pattern for specifying behaviors that apply continuously while a specified operational state or system condition remains true.
