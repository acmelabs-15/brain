---
package: rjm
name: Security Representative
slug: security-representative
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

# Security Representative

## Definition — verbatim
> "| **Security Representative** | Security implications | security agent or security engineer |" — .agents/governance/steering-committee-charter.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 15 | defined here | Defines the committee seat responsible for evaluating security implications of agent proposals. |

## Consumes
Tool permissions, trust boundary definitions, and data exposure profiles of proposed agents.

## Produces
Security risk assessments, vulnerability reviews, and approval votes.

## When applied
Evaluates all new agent proposals for privilege escalation, tool abuse, and data safety risks.

## Sub-concepts
none

## Part of
committee-composition, agent-system-steering-committee

## Implementation status
defects: missing-path, doc-drift

## Design notes
A committee seat filled by the security agent or a security engineer that reviews agent designs for safety risks, tool abuse potential, sensitive data handling, and principle of least privilege adherence.
