---
package: rjm
name: Agent System Steering Committee
slug: agent-system-steering-committee
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

# Agent System Steering Committee

## Definition — verbatim
> "The Agent System Steering Committee governs the evolution of the multi-agent system, ensuring agents remain focused, non-overlapping, and effective." — .agents/governance/steering-committee-charter.md:5

## Also called — verbatim
`committee` — .agents/governance/steering-committee-charter.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 5 | defined here | Defines the governing body responsible for multi-agent system evolution, proposal reviews, and system health. |

## Consumes
Agent proposals, ADRs, consolidation candidates, usage metrics, and escalation reports.

## Produces
Approval/rejection decisions, consolidation mandates, and system governance records.

## When applied
Convenes on regular monthly and quarterly cadences and ad-hoc for critical escalations.

## Sub-concepts
chair, architect-representative, security-representative, devops-representative, user-representative

## Part of
agent-system-steering-committee-charter

## Implementation status
defects: missing-path, doc-drift

## Design notes
A governance body comprising five representative roles (available to humans or specialized agents) that reviews agent proposals, identifies consolidation opportunities, resolves architectural deadlocks, and enforces system design principles.
