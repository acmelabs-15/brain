---
package: rjm
name: Forgetful MCP
slug: forgetful-mcp
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md, sha256: 1a536dc8e99fed3372a660e17f0f90ae3e57d02a2dc83ced5d46a2b887165582}
  - {path: .claude/commands/context-hub-setup.md, sha256: df6e2fd17f0cae46d889f77dc4c7169422c86095ece9aace0c584738b429522f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Forgetful MCP

## Definition — verbatim
(used, not defined)

> "- **Forgetful MCP**: Semantic memory (currently unavailable)" — .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md | 28 | used here | Profiled in MCP tool ecosystem overview as semantic memory server (currently unavailable) |
| .claude/commands/context-hub-setup.md | 53 | used here | Configured as step 2 in context hub setup workflow |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
out-of-scope

## Design notes
Forgetful MCP is an external Model Context Protocol server identifier for semantic vector memory storage rather than an in-scope operational lifecycle concept.
