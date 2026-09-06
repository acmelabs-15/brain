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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/ruff_count_ratchet.py

## Purpose — required, verbatim
> "Whole-repo ruff count ratchet: fail only when the total violation count grows." — scripts/ci/ruff_count_ratchet.py:2

## Design intent — required
Enforces a non-increasing ceiling on total Ruff violations across all git-tracked Python files in the repository (addressing Issue #2993, Option C). Complements diff-scoped linting (`scripts/ci/ruff_ratchet.py`) by ensuring that repository-wide debt cannot grow. Restricts scanning strictly to git-tracked files (`*.py`, `*.pyi`, `*.ipynb`) to avoid phantom regressions from untracked scratch directories, worktrees, or caches. Compares working baseline against base ref (`--base-ref`) to guarantee monotonicity, and integrates with the merge-tree ratchet registry (`merge_tree_ratchet_registry.py`).

## Phase — required
cross-phase

## Inputs — required
- CLI arguments: `--repo-root`, `--baseline`, `--update`, `--base-ref`
- Pinned baseline ceiling from `scripts/ci/ruff_count_baseline.txt`
- Git-tracked repository files matching `*.py`, `*.pyi`, `*.ipynb`

## Outputs — required
- Evaluates total tracked violation count against baseline ceiling
- Updates `scripts/ci/ruff_count_baseline.txt` when `--update` is passed and violation count has decreased

## Invokes — required
- script count_ratchet — scripts/ci/ruff_count_ratchet.py:38
- config ruff_count_baseline.txt — scripts/ci/ruff_count_ratchet.py:60
- command git — scripts/ci/ruff_count_ratchet.py:167
- command ruff — scripts/ci/ruff_count_ratchet.py:126

## Invoked by — required
- script scripts/validation/checks_ratchet.py — scripts/validation/checks_ratchet.py:64
- script scripts/validation/git_hook_policy.py — scripts/validation/git_hook_policy.py:272

## Concepts named — required, verbatim
- `AGENTS.md` — scripts/ci/ruff_count_ratchet.py:21 — used here
- `EXIT_CONFIG` — scripts/ci/ruff_count_ratchet.py:39 — defined here
- `EXIT_EXTERNAL` — scripts/ci/ruff_count_ratchet.py:40 — defined here
- `EXIT_OK` — scripts/ci/ruff_count_ratchet.py:41 — defined here
- `EXIT_REGRESSION` — scripts/ci/ruff_count_ratchet.py:42 — defined here
- `MERGE_TREE_BACKED` — scripts/ci/ruff_count_ratchet.py:55 — defined here
- `current_count` — scripts/ci/ruff_count_ratchet.py:56 — defined here
- `_SCAN_GLOBS` — scripts/ci/ruff_count_ratchet.py:75 — defined here
- `_IO_ERROR_CODE` — scripts/ci/ruff_count_ratchet.py:81 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/ruff_count_ratchet.py`, language: Python, lines: 216
- documented invocation:
  "python scripts/ci/ruff_count_ratchet.py" — scripts/ci/ruff_count_ratchet.py:18
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/ruff_count_ratchet.py --help`
    stdout: `usage: ruff_count_ratchet.py [-h] [--repo-root REPO_ROOT] [--baseline BASELINE] [--update] [--base-ref BASE_REF]`
    actual exit code: 0
  - Command: `python3 sources/rjm/scripts/ci/ruff_count_ratchet.py --repo-root sources/rjm`
    stdout: `error: ruff failed to run` (stderr: `ruff could not be launched: [Errno 2] No such file or directory: 'ruff'`)
    actual exit code: 3
- documented exit codes vs actual exit paths:
  - Documented:
    - "0 - ok (count <= baseline, or --update records a decrease)" — scripts/ci/ruff_count_ratchet.py:22
    - "1 - regression (count > baseline, or baseline raised vs --base-ref)" — scripts/ci/ruff_count_ratchet.py:23
    - "2 - config error (baseline missing or malformed, bad args)" — scripts/ci/ruff_count_ratchet.py:24
    - "3 - external error (ruff could not run)" — scripts/ci/ruff_count_ratchet.py:25
  - Actual exit paths:
    - delegated to `run` — scripts/ci/ruff_count_ratchet.py:201
    - `sys.exit(main())` — scripts/ci/ruff_count_ratchet.py:215
- for validators/gates: can it exit non-zero?
  Yes, exits 1 on regression or raised baseline, 2 on configuration error, 3 on external tool error (git or ruff failure).
  Does it fail on the source repo's own default branch?
  When ruff is missing from the environment PATH, exits 3.
- does the output match what the documentation claims?
  Yes, batches tracked Python files through ruff JSON-lines and enforces the baseline ceiling.

## Defects — required
none

## Observations
Uses `_IO_ERROR_CODE = "E902"` (line 81) to separate environment/file-access errors from legitimate lint diagnostics.

## Context cost
7633 bytes, 216 lines. Approximate tokens: ~1800.
