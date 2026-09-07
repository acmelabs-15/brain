---
package: rjm
name: Micro-decisions
slug: micro-decisions
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

# Micro-decisions

## Definition — verbatim
> "Micro-decisions (TW sources ALL code comments from Decision Log):" — .claude/skills/planner/scripts/planner.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 46 | defined here | Detailed low-level implementation choices documented in the Decision Log to source code comments. |

## Consumes
Low-level engineering choices regarding time sources, concurrency models, error types, data structures, and numeric thresholds.

## Produces
Documented rationale entries in the plan's Decision Log that feed inline code comments during review and execution.

## When applied
Applied during Step 2 and final verification of the planning phase for non-obvious implementation decisions.

## Sub-concepts
none

## Part of
planning_context_verification, planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
The practice of explicitly capturing fine-grained technical choices—such as monotonic clocks, mutexes, error types, and magic numbers—in the plan's Decision Log so that developers and reviewers understand the underlying reasoning.
