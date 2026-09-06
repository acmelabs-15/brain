---
package: rjm
path: scripts/workflow/parallel.py
type: script
bytes: 11848
unit: inv-rjm-311
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/workflow/parallel.py, sha256: 3fb8b63e69e35f7930303a658d1c962b584f8cfb364cafc2217d7b9996798353}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/workflow/parallel.py

## Purpose — required, verbatim
> "Parallel execution support for agent workflow pipelines." — scripts/workflow/parallel.py:1

## Design intent — required
Provides multi-agent concurrency primitives, dependency-based topological grouping, and output aggregation strategies implementing ADR-009 ("parallel-safe multi-agent design patterns") and Issue #168 batch spawning. It calculates dependency graph execution levels to identify which steps can execute concurrently, runs independent steps concurrently using Python `ThreadPoolExecutor`, catches per-step failures without aborting non-dependent sibling steps, and resolves concurrent outputs via `MERGE`, `VOTE`, or `ESCALATE` (routing conflicts to `high-level-advisor`).

## Phase — required
rjm:orchestrator

## Inputs — required
- `WorkflowDefinition` instances containing `WorkflowStep` lists with dependency declarations (`inputs_from`) and step priorities (`priority`).
- Step execution callables (`runner: StepExecutor`).
- Step input strings mapping (`inputs: dict[str, str]`).
- Aggregation strategy specifications (`AggregationStrategy`: `MERGE`, `VOTE`, `ESCALATE`).

## Outputs — required
- `list[ParallelGroup]` from `identify_parallel_groups`
- `ParallelResult` containing aggregated `StepResult` objects, success flags, and failed step names
- Combined output string from `aggregate_outputs`
- Transformed `WorkflowDefinition` with steps annotated with `StepKind.PARALLEL` from `mark_parallel_steps`

## Invokes — required
- script scripts.workflow.schema — scripts/workflow/parallel.py:21

## Invoked by — required
- script parallel — scripts/workflow/__init__.py:17

## Concepts named — required, verbatim
- `AggregationStrategy` — scripts/workflow/parallel.py:32 — defined here
- `ParallelGroup` — scripts/workflow/parallel.py:47 — defined here
- `ParallelResult` — scripts/workflow/parallel.py:61 — defined here
- `identify_parallel_groups` — scripts/workflow/parallel.py:73 — defined here
- `can_parallelize` — scripts/workflow/parallel.py:131 — defined here
- `StepExecutor` — scripts/workflow/parallel.py:140 — defined here
- `ParallelStepExecutor` — scripts/workflow/parallel.py:143 — defined here
- `execute_parallel` — scripts/workflow/parallel.py:172 — defined here
- `aggregate_outputs` — scripts/workflow/parallel.py:277 — defined here
- `mark_parallel_steps` — scripts/workflow/parallel.py:325 — defined here
- `StepKind` — scripts/workflow/parallel.py:22 — used here
- `StepResult` — scripts/workflow/parallel.py:23 — used here
- `WorkflowDefinition` — scripts/workflow/parallel.py:24 — used here
- `WorkflowStatus` — scripts/workflow/parallel.py:25 — used here
- `WorkflowStep` — scripts/workflow/parallel.py:26 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/workflow/parallel.py`, Python, 365 lines
- documented invocation: none
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `uv run python3 scripts/workflow/parallel.py`
  Stdout: (empty)
  Actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  Documented:
  > "0 - Success" — scripts/workflow/parallel.py:8
  > "1 - Logic error (parallel execution failed)" — scripts/workflow/parallel.py:9
  > "2 - Config error (invalid parallelization)" — scripts/workflow/parallel.py:10
  Actual exit paths: none in code. Contains no `sys.exit()` or `exit()` calls and no `__main__` entrypoint. Running it executes class and function definitions and exits 0. Helper functions raise `ValueError` (line 109) on circular dependencies.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a validator or gate; cannot exit non-zero when run directly.
- does the output match what the documentation claims?
  No; the docstring claims ADR-035 exit codes 0, 1, and 2, but the script is a library module with no CLI entrypoint.

## Defects — required
- `doc-drift` · scripts/workflow/parallel.py:7 · Docstring documents ADR-035 exit codes 0, 1, and 2, but the file provides no CLI entry point (`__main__`) or exit code handlers.

## Observations
Implements explicit consensus escalation: when `AggregationStrategy.ESCALATE` detects conflicting outputs across parallel steps (line 315), it injects the routing directive `**Route to: high-level-advisor** (ADR-009 consensus escalation)` to trigger strategic arbitration.

## Context cost
11848 bytes. Imports `scripts/workflow/schema.py` (6629 bytes), total loaded size ~18477 bytes (~4619 tokens).
