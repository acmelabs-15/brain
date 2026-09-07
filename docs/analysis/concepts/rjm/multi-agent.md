---
package: rjm
name: Multi-agent
slug: multi-agent
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md, sha256: d5704127da8f69f150db8fb57ed02da11e400c198eedff21733a4162ada1a7a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Multi-agent

## Definition — verbatim
> "Planner model spins up capability-specific agents. 2-agent hierarchy > swarm" — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 51 | defined here | Architectural layer in Mythos-Ready System Architecture recommending lean two-agent hierarchies over complex swarms. |

## Consumes
none

## Produces
none

## When applied
When designing agent hierarchies capable of surviving step-change model upgrades.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Multi-agent architecture in rjm prioritizes minimal, two-agent hierarchies where a planner model spins up capability-specific subagents, explicitly avoiding over-scaffolded swarm architectures that become brittle across model upgrades.
