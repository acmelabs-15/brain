---
package: rjm
name: Clear Entry Criteria
slug: clear-entry-criteria
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

# Clear Entry Criteria

## Definition — verbatim
> "Developers can determine \"Should I use this agent?\" in under 30 seconds." — .agents/governance/agent-design-principles.md:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 91 | defined here | Mandated as Principle 2 of agent design, requiring that developers determine agent applicability in under 30 seconds. |
| docs/agent-governance.md | 22 | defined here | Listed as Principle 2 of agent governance requiring "Should I use this?" to be answerable in < 30 seconds. |

## Consumes
Task requirements and pattern-based trigger conditions.

## Produces
Rapid, deterministic decisions on whether to invoke a specific agent.

## When applied
Evaluated by users and orchestrators during task intake and agent routing.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other

## Design notes
A core agent design principle in rjm requiring that every agent have objective, pattern-based invocation criteria. It ensures developers and routing algorithms can unambiguously decide whether an agent is appropriate in under 30 seconds.
