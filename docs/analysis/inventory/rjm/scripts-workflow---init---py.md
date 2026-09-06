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
verified: 2026-09-05 quote-check+coverage
---

# scripts/workflow/__init__.py

## Purpose — required, verbatim
> "Workflow execution and chaining for agent pipelines." — scripts/workflow/__init__.py:1

## Design intent — required
Defines the primary public API entry point for the `scripts/workflow` package. It unifies and re-exports core classes, interfaces, and helper functions supporting multi-agent workflow pipelines—including sequential output chaining, coordination strategies (`Centralized`, `Hierarchical`, `Mesh`), parallel execution branches, and iterative refinement loops.

## Phase — required
rjm:build

## Inputs — required
none

## Outputs — required
- Public package symbols exposed via `__all__` list (scripts/workflow/__init__.py:36-60).

## Invokes — required
- script coordinator — scripts/workflow/__init__.py:6
- script WorkflowExecutor — scripts/workflow/__init__.py:16
- script parallel — scripts/workflow/__init__.py:17
- script schema — scripts/workflow/__init__.py:25

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `CentralizedStrategy` — scripts/workflow/__init__.py:7 — used here
- `CoordinationStrategy` — scripts/workflow/__init__.py:8 — used here
- `HierarchicalStrategy` — scripts/workflow/__init__.py:9 — used here
- `MeshStrategy` — scripts/workflow/__init__.py:10 — used here
- `WorkflowExecutor` — scripts/workflow/__init__.py:16 — used here
- `AggregationStrategy` — scripts/workflow/__init__.py:18 — used here
- `ParallelGroup` — scripts/workflow/__init__.py:19 — used here
- `ParallelStepExecutor` — scripts/workflow/__init__.py:20 — used here
- `CoordinationMode` — scripts/workflow/__init__.py:26 — used here
- `StepKind` — scripts/workflow/__init__.py:27 — used here
- `StepRef` — scripts/workflow/__init__.py:28 — used here
- `StepResult` — scripts/workflow/__init__.py:29 — used here
- `WorkflowDefinition` — scripts/workflow/__init__.py:30 — used here
- `WorkflowResult` — scripts/workflow/__init__.py:31 — used here
- `WorkflowStatus` — scripts/workflow/__init__.py:32 — used here
- `WorkflowStep` — scripts/workflow/__init__.py:33 — used here

## Structure
- Coordinator imports: lines 6-15
- Executor imports: line 16
- Parallel imports: lines 17-24
- Schema imports: lines 25-34
- `__all__` export list: lines 36-60

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/workflow/__init__.py`, language: Python 3, lines: 61
- documented invocation:
  - "from scripts.workflow.coordinator import (" — scripts/workflow/__init__.py:6
- **executed:** yes
- actual command run: `uv run python scripts/workflow/__init__.py`, abridged stdout: ``, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented: none (package `__init__.py` file without standalone CLI or exit codes)
  - actual exit paths: none (module imports submodules and returns 0 when imported or run)
- for validators/gates: not a validator
- does output match documentation: yes

## Defects — required
- orphan — scripts/workflow/__init__.py:1 — not imported by any in-scope lifecycle file (used by test suites and packaged in pyproject.toml)

## Observations
Explicitly exports 21 symbols via `__all__`, providing clean encapsulation over the internal module layout of the `scripts/workflow` package.

## Context cost
1377 bytes (~345 tokens). Loads `coordinator.py` (7750 bytes), `executor.py` (6594 bytes), `parallel.py` (11848 bytes), and `schema.py` (6629 bytes), totaling ~29KB (~7.2k tokens).
