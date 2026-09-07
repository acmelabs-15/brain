---
package: rjm
name: Agent Lifecycle
slug: agent-lifecycle
kind: pattern
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

# Agent Lifecycle

## Definition — verbatim
> "PROPOSED -> APPROVED -> ACTIVE -> DEPRECATED -> RETIRED" — docs/agent-governance.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-governance.md | 61 | defined here | Defined as the state machine governing agent progression from proposal through development, maintenance, and retirement. |

## Consumes
Agent proposals, ADRs, development plans, and deprecation triggers.

## Produces
Formal state transitions across Proposed, Approved, Active, Deprecated, and Retired statuses.

## When applied
Governs the entire lifespan of an agent from initial ADR proposal to eventual decommissioning.

## Sub-concepts
retired

## Part of
steering-committee

## Implementation status
clean

## Design notes
The standardized five-stage lifecycle state machine in rjm governing how agent definitions progress through proposal, approval, active maintenance, deprecation, and eventual retirement, maintaining clear operational boundaries.
