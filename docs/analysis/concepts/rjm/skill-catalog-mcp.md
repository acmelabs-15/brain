---
package: rjm
name: Skill Catalog MCP
slug: skill-catalog-mcp
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-012-skill-catalog-mcp.md, sha256: c0bc4972bfdc4425b58e321e7105effe6b54dbd374825f9e0817bea2dac6a279}
  - {path: .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md, sha256: 1a536dc8e99fed3372a660e17f0f90ae3e57d02a2dc83ced5d46a2b887165582}
  - {path: .agents/architecture/ADR-064-commands-to-skills-migration.md, sha256: aeea5baa429974dd9980d1e659f39aa10d472d794e644a158bac7eb8f1bd44fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Catalog MCP

## Definition — verbatim
> "Create a **Skill Catalog MCP** that:" — .agents/architecture/ADR-012-skill-catalog-mcp.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-012-skill-catalog-mcp.md | 52 | defined here | Architectural decision establishing the Skill Catalog MCP specification, search tools, and resource URIs. |
| .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md | 44 | used here | Listed as an existing proposed ADR dependency in the MCP tool ecosystem expansion plan. |
| .agents/architecture/ADR-064-commands-to-skills-migration.md | 87 | used here | Cited as the governing architecture for the skill catalog during slash-commands to skills migration. |

## Consumes
Executable skills from `.claude/skills/`, learned pattern skills from `.agents/skills/`, and category indexes from Serena memories.

## Produces
MCP tools (`search_skills`, `get_skill`, `check_skill_exists`, `cite_skill`, `suggest_skills`, `validate_no_raw_commands`) and MCP resources (`skills://catalog`, `skills://categories`, `skills://usage`, `skills://suggestions`).

## When applied
Active across all agent sessions to enable unified skill discovery, citation tracking, and enforcement against raw CLI command execution.

## Sub-concepts
search-skills, get-skill, check-skill-exists, cite-skill, suggest-skills, validate-no-raw-commands

## Part of
quality-gates, skills-pattern

## Implementation status
not-implemented

## Design notes
An architectural service proposed in ADR-012 providing centralized indexing, search, citation, and validation across all skill repositories. It addresses the recurring failure mode where agents bypass existing skills to invoke raw CLI commands by exposing programmatic discovery and pre-execution validation gates.
