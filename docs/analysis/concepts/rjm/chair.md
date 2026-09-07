---
package: rjm
name: Chair
slug: chair
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/steering-committee-charter.md, sha256: 855a890ef575ea88a2e46161c4b17481be4f6d194e3e35353820d393b2c9741a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Chair

## Definition — verbatim
> "| **Chair** | Meeting facilitation, final decisions | Project lead or designee |" — .agents/governance/steering-committee-charter.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 13 | defined here | Defines the Chair role responsible for meeting facilitation, reviewer assignment, and tie-breaking decisions. |

## Consumes
Meeting agendas, proposal submissions, voting tallies, and tie votes.

## Produces
Reviewer assignments, meeting facilitation, and tie-breaking votes.

## When applied
Presides over all committee meetings and approval workflows.

## Sub-concepts
none

## Part of
committee-composition, agent-system-steering-committee

## Implementation status
defects: missing-path, doc-drift

## Design notes
Leadership role on the steering committee held by the project lead or designee, responsible for scheduling meetings, assigning proposal reviewers, facilitating debate, and breaking voting deadlocks.
