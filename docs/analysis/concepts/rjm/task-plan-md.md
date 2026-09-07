---
package: rjm
name: task_plan.md
slug: task-plan-md
kind: artifact
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
  - {path: .claude/skills/planner/references/agent-architecture-patterns.md, sha256: 9b480fa69cb3f4fe279f29126ca7717015e8d68df135b9d13394d7e63401b0bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# task_plan.md

## Definition — verbatim
> "task_plan.md   -> phases with checkboxes" — .claude/skills/analyze/references/agent-architecture-patterns.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 27 | defined here | Identifies task_plan.md as the phase and checkbox breakdown component in the 3-file pattern. |
| .claude/skills/planner/references/agent-architecture-patterns.md | 18 | defined here | Defines task_plan.md for tracking phases and granular checkboxes during planning. |

## Consumes
Requirements breakdown and phase decomposition.

## Produces
External task plan file containing sequenced milestones and status checkboxes.

## When applied
Created during initial task decomposition and re-read before every execution step.

## Sub-concepts
none

## Part of
3-file-planning-pattern

## Implementation status
defects: missing-path

## Design notes
task_plan.md acts as the primary goal anchor in the 3-file pattern. By maintaining a lean, phase-based checklist on the filesystem, the agent can re-read its goals before every major action to focus model attention while keeping transient execution noise out of the primary planning artifact.
