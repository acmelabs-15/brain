---
package: rjm
name: Task Management
slug: task-management
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Task Management

## Definition — verbatim
> "Validated pattern regardless of tooling: break work into max ~10 min tasks, let agents claim and complete them, parallelize with swarms." — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 70 | defined here | Section heading introducing the task decomposition and swarm claiming pattern. |

## Consumes
Feature plan, task backlog, user requirements.

## Produces
Decomposed ~10-minute discrete tasks claimed and executed by agent swarms.

## When applied
Applied during task planning and execution to bound agent context growth and enable parallelization.

## Sub-concepts
github-issues-format

## Part of
context-optimizer

## Implementation status
defects: missing-path

## Design notes
A core execution pattern in Claude Code development that restricts task granularity to short ~10-minute increments, preventing quadratic context bloat within individual sessions and enabling safe parallel execution across swarm agents.
