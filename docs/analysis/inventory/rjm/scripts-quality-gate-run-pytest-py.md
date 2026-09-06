---
package: rjm
path: scripts/quality_gate/run_pytest.py
type: script
bytes: 5422
unit: inv-rjm-256
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/quality_gate/run_pytest.py, sha256: 7630e0a27249e65473eb05d07aa0dea1d3c5b4db404f9162a358d979493475e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/quality_gate/run_pytest.py

## Purpose — required, verbatim
> "Run the test suite and record a status + summary for the QA agent." — scripts/quality_gate/run_pytest.py:2

## Design intent — required
Extracts the test runner execution step from `.github/workflows/ai-pr-quality-gate.yml` into a testable script per ADR-006. Because the QA agent runs in Copilot CLI without interactive shell access (Issue #77), this script runs pytest beforehand and writes structured results (`pytest_status` and `pytest_summary`) to `$GITHUB_OUTPUT`. It prefers `uv run pytest` over `python -m pytest`, enforces a defensive 540-second timeout to prevent job hangs, and is designed with continue-on-error semantics so that test suite failures are captured as status data rather than aborting the workflow pipeline prematurely.

## Phase — required
rjm:build

## Inputs — required
- `--project-root`: "Directory containing pyproject.toml." — scripts/quality_gate/run_pytest.py:128
- `--timeout`: "pytest subprocess timeout in seconds (release-it: bound the call)." — scripts/quality_gate/run_pytest.py:134
- `GITHUB_OUTPUT`: "GITHUB_OUTPUT - path to the GitHub Actions output file." — scripts/quality_gate/run_pytest.py:28

## Outputs — required
- Appends `pytest_status` (`PASS`, `FAIL`, `SKIPPED`, or `ERROR`) to `$GITHUB_OUTPUT`
- Appends `pytest_summary` (last line matching `passed|failed|error`) to `$GITHUB_OUTPUT`
- Standard output stream of the pytest test runner
- Process exit code (0 on output written, 1 on invalid path, 2 on missing `$GITHUB_OUTPUT`)

## Invokes — required
- script resolve_workspace_path — scripts/quality_gate/run_pytest.py:52

## Invoked by — required
- script run_pytest.py — scripts/quality_gate/resolve_pytest_signal.py:77

## Concepts named — required, verbatim
- `ai-pr-quality-gate.yml` — scripts/quality_gate/run_pytest.py:5 — used here
- `ADR-006` — scripts/quality_gate/run_pytest.py:5 — used here
- `ADR-035` — scripts/quality_gate/run_pytest.py:30 — used here
- `summary_line` — scripts/quality_gate/run_pytest.py:60 — defined here
- `build_pytest_command` — scripts/quality_gate/run_pytest.py:69 — defined here
- `environment_ready` — scripts/quality_gate/run_pytest.py:78 — defined here
- `run_pytest` — scripts/quality_gate/run_pytest.py:85 — defined here
- `write_outputs` — scripts/quality_gate/run_pytest.py:114 — defined here
- `main` — scripts/quality_gate/run_pytest.py:122 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/run_pytest.py`, language: Python 3, lines: 160
- documented invocation: none (invoked in CI workflow step via shell command line)
- **executed:** yes
- actual command run: `tmp_out=$(mktemp) && GITHUB_OUTPUT="$tmp_out" python3 scripts/quality_gate/run_pytest.py --project-root scripts/quality_gate && rm "$tmp_out"`
  abridged stdout: `pytest_status=SKIPPED\npytest_summary=Python test environment not available`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes:
  - "0 - status and summary written (the step is continue-on-error; a test" — scripts/quality_gate/run_pytest.py:31
  - "1 - unsafe project root" — scripts/quality_gate/run_pytest.py:33
  - "2 - GITHUB_OUTPUT is not set (config error)" — scripts/quality_gate/run_pytest.py:34
  Actual exit paths in code:
  - `return 1` (unsafe project root) — scripts/quality_gate/run_pytest.py:142
  - `return 2` (GITHUB_OUTPUT unset) — scripts/quality_gate/run_pytest.py:152
  - `return 0` (outputs written) — scripts/quality_gate/run_pytest.py:155
  - `sys.exit(main())` — scripts/quality_gate/run_pytest.py:159
- for validators/gates: can it exit non-zero? yes (exits 1 on unsafe path, exits 2 on missing GITHUB_OUTPUT). Does it fail on the source repo's own default branch? exits 2 if GITHUB_OUTPUT is unset.
- does the output match what the documentation claims? yes, sets `pytest_status` and `pytest_summary` exactly as documented.

## Defects — required
none

## Observations
A test failure in pytest deliberately does NOT cause `run_pytest.py` to exit non-zero. Instead, `run_pytest.py` records `pytest_status=FAIL` and exits 0, enabling the workflow step to continue so downstream reviewer agents can analyze the failure context.

## Context cost
5422 bytes (~1355 tokens).
