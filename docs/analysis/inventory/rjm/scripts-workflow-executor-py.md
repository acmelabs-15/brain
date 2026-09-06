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
verified: 2026-09-05 quote-check+coverage
---

# scripts/workflow/executor.py

## Purpose — required, verbatim
> "Workflow executor for agent pipeline chaining." — scripts/workflow/executor.py:1

## Design intent — required
Executes multi-agent pipeline workflows defined by `WorkflowDefinition` models. It walks execution steps in sequence or dependency order, passes upstream outputs into downstream step inputs, evaluates conditional triggers (`has:<step>`, `empty:<step>`), handles step-level retry loops up to `max_retries`, and manages multi-round refinement loops where iteration N receives context from iteration N-1. Step execution is decoupled from scheduling through the `StepRunner` protocol.

## Phase — required
rjm:build

## Inputs — required
- `WorkflowDefinition` instance specifying steps, dependency edges, conditions, retries, and `max_iterations` (scripts/workflow/executor.py:20, 64).
- `StepRunner` callable protocol implementation executing individual agent steps (scripts/workflow/executor.py:29-43).
- Outputs produced by prior steps or iterations mapped in `step_outputs: dict[str, str]` (scripts/workflow/executor.py:84, 133).

## Outputs — required
- `WorkflowResult` containing overall `WorkflowStatus` (`COMPLETED`, `FAILED`, `RUNNING`) and individual `StepResult` instances for each step and iteration (scripts/workflow/executor.py:21, 64, 73, 80, 126).
- Dictionary of step outputs `step_outputs` passed between workflow nodes (scripts/workflow/executor.py:84, 118).

## Invokes — required
- script schema — scripts/workflow/executor.py:18

## Invoked by — required
- script WorkflowExecutor — scripts/workflow/__init__.py:16

## Concepts named — required, verbatim
- `ADR-035` — scripts/workflow/executor.py:7 — used here
- `StepRunner` — scripts/workflow/executor.py:29 — defined here
- `WorkflowExecutor` — scripts/workflow/executor.py:45 — defined here
- `Sequential chaining` — scripts/workflow/executor.py:54 — defined here
- `Parallel merge` — scripts/workflow/executor.py:55 — defined here
- `Refinement loops` — scripts/workflow/executor.py:57 — defined here
- `Conditional steps` — scripts/workflow/executor.py:58 — defined here
- `WorkflowDefinition` — scripts/workflow/executor.py:20 — used here
- `WorkflowResult` — scripts/workflow/executor.py:21 — used here
- `WorkflowStatus` — scripts/workflow/executor.py:22 — used here
- `WorkflowStep` — scripts/workflow/executor.py:23 — used here
- `StepResult` — scripts/workflow/executor.py:19 — used here

## Structure
- `StepRunner` — scripts/workflow/executor.py:29
- `WorkflowExecutor` — scripts/workflow/executor.py:45
- `execute` — scripts/workflow/executor.py:64
- `_gather_inputs` — scripts/workflow/executor.py:129
- `_run_step` — scripts/workflow/executor.py:157
- `_evaluate_condition` — scripts/workflow/executor.py:191

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/workflow/executor.py`, language: Python 3, lines: 205
- documented invocation:
  - "from scripts.workflow.executor import WorkflowExecutor" — scripts/workflow/__init__.py:16
- **executed:** yes
- actual command run: `uv run python scripts/workflow/executor.py`, abridged stdout: ``, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - Success" — scripts/workflow/executor.py:8
    - "1 - Logic error (step execution failed)" — scripts/workflow/executor.py:9
    - "2 - Config error (invalid workflow)" — scripts/workflow/executor.py:10
  - actual exit paths: none (module implements classes and methods returning `WorkflowResult` objects; documented exit codes reflect ADR-035 subsystem design but no CLI `sys.exit` runner exists)
- for validators/gates: not a validator
- does output match documentation: yes

## Defects — required
- exit-code-mismatch — scripts/workflow/executor.py:7 — docstring documents exit codes 0, 1, 2 per ADR-035, but the module implements no CLI entry point or sys.exit calls (returns WorkflowResult objects).

## Observations
Implements conditional execution expressions (`has:<step>`, `empty:<step>`) without external expression evaluators. Refinement loops cycle outputs between the last step of iteration N-1 and the first step of iteration N.

## Context cost
6594 bytes (~1650 tokens). Imports `scripts/workflow/schema.py` (6629 bytes), total reachable size ~13.2KB (~3.3k tokens).
