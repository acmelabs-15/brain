---
package: rjm
path: scripts/ci/cli_exit_contract_ratchet.py
type: script
bytes: 7547
unit: inv-rjm-201
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/cli_exit_contract_ratchet.py, sha256: 70922e7da82e56e1d9e67083a1a4aed6ed4a29d53e56346cfad7214a517c78f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/cli_exit_contract_ratchet.py

## Purpose — required, verbatim
> "CLI exit-contract ratchet for extracted CI scripts (issue #4068)." — scripts/ci/cli_exit_contract_ratchet.py:2

## Design intent — required
Addresses silent pass defects that emerge when GitHub Actions workflow shell steps (which execute under `set -e`) are extracted into standalone Python modules under ADR-006. In Python implementations, errors frequently return sentinel values (such as `None`, empty strings, empty collections, or logged warnings) rather than raising exceptions or exiting nonzero; without an explicit conversion to `sys.exit()`, the CI step passes on failures that previously halted execution. `cli_exit_contract_ratchet.py` enforces a mechanical gate counting all extracted CI scripts under `scripts/ci` and `.github/scripts` defining `main` that lack test assertions verifying a nonzero exit from `main(argv)` or process execution. The resulting count is constrained via an equality ratchet policy backed by the merge tree registry, preventing regressions while allowing decreases via `--update`.

## Phase — required
rjm:Verify

## Inputs — required
- CLI options: `--repo-root` (Path), `--baseline` (Path, default: `scripts/ci/cli_exit_contract_baseline.txt`), `--update` (flag), `--base-ref` (git ref) (`scripts/ci/cli_exit_contract_ratchet.py:164-168`)
- Baseline file: `scripts/ci/cli_exit_contract_baseline.txt` (`scripts/ci/cli_exit_contract_ratchet.py:76`)
- Repository tracked file index for `scripts/ci/*.py`, `.github/scripts/*.py`, `tests/**/*.py`, `tests/*.py` via `count_ratchet.tracked_files` (`scripts/ci/cli_exit_contract_ratchet.py:89-90, 121-129`)

## Outputs — required
- Updated baseline count file `scripts/ci/cli_exit_contract_baseline.txt` when invoked with `--update` on count decrease (`scripts/ci/cli_exit_contract_ratchet.py:32, 166`)
- Console diagnostic messages listing uncovered script paths: `"  {script}: no test asserts a nonzero exit from main()"` (`scripts/ci/cli_exit_contract_ratchet.py:159`)
- Exit code: 0 on success, 1 on count regression, 2 on configuration/baseline error, 3 on git failure (`scripts/ci/cli_exit_contract_ratchet.py:38-41`)

## Invokes — required
- `module scripts.ci.cli_exit_contract_coverage — scripts/ci/cli_exit_contract_ratchet.py:52`
- `module scripts.ci.count_ratchet — scripts/ci/cli_exit_contract_ratchet.py:53`
- `file scripts/ci/cli_exit_contract_baseline.txt — scripts/ci/cli_exit_contract_ratchet.py:76`

