---
package: rjm
name: Non-Overlapping Specialization
slug: non-overlapping-specialization
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-design-principles.md, sha256: fd7551ca1f0c6ae2760203c6a390b6528ec36dffe80e7f5238facc7c69ee2ce0}
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Non-Overlapping Specialization

## Definition — verbatim
> "Each agent has a unique specialty that does not substantially overlap with other agents." — .agents/governance/agent-design-principles.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 53 | defined here | Mandated as Principle 1 of agent design, requiring a maximum of 20% capability overlap with any existing agent. |
| docs/agent-governance.md | 21 | defined here | First of the six core design principles establishing the 20% maximum capability overlap ceiling. |

## Consumes
Capability mapping matrices and new agent architectural proposals.

## Produces
Clean functional division across agent personas with minimal ambiguity in task routing.

## When applied
Enforced during new agent proposal reviews and quarterly consolidation audits.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other

## Design notes
The primary architectural principle governing agent persona design in rjm. By capping capability overlap between any pair of agents at 20%, it eliminates confusion for developers and routing orchestrators, preventing agent sprawl and redundant implementations.
