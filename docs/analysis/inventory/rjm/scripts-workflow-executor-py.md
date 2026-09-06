---
package: rjm
path: scripts/workflow/executor.py
type: script
bytes: 6594
unit: inv-rjm-310
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/workflow/executor.py, sha256: 94c569d87858f3652c216790776eeff033739470b100bdb581c07d3d73df09e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/workflow/executor.py

## Purpose — required, verbatim
> "Workflow executor for agent pipeline chaining." — scripts/workflow/executor.py:1

## Design intent — required
Executes declarative agent pipelines with sequential chaining, refinement iterations, retry loops, and conditional step execution. Implements `StepRunner` invocation protocol, tracks per-step outcomes, passes upstream outputs to dependent steps (or previous iteration outputs during refinement loops), and skips downstream steps upon failure or false conditions.

## Phase — required
rjm:orchestrator

## Inputs — required
- `StepRunner` callable implementing `(step, combined_input, iteration) -> str`
- `WorkflowDefinition` dataclass instances specifying steps, iterations, conditions, and retries

## Outputs — required
- `WorkflowResult` containing overall status (`COMPLETED` or `FAILED`), completed iteration count, and list of `StepResult` objects

## Invokes — required
- script schema — scripts/workflow/executor.py:18

## Invoked by — required
- script executor — scripts/workflow/__init__.py:16

## Concepts named — required, verbatim
- `StepResult` — scripts/workflow/executor.py:19 — used here
- `WorkflowDefinition` — scripts/workflow/executor.py:20 — used here
- `WorkflowResult` — scripts/workflow/executor.py:21 — used here
- `WorkflowStatus` — scripts/workflow/executor.py:22 — used here
- `WorkflowStep` — scripts/workflow/executor.py:23 — used here
- `StepRunner` — scripts/workflow/executor.py:29 — defined here
- `WorkflowExecutor` — scripts/workflow/executor.py:45 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/workflow/executor.py`, language: Python, lines: 205
- documented invocation: none
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `uv run python3 scripts/workflow/executor.py`
  Stdout: (empty)
  **Actual exit code:** 0
- documented exit codes vs. actual exit paths in code:
  Documented:
  > "0 - Success" — scripts/workflow/executor.py:8
  > "1 - Logic error (step execution failed)" — scripts/workflow/executor.py:9
  > "2 - Config error (invalid workflow)" — scripts/workflow/executor.py:10
  Actual exit paths in code:
  None in code. The file contains no CLI entry point and no `sys.exit` calls; executing directly defines classes and exits 0.
- for validators/gates: can it exit non-zero? no (library module). does it fail on the source repo's own default branch? no.
- does the output match what the documentation claims?
  No; docstring claims ADR-035 exit codes 0, 1, and 2, but the module does not implement CLI execution.

## Defects — required
- doc-drift · scripts/workflow/executor.py:7 · Module docstring claims ADR-035 exit codes 0, 1, and 2, but the file implements no CLI entry point and no exit handlers.

## Observations
Supports refinement loops where the first step of iteration N receives the output from the final step of iteration N-1. Supports conditional expressions with `has:<step>` and `empty:<step>` prefixes.

## Context cost
6594 bytes. Imports `scripts/workflow/schema.py` (6629 bytes), totaling ~13223 bytes (~3306 tokens).
