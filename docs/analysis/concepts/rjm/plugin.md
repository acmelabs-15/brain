---
package: rjm
name: Plugin
slug: plugin
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Plugin

## Definition — verbatim
> "A plugin is a directory containing:" — .agents/analysis/claude-code-plugin-marketplaces.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-code-plugin-marketplaces.md | 23 | defined here | Defined as a packaged directory combining commands, skills, agents, hooks, and configuration manifests. |

## Consumes
Agent components including slash commands, skills with SKILL.md, custom agents, hooks, and MCP server configurations.

## Produces
A versioned, portable bundle enabling distribution and lifecycle execution across repositories.

## When applied
Applied when packaging, releasing, and distributing modular agent capabilities to development teams.

## Sub-concepts
plugin-json, hooks-json, mcp-json, lsp-json

## Part of
marketplace

## Implementation status
defects: missing-path

## Design notes
A plugin in rjm represents the standard distribution and execution unit for Claude Code and Copilot CLI tools. It groups commands, skills, agents, and event hooks into a coherent, versioned package that can be discovered, installed, and executed across repositories.
