---
package: rjm
name: Strategic/Planning
slug: strategic-planning
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Strategic/Planning

## Definition — verbatim
> "### Strategic/Planning" — docs/task-classification-guide.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/task-classification-guide.md | 65 | defined here | Task type category for high-level architecture decisions, technology evaluations, and roadmap planning, routing through roadmap, architect, milestone-planner, and critic agents. |

## Consumes
Strategic objectives, technology choices, architectural trade-offs, and epic or milestone roadmaps.

## Produces
Architectural Decision Records (ADRs), phased roadmap milestones, and peer-reviewed technical strategies.

## When applied
When work focuses on long-term architecture decisions, major technology choices, or epic and milestone planning.

## Sub-concepts
none

## Part of
task-type

## Implementation status
clean

## Design notes
A high-level governance task category in rjm coordinating roadmap, architectural, planning, and critic agents to build consensus on long-term system designs and milestone decompositions before code implementation begins.
