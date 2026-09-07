---
package: rjm
name: agent isolation
slug: agent-isolation
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-027-github-mcp-agent-isolation.md, sha256: 3a0cae5d7a44bc1fa4645e919b1e487e35e0c6ab4826e09df105a5c508907ac3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agent isolation

## Definition — verbatim
> "# ADR-027: GitHub MCP Server with Agent Isolation Pattern" — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-027-github-mcp-agent-isolation.md | 14 | defined here | Architectural pattern constraining MCP server tool catalogs to dedicated subagents to prevent root context bloat. |

## Consumes
Tool catalog schemas, task delegation contracts, and subagent role definitions.

## Produces
Scoped subagent execution environments isolating tool definitions and token costs from the primary agent session.

## When applied
Applied when integrating extensive external tool sets or MCP servers whose inclusion in the main agent context would cause token bloat or tool selection confusion.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Agent isolation is an architectural pattern that confines extensive toolsets (such as 40+ GitHub MCP endpoints) to specialized subagents. By isolating tools behind a subagent boundary, the primary agent context remains uncluttered and saves ~10,000 tokens of tool overhead, while delegating specific operations through well-defined task interfaces.
