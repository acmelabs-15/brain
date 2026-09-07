---
package: rjm
name: Event-Driven Requirements
slug: event-driven-requirements
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/ears-format.md, sha256: 846910c14494b7c3c1a4ed80a46287e611e6a62725e02e4f175f93096e1151fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Event-Driven Requirements

## Definition — verbatim
> "Requirements triggered by a specific event." — .agents/governance/ears-format.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/ears-format.md | 67 | defined here | Defined as Pattern 2 of the EARS grammar specifying actions initiated by a discrete external or internal event. |

## Consumes
Discrete event signals (e.g., PR opened, button clicked, message received).

## Produces
Syntactic requirements formatted as `WHEN [event occurs] THE SYSTEM SHALL [action] SO THAT [rationale]`.

## When applied
Applied when formulating system reactions to asynchronous signals, user inputs, or pipeline events.

## Sub-concepts
- when
- the-system-shall

## Part of
- ears-format

## Implementation status
defects: missing-path (.agents/governance/ears-format.md:331 broken relative link to archived enhancement-PROJECT-PLAN.md)

## Design notes
Event-driven requirements capture reactive behaviors initiated by specific discrete occurrences in rjm. By explicitly binding the system's response to an identifiable trigger event, they allow implementers and test agents to construct deterministic test scenarios. Without event-driven requirements, trigger conditions become blurred with ambient preconditions.
