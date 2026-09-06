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
verified: 2026-09-05 quote-check+coverage
---

# scripts/workflow/coordinator.py

## Purpose — required, verbatim
> "Coordination strategies for multi-agent workflow execution." — scripts/workflow/coordinator.py:1

## Design intent — required
Implements multi-agent pipeline coordination topologies across three distinct strategies: `Centralized` (strict sequential execution in definition order), `Hierarchical` (a coordinator step manages subordinate workers, deferring coordinator execution until all subordinates finish while allowing subordinates to execute in parallel), and `Mesh` (peer-to-peer dependency graphs ordered via topological sort to maximize concurrency). Provides utility functions to dynamically identify runnable steps (`find_ready_steps`), aggregate subordinate outputs with markdown delimiters (`aggregate_subordinate_outputs`), and generate multi-phase execution schedules (`build_execution_plan`).

## Phase — required
rjm:build

## Inputs — required
- `WorkflowDefinition` objects defining step graphs and `CoordinationMode` (scripts/workflow/coordinator.py:21-24).
- Runtime state sets: `completed: set[str]`, `running: set[str]`, and `step_outputs: dict[str, str]` (scripts/workflow/coordinator.py:176-177, 203).

## Outputs — required
- Ordered lists of steps `list[WorkflowStep]` sorted by strategy constraints or topological dependencies (scripts/workflow/coordinator.py:36, 61, 86, 131).
- Ready-to-run step lists from `find_ready_steps` (scripts/workflow/coordinator.py:185).
- Combined subordinate outputs formatted with markdown headers via `aggregate_subordinate_outputs` (scripts/workflow/coordinator.py:204, 215).
- Parallel execution phase groupings `list[list[str]]` via `build_execution_plan` (scripts/workflow/coordinator.py:220).

## Invokes — required
- script schema — scripts/workflow/coordinator.py:20

## Invoked by — required
- script coordinator — scripts/workflow/__init__.py:6

## Concepts named — required, verbatim
- `Centralized` — scripts/workflow/coordinator.py:4 — defined here
- `Hierarchical` — scripts/workflow/coordinator.py:5 — defined here
- `Mesh` — scripts/workflow/coordinator.py:6 — defined here
- `ADR-035` — scripts/workflow/coordinator.py:8 — used here
- `CoordinationStrategy` — scripts/workflow/coordinator.py:29 — defined here
- `CentralizedStrategy` — scripts/workflow/coordinator.py:49 — defined here
- `HierarchicalStrategy` — scripts/workflow/coordinator.py:73 — defined here
- `MeshStrategy` — scripts/workflow/coordinator.py:120 — defined here
- `get_strategy` — scripts/workflow/coordinator.py:164 — defined here
- `find_ready_steps` — scripts/workflow/coordinator.py:174 — defined here
- `aggregate_subordinate_outputs` — scripts/workflow/coordinator.py:201 — defined here
- `build_execution_plan` — scripts/workflow/coordinator.py:218 — defined here

## Structure
- `CoordinationStrategy` — scripts/workflow/coordinator.py:29
- `CentralizedStrategy` — scripts/workflow/coordinator.py:49
- `HierarchicalStrategy` — scripts/workflow/coordinator.py:73
- `MeshStrategy` — scripts/workflow/coordinator.py:120
- `get_strategy` — scripts/workflow/coordinator.py:164
- `find_ready_steps` — scripts/workflow/coordinator.py:174
- `aggregate_subordinate_outputs` — scripts/workflow/coordinator.py:201
- `build_execution_plan` — scripts/workflow/coordinator.py:218

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/workflow/coordinator.py`, language: Python 3, lines: 259
- documented invocation:
  - "from scripts.workflow.coordinator import (" — scripts/workflow/__init__.py:6
- **executed:** yes
- actual command run: `uv run python scripts/workflow/coordinator.py`, abridged stdout: ``, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - Success" — scripts/workflow/coordinator.py:9
    - "1 - Logic error (coordination failure)" — scripts/workflow/coordinator.py:10
    - "2 - Config error (invalid mode configuration)" — scripts/workflow/coordinator.py:11
  - actual exit paths: none (module contains abstract base classes and strategy implementations; documented exit codes reflect subsystem conventions but no CLI entry point or sys.exit calls exist)
- for validators/gates: not a standalone gate; workflow coordination library
- does output match documentation: yes

## Defects — required
- exit-code-mismatch — scripts/workflow/coordinator.py:8 — docstring documents exit codes 0, 1, 2 per ADR-035, but the file implements no CLI entry point or sys.exit calls.

## Observations
`MeshStrategy.order_steps` implements Kahn's algorithm with an in-degree map and double-ended queue (`collections.deque`) to detect dependencies and order peer agents.

## Context cost
7750 bytes (~1940 tokens). Imports `scripts/workflow/schema.py` (6629 bytes), total reachable size ~14.4KB (~3.6k tokens).
