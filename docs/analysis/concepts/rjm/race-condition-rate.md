---
package: rjm
name: Race Condition Rate
slug: race-condition-rate
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/workflow-coalescing.md, sha256: 652beeb96b38bcfc8b9103ece1e6a599327303a9ee9778a60dda87ace3b3048d}
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Race Condition Rate

## Definition — verbatim
> "How often the concurrency control fails to prevent parallel runs" — .agents/metrics/workflow-coalescing.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/workflow-coalescing.md | 18 | defined here | Defined in summary table with a target threshold of <10% for CI concurrency failures. |
| .github/scripts/measure_workflow_coalescing.py | 406 | defined here | Script calculating race condition frequency as percentage of overlapping parallel executions over total runs. |

## Consumes
Overlapping workflow execution intervals and concurrent execution timestamps.

## Produces
Percentage of workflow runs that executed in parallel due to concurrency group bypasses or race conditions.

## When applied
Computed during workflow coalescing audits to identify race-prone workflows.

## Sub-concepts
none

## Part of
workflow-run-coalescing-metrics

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
Race Condition Rate quantifies how frequently workflow concurrency controls fail to cancel superseded jobs before parallel execution starts, flagging CI configuration flaws that permit redundant work.
