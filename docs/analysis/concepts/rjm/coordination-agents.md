---
package: rjm
name: Coordination Agents
slug: coordination-agents
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Coordination Agents

## Definition — verbatim
(used, not defined)

> "### Coordination Agents" — .claude/agents/AGENTS.md:137

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/AGENTS.md | 137 | defined here | Category heading in the agent catalog grouping orchestrator, milestone-planner, task-decomposer, and backlog-generator personas. |

## Consumes
none

## Produces
none

## When applied
> "| Agent | File | Role |" — .claude/agents/AGENTS.md:139

## Sub-concepts
none

## Part of
claude-code-agents

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
A catalog grouping heading in AGENTS.md identifying agents responsible for routing, milestone planning, and task decomposition (`orchestrator`, `milestone-planner`, `task-decomposer`, `backlog-generator`). Classified as name-only per D-023 as it functions as a category heading in documentation rather than an independent lifecycle concept.
