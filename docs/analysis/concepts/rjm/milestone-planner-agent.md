---
package: rjm
name: Milestone Planner Agent
slug: milestone-planner-agent
kind: role
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/milestone-planner.md, sha256: 3b318f4cec16f9f23b32fa66f9fe490789eaece08c39e1e5b9a6ae1c37af762d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Milestone Planner Agent

## Definition — verbatim
> "# Milestone Planner Agent" — .claude/agents/milestone-planner.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/milestone-planner.md | 10 | defined here | Heading defining the coordinator agent that translates roadmap epics into shippable milestones. |

## Consumes
Roadmap epics, feature requests, architectural decision records, and product requirements.

## Produces
Sequenced milestones delivering vertical slices, dependency graphs, risk assessments, and acceptance criteria.

## When applied
Invoked when asked to break an epic into milestones or plan a roadmap item.

## Sub-concepts
first-principles-planning

## Part of
none

## Implementation status
clean

## Design notes
A high-rigor planning coordinator agent responsible for breaking roadmap epics into implementation-ready milestones. Distinct from the `task-decomposer` (which atomizes a single milestone into granular tasks), `milestone-planner` sequences end-to-end deliverables as independently shippable vertical slices using first-principles analysis.
