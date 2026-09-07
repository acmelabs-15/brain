---
package: rjm
name: Serena MCP
slug: serena-mcp
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md, sha256: 1a536dc8e99fed3372a660e17f0f90ae3e57d02a2dc83ced5d46a2b887165582}
  - {path: .claude/skills/reflect/SKILL.md, sha256: 645403addd017edc990804ffecd3e577ef8c2b3a15e7e841b599c2e901b33c77}
  - {path: .claude/skills/reflect/references/integration-and-design.md, sha256: 37a4ebbbef480bfe271c45cbd567a65f527f81114f9f955e9ec7f8de6b401624}
  - {path: docs/search-dont-load.md, sha256: 336e01aa25edeeac39b428a68a91fc7b2928cc4855f38298f46850304eb88665}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Serena MCP

## Definition — verbatim
(used, not defined)

> "- **Serena MCP**: Code navigation, symbol analysis, memory management" — .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md | 26 | used here | Profiled as code navigation, symbol analysis, and memory management tool server in MCP ecosystem |
| .claude/skills/reflect/references/integration-and-design.md | 35 | used here | Cited in integration reference as tool provider for reading and writing memory files |
| .claude/skills/reflect/SKILL.md | 69 | used here | Designated as canonical storage provider for skill observations memories |
| docs/search-dont-load.md | 23 | used here | Recommended as primary tool call for querying memory indexes |

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
Serena MCP is an external Model Context Protocol server identifier for symbol analysis and memory persistence rather than an in-scope operational lifecycle concept.
