---
package: rjm
name: Selective MCP Exposure
slug: selective-mcp-exposure
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

# Selective MCP Exposure

## Definition — verbatim
> "## Selective MCP Exposure" — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 34 | defined here | Heading and pattern defining the three-tier exposure model (Global, Local, On-demand) for MCP servers. |

## Consumes
Available MCP servers and per-instance agent responsibilities.

## Produces
Partitioned MCP server configurations separating global, project-specific, and on-demand tools.

## When applied
Applied during environment and agent harness configuration to control token consumption.

## Sub-concepts
chrome-devtools, mcpkit-alternative

## Part of
context-optimization

## Implementation status
clean

## Design notes
A context-engineering pattern in rjm that categorizes MCP tool servers into Global (always-on), Local (project-specific), and On-demand (via CLI) tiers, preventing unnecessary tool schemas from saturating context windows.
