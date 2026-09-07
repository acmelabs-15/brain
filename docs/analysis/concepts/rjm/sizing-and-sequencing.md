---
package: rjm
name: Sizing and Sequencing
slug: sizing-and-sequencing
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

# Sizing and Sequencing

## Definition — verbatim
> "Target M-size milestones. Split L and XL before accepting." — .claude/agents/milestone-planner.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/milestone-planner.md | 108 | defined here | Guidance table establishing ideal duration (S/M/L/XL) and split criteria for milestone packages. |
| templates/agents/milestone-planner.shared.md | 111 | defined here | Shared template section defining milestone sizing and sequencing guidelines. |

## Consumes
Estimated work scope, dependency weights, and complexity tiers.

## Produces
Right-sized milestone packages (primarily targeting 3-10 person-day M-size) ordered by risk and dependency prerequisites.

## When applied
Applied when sizing milestone durations and determining the sequence of execution.

## Sub-concepts
none

## Part of
milestone-planner

## Implementation status
clean

## Design notes
Sizing and Sequencing governs the cadence and granularity of work decomposition in rjm. By establishing target durations (aiming for M size: 3-10 days) and mandating that the riskiest, most prerequisite-heavy slices ship first, it minimizes drift and surfaces critical unknowns early in the project lifecycle.
