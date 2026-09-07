---
package: rjm
name: 3-File Planning Pattern
slug: 3-file-planning-pattern
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
  - {path: .claude/skills/planner/references/agent-architecture-patterns.md, sha256: 9b480fa69cb3f4fe279f29126ca7717015e8d68df135b9d13394d7e63401b0bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# 3-File Planning Pattern

## Definition — verbatim
> "## 3-File Planning Pattern" — .claude/skills/planner/references/agent-architecture-patterns.md:15

## Also called — verbatim
> "## 3-File Planning Pattern (Context Engineering)" — .claude/skills/analyze/references/agent-architecture-patterns.md:24

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 24 | defined here | Defines the 3-file context engineering pattern for structuring agent task context. |
| .claude/skills/planner/references/agent-architecture-patterns.md | 15 | defined here | Defines the 3-file planning trio for managing agent context during complex planning. |
| .claude/skills/planner/SKILL.md | 293 | used here | References the pattern in the planner references table. |

## Consumes
Task objectives, codebase discovery findings, and step-by-step execution plans.

## Produces
Three segregated filesystem artifacts: task_plan.md, findings.md, and progress.md.

## When applied
Initialized at the outset of complex planning tasks and maintained throughout execution.

## Sub-concepts
task-plan-md, findings-md, progress-md

## Part of
agent-architecture-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
The 3-File Planning Pattern divides working agent state across three specialized files: task_plan.md for phase goals and actionable checkboxes, findings.md for exploratory research and discovery notes, and progress.md for execution history and test logs. Decoupling these artifacts prevents context window saturation and ensures that long-running agents retain clear goal focus.
