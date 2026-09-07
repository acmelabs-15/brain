---
package: rjm
name: 6-Step Structured Prompt Design
slug: 6-step-structured-prompt-design
kind: pattern
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

# 6-Step Structured Prompt Design

## Definition — verbatim
> "## 6-Step Structured Prompt Design" — .claude/skills/analyze/references/agent-architecture-patterns.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 15 | defined here | Defines the 6-step prompt construction pattern for specialized agent roles. |

## Consumes
Agent operational mandate, domain constraints, and error boundaries.

## Produces
Standardized agent prompt structure with six discrete behavioral sections.

## When applied
When creating or auditing system prompts and persona definitions for autonomous agents.

## Sub-concepts
role-identity, decision-logic, escalation-paths

## Part of
agent-architecture-patterns

## Implementation status
defects: missing-path

## Design notes
A standardized architectural blueprint for constructing robust agent system prompts. The six steps (Core Mission, Role Identity, Decision Logic, Constraints, Output Format, and Escalation Paths) systematically eliminate ambiguous instructions, provide concrete action mappings for common operational triggers, and mandate explicit escalation mechanisms when encountering uncertainty.
