---
package: rjm
name: github-mcp-server
slug: github-mcp-server
kind: name-only
package_phase: cross-phase
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

# github-mcp-server

## Definition — verbatim
(used, not defined)

> "**Description**: Use official GitHub MCP server (github/github-mcp-server) with agent-specific attachment following the superpowers-chrome isolation pattern." — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-027-github-mcp-agent-isolation.md | 128 | used here | Evaluated as an external Model Context Protocol server exposing 40+ GitHub API tools. |

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
defects: missing-path

## Design notes
The package name and identifier for the official Model Context Protocol server for GitHub, representing an external integration component rather than an agent lifecycle concept.
