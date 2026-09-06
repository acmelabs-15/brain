---
package: addy
name: Specialized Agent Personas
slug: specialized-agent-personas
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/antigravity-setup.md, sha256: 2fc07de1373ccf06eaa1ea84943cd1b4492f0e1d21dc311eda9538ab0702002d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Specialized Agent Personas

## Definition — verbatim
> "The plugin registers reusable subagent definitions from the `agents/` directory:" — docs/antigravity-setup.md:95

## Also called — verbatim
> "Agent Personas" — docs/agents.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/antigravity-setup.md | 94 | defines | Describes reusable subagent persona definitions packaged with the plugin |

## Consumes
Task delegation prompts and code review scopes.

## Produces
Specialist audit evaluations across code review, security, and testing.

## When applied
Invoked directly in sessions or during task delegation to subagents.

## Sub-concepts
none

## Part of
agent-skills

## Implementation status
clean

## Design notes
Specialized agent personas package distinct engineering perspectives into isolated subagent definitions, ensuring rigorous, uncompromised review across critical engineering disciplines.
