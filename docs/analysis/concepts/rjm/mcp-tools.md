---
package: rjm
name: MCP tools
slug: mcp-tools
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MCP tools

## Definition — verbatim
(used, not defined)

> "- **Claude**: Unique prompts per agent with Claude-specific features (MCP tools, Serena integration)" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 34 | used here | Highlighted as a Claude-specific platform capability justifying prompt divergence from shared templates. |

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
defects: internal-contradiction, missing-path

## Design notes
MCP tools refers to external tools exposed via the Model Context Protocol rather than an internal agent lifecycle concept, classified as name-only per D-023.
