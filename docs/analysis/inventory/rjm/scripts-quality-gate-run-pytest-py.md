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
verified: 2026-09-06 quote-check+coverage
---

# scripts/quality_gate/run_pytest.py

## Purpose — required, verbatim
> "Run the test suite and record a status + summary for the QA agent." — scripts/quality_gate/run_pytest.py:2

## Design intent — required
Extracted under ADR-006 from the inline `Run pytest` step in `.github/workflows/ai-pr-quality-gate.yml`, this script executes the project's pytest suite to collect deterministic test execution status (`PASS`, `FAIL`, `SKIPPED`, `ERROR`) and summary lines for the Copilot CLI QA agent, which lacks shell access (Issue #77). It wraps test execution with a bounded timeout (default 540s per release-it guidelines), auto-detects `uv` vs system Python runners, and appends structured results to `GITHUB_OUTPUT` while continuing on error (exit 0) so downstream evaluation can proceed.

## Phase — required
rjm:review

## Inputs — required
- "--project-root" — scripts/quality_gate/run_pytest.py:125
- "--timeout" — scripts/quality_gate/run_pytest.py:131
- "GITHUB_OUTPUT - path to the GitHub Actions output file." — scripts/quality_gate/run_pytest.py:28

## Outputs — required
- "pytest_summary" — scripts/quality_gate/run_pytest.py:119
- "0 - status and summary written" — scripts/quality_gate/run_pytest.py:31
- "1 - unsafe project root" — scripts/quality_gate/run_pytest.py:33
- "2 - GITHUB_OUTPUT is not set (config error)" — scripts/quality_gate/run_pytest.py:34

## Invokes — required
- script path_utils — scripts/quality_gate/run_pytest.py:49

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/quality_gate/run_pytest.py:5 — used here
- `ADR-035` — scripts/quality_gate/run_pytest.py:30 — used here
- `pytest_status` — scripts/quality_gate/run_pytest.py:14 — defined here
- `pytest_summary` — scripts/quality_gate/run_pytest.py:119 — defined here
- `summary_line` — scripts/quality_gate/run_pytest.py:60 — defined here
- `build_pytest_command` — scripts/quality_gate/run_pytest.py:69 — defined here
- `environment_ready` — scripts/quality_gate/run_pytest.py:78 — defined here
- `run_pytest` — scripts/quality_gate/run_pytest.py:85 — defined here
- `write_outputs` — scripts/quality_gate/run_pytest.py:114 — defined here

## Structure
- def summary_line(output: str) -> str: — scripts/quality_gate/run_pytest.py:60
- def build_pytest_command() -> list[str]: — scripts/quality_gate/run_pytest.py:69
- def environment_ready(project_root: Path) -> bool: — scripts/quality_gate/run_pytest.py:78
- def run_pytest(command: list[str], timeout: float, cwd: Path | None = None) -> tuple[str, str]: — scripts/quality_gate/run_pytest.py:85
- def write_outputs(output_path: Path, status: str, summary: str) -> None: — scripts/quality_gate/run_pytest.py:114
- def main(argv: list[str] | None = None) -> int: — scripts/quality_gate/run_pytest.py:122

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/run_pytest.py`
- language: Python
- lines: 160
- documented invocation: none documented (CLI script configured with argparse)
- **executed:** yes
- actual command run: `GITHUB_OUTPUT=/tmp/pytest_out.txt python3 sources/rjm/scripts/quality_gate/run_pytest.py --project-root sources/rjm/scripts/quality_gate`
- abridged stdout:
  ```text
  (exited 0; outputs written to GITHUB_OUTPUT: pytest_status=SKIPPED, pytest_summary=Python test environment not available)
  ```
- **actual exit code**: 0
- documented exit codes: `"0 - status and summary written" — scripts/quality_gate/run_pytest.py:31` vs. actual exit paths: line 155 returns 0; `"1 - unsafe project root" — scripts/quality_gate/run_pytest.py:33` vs. actual exit paths: line 142 returns 1; `"2 - GITHUB_OUTPUT is not set (config error)" — scripts/quality_gate/run_pytest.py:34` vs. actual exit paths: line 152 returns 2.
- for validators/gates: test runner script; continue-on-error design returns 0 when tests run or skip, allowing QA agent to consume status; returns non-zero on path escape (1) or missing GITHUB_OUTPUT (2).
- does the output match what the documentation claims? yes, writes `pytest_status` and `pytest_summary` key-value pairs to the specified `GITHUB_OUTPUT` file.

## Defects — required
- `orphan` · scripts/quality_gate/run_pytest.py:4 · Extracted workflow script intended for CI execution in `ai-pr-quality-gate.yml`; has no in-scope callers among lifecycle commands.

## Observations
- Automatically prefers modern `uv run pytest` when available on PATH, falling back to `python -m pytest`.
- Uses regular expression search `passed|failed|error` to locate the final summary line from test suite output.

## Context cost
5422 bytes, approximately 1350 tokens.
