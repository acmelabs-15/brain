---
package: addy
name: orchestration-patterns
slug: orchestration-patterns
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# orchestration-patterns

## Definition — verbatim
> "Reference catalog of agent orchestration patterns this repo endorses, plus anti-patterns to avoid." — references/orchestration-patterns.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agents.md | 46 | references | Points to orchestration-patterns.md for the full pattern catalog and anti-patterns |
| references/orchestration-patterns.md | 1 | defines | Catalog of valid orchestration models and prohibited architectural anti-patterns |

## Consumes
Multi-agent coordination requirements and workflow architectures.

## Produces
Architectural constraints governing subagent spawning, communication topology, and error handling.

## When applied
When designing slash commands, multi-agent workflows, or authoring new agent personas.

## Sub-concepts
fan-out, meta-orchestrator, agent-teams, claude-code-subagents

## Part of
agent-skills

## Implementation status
clean

## Design notes
Orchestration patterns documents the architectural boundaries of agent interaction in addy, enforcing user-as-orchestrator and disallowing runaway persona-calling-persona chains.
