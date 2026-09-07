---
package: rjm
name: MCP Tool Selection Criteria
slug: mcp-tool-selection-criteria
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# MCP Tool Selection Criteria

## Definition — verbatim
> "## MCP Tool Selection Criteria" — .claude/skills/analyze/references/agent-architecture-patterns.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 34 | defined here | Section detailing standards for adopting MCP tools over existing CLI tools. |

## Consumes
Proposed tool capabilities, pre-training coverage assessments, and interface overhead metrics.

## Produces
Architectural decision whether to adopt an MCP server or utilize native CLI tooling.

## When applied
Evaluated whenever expanding agent tool capabilities or integrating external services.

## Sub-concepts
none

## Part of
agent-architecture-patterns

## Implementation status
defects: missing-path

## Design notes
MCP Tool Selection Criteria establish objective standards for incorporating Model Context Protocol servers into agent workflows. In rjm, tools should eliminate repetitive context-stuffing; when an existing CLI tool already enjoys high pre-training coverage (such as GitHub CLI vs GitHub MCP), CLI is preferred to avoid configuration complexity and unreliable tool execution.
