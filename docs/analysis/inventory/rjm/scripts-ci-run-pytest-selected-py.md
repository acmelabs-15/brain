---
package: rjm
path: scripts/ci/run_pytest_selected.py
type: script
bytes: 6999
unit: inv-rjm-207
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/run_pytest_selected.py, sha256: 020bfd7038c0acd2e297000087967b65d72092bf56fb7102a1140a9eeb2ae275}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/run_pytest_selected.py

## Purpose — required, verbatim
> "Run a CI pytest partition, narrowed to the import-graph-selected subset." — scripts/ci/run_pytest_selected.py:2

## Design intent — required
Optimizes CI execution by mapping git-changed files through an import-dependency graph to run only the affected test subset for a specific partition on push/pull_request events, while safely falling back to the full partition for `merge_group` events, untracked changes, or empty selections per ADR-006.

## Phase — required
cross-phase

## Inputs — required
- CLI argument `"--partition"` — scripts/ci/run_pytest_selected.py:176 (`choices=sorted(_PARTITION_FULL_ARGS)`)
- Environment variable `"GITHUB_EVENT_NAME"` — scripts/ci/run_pytest_selected.py:179
- Environment variable `"PYTEST_SELECT_BASE"` — scripts/ci/run_pytest_selected.py:180
- Environment variable `"GITHUB_OUTPUT"` — scripts/ci/run_pytest_selected.py:168

## Outputs — required
- Writes `mode={mode}\n` to GITHUB_OUTPUT (`handle.write(f"mode={mode}\n")` — scripts/ci/run_pytest_selected.py:171)
- Diagnostic summary emitted to stderr (`print(f"partition={partition} mode={mode} reason={reason}", file=sys.stderr)` — scripts/ci/run_pytest_selected.py:167)

## Invokes — required
- script run_pytest_non_tmp — scripts/ci/run_pytest_selected.py:26
- script select_tests — scripts/ci/run_pytest_selected.py:27

## Invoked by — required
orphan

## Concepts named — required, verbatim
`ADR-006` — scripts/ci/run_pytest_selected.py:6 — used here
`merge_group` — scripts/ci/run_pytest_selected.py:8 — used here
`_PARTITION_FULL_ARGS` — scripts/ci/run_pytest_selected.py:38 — defined here
`_UNPARTITIONED_TESTS` — scripts/ci/run_pytest_selected.py:95 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/run_pytest_selected.py`, language: Python 3, lines: 191
- documented invocation: `"Run a CI pytest partition, narrowed to the import-graph-selected subset." — scripts/ci/run_pytest_selected.py:2`
- **executed:** yes
- actual command run: `uv run python scripts/ci/run_pytest_selected.py --help`, stdout: `usage: run_pytest_selected.py [-h] --partition {bulk,bulk-nested,mutation,pr-autofix,safe-push}`, **actual exit code**: 0
- documented exit codes: `"0 ok, 2 config, 3 external" — scripts/ci/run_pytest_selected.py:13`; actual exit paths: `scripts/ci/run_pytest_selected.py:186` (`return run_pytest_non_tmp.main([*passthrough, *args])`), `scripts/ci/run_pytest_selected.py:190` (`raise SystemExit(main())`)
- for validators/gates: test selection runner; classifies affected tests, enforces fallback to full suite when subset determination is uncertain, and delegates execution to `run_pytest_non_tmp`
- does the output match what the documentation claims? yes, resolves partition arguments and dispatches pytest runner

## Defects — required
none

## Observations
Defines explicit argument lists for five test partitions (`bulk`, `bulk-nested`, `mutation`, `safe-push`, `pr-autofix`) and prevents false negatives by maintaining `_UNPARTITIONED_TESTS` that trigger full suite runs if affected.

## Context cost
9409 bytes (6999 script + 2410 run_pytest_non_tmp), approximately 2352 tokens.
