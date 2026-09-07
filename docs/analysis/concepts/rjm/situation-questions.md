---
package: rjm
name: Situation questions
slug: situation-questions
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/spin-selling.md, sha256: a92d32c272420a6c4bf96953b82293b68eb44b02b9aaca01eff33813081d9d10}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Situation questions

## Definition — verbatim
> "Situation questions. Gather facts about the buyer's current state: tools, headcount, process, volume. Ask only enough to set context." — .claude/skills/business-strategy/references/spin-selling.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/spin-selling.md | 20 | defined here | Opening stage of SPIN questioning sequence to gather minimal current-state facts. |

## Consumes
Pre-call research on target account operations, team structure, and current toolset.

## Produces
Factual baseline context necessary to identify operational friction without fatiguing the buyer.

## When applied
At the start of a consultative B2B sales discovery conversation when workflow context is unknown.

## Sub-concepts
none

## Part of
spin-selling

## Implementation status
clean

## Design notes
Situation questions establish the operational baseline in the SPIN discovery methodology. In rjm's sales strategy reference, these questions are strictly capped at three or fewer to prevent the inquiry from devolving into an interrogation and wasting the buyer's time on easily researchable facts.
