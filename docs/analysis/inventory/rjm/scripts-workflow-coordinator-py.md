---
package: rjm
path: scripts/workflow/coordinator.py
type: script
bytes: 7750
unit: inv-rjm-310
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/workflow/coordinator.py, sha256: 96533bba2a008a5242f1442497a90e3887483432607e6ccf99ccb766348e6161}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/workflow/coordinator.py

## Purpose — required, verbatim
> "Coordination strategies for multi-agent workflow execution." — scripts/workflow/coordinator.py:1

## Design intent — required
Implements multi-agent pipeline coordination topologies (`Centralized`, `Hierarchical`, `Mesh`) via strategy pattern classes inheriting from `CoordinationStrategy`. It calculates execution orders, determines readiness for parallel step dispatch (`find_ready_steps`), aggregates subordinate outputs for group coordinators (`aggregate_subordinate_outputs`), and builds multi-phase execution schedules (`build_execution_plan`).

## Phase — required
rjm:orchestrator

## Inputs — required
- `WorkflowDefinition` dataclass instances containing `WorkflowStep` items and `coordination_mode`
- Sets of completed and running step names (`completed: set[str]`, `running: set[str]`)
- Subordinate step output dictionary (`step_outputs: dict[str, str]`)

## Outputs — required
- Ordered step lists from `CoordinationStrategy.order_steps`
- Ready step lists from `find_ready_steps`
- Merged subordinate output string with section headers from `aggregate_subordinate_outputs`
- Multi-phase execution schedule (`list[list[str]]`) from `build_execution_plan`

## Invokes — required
- script schema — scripts/workflow/coordinator.py:20

## Invoked by — required
- script coordinator — scripts/workflow/__init__.py:6

## Concepts named — required, verbatim
- `CoordinationMode` — scripts/workflow/coordinator.py:21 — used here
- `WorkflowDefinition` — scripts/workflow/coordinator.py:22 — used here
- `WorkflowStep` — scripts/workflow/coordinator.py:23 — used here
- `CoordinationStrategy` — scripts/workflow/coordinator.py:29 — defined here
- `CentralizedStrategy` — scripts/workflow/coordinator.py:49 — defined here
- `HierarchicalStrategy` — scripts/workflow/coordinator.py:73 — defined here
- `MeshStrategy` — scripts/workflow/coordinator.py:120 — defined here
- `get_strategy` — scripts/workflow/coordinator.py:164 — defined here
- `find_ready_steps` — scripts/workflow/coordinator.py:174 — defined here
- `aggregate_subordinate_outputs` — scripts/workflow/coordinator.py:201 — defined here
- `build_execution_plan` — scripts/workflow/coordinator.py:218 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/workflow/coordinator.py`, language: Python, lines: 259
- documented invocation: none
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `uv run python3 scripts/workflow/coordinator.py`
  Stdout: (empty)
  **Actual exit code:** 0
- documented exit codes vs. actual exit paths in code:
  Documented:
  > "0 - Success" — scripts/workflow/coordinator.py:9
  > "1 - Logic error (coordination failure)" — scripts/workflow/coordinator.py:10
  > "2 - Config error (invalid mode configuration)" — scripts/workflow/coordinator.py:11
  Actual exit paths in code:
  None in code. The file contains no `sys.exit` calls and no CLI `__main__` entry point. Direct execution runs class and function declarations and exits 0.
- for validators/gates: can it exit non-zero? no (library module). does it fail on the source repo's own default branch? no.
- does the output match what the documentation claims?
  No; the docstring documents ADR-035 exit codes 0, 1, and 2, but the file provides only class and function definitions without a CLI runner.

## Defects — required
- doc-drift · scripts/workflow/coordinator.py:8 · Module docstring documents ADR-035 exit codes 0, 1, and 2, but the script implements no CLI entry point and no exit handlers.

## Observations
`HierarchicalStrategy` recursively traverses subordinates and dependencies before scheduling coordinators, ensuring child outputs are fully populated before the coordinator runs. `MeshStrategy` performs Kahn's topological sort on step dependencies to maximize concurrency.

## Context cost
7750 bytes. Imports `scripts/workflow/schema.py` (6629 bytes), totaling ~14379 bytes (~3595 tokens).
