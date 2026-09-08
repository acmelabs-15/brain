---
package: rjm
name: StepExecutor
slug: stepexecutor
kind: pattern
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

# StepExecutor

## Definition — verbatim
(used, not defined)

> "StepExecutor = Callable[[WorkflowStep, str, int], str]" — scripts/workflow/parallel.py:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/parallel.py | 140 | defined here | Type alias defining the callable signature for executing individual workflow steps within a thread pool. |

## Consumes
`WorkflowStep`, step input string, and iteration count.

## Produces
Step execution output string.

## When applied
Passed into `ParallelStepExecutor` constructor to supply the single-step execution mechanism for worker threads.

## Sub-concepts
workflowstep

## Part of
parallelstepexecutor

## Implementation status
defects: doc-drift

## Design notes
`StepExecutor` defines the functional signature `(WorkflowStep, str, int) -> str` required by `ParallelStepExecutor` to dispatch steps to worker threads in concurrent batches.
