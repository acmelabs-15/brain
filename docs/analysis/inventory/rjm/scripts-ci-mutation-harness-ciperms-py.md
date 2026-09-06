---
package: rjm
path: scripts/ci/mutation_harness_ciperms.py
type: script
bytes: 17424
unit: inv-rjm-205
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/mutation_harness_ciperms.py, sha256: 814dca7906ebdabba9e13a5f2d72039965f792b5d6f534877b452e5e40084fba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/mutation_harness_ciperms.py

## Purpose — required, verbatim
> "Mutation harness for CI security permission tests." — scripts/ci/mutation_harness_ciperms.py:2

## Design intent — required
Validates test suite sensitivity for CI security permissions and bot-skip guard classifications by injecting 10 targeted AST/byte mutations (M1–M10) into workflow definitions and test files, running pytest with bytecode generation disabled, and verifying that security-loosening mutations are killed (DEAD) while cosmetic changes survive (SURVIVED). Fails closed (exit 2) with a git checkout recovery command if any mutated file cannot be restored to its exact original bytes.

## Phase — required
rjm:test

## Inputs — required
- Target files mutated during harness execution:
  - "tests/workflows/test_workflow_job_permissions.py" — scripts/ci/mutation_harness_ciperms.py:33
  - "tests/ci/test_pr_validation_workflow.py" — scripts/ci/mutation_harness_ciperms.py:34
  - ".github/workflows/pr-validation.yml" — scripts/ci/mutation_harness_ciperms.py:35
- Documented CLI execution:
  - "uv run --frozen python3 scripts/ci/mutation_harness_ciperms.py" — scripts/ci/mutation_harness_ciperms.py:8

## Outputs — required
- Process exit code (0 for matching expected outcomes, 1 for unexpected outcomes, 2 for restore failure) — scripts/ci/mutation_harness_ciperms.py:5-7
- Execution summary report printed to stdout:
  - "DEAD:" — scripts/ci/mutation_harness_ciperms.py:450
  - "SURVIVED:" — scripts/ci/mutation_harness_ciperms.py:451
  - "DID-NOT-APPLY:" — scripts/ci/mutation_harness_ciperms.py:452
  - "NOT-RUN:" — scripts/ci/mutation_harness_ciperms.py:453

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Mutation harness` — scripts/ci/mutation_harness_ciperms.py:2 — defined here
- `DEAD` — scripts/ci/mutation_harness_ciperms.py:38 — defined here
- `SURVIVED` — scripts/ci/mutation_harness_ciperms.py:39 — defined here
- `DID-NOT-APPLY` — scripts/ci/mutation_harness_ciperms.py:40 — defined here
- `NOT-RUN` — scripts/ci/mutation_harness_ciperms.py:41 — defined here
- `Mutation` — scripts/ci/mutation_harness_ciperms.py:56 — defined here
- `Result` — scripts/ci/mutation_harness_ciperms.py:66 — defined here
- `cosmetic control` — scripts/ci/mutation_harness_ciperms.py:405 — defined here
- `isolated_mutation_worktree` — scripts/ci/mutation_harness_ciperms.py:27 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/mutation_harness_ciperms.py`, language: Python, lines: 486
- documented invocation: "uv run --frozen python3 scripts/ci/mutation_harness_ciperms.py" — scripts/ci/mutation_harness_ciperms.py:8
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/mutation_harness_ciperms.py`
    stdout: `[✓] DEAD M1: drop ai-metrics-analysis from _GRANDFATHERED (new offender path)\n...\n[✓] SURVIVED M10: cosmetic control rewords a module docstring\n\nDEAD: 9\nSURVIVED: 1\nDID-NOT-APPLY: 0\nNOT-RUN: 0\n\nAll 10 mutants matched expected outcomes.`
    actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "Exit 0 means every mutant matched its expected outcome." — scripts/ci/mutation_harness_ciperms.py:5
    - "Exit 1 means at least one outcome was unexpected." — scripts/ci/mutation_harness_ciperms.py:6
    - "Exit 2 means a mutated file could not be restored." — scripts/ci/mutation_harness_ciperms.py:7
  - Actual exit paths in code:
    - `return 0` — scripts/ci/mutation_harness_ciperms.py:476
    - `return 1` — scripts/ci/mutation_harness_ciperms.py:474
    - `raise SystemExit(2)` — scripts/ci/mutation_harness_ciperms.py:171, 210
    - `sys.exit(main())` — scripts/ci/mutation_harness_ciperms.py:485
- for validators/gates: can it exit non-zero?
  Yes, exits 1 on unexpected mutation test outcome (line 474) and 2 if backup restoration fails (lines 171, 210).
- does the output match what the documentation claims?
  Yes, applies 10 mutations, runs pytest tests with disabled bytecode, and outputs counts for DEAD, SURVIVED, DID-NOT-APPLY, and NOT-RUN.

## Defects — required
- orphan — scripts/ci/mutation_harness_ciperms.py:1 — Standalone CLI mutation harness not wired into CI workflows or lifecycle commands.

## Observations
Guarantees mutation isolation through `isolated_mutation_worktree` and atomic sibling temporary file writes (`.tmp`) before calling `os.replace`. Enforces `PYTHONDONTWRITEBYTECODE=1` and purges pycache bytecode before running pytest.

## Context cost
17424 bytes, 486 lines. Approximate tokens: ~4300.
