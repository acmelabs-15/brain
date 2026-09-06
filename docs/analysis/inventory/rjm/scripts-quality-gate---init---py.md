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
verified: 2026-09-05 quote-check+coverage
---

# scripts/quality_gate/__init__.py

## Purpose — required, verbatim
> "Testable workflow-logic scripts extracted from ai-pr-quality-gate.yml." — scripts/quality_gate/__init__.py:1

## Design intent — required
Marks `scripts/quality_gate/` as an importable Python package while formalizing the architectural principle behind its modules. In accordance with ADR-006 ("no logic in YAML"), complex inline workflow steps from GitHub Actions workflows are extracted into standalone, testable Python scripts that expose a standard `main(argv)` entry point and follow strict exit-code contracts.

## Phase — required
rjm:build

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script path_utils — scripts/quality_gate/check_critical_failures.py:45

## Concepts named — required, verbatim
- `ai-pr-quality-gate.yml` — scripts/quality_gate/__init__.py:1 — used here
- `ADR-006` — scripts/quality_gate/__init__.py:4 — used here
- `main` — scripts/quality_gate/__init__.py:4 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/__init__.py`, language: Python 3, lines: 7
- documented invocation: none (package marker without CLI entry point)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/quality_gate/__init__.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (package marker without CLI entry point).
  Actual exit paths in code: exits implicitly with code 0 upon executing docstring (no `sys.exit` or `exit` calls in file).
- for validators/gates: can it exit non-zero? no. Does it fail on the source repo's own default branch? no, exits 0.
- does the output match what the documentation claims? yes, acts as a valid package initializer.

## Defects — required
none

## Observations
Direct implementation artifact of ADR-006, encapsulating quality-gate CI logic into Python modules that can be executed and unit-tested in isolation without requiring GitHub Actions workflow runners.

## Context cost
305 bytes (~76 tokens).
