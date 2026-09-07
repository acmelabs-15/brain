---
package: rjm
name: Dependency Graph
slug: dependency-graph
kind: artifact
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/milestone-planner.md, sha256: 3b318f4cec16f9f23b32fa66f9fe490789eaece08c39e1e5b9a6ae1c37af762d}
  - {path: templates/agents/milestone-planner.shared.md, sha256: d4d22f60c3fc2494c452046c3fb9f31a019874f4a2057ea5e5217dee5108f028}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Dependency Graph

## Definition — verbatim
> "After defining milestones, draw the dependency graph:" — .claude/agents/milestone-planner.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/milestone-planner.md | 75 | defined here | Section specifying the ASCII dependency graph requirement to identify parallel tracks and single-path bottlenecks. |
| templates/agents/milestone-planner.shared.md | 78 | defined here | Shared template section instructing the agent to construct an ASCII dependency diagram after defining milestones. |

## Consumes
Milestone prerequisite definitions and execution sequence constraints.

## Produces
Visual ASCII directed acyclic graph illustrating milestone dependencies, parallelization opportunities, and critical paths.

## When applied
Constructed immediately after milestones are defined during epic breakdown.

## Sub-concepts
none

## Part of
milestone-planner

## Implementation status
clean

## Design notes
The Dependency Graph visualizes prerequisite relationships across milestones within a plan. In rjm, it highlights parallel execution opportunities for multi-agent workflows and flags single-path bottlenecks early, preventing scheduling deadlocks and uncoordinated concurrent edits.
