---
package: rjm
name: Task Tool
slug: task-tool
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: CLAUDE.md, sha256: 9a1e9abfb2f67110d986b795a47dcc54656dc365beb6384002f7ca9f628f6372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Task Tool

## Definition — verbatim
(used, not defined)

> "For non-trivial tasks, delegate to specialized agents via Task tool:" — CLAUDE.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/AGENTS.md | 216 | used here | Section heading introducing agent invocation syntax via Claude Code's Task tool. |
| CLAUDE.md | 7 | used here | Instructs delegating non-trivial multi-step tasks to specialized agents using the Task tool. |

## Consumes
Agent target identifier (`subagent_type`) and delegation prompt containing task context and constraints.

## Produces
An isolated subagent execution environment running a specialized agent persona.

## When applied
Used whenever non-trivial tasks require specialized reasoning, scoped context, or separation of concerns.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Task Tool is Claude Code's primary mechanism for agent delegation (`Task(subagent_type=..., prompt=...)`). In rjm, it provides the runtime foundation for multi-agent workflows by spinning up isolated subagent contexts that execute specialized personas, preventing context pollution and ensuring adherence to agent boundaries.
