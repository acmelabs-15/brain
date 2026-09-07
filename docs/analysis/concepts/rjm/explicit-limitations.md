---
package: rjm
name: Explicit Limitations
slug: explicit-limitations
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md, sha256: 21223deef2b27e1961fbf9f2c04cb9d97eb086e088ae58ab38e73644c61b5139}
  - {path: .agents/architecture/ADR-TEMPLATE.md, sha256: 9d9ce626ffb06bbe993eacd08dac582853969da5fb9a491680a5c4bf45f87fe1}
  - {path: .agents/governance/agent-design-principles.md, sha256: fd7551ca1f0c6ae2760203c6a390b6528ec36dffe80e7f5238facc7c69ee2ce0}
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Explicit Limitations

## Definition — verbatim
> "Document what the agent CANNOT do" — docs/agent-governance.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md | 251 | used here | Lists explicit limitations for autoplan (no multi-agent coordination) and orchestrator (no direct invocation of autoplan). |
| .agents/architecture/ADR-TEMPLATE.md | 147 | defined here | Section heading in ADR template requiring explicit negative constraints and boundaries. |
| .agents/governance/agent-design-principles.md | 129 | defined here | Principle 3 defining the requirement that every agent must document what it cannot do. |
| .claude/skills/adr-generator/references/adr-template.md | 193 | defined here | Reference template requiring enumerated explicit limitations for proposed agents. |
| docs/agent-governance.md | 23 | defined here | Core governance rule defining Explicit Limitations as one of the six agent design principles. |

## Consumes
Agent role definition, tool access permissions, system boundaries.

## Produces
Mandatory negative constraint statements and out-of-scope boundaries codified in agent definitions and ADRs.

## When applied
Mandated during agent definition authoring and architectural design reviews for all agent system components.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, other, doc-drift

## Design notes
The third core principle of agent design in rjm governance, mandating that every agent definition explicitly state what tasks it cannot perform, what tools it lacks, and what responsibilities belong to other agents. Prevents scope creep and prevents agents from attempting uncoordinated actions.
