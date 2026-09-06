---
package: rjm
path: scripts/workflow/schema.py
type: script
bytes: 6629
unit: inv-rjm-311
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/workflow/schema.py, sha256: 63e7e4ed48ffcbf9e07c58bab7802e6c7545f873d22a9c366f7e83f9dce0bbde}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/workflow/schema.py

## Purpose — required, verbatim
> "Workflow definition types for agent pipeline execution." — scripts/workflow/schema.py:1

## Design intent — required
Defines foundational data structures, status enums, and structural validation rules for multi-agent workflows. It models step types (`agent`, `parallel`, `conditional`), coordination topologies (`centralized`, `hierarchical`, `mesh`), and step chaining relationships, providing validation against duplicate step names, missing agents, broken forward dependencies, invalid condition targets, coordinator-subordinate mismatches, and minimum step thresholds.

## Phase — required
rjm:orchestrator

## Inputs — required
Raw parameters passed to dataclass constructors (`WorkflowDefinition`, `WorkflowStep`, `StepRef`, `StepResult`, `WorkflowResult`).

## Outputs — required
Instantiated workflow dataclasses and validation error lists from `WorkflowDefinition.validate()`.

## Invokes — required
none

## Invoked by — required
- script schema — scripts/workflow/__init__.py:25
- script schema — scripts/workflow/coordinator.py:20
- script schema — scripts/workflow/executor.py:18
- script schema — scripts/workflow/loader.py:18
- script schema — scripts/workflow/parallel.py:21

## Concepts named — required, verbatim
- `StepKind` — scripts/workflow/schema.py:20 — defined here
- `CoordinationMode` — scripts/workflow/schema.py:28 — defined here
- `WorkflowStatus` — scripts/workflow/schema.py:41 — defined here
- `StepRef` — scripts/workflow/schema.py:52 — defined here
- `WorkflowStep` — scripts/workflow/schema.py:62 — defined here
- `WorkflowDefinition` — scripts/workflow/schema.py:86 — defined here
- `StepResult` — scripts/workflow/schema.py:175 — defined here
- `WorkflowResult` — scripts/workflow/schema.py:191 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/workflow/schema.py`, Python, 218 lines
- documented invocation: none
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `uv run python3 scripts/workflow/schema.py`
  Stdout: (empty)
  Actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  Documented:
  > "0 - Success" — scripts/workflow/schema.py:8
  > "1 - Logic error (invalid workflow definition)" — scripts/workflow/schema.py:9
  > "2 - Config error (missing required fields)" — scripts/workflow/schema.py:10
  Actual exit paths: none in code. Contains no `sys.exit()` or `exit()` calls and no `__main__` entrypoint. `validate()` returns a list of error strings rather than calling exit.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a standalone CLI validator or gate; does not exit non-zero when executed directly.
- does the output match what the documentation claims?
  No; the docstring claims ADR-035 exit codes 0, 1, and 2, but the script is a schema definition module with no CLI entrypoint.

## Defects — required
- `doc-drift` · scripts/workflow/schema.py:7 · Docstring documents ADR-035 exit codes 0, 1, and 2, but the file provides no CLI entry point (`__main__`) or exit handlers.

## Observations
`WorkflowDefinition.validate()` encodes explicit topology constraints: `CoordinationMode.HIERARCHICAL` requires at least one step with `is_coordinator=True` whose subordinates are known steps, while `CoordinationMode.MESH` requires at least 2 peer steps.

## Context cost
6629 bytes (~1657 tokens). Isolated (no internal imports).
