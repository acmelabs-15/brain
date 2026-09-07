---
package: rjm
name: Committee Composition
slug: committee-composition
kind: reference
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

# Committee Composition

## Definition — verbatim
> "## Committee Composition" — .agents/governance/steering-committee-charter.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 7 | defined here | Defines the structural composition of the steering committee across five distinct functional roles. |

## Consumes
Role specifications for Chair, Architect, Security, DevOps, and User representatives.

## Produces
Staffed committee roster capable of establishing quorum and voting on agent proposals.

## When applied
Referenced when constituting the committee or verifying quorum before voting.

## Sub-concepts
chair, architect-representative, security-representative, devops-representative, user-representative

## Part of
agent-system-steering-committee-charter

## Implementation status
defects: missing-path, doc-drift

## Design notes
Structural specification of the steering committee's five constituent roles (Chair, Architect, Security, DevOps, User Representative), allowing staffing by either human engineers or specialized agent personas.
