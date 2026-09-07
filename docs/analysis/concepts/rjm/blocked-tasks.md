---
package: rjm
name: Blocked Tasks
slug: blocked-tasks
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Blocked Tasks

## Definition — verbatim
> "When work cannot proceed:" — .agents/AGENT-SYSTEM.md:1705

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1703 | defines | Operational handling pattern mandating creation of a Blocker Report when execution is halted. |

## Consumes
Impeded execution states, unresolved dependency failures, external outages, or missing information.

## Produces
A structured Blocker Report recording blocker classification, attempted workarounds, and triage recommendations.

## When applied
> "When work cannot proceed:" — .agents/AGENT-SYSTEM.md:1705

## Sub-concepts
blocker-report

## Part of
none

## Implementation status
clean

## Design notes
A standardized protocol triggered whenever an agent cannot advance an assigned task. Instead of repeatedly retrying failed operations or entering infinite loops, the agent must document the impediment, categorize its nature (external, technical, or missing info), detail attempted alternatives, and provide a concrete recommendation (wait, pivot, or escalate).
