---
package: rjm
name: Ask Before vs Proceed With Default
slug: ask-before-vs-proceed-with-default
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Ask Before vs Proceed With Default

## Definition — verbatim
(used, not defined)

> "## Ask Before vs Proceed With Default" — templates/agents/architect.shared.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/architect.shared.md | 82 | defines | Decision matrix governing whether the architect agent proceeds autonomously with design work or pauses to ask the orchestrator. |

## Consumes
Identified quality-attribute trades, ADR conflict state, stakeholder identification, and investment scope.

## Produces
A decision to proceed with design documentation, route to analyst for investigation, or ask the orchestrator.

## When applied
Evaluated during architectural reasoning before drafting ADRs or finalizing design reviews.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
An autonomy governance matrix that sets explicit boundaries for autonomous execution versus mandatory human or orchestrator escalation in system architecture decisions.
