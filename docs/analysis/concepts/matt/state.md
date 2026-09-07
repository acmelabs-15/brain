---
package: matt
name: state
slug: state
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# state

## Definition — verbatim
> "Five **state** roles:" — skills/engineering/triage/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/triage/SKILL.md | 31 | defined here | Defines the lifecycle state machine axis in triage across five discrete roles. |

## Consumes
An issue or PR evaluated during triage.

## Produces
A state role label assigned to the tracker item indicating its current lifecycle phase.

## When applied
Applied throughout the triage process as issues move from submission through evaluation to resolution or handoff.

## Sub-concepts
needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix

## Part of
triage

## Implementation status
defects: missing-path

## Design notes
The workflow progression axis in the triage state machine. An issue or PR occupies exactly one state role at any point (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, or `wontfix`), signaling who is responsible for the next action and whether the item is actionable.
