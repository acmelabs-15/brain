---
package: rjm
path: scripts/ci/type_ignore_count_ratchet.py
type: script
bytes: 5057
unit: inv-rjm-209
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/type_ignore_count_ratchet.py, sha256: 2bd382be93600e1610f8c48e5eb6371620f8a846d1f6e271df96e0aea04cee6b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/type_ignore_count_ratchet.py

## Purpose — required, verbatim
> "Whole-repo ``# type: ignore`` comment-count ratchet." — scripts/ci/type_ignore_count_ratchet.py:2

## Design intent — required
Enforces a non-increasing ceiling on `# type: ignore` comments across all git-tracked Python files in the repository. While `scripts/validation/git_hook_policy.py` checks changed lines for security suppressions, it explicitly excludes type-ignore comments; this ratchet closes that gap on a whole-repo basis so contributors cannot accumulate type-checking suppressions incrementally across multiple commits while staying beneath changed-line thresholds. Keeping type-ignore enforcement decoupled from security suppression reflects the design principle (issue #4039) that type-quality governance belongs in dedicated type gates rather than bundled with security policies.

## Phase — required
none

## Inputs — required
- CLI argument `--repo-root` (repository root directory; defaults to cwd)
- CLI argument `--baseline` (baseline file path; defaults to `type_ignore_count_baseline.txt`) — scripts/ci/type_ignore_count_ratchet.py:60
- CLI argument `--update` (flag to lower baseline count when current count improves)
- CLI argument `--base-ref` (git ref for baseline comparison)
- Git-tracked Python source files matching `*.py` — scripts/ci/type_ignore_count_ratchet.py:76
- Baseline text file `type_ignore_count_baseline.txt` — scripts/ci/type_ignore_count_ratchet.py:60

## Outputs — required
- Diagnostic output reporting ratchet status (e.g. `type-ignore count ratchet: OK (count == baseline 44).`)
- Lowered integer baseline written to `type_ignore_count_baseline.txt` when `--update` is specified and current count has decreased
- Process exit codes (0 = ok, 1 = regression, 2 = config error, 3 = external error) — scripts/ci/type_ignore_count_ratchet.py:23-27

## Invokes — required
- script count_ratchet — scripts/ci/type_ignore_count_ratchet.py:39
- script type_ignore_count_baseline.txt — scripts/ci/type_ignore_count_ratchet.py:60

## Invoked by — required
- script scripts/validation/checks_ratchet.py — scripts/validation/checks_ratchet.py:68

## Concepts named — required, verbatim
- `scripts/validation/git_hook_policy.py` — scripts/ci/type_ignore_count_ratchet.py:6 — used here
- `SECURITY_SUPPRESSION_RE` — scripts/ci/type_ignore_count_ratchet.py:7 — used here
- `issue #4039` — scripts/ci/type_ignore_count_ratchet.py:13 — used here
- `AGENTS.md` — scripts/ci/type_ignore_count_ratchet.py:23 — used here
- `MERGE_TREE_BACKED` — scripts/ci/type_ignore_count_ratchet.py:62 — defined here
- `merge_tree_ratchet_registry.py` — scripts/ci/type_ignore_count_ratchet.py:63 — used here
- `scripts/ci/merge_tree_ratchet_check.py` — scripts/ci/type_ignore_count_ratchet.py:67 — used here
- `tests/ci/test_merge_tree_backing_declarations.py` — scripts/ci/type_ignore_count_ratchet.py:68 — used here
- `_TYPE_IGNORE_RE` — scripts/ci/type_ignore_count_ratchet.py:74 — defined here
- `_SELF_REFERENTIAL_FILES` — scripts/ci/type_ignore_count_ratchet.py:84 — defined here
- `current_count` — scripts/ci/type_ignore_count_ratchet.py:92 — defined here
- `main` — scripts/ci/type_ignore_count_ratchet.py:125 — defined here

## Structure
none (python script; constants and functions: MERGE_TREE_BACKED, _TYPE_IGNORE_RE, _PY_GLOBS, _SELF_REFERENTIAL_FILES, current_count, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/type_ignore_count_ratchet.py`, language: Python 3, lines: 147
- documented invocation:
  "Whole-repo ``# type: ignore`` comment-count ratchet." — scripts/ci/type_ignore_count_ratchet.py:2
  (CLI command: `python3 scripts/ci/type_ignore_count_ratchet.py [--repo-root REPO_ROOT] [--baseline BASELINE] [--update] [--base-ref BASE_REF]`)
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/type_ignore_count_ratchet.py`
  abridged stdout: `type-ignore count ratchet: OK (count == baseline 44).`
  actual exit code: 0
- documented exit codes:
  `0 - ok (count <= baseline)` — scripts/ci/type_ignore_count_ratchet.py:24
  `1 - regression (count > baseline, or baseline raised vs --base-ref)` — scripts/ci/type_ignore_count_ratchet.py:25
  `2 - config error (baseline missing or malformed, bad args)` — scripts/ci/type_ignore_count_ratchet.py:26
  `3 - external error (could not read files)` — scripts/ci/type_ignore_count_ratchet.py:27
  vs. actual exit paths in code:
  `scripts/ci/type_ignore_count_ratchet.py:146` (`sys.exit(main())`, where `main` delegates to `count_ratchet.run`, exiting with `EXIT_OK` (0), `EXIT_REGRESSION` (1), `EXIT_CONFIG` (2), or `EXIT_EXTERNAL` (3))
- for validators/gates: can it exit non-zero? yes (exits 1 on count regression, 2 on config error, 3 on external file read failure). does it fail on the source repo's own default branch? no (passes with count 44 equal to baseline).
- does the output match what the documentation claims? yes (outputs status message and exit code 0 when current count equals baseline)

## Defects — required
none

## Observations
- Excludes self-referential files (`scripts/ci/type_ignore_count_ratchet.py` and `tests/ci/test_type_ignore_count_ratchet.py`) from the count via `_SELF_REFERENTIAL_FILES` to prevent regexes, test assertions, and docstrings from inflating the baseline with noise about the gate itself.
- Returns `None` on any I/O read failure in `current_count`, ensuring `count_ratchet.run` exits with code 3 (`EXIT_EXTERNAL`) instead of treating a crashed read as zero suppressions (which under `--update` would wipe out the baseline).
- Sets `MERGE_TREE_BACKED = True` to register with `merge_tree_ratchet_registry.py`, allowing branches whose baseline lags behind `main` to pass during local validation when the merge-tree check acts as backstop.

## Context cost
5,057 bytes (~1,264 tokens). Loads `scripts/ci/count_ratchet.py` (47,457 bytes) and `scripts/ci/type_ignore_count_baseline.txt` (3 bytes), totaling ~52,517 bytes (~13,129 tokens).
