---
package: rjm
name: github-agent
slug: github-agent
kind: role
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

# github-agent

## Definition — verbatim
> "name: github-agent" — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-027-github-mcp-agent-isolation.md | 153 | defined here | Proposed specialist subagent role dedicated to executing GitHub operations via isolated MCP tools. |

## Consumes
Task delegations, PR contexts, issue metadata, and GitHub operation commands from the primary session.

## Produces
GitHub API interactions (comments, reviews, labels, reactions) executed via Model Context Protocol tools.

## When applied
Proposed for delegation when GitHub API operations require complex tool interactions without polluting root session context.

## Sub-concepts
none

## Part of
agent-isolation

## Implementation status
not-implemented

## Design notes
A proposed specialist agent role configured to interact exclusively with GitHub via MCP tools in an isolated context. Designed to offload tool definitions and execution state from the main session, it was documented in ADR-027 but superseded by skill-based patterns before being implemented.