## Invoked by — required
- `script scripts/ci/merge_tree_ratchet_registry.py — scripts/ci/merge_tree_ratchet_registry.py:12`
- `script scripts/validation/checks_ratchet.py — scripts/validation/checks_ratchet.py:80`

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/cli_exit_contract_ratchet.py:4 — used here
- `set -e` — scripts/ci/cli_exit_contract_ratchet.py:5 — used here
- `main(argv)` — scripts/ci/cli_exit_contract_ratchet.py:14 — used here
- `AGENTS.md contract` — scripts/ci/cli_exit_contract_ratchet.py:37 — used here
- `count_ratchet.run` — scripts/ci/cli_exit_contract_ratchet.py:34 — used here
- `covered_stems` — scripts/ci/cli_exit_contract_ratchet.py:52 — used here
- `defines_main` — scripts/ci/cli_exit_contract_ratchet.py:52 — used here
- `tracked_files` — scripts/ci/cli_exit_contract_ratchet.py:60 — used here
- `EXIT_OK` — scripts/ci/cli_exit_contract_ratchet.py:56 — used here
- `EXIT_REGRESSION` — scripts/ci/cli_exit_contract_ratchet.py:57 — used here
- `EXIT_CONFIG` — scripts/ci/cli_exit_contract_ratchet.py:54 — used here
- `EXIT_EXTERNAL` — scripts/ci/cli_exit_contract_ratchet.py:55 — used here
- `MERGE_TREE_BACKED` — scripts/ci/cli_exit_contract_ratchet.py:68 — defined here
- `merge_tree_ratchet_registry.py::RATCHETS` — scripts/ci/cli_exit_contract_ratchet.py:79 — used here
- `uncovered_scripts` — scripts/ci/cli_exit_contract_ratchet.py:73 — defined here
- `current_count` — scripts/ci/cli_exit_contract_ratchet.py:70 — defined here

## Structure
- `_BASELINE_PATH`
- `MERGE_TREE_BACKED`
- `_SCRIPT_GLOBS`, `_TEST_GLOBS`
- `_read(repo_root: Path, relative: str) -> str | None`
- `uncovered_scripts(repo_root: Path) -> list[str] | None`
- `current_count(repo_root: Path) -> int | None`
- `main(argv: Sequence[str] | None = None) -> int`

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/cli_exit_contract_ratchet.py`, language: `python`, lines: 188
- documented invocation:
  > "CLI exit-contract ratchet for extracted CI scripts (issue #4068)." — scripts/ci/cli_exit_contract_ratchet.py:2
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ci/cli_exit_contract_ratchet.py --repo-root sources/rjm`
- abridged stdout:
```
  .github/scripts/check_design_review_gate.py: no test asserts a nonzero exit from main()
  .github/scripts/extract_incremental_scope.py: no test asserts a nonzero exit from main()
  .github/scripts/generate_spec_report.py: no test asserts a nonzero exit from main()
  ...
  scripts/ci/update_needs_split_label.py: no test asserts a nonzero exit from main()
cli exit contract ratchet: OK (count == baseline 18).
```
- **actual exit code:** 0
- documented exit codes:
  > "0 - ok (count == baseline, or --update records a decrease)" — scripts/ci/cli_exit_contract_ratchet.py:38
  > "1 - regression (count != baseline, or baseline raised vs --base-ref)" — scripts/ci/cli_exit_contract_ratchet.py:39
  > "2 - config error (baseline missing or malformed, bad args)" — scripts/ci/cli_exit_contract_ratchet.py:40
  > "3 - external error (git could not run)" — scripts/ci/cli_exit_contract_ratchet.py:41
  vs. actual exit paths in code:
  Delegates execution to `count_ratchet.run` (`scripts/ci/cli_exit_contract_ratchet.py:169`), which returns `EXIT_OK` (0), `EXIT_REGRESSION` (1), `EXIT_CONFIG` (2), or `EXIT_EXTERNAL` (3) defined on lines 54–57 and passed to `sys.exit(main())` on line 187.
- for validators/gates: can exit non-zero (exits 1 on regression when count != baseline; 2 on bad config; 3 on git failure). On default branch: exits 0 (count matches baseline 18).
- does the output match what the documentation claims: yes, lists uncovered scripts and confirms baseline match.

## Defects — required
none

## Observations
Narrowly scopes nonzero assertion crediting: an assertion counts only if it shares a test function with an invocation of that script's `main` or a subprocess call naming that script's path, preventing helper-only assertions or bare path strings in wiring tests from creating false passes.

## Context cost
7547 bytes file + 17656 bytes (`cli_exit_contract_coverage.py`) + 47457 bytes (`count_ratchet.py`) = 72660 bytes (~18165 tokens).
