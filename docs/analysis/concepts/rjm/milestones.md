---
package: rjm
name: Milestones
slug: milestones
kind: artifact
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/resources/plan-format.md, sha256: af8bd8d515dc5c98ef1ba14a6853d58f4f1f3ba81dc923de3689c1eaa296fe43}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Milestones

## Definition — verbatim
> "Decomposes specs into milestones with dependencies and risk mitigations." — docs/workflow-commands.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/resources/plan-format.md | 124 | defined here | Major section header establishing the format and required details for milestone increments in plan files. |
| docs/workflow-commands.md | 69 | defined here | Description of the /plan command decomposing specifications into milestone increments. |

## Consumes
Specifications, acceptance criteria, architecture decisions, and scope boundaries.

## Produces
Discrete, sequenced milestone increments with targeted file paths, work items, and verification criteria.

## When applied
Applied during plan creation when breaking down an approved specification into implementation increments.

## Sub-concepts
milestone-dependencies, milestone-execution

## Part of
rjm:plan

## Implementation status
defects: doc-drift

## Design notes
Milestones represent the discrete deliverable increments into which specifications are partitioned during planning. By structuring implementation as a sequence of scoped milestones, the lifecycle enables incremental verification, parallelization analysis, and bounded progress tracking across complex tasks.
