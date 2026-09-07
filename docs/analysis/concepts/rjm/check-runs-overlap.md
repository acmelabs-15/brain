---
package: rjm
name: check_runs_overlap
slug: check-runs-overlap
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_runs_overlap

## Definition — verbatim
(used, not defined)

> "def check_runs_overlap(run1: WorkflowRun, run2: WorkflowRun) -> bool:" — .github/scripts/measure_workflow_coalescing.py:317

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/measure_workflow_coalescing.py | 317 | defined here | Compares execution intervals of two workflow runs to determine temporal overlap. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
A time-interval comparison function evaluating whether workflow executions overlapped rather than an independent lifecycle concept.
