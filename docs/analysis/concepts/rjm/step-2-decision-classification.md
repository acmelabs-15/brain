---
package: rjm
name: step_2_decision_classification
slug: step-2-decision-classification
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# step_2_decision_classification

## Definition — verbatim
> "WRITE this table before proceeding (forces explicit backing):" — .claude/skills/planner/scripts/planner.py:227

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 226 | defined here | Classification table categorizing decisions into backing tiers and enforcing immediate resolution of assumptions. |

## Consumes
Architectural choices and implementation approaches proposed for the plan.

## Produces
Decision classification table mapping choices to backing tiers (`user-specified`, `doc-derived`, `default-derived`, `assumption`) with source citations.

## When applied
Mandatory table written in Step 2 of planning before proceeding to Step 3.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A classification mechanism enforcing explicit evidential backing for all architectural choices, mandating that any unbacked assumption be immediately resolved with the user before planning continues.
