---
package: rjm
name: Steering Committee Charter
slug: steering-committee-charter
kind: artifact
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

# Steering Committee Charter

## Definition — verbatim
> "| Steering Committee Charter | `.agents/governance/steering-committee-charter.md` | Committee roles and processes |" — docs/agent-governance.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-governance.md | 12 | used here | Governance artifact table entry referencing the charter defining committee roles and approval processes. |

## Consumes
Agent creation proposals (ADRs), capability overlap analyses, and usage telemetry.

## Produces
Formally ratified governance decisions approving new agent roles, consolidation plans, or deprecation actions.

## When applied
Governs steering committee review meetings when evaluating agent additions, mergers, or retirements.

## Sub-concepts
none

## Part of
multi-agent-system

## Implementation status
clean

## Design notes
The Steering Committee Charter defines the operational charter and consensus decision-making protocol for managing rjm's multi-agent ecosystem. By formalizing membership roles, review intervals, and transition gates, the charter ensures deliberate architectural stewardship and prevents uncontrolled agent proliferation.
