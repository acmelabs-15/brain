---
package: rjm
name: Agent Architecture Patterns
slug: agent-architecture-patterns
kind: reference
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Agent Architecture Patterns

## Definition — verbatim
> "- [Agent Architecture Patterns](references/agent-architecture-patterns.md) - Skill budget rule, structured prompt design, diagnostic signals for agent reliability" — .claude/skills/analyze/SKILL.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 71 | used here | Reference document establishing the skill budget rule, structured prompt design, and diagnostic signals. |

## Consumes
Multi-agent system architecture specifications and agent prompt designs.

## Produces
Architectural constraints for agent reliability, skill context budgets, and structured prompt standards.

## When applied
Consulted when designing, analyzing, or reviewing autonomous agent workflows.

## Sub-concepts
structured-prompt-design

## Part of
analyze

## Implementation status
defects: missing-path, doc-drift

## Design notes
`Agent Architecture Patterns` provides canonical architectural guidelines for constructing reliable agentic workflows in `rjm`, formalizing context budgeting, structured prompt patterns, and observable execution signals.
