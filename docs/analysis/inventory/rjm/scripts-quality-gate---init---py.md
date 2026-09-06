---
package: rjm
path: scripts/quality_gate/__init__.py
type: script
bytes: 305
unit: inv-rjm-256
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/quality_gate/__init__.py, sha256: 94ab314154bd6bd1a1b1a7e3e3c2f4e7da028e3922e3d6d316e0ec416f222412}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/quality_gate/__init__.py

## Purpose — required, verbatim
> "Testable workflow-logic scripts extracted from ai-pr-quality-gate.yml." — scripts/quality_gate/__init__.py:1

## Design intent — required
Serves as the package initializer and architectural declaration for workflow-logic adapters extracted from inline YAML `run:` blocks in `.github/workflows/ai-pr-quality-gate.yml`. In accordance with ADR-006 ("no logic in YAML"), each submodule provides a testable Python entry point (`main(argv)`) that mirrors the original block's behavior and exit-code contract outside of CI runner constraints.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ai-pr-quality-gate.yml` — scripts/quality_gate/__init__.py:1 — used here
- `ADR-006` — scripts/quality_gate/__init__.py:4 — used here

## Structure
- Module docstring — scripts/quality_gate/__init__.py:1

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/__init__.py`
- language: Python
- lines: 7
- documented invocation: none documented (package init file without main or shebang)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/quality_gate/__init__.py`
- abridged stdout:
  ```text
  (exited 0 with no stdout/stderr; package init module)
  ```
- **actual exit code**: 0
- documented exit codes: none documented vs. actual exit paths: no exit calls; returns 0 on import
- for validators/gates: not a gate; package initialization module
- does the output match what the documentation claims? yes, package initializes cleanly without side effects

## Defects — required
- `orphan` · scripts/quality_gate/__init__.py:1 · Package init file is not imported directly by any in-scope workflow command or lifecycle skill within the manifest graph.

## Observations
- Encapsulates ADR-006 architectural policy ("no logic in YAML") across all quality gate helper scripts.
- Pure documentation docstring in a 7-line `__init__.py` without exported symbols.

## Context cost
305 bytes, approximately 75 tokens.
