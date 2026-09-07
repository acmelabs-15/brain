---
package: rjm
name: mcpkit alternative
slug: mcpkit-alternative
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

# mcpkit alternative

## Definition — verbatim
> "**mcpkit alternative**: Converts MCP server into CLI-based skills. Generates SKILL.md. Agent calls via `mcpkit call <server> <tool> '{params}'`. Skill puts 2 lines in system prompt vs flooding context with tool descriptions." — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 32 | defined here | Defined as an MCP optimization pattern that converts MCP servers into CLI-invocable skills to save prompt tokens. |

## Consumes
MCP server configurations and JSON-RPC tool schemas.

## Produces
Generated SKILL.md wrappers and CLI invocations (`mcpkit call`).

## When applied
Applied when an MCP server contains numerous detailed tool definitions that would otherwise flood the system prompt.

## Sub-concepts
none

## Part of
selective-mcp-exposure

## Implementation status
clean

## Design notes
A context-saving optimization pattern in rjm that converts Model Context Protocol servers into CLI-based skills, reducing hundreds of lines of tool schemas to a concise two-line system prompt entry.
