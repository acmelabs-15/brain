---
package: rjm
name: Architect Representative
slug: architect-representative
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

# Architect Representative

## Definition — verbatim
> "| **Architect Representative** | Technical feasibility, design alignment | architect agent or human architect |" — .agents/governance/steering-committee-charter.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 14 | defined here | Defines the committee seat responsible for assessing technical feasibility and design alignment. |

## Consumes
Agent architecture proposals, ADRs, design patterns, and interface contracts.

## Produces
Technical feasibility evaluations, alignment reviews, and consolidation proposals.

## When applied
Reviews all incoming agent proposals and participates in consolidation workflows.

## Sub-concepts
none

## Part of
committee-composition, agent-system-steering-committee

## Implementation status
defects: missing-path, doc-drift

## Design notes
A committee seat filled by the architect agent or a human architect, dedicated to assessing technical feasibility, system coherence, and adherence to repository architectural patterns.
