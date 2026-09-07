---
package: rjm
name: Model Context Protocol
slug: model-context-protocol
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md, sha256: 1a536dc8e99fed3372a660e17f0f90ae3e57d02a2dc83ced5d46a2b887165582}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Model Context Protocol

## Definition — verbatim
(used, not defined)

> "The ai-agents project uses MCP (Model Context Protocol) for tool integration." — .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md:24

## Also called — verbatim
`MCP` — .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md:24

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md | 24 | used here | Profiled as the open protocol standard governing external tool and context server integration |

## Consumes
none

## Produces
Standardized JSON-RPC protocol messages connecting agent hosts with external tool servers.

## When applied
Applied when connecting agent sessions to external tool, knowledge, and memory servers.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Model Context Protocol (MCP) is the open specification for bidirectional communication between LLM client runtimes and specialized tool or resource servers.
