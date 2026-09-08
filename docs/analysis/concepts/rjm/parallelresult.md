---
package: rjm
name: ParallelResult
slug: parallelresult
kind: artifact
package_phase: rjm:orchestrator
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/parallel.py, sha256: 3fb8b63e69e35f7930303a658d1c962b584f8cfb364cafc2217d7b9996798353}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ParallelResult

## Definition — verbatim
> "Result from parallel step execution." — scripts/workflow/parallel.py:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/parallel.py | 61 | defined here | Dataclass encapsulating aggregated step results, success status, and failed step names from concurrent execution. |

## Consumes
Outcomes from concurrently executed workflow steps in `ParallelStepExecutor`.

## Produces
Aggregated result structure mapping step names to outputs and tracking failures.

## When applied
Created and returned by `execute_parallel` upon completion of a batch of concurrent steps.

## Sub-concepts
stepresult

## Part of
parallelstepexecutor

## Implementation status
defects: doc-drift

## Design notes
`ParallelResult` packages the outcomes of concurrent step executions, recording whether all parallel threads succeeded, listing failed step names, and exposing an `outputs()` mapping to feed downstream aggregation strategies.
