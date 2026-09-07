---
package: rjm
name: Outbox pattern
slug: outbox-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Outbox pattern

## Definition — verbatim
(used, not defined)

> "Outbox pattern or CDC needed." — scripts/eval/eval-agents.py:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agents.py | 165 | used here | Cited in expected evaluation criteria for architectural review of dual-write scenarios. |

## Consumes
System architectures involving database transactions and message broker events.

## Produces
Reliable eventual consistency by writing outbox records within database transactions.

## When applied
When an application must update a database and publish corresponding events to a message queue or bus without dual-write inconsistency.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
An architectural design pattern ensuring atomic multi-system state propagation by recording outbound messages in a database table before dispatching them to external message brokers.
