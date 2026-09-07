---
package: rjm
name: Steering Committee
slug: steering-committee
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Steering Committee

## Definition — verbatim
> "The steering committee reviews proposals quarterly and includes:" — docs/agent-governance.md:51

## Also called — verbatim
> "| Steering Committee Charter | `.agents/governance/steering-committee-charter.md` | Committee roles and processes |" — docs/agent-governance.md:12

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-governance.md | 49 | defined here | Defined as the governance body responsible for quarterly reviews of agent proposals and consolidation. |

## Consumes
Agent proposals, ADRs, consolidation candidates, and usage metrics.

## Produces
Approval and consolidation decisions governed by majority approval with no unaddressed objections.

## When applied
Convenes quarterly to evaluate agent proposals and consolidation triggers.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A five-member governance body in rjm (Chair, Architect, Security, DevOps, User representative) responsible for reviewing new agent proposals and consolidation triggers, operating under a consensus standard requiring majority approval without unaddressed objections.
