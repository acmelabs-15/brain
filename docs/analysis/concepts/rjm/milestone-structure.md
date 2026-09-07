---
package: rjm
name: Milestone Structure
slug: milestone-structure
kind: pattern
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

# Milestone Structure

## Definition — verbatim
> "Each milestone delivers a vertical slice with measurable exit criteria. Not a phase. Not a sprint. A shippable increment." — .claude/agents/milestone-planner.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/milestone-planner.md | 42 | defined here | Section heading defining the structural pattern of milestones as vertical slices with measurable exit criteria. |
| templates/agents/milestone-planner.shared.md | 45 | defined here | Shared template section defining vertical-slice milestone formatting and fields. |

## Consumes
Epics, high-level architecture designs, roadmap requirements, and dependency constraints.

## Produces
Sequenced, implementation-ready milestone packages with explicit outcomes, exit criteria, scope boundaries, dependencies, and rollback strategies.

## When applied
Applied when decomposing roadmap epics into discrete, deliverable increments during the planning phase.

## Sub-concepts
vertical-slice, exit-criteria, dependency-graph, risk-documentation, sizing-and-sequencing

## Part of
milestone-planner

## Implementation status
clean

## Design notes
Milestone Structure provides the standard architectural skeleton for decomposing large roadmap initiatives in rjm. By forcing every milestone to be an independently shippable vertical slice rather than an isolated development phase (e.g. "design phase" or "test phase"), it guarantees that progress is continually demonstrable and verifiable, preventing late integration failures.
