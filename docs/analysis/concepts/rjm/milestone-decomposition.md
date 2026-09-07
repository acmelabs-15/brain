---
package: rjm
name: milestone decomposition
slug: milestone-decomposition
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# milestone decomposition

## Definition — verbatim
(used, not defined)

> "| `references/agent-architecture-patterns.md` | Skill budget rule, 3-file planning pattern, milestone decomposition for agent systems |" — .claude/skills/planner/SKILL.md:293

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/SKILL.md | 293 | used here | Cited as a core agent architectural pattern for partitioning complex implementations into manageable units. |

## Consumes
Overall task scope, system design constraints, and file dependency mappings.

## Produces
An ordered sequence of independently testable, deployable milestones scoped to 1-3 files each.

## When applied
Applied during the planning workflow (step 2 and step 3) when structuring implementation plans.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift

## Design notes
An architectural decomposition technique that breaks complex multi-step tasks into small, independently testable, 1-3 file milestones with explicit dependency maps to prevent context bloat and failure cascades during execution.
