---
package: rjm
name: DevOps Representative
slug: devops-representative
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

# DevOps Representative

## Definition — verbatim
> "| **DevOps Representative** | Operational concerns | devops agent or platform engineer |" — .agents/governance/steering-committee-charter.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 16 | defined here | Defines the committee seat responsible for assessing operational concerns and platform compatibility. |

## Consumes
Operational dependencies, CI/CD pipeline integration requirements, and tool execution demands.

## Produces
Operational feasibility ratings, platform impact assessments, and votes.

## When applied
Reviews agent proposals for execution overhead, infrastructure reliability, and packaging feasibility.

## Sub-concepts
none

## Part of
committee-composition, agent-system-steering-committee

## Implementation status
defects: missing-path, doc-drift

## Design notes
A committee seat filled by the devops agent or a platform engineer that evaluates the operational impact, CI/CD runtime costs, environment dependencies, and platform stability of proposed agents.
