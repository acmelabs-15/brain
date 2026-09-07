---
package: rjm
name: GitHub Issues format
slug: github-issues-format
kind: template
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

# GitHub Issues format

## Definition — verbatim
> "GitHub Issues format that works: `# CONTEXT # TODO # SUCCESS CRITERIA`" — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 74 | defined here | Defines the 3-section issue template structure (`# CONTEXT # TODO # SUCCESS CRITERIA`) for agent tasks. |

## Consumes
Task context, objectives, and acceptance criteria.

## Produces
Structured GitHub Issue markdown formatted with `# CONTEXT`, `# TODO`, and `# SUCCESS CRITERIA`.

## When applied
Applied when formatting task tickets or GitHub issues for consumption by coding agents.

## Sub-concepts
none

## Part of
task-management

## Implementation status
defects: missing-path

## Design notes
A lean issue template structure optimized for LLM comprehension, providing explicit boundaries through tripartite sections: background context, discrete TODO items, and verifiable success criteria.
