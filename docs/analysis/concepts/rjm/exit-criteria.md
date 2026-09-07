---
package: rjm
name: Exit Criteria
slug: exit-criteria
kind: gate
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

# Exit Criteria

## Definition — verbatim
> "**Exit Criteria**:" — .claude/agents/milestone-planner.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/milestone-planner.md | 51 | defined here | Check-list section in milestone definitions specifying observable, testable conditions for completion. |

## Consumes
Milestone scope specifications, quality standards, and metric thresholds.

## Produces
Binary pass/fail checklist verifying the completed state of a milestone before proceeding to the next.

## When applied
Evaluated at the conclusion of milestone execution to decide whether the milestone is shippable and exit is permitted.

## Sub-concepts
exit-criteria-rules

## Part of
milestone-structure

## Implementation status
clean

## Design notes
Exit Criteria serve as the decisive completion gate for every milestone planned by milestone-planner. Rather than relying on subjective developer completion claims, exit criteria mandate binary, testable conditions observable by third parties, ensuring clear milestones without ambiguity.
