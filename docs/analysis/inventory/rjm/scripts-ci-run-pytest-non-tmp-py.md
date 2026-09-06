---
package: rjm
path: scripts/ci/run_pytest_non_tmp.py
type: script
bytes: 2410
unit: inv-rjm-207
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/run_pytest_non_tmp.py, sha256: 2923625e7720813f0fdb7d3d71947975da35b63ac4099812871f01440a0708a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/run_pytest_non_tmp.py

## Purpose — required, verbatim
> "Run pytest with temp roots redirected outside the repository." — scripts/ci/run_pytest_non_tmp.py:2

## Design intent — required
Enforces repository isolation during pytest runs by requiring a designated temporary root outside the repository tree, creating dedicated `tmp` and `basetemp` directories, and configuring `TMPDIR` and `--basetemp` so tests cannot pollute or mutate repository source directories.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"PYTEST_NON_TMP_ROOT"` — scripts/ci/run_pytest_non_tmp.py:17
- CLI arguments forwarded to pytest via `argv` (`pytest_args = list(sys.argv[1:] if argv is None else argv)`) — scripts/ci/run_pytest_non_tmp.py:40

## Outputs — required
- Created directory `temp_root / "tmp"` — scripts/ci/run_pytest_non_tmp.py:43
- Created directory `temp_root / "basetemp"` — scripts/ci/run_pytest_non_tmp.py:44
- Created directory `(PROJECT_ROOT / "artifacts").mkdir(exist_ok=True)` — scripts/ci/run_pytest_non_tmp.py:47

## Invokes — required
none

## Invoked by — required
- script run_pytest_non_tmp — scripts/ci/run_pytest_selected.py:26

## Concepts named — required, verbatim
`PYTEST_NON_TMP_ROOT` — scripts/ci/run_pytest_non_tmp.py:17 — defined here
`TMPDIR` — scripts/ci/run_pytest_non_tmp.py:56 — used here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/run_pytest_non_tmp.py`, language: Python 3, lines: 73
- documented invocation: `"Run pytest with temp roots redirected outside the repository." — scripts/ci/run_pytest_non_tmp.py:2`
- **executed:** yes
- actual command run: `PYTEST_NON_TMP_ROOT=/tmp/pytest_non_tmp uv run python scripts/ci/run_pytest_non_tmp.py --version`, stdout: `pytest 9.0.3`, **actual exit code**: 0
- documented exit codes: none; actual exit paths: `scripts/ci/run_pytest_non_tmp.py:50` (`return 3` on OSError preparing temp root), `scripts/ci/run_pytest_non_tmp.py:53` (`return 2` on ValueError when PYTEST_NON_TMP_ROOT is missing or inside repository), `scripts/ci/run_pytest_non_tmp.py:65` (`return subprocess.run(...).returncode`), `scripts/ci/run_pytest_non_tmp.py:68` (`return 3` on OSError executing pytest), `scripts/ci/run_pytest_non_tmp.py:72` (`raise SystemExit(main())`)
- for validators/gates: test runner wrapper; validates temp root location and propagates pytest exit code
- does the output match what the documentation claims? yes, isolates basetemp and tmpdir outside repository

## Defects — required
none

## Observations
Ensures subprocess execution uses list-form argv with no shell expansion to eliminate injection risk while maintaining repository isolation.

## Context cost
2410 bytes, approximately 602 tokens.
