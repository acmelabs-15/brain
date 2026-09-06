---
package: addy
name: Agent Teams
slug: agent-teams
kind: pattern
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

# Agent Teams

## Definition — verbatim
> "Teammates message each other, share a task list" — references/orchestration-patterns.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agents.md | 108 | references | Notes personas work as Agent Teams teammates under experimental flags |
| references/orchestration-patterns.md | 125 | defines | Contrasts Agent Teams peer messaging with subagent fan-out reporting |

## Consumes
Experimental Claude Code environment flag (CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1) and collaborative multi-agent task definitions.

## Produces
Collaborative agent dialogue, shared task-list coordination, and peer challenge interactions.

## When applied
When teammates need to debate, challenge findings, or collaborate interactively (e.g. competing-hypothesis debugging).

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
Agent Teams support peer-to-peer messaging and shared task lists across agent instances, reserved for complex problem spaces where agents must actively challenge each other's hypotheses.
