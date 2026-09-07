---
package: rjm
name: step_2_evaluate_first
slug: step-2-evaluate-first
kind: technique
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

# step_2_evaluate_first

## Definition — verbatim
> "BEFORE deciding, evaluate each approach from step 1:" — .claude/skills/planner/scripts/planner.py:209

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 208 | defined here | Evaluation matrix scoring approaches on success probability, failure modes, and backtrack costs. |

## Consumes
Candidate architectural approaches formulated during Step 1.

## Produces
Comparative evaluation table evaluating P(success), failure modes, and backtrack costs across all options, including stop check evaluation.

## When applied
Enforced at the beginning of Step 2 in the planning workflow before deciding on an approach.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A structured pre-decision evaluation gate in Step 2 that obligates the planner to calculate success probabilities, failure modes, and backtrack costs for each candidate approach, halting execution if all options present high risks.
