---
package: rjm
name: StepRunner
slug: steprunner
kind: pattern
package_phase: rjm:orchestrator
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/executor.py, sha256: 94c569d87858f3652c216790776eeff033739470b100bdb581c07d3d73df09e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# StepRunner

## Definition — verbatim
> "Interface for executing a single workflow step." — scripts/workflow/executor.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/executor.py | 29 | defined here | Protocol defining callable signature `(step: WorkflowStep, combined_input: str, iteration: int) -> str` for executing workflow steps. |

## Consumes
`WorkflowStep`, combined input string, and iteration count.

## Produces
Step execution output string.

## When applied
Implemented by callers to decouple step execution logic (e.g. LLM or agent dispatch) from the orchestration engine.

## Sub-concepts
workflowstep

## Part of
workflowexecutor

## Implementation status
defects: doc-drift

## Design notes
`StepRunner` is a typing Protocol that specifies the execution interface for workflow steps, abstracting the invocation mechanism (invoking agent prompts, running CLI tools, or evaluating synthetic outputs) so `WorkflowExecutor` remains independent of concrete agent dispatch infrastructure.
