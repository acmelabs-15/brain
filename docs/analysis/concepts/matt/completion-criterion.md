---
package: matt
name: completion criterion
slug: completion-criterion
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# completion criterion

## Definition — verbatim
> "Every step ends on a **completion criterion**, the condition that tells the agent the work is done." — skills/productivity/writing-for-agents/SKILL.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL.md | 47 | defined here | Verifiable terminal condition ending each procedural step that defines done and resists premature completion. |

## Consumes
Step outputs, interim deliverables, and state changes.

## Produces
Binary pass/fail determination on whether the current step's execution requirements are satisfied.

## When applied
Evaluated at the conclusion of every procedural step before transitioning to downstream instructions.

## Sub-concepts
none

## Part of
steps-and-completion-criteria

## Implementation status
clean

## Design notes
Acts as an intra-workflow termination gate. It counters the agent tendency toward premature completion by establishing an explicit, verifiable threshold ('Done when...') that resists the pull of subsequent steps.
