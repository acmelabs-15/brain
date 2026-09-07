---
package: rjm
name: Domain Event
slug: domain-event
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Domain Event

## Definition — verbatim
> "- **Domain Event**: a fact about something that happened in the domain, named in the past tense (`SessionEnded`, `AgentDelegated`, `HandoffWritten`)." — .claude/skills/software-engineering-library/references/domain-driven-design.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 21 | defined here | Defined in core vocabulary as an immutable fact about a past occurrence in the domain named in past tense. |

## Consumes
Completed state transitions or notable domain milestones.

## Produces
Immutable historical event records broadcast to asynchronous handlers or logging systems.

## When applied
Applied when decoupling bounded contexts or recording notable lifecycle events that trigger downstream reactions.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A Domain Event captures an immutable record of an event that occurred within a domain, named in the past tense, facilitating loose coupling between bounded contexts and providing audit trails for multi-agent workflows.
