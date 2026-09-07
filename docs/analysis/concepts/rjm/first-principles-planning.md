---
package: rjm
name: First-Principles Planning
slug: first-principles-planning
kind: technique
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

# First-Principles Planning

## Definition — verbatim
> "## First-Principles Planning" — .claude/agents/milestone-planner.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/milestone-planner.md | 30 | defined here | Section heading introducing the five foundational questions for milestone sequencing. |
| templates/agents/milestone-planner.shared.md | 33 | defined here | Section heading outlining first-principles milestone planning across shared templates. |

## Consumes
Epic scope, outcomes, unknowns, prerequisites, and rollback scenarios.

## Produces
Milestone sequencing prioritized by risk and prerequisite dependencies, front-loading critical unknowns.

## When applied
Applied prior to writing milestone definitions to establish optimal implementation ordering.

## Sub-concepts
none

## Part of
milestone-planner-agent

## Implementation status
clean

## Design notes
A foundational planning technique requiring agents to answer five questions (smallest viable outcome, prerequisites, downstream unlocks, riskiest unknown, and rollback plan) before authoring milestones. It forces high-risk unknowns and prerequisite-heavy work to ship first, preventing late-stage architectural failures.
