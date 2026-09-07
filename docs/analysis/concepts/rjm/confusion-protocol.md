---
package: rjm
name: Confusion Protocol
slug: confusion-protocol
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Confusion Protocol

## Definition — verbatim
(used, not defined)
> "options with trade-offs per the Confusion Protocol and wait." — .claude/skills/autoplan/SKILL.md:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 174 | used here | Prescribes presenting 2 to 3 options with trade-offs and waiting when blocked by a sovereignty decision. |

## Consumes
Blocking sovereignty decisions, conflicting requirements, or ambiguous architectural directions.

## Produces
Concise presentation of 2 to 3 distinct options accompanied by explicit trade-offs.

## When applied
When a sovereignty decision halts task execution and requires human resolution.

## Sub-concepts
none

## Part of
sovereignty

## Implementation status
clean

## Design notes
The Confusion Protocol provides a structured de-escalation protocol when an agent encounters ambiguity or a blocking sovereignty gate. Instead of stalling, guessing model preferences, or asking open-ended questions, the agent distills the problem into 2 to 3 concrete choices with clear trade-offs, presents them to the user, and waits for a decision.
