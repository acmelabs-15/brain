---
package: rjm
path: scripts/workflow/loader.py
type: script
bytes: 3244
unit: inv-rjm-311
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/workflow/loader.py, sha256: 2c6b6b29ceef95cd8be24b14975396f72bbc4972f11fb49fcf5c21dcce6e80cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/workflow/loader.py

## Purpose — required, verbatim
> "Load workflow definitions from YAML files." — scripts/workflow/loader.py:1

## Design intent — required
Provides parsing and deserialization logic to convert declarative YAML workflow definitions into typed `WorkflowDefinition` and `WorkflowStep` objects. It validates top-level mapping structure, step list integrity, coordination modes, and individual step configurations (agents, step kinds, input dependencies, coordinator flags, and subordinates), raising descriptive `ValueError` or `FileNotFoundError` exceptions prior to pipeline scheduling.

## Phase — required
rjm:orchestrator

## Inputs — required
- Workflow definition YAML files on disk (`path: Path`)
- Parsed YAML dictionaries (`data: dict[str, Any]`) containing keys: `name`, `steps`, `max_iterations`, `metadata`, `coordination_mode`
- Step mappings containing: `name`, `agent`, `kind`, `inputs_from`, `prompt_template`, `max_retries`, `condition`, `is_coordinator`, `subordinates`

## Outputs — required
`WorkflowDefinition` instance populated with `WorkflowStep` instances and `CoordinationMode` enum values.

## Invokes — required
- script scripts.workflow.schema — scripts/workflow/loader.py:18

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `WorkflowDefinition` — scripts/workflow/loader.py:22 — used here
- `WorkflowStep` — scripts/workflow/loader.py:23 — used here
- `CoordinationMode` — scripts/workflow/loader.py:19 — used here
- `StepKind` — scripts/workflow/loader.py:20 — used here
- `StepRef` — scripts/workflow/loader.py:21 — used here
- `load_workflow` — scripts/workflow/loader.py:27 — defined here
- `parse_workflow` — scripts/workflow/loader.py:38 — defined here
- `_parse_step` — scripts/workflow/loader.py:74 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/workflow/loader.py`, Python, 111 lines
- documented invocation: none
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `uv run python3 scripts/workflow/loader.py`
  Stdout: (empty)
  Actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  Documented:
  > "0 - Success" — scripts/workflow/loader.py:6
  > "1 - Logic error (invalid YAML structure)" — scripts/workflow/loader.py:7
  > "2 - Config error (file not found, parse error)" — scripts/workflow/loader.py:8
  Actual exit paths: none in code. The file contains no `sys.exit` calls and no `__main__` entrypoint. Directly running it executes module definitions and exits 0. Parsing errors raise `ValueError` (lines 45, 49, 53, 63, 77, 85) or `FileNotFoundError` (line 31 docstring / `Path.read_text`).
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a validator or standalone gate. It cannot exit non-zero when run as a script directly.
- does the output match what the documentation claims?
  No; the docstring documents ADR-035 exit codes 0, 1, and 2, but the script is a library module without CLI invocation or exit handlers.

## Defects — required
- `doc-drift` · scripts/workflow/loader.py:5 · Module docstring claims ADR-035 exit codes 0, 1, and 2, but the file implements no CLI entry point (`__main__`) and contains no exit code handling.
- `orphan` · scripts/workflow/loader.py:1 · Not invoked or imported by any in-scope production script, skill, or command (referenced only in excluded test suite `tests/test_workflow_executor.py`).

## Observations
The loader handles both centralized and decentralized orchestration schemas, translating configuration mappings into coordinator/subordinate relationships (`is_coordinator`, `subordinates`) and conditional step triggers (`condition`).

## Context cost
3244 bytes. Imports `scripts/workflow/schema.py` (6629 bytes), total loaded size ~9873 bytes (~2468 tokens).
