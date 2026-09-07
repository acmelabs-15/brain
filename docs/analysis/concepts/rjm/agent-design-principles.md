---
package: rjm
name: Agent Design Principles
slug: agent-design-principles
kind: checklist
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

# Agent Design Principles

## Definition — verbatim
> "| Agent Design Principles | `.agents/governance/agent-design-principles.md` | 6 principles all agents must follow |" — docs/agent-governance.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-governance.md | 13 | used here | Governance artifact table entry citing the six mandatory principles required of every agent. |

## Consumes
Agent prompt proposals, role descriptions, and capability boundary specifications.

## Produces
Conforming agent designs exhibiting sharp specialization, measurable success metrics, and standardized interfaces.

## When applied
Mandated during the design and evaluation of all new or modified agent templates prior to approval.

## Sub-concepts
none

## Part of
multi-agent-system

## Implementation status
clean

## Design notes
Agent Design Principles define the mandatory six-pillar quality checklist in rjm that every agent must satisfy: Non-Overlapping Specialization (maximum 20% overlap), Clear Entry Criteria (<30 seconds to choose), Explicit Limitations, Composability, Verifiable Success, and Consistent Interfaces. Together, these principles maintain architectural sharpness and prevent agent bloating.
