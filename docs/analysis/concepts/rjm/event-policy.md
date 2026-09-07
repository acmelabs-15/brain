---
package: rjm
name: Event policy
slug: event-policy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Event policy

## Definition — verbatim
> "Every per-call row below describes retired machinery (ADR-097): no source registration exists on either harness today, so \"None\" everywhere in the Copilot-registration column reflects the current, not the historical, state." — .claude/skills/agent-harness-reference/SKILL.md:119-121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 117 | defines | Defines the policy constraints governing hook registrations per host lifecycle event. |

## Consumes
Host event inventory and ADR-097 retirement mandates.

## Produces
Verified event handling constraints and clearance requirements for future hook additions.

## When applied
Applied when proposing or auditing hook registrations across harness lifecycle events.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift

## Design notes
Event policy enforces rigorous governance over per-call agent hooks. Following the retirement of unneeded hook machinery under ADR-097, this policy ensures that no hook is registered without first clearing strict tool-use criteria to prevent latency and reliability degradation.
