---
package: rjm
path: scripts/workflow/__init__.py
type: script
bytes: 1377
unit: inv-rjm-310
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/workflow/__init__.py, sha256: 316833540d80d438b732ca41c1a41c961c83f488b032c6b200b26ee5279021ab}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/workflow/__init__.py

## Purpose — required, verbatim
> "Workflow execution and chaining for agent pipelines." — scripts/workflow/__init__.py:1

## Design intent — required
Serves as the public package interface for the `scripts.workflow` module, re-exporting core classes, enums, strategies, and functions from `coordinator`, `executor`, `parallel`, and `schema`. It enables external callers to import workflow execution primitives from a single namespace.

## Phase — required
rjm:orchestrator

## Inputs — required
none

## Outputs — required
Exposes symbols in `__all__`: `AggregationStrategy`, `CentralizedStrategy`, `CoordinationMode`, `CoordinationStrategy`, `HierarchicalStrategy`, `MeshStrategy`, `ParallelGroup`, `ParallelStepExecutor`, `StepKind`, `StepRef`, `StepResult`, `WorkflowDefinition`, `WorkflowExecutor`, `WorkflowResult`, `WorkflowStatus`, `WorkflowStep`, `aggregate_subordinate_outputs`, `build_execution_plan`, `can_parallelize`, `find_ready_steps`, `get_strategy`, `identify_parallel_groups`, `mark_parallel_steps`.

## Invokes — required
- script coordinator — scripts/workflow/__init__.py:6
- script executor — scripts/workflow/__init__.py:16
- script parallel — scripts/workflow/__init__.py:17
- script schema — scripts/workflow/__init__.py:25

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `CentralizedStrategy` — scripts/workflow/__init__.py:7 — used here
- `CoordinationStrategy` — scripts/workflow/__init__.py:8 — used here
- `HierarchicalStrategy` — scripts/workflow/__init__.py:9 — used here
- `MeshStrategy` — scripts/workflow/__init__.py:10 — used here
- `aggregate_subordinate_outputs` — scripts/workflow/__init__.py:11 — used here
- `build_execution_plan` — scripts/workflow/__init__.py:12 — used here
- `find_ready_steps` — scripts/workflow/__init__.py:13 — used here
- `get_strategy` — scripts/workflow/__init__.py:14 — used here
- `WorkflowExecutor` — scripts/workflow/__init__.py:16 — used here
- `AggregationStrategy` — scripts/workflow/__init__.py:18 — used here
- `ParallelGroup` — scripts/workflow/__init__.py:19 — used here
- `ParallelStepExecutor` — scripts/workflow/__init__.py:20 — used here
- `can_parallelize` — scripts/workflow/__init__.py:21 — used here
- `identify_parallel_groups` — scripts/workflow/__init__.py:22 — used here
- `mark_parallel_steps` — scripts/workflow/__init__.py:23 — used here
- `CoordinationMode` — scripts/workflow/__init__.py:26 — used here
- `StepKind` — scripts/workflow/__init__.py:27 — used here
- `StepRef` — scripts/workflow/__init__.py:28 — used here
- `StepResult` — scripts/workflow/__init__.py:29 — used here
- `WorkflowDefinition` — scripts/workflow/__init__.py:30 — used here
- `WorkflowResult` — scripts/workflow/__init__.py:31 — used here
- `WorkflowStatus` — scripts/workflow/__init__.py:32 — used here
- `WorkflowStep` — scripts/workflow/__init__.py:33 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/workflow/__init__.py`, language: Python, lines: 61
- documented invocation: none
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `uv run python3 scripts/workflow/__init__.py`
  Stdout: (empty)
  **Actual exit code:** 0
- documented exit codes vs. actual exit paths in code:
  Documented: none
  Actual exit paths: none in code (package initializer)
- for validators/gates: can it exit non-zero? no. does it fail on the source repo's own default branch? no.
- does the output match what the documentation claims? yes (re-exports modules without error).

## Defects — required
- orphan · scripts/workflow/__init__.py:1 · Not invoked by any in-scope lifecycle script or command.

## Observations
Provides a clean public API façade across the `scripts.workflow` subpackage.

## Context cost
1377 bytes. Loads `coordinator.py` (7750 B), `executor.py` (6594 B), `parallel.py` (11848 B), and `schema.py` (6629 B), totaling ~34198 bytes (~8550 tokens).
