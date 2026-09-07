---
package: rjm
name: Scope Distinction
slug: scope-distinction
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/backlog-generator.md, sha256: 76e6ab2663aeeb7c99c249359046cf1f39819159cef4324c4e2add00f0077b46}
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scope Distinction

## Definition — verbatim
> "**Relationship**: backlog-generator identifies WHAT needs doing. task-decomposer breaks down HOW to do it. backlog-generator may create items that later route to task-decomposer for decomposition." — .claude/agents/backlog-generator.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/backlog-generator.md | 55 | defined here | Role boundary definition contrasting proactive backlog generation with reactive task decomposition. |
| .claude/agents/task-decomposer.md | 59 | defined here | Role boundary definition contrasting milestone planning with atomic task decomposition. |
| templates/agents/backlog-generator.shared.md | 45 | defined here | Role boundary definition contrasting proactive backlog generation with reactive task decomposition. |
| templates/agents/task-decomposer.shared.md | 47 | defined here | Role boundary definition contrasting milestone planning with atomic task decomposition. |

## Consumes
Agent role definitions, project requirements, and overlapping planning responsibilities.

## Produces
Clear operational boundaries between proactive discovery, macro milestone planning, and atomic work breakdown.

## When applied
Applied when designing agent catalog boundaries and routing planning tasks between specialized planning agents.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
Scope Distinction explicitly establishes functional boundaries between closely related planning agents. By clarifying that backlog-generator handles proactive discovery of what needs doing while task-decomposer handles reactive breakdown of how to execute a defined PRD, and milestone-planner manages macro phases while task-decomposer manages atomic work items, rjm prevents role confusion and duplicate agent invocations.
