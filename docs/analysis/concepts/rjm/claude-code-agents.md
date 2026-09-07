---
package: rjm
name: Claude Code Agents
slug: claude-code-agents
kind: role
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

# Claude Code Agents

## Definition — verbatim
> "# Claude Code Agents" — .claude/agents/AGENTS.md:1

## Also called — verbatim
> "This document describes the 19 AI agents defined for Claude Code CLI and the critical workflow rules for maintaining them." — .claude/agents/AGENTS.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/AGENTS.md | 1 | defined here | Document title and introductory catalog defining the specialized multi-agent architecture and operational rules for Claude Code CLI. |

## Consumes
agent-definitions

## Produces
agent-catalog

## When applied
> "The `src/claude/` directory contains **hand-maintained** agent definitions for Claude Code CLI." — .claude/agents/AGENTS.md:7

## Sub-concepts
coordination-agents, analysis-agents, implementation-agents

## Part of
multi-agent-orchestration-system

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
The architecture and collection of 19 specialized agent personas maintained for the Claude Code CLI platform in rjm. Unlike cross-platform generated agents, Claude Code agents are hand-maintained in `src/claude/` and installed directly into `.claude/agents/` for local runtime execution.
