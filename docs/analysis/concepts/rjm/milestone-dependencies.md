---
package: rjm
name: Milestone Dependencies
slug: milestone-dependencies
kind: artifact
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/resources/plan-format.md, sha256: af8bd8d515dc5c98ef1ba14a6853d58f4f1f3ba81dc923de3689c1eaa296fe43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Milestone Dependencies

## Definition — verbatim
> "## Milestone Dependencies (if applicable)" — .claude/skills/planner/resources/plan-format.md:185

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/resources/plan-format.md | 185 | defined here | Section heading and format specification defining dependency graphs and tables between milestones. |

## Consumes
Milestones, architectural layering constraints, and prerequisite artifacts.

## Produces
ASCII dependency graph and tabular dependency mappings defining blocking relationships across milestones.

## When applied
Applied when planning multi-milestone initiatives where certain milestones require prior milestone outputs before execution can begin.

## Sub-concepts
none

## Part of
milestones

## Implementation status
clean

## Design notes
Milestone Dependencies defines the explicit prerequisite graph between milestones in an implementation plan. Documenting these relationships allows the plan executor to identify parallelizable milestones, establish synchronization points, and prevent premature execution of dependent code increments.
