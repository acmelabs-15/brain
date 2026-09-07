---
package: rjm
name: Claude Code Tools
slug: claude-code-tools
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/backlog-generator.md, sha256: 76e6ab2663aeeb7c99c249359046cf1f39819159cef4324c4e2add00f0077b46}
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Claude Code Tools

## Definition — verbatim
(used, not defined)

> "You have direct access to:" — .claude/agents/backlog-generator.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/backlog-generator.md | 32 | defined here | Heading and inventory of native Claude Code host tools directly accessible to the agent. |
| .claude/agents/task-decomposer.md | 40 | defined here | Heading and inventory of native Claude Code host tools directly accessible to the agent. |

## Consumes
Claude Code execution environment and agent configuration.

## Produces
Specification of authorized tool primitives (Read, Grep, Glob, TodoWrite, Bash, Serena MCP) available to the agent.

## When applied
Referenced by agents to determine authorized environment operations and tool invocation capabilities.

## Sub-concepts
none

## Part of
backlog-generator, task-decomposer

## Implementation status
clean

## Design notes
Claude Code Tools enumerates the platform-native host tool primitives (Read, Grep, Glob, TodoWrite, Bash, Serena MCP) available to specific agents within the Claude Code runtime, defining operational capabilities and boundaries for environment inspection, issue authoring, and memory management.
