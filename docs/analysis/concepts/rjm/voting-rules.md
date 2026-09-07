---
package: rjm
name: Voting Rules
slug: voting-rules
kind: gate
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

# Voting Rules

## Definition — verbatim
(used, not defined)

> "Voting Rules" — .agents/governance/steering-committee-charter.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 72 | defined here | Defines decision rules and vote semantics (+1, 0, -1) for committee approval of agent proposals. |

## Consumes
Agent proposal ADR submitted for committee review and reviewer recommendations.

## Produces
Formal vote outcome and approval verdict determining whether an agent proposal is accepted, rejected, or revised.

## When applied
During the 1-week review period of an agent proposal when the Steering Committee votes on approval.

## Sub-concepts
none

## Part of
steering-committee-charter

## Implementation status
defects: doc-drift, missing-path

## Design notes
Governance decision gate establishing structured consensus criteria (+1 approval, 0 abstention, -1 rejection requiring justification) for agent additions. Requiring majority approval with zero unresolved rejections prevents agent sprawl and ensures architectural alignment across stakeholders.
