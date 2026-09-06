---
package: rjm
path: scripts/ci/ruff_count_ratchet.py
type: script
bytes: 7633
unit: inv-rjm-206
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/ruff_count_ratchet.py, sha256: e8ec4aae7eeeb3ebec27b426f609c8a04849394340012720a17c92248ac33fd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/ruff_count_ratchet.py

## Purpose — required, verbatim
> "Whole-repo ruff count ratchet: fail only when the total violation count grows." — scripts/ci/ruff_count_ratchet.py:2

## Design intent — required
Complements diff-scoped linting by enforcing a whole-repository violation ceiling recorded in `ruff_count_baseline.txt`. Scans only git-tracked Python files (`*.py`, `*.pyi`, `*.ipynb`) to prevent phantom regressions from untracked scratch files, nested worktrees, or caches. Allows violation counts to improve without failing, supports ratcheting the baseline down via `--update`, and compares against `--base-ref` to prevent PRs from raising the baseline. Registered with the merge-tree backstop (`MERGE_TREE_BACKED = True`).

## Phase — required
none

## Inputs — required
- Baseline file `ruff_count_baseline.txt` — scripts/ci/ruff_count_ratchet.py:60
- Git-tracked files matching `_SCAN_GLOBS` — scripts/ci/ruff_count_ratchet.py:75
- Git ref passed via `--base-ref` — scripts/ci/ruff_count_ratchet.py:23
- Flag `--update` to record count decreases — scripts/ci/ruff_count_ratchet.py:22

## Outputs — required
- Updated `ruff_count_baseline.txt` on count decrease when `--update` is passed — scripts/ci/ruff_count_ratchet.py:22
- Ratchet evaluation status and error messages printed to stderr/stdout — scripts/ci/ruff_count_ratchet.py:102, 135, 138

## Invokes — required
- script count_ratchet — scripts/ci/ruff_count_ratchet.py:38

## Invoked by — required
- `scripts/ci/ruff_ratchet.py:11`
- `.github/workflows/python-lint.yml` (CI workflow, excluded from lifecycle analysis)

## Concepts named — required, verbatim
- `ruff_count_baseline.txt` — scripts/ci/ruff_count_ratchet.py:7 — used here
- `MERGE_TREE_BACKED` — scripts/ci/ruff_count_ratchet.py:55 — defined here
- `count_ratchet` — scripts/ci/ruff_count_ratchet.py:38 — used here
- `current_count` — scripts/ci/ruff_count_ratchet.py:56 — defined here
- `E902` — scripts/ci/ruff_count_ratchet.py:81 — used here

## Structure
- module docstring — scripts/ci/ruff_count_ratchet.py:2-26
- MERGE_TREE_BACKED — scripts/ci/ruff_count_ratchet.py:62
- _SCAN_GLOBS — scripts/ci/ruff_count_ratchet.py:75
- _IO_ERROR_CODE — scripts/ci/ruff_count_ratchet.py:81
- _count_diagnostics — scripts/ci/ruff_count_ratchet.py:84
- current_count — scripts/ci/ruff_count_ratchet.py:109
- baseline_at_ref — scripts/ci/ruff_count_ratchet.py:147
- read_baseline — scripts/ci/ruff_count_ratchet.py:188
- main — scripts/ci/ruff_count_ratchet.py:196

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/ruff_count_ratchet.py`, language: Python, lines: 216
- documented invocation:
  > "python scripts/ci/ruff_count_ratchet.py" — scripts/ci/ruff_count_ratchet.py:18
- executed: yes
- actual command: `python3 sources/rjm/scripts/ci/ruff_count_ratchet.py --baseline nonexistent_baseline.txt`
- stdout: `error: baseline missing or malformed: nonexistent_baseline.txt` (on stderr)
- actual exit code: 2
- documented exit codes:
  > "0 - ok (count <= baseline, or --update records a decrease)" — scripts/ci/ruff_count_ratchet.py:22
  > "1 - regression (count > baseline, or baseline raised vs --base-ref)" — scripts/ci/ruff_count_ratchet.py:23
  > "2 - config error (baseline missing or malformed, bad args)" — scripts/ci/ruff_count_ratchet.py:24
  > "3 - external error (ruff could not run)" — scripts/ci/ruff_count_ratchet.py:25
  Actual exit paths in code:
  Exits via `sys.exit(main())` returning integer codes from `run` (`EXIT_OK`, `EXIT_REGRESSION`, `EXIT_CONFIG`, `EXIT_EXTERNAL`) — scripts/ci/ruff_count_ratchet.py:40, 41, 42, 215. Functions return `None` on launch/run errors — scripts/ci/ruff_count_ratchet.py:136, 139, 144.
- for validators/gates: can exit non-zero (exits 1 on count regression, 2 on configuration error, 3 on external/tool failure); failable gate
- does the output match what the documentation claims: yes, enforces whole-repo violation ceiling against baseline and respects ratchet exit code contract

## Defects — required
- `doc-drift` · scripts/ci/ruff_count_ratchet.py:18-19 · Docstring states "Stdlib only: this runs by path in CI (python scripts/ci/ruff_count_ratchet.py) and must not depend on the project's import graph", but line 38 imports project-internal module `scripts.ci.count_ratchet`.

## Observations
Treats ruff `E902` file-access errors as environment errors rather than lint violations to prevent unreadable files or worktree anomalies from registering as phantom count improvements or regressions.

## Context cost
Bytes: 7633 + loads `scripts/ci/count_ratchet.py` (47457 bytes). Approximate tokens: ~13000.
