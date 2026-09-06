---
package: rjm
path: scripts/quality_gate/resolve_pytest_signal.py
type: script
bytes: 20467
unit: inv-rjm-256
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/quality_gate/resolve_pytest_signal.py, sha256: e4152823bcb9632e32537455c786e7c5fcd242267ac13eee834ee65d19f96811}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/quality_gate/resolve_pytest_signal.py

## Purpose — required, verbatim
> "Resolve the authoritative pytest.yml verdict for a pull request head." — scripts/quality_gate/resolve_pytest_signal.py:2

## Design intent — required
Implements a non-disruptive shadow observer (Issue #4822 Phase 1) that queries GitHub's REST API via the `gh` CLI to extract the test execution status from existing `pytest.yml` CI workflow runs for a PR head commit. Designed to eliminate the redundant re-execution of the full test suite in `ai-pr-quality-gate.yml`, it distinguishes actual test runs from skip-tests passes by inspecting step-level conclusions rather than ambiguous top-level check conclusions, and compares the remote workflow status against local test results without altering merge-blocking behavior.

## Phase — required
rjm:review

## Inputs — required
- "--repo" — scripts/quality_gate/resolve_pytest_signal.py:448
- "--pr" — scripts/quality_gate/resolve_pytest_signal.py:449
- "--expected-head-sha" — scripts/quality_gate/resolve_pytest_signal.py:451
- "--local-status" — scripts/quality_gate/resolve_pytest_signal.py:455
- "--workflow" — scripts/quality_gate/resolve_pytest_signal.py:456
- "--job-name" — scripts/quality_gate/resolve_pytest_signal.py:457
- "--timeout" — scripts/quality_gate/resolve_pytest_signal.py:458
- "GITHUB_OUTPUT" — scripts/quality_gate/resolve_pytest_signal.py:484

## Outputs — required
- "shadow_pytest_status" — scripts/quality_gate/resolve_pytest_signal.py:421
- "shadow_pytest_reason" — scripts/quality_gate/resolve_pytest_signal.py:422
- "shadow_pytest_agreement" — scripts/quality_gate/resolve_pytest_signal.py:423
- "shadow_pytest_compared" — scripts/quality_gate/resolve_pytest_signal.py:424
- "0 once a status is resolved and emitted" — scripts/quality_gate/resolve_pytest_signal.py:27

## Invokes — required
- command gh — scripts/quality_gate/resolve_pytest_signal.py:178

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/quality_gate/resolve_pytest_signal.py:27 — used here
- `shadow-pytest-sample` — scripts/quality_gate/resolve_pytest_signal.py:76 — defined here
- `Resolution` — scripts/quality_gate/resolve_pytest_signal.py:148 — defined here
- `Run` — scripts/quality_gate/resolve_pytest_signal.py:154 — defined here
- `Job` — scripts/quality_gate/resolve_pytest_signal.py:161 — defined here
- `STATUS_PASS` — scripts/quality_gate/resolve_pytest_signal.py:50 — defined here
- `STATUS_FAIL` — scripts/quality_gate/resolve_pytest_signal.py:51 — defined here
- `STATUS_SKIPPED` — scripts/quality_gate/resolve_pytest_signal.py:52 — defined here
- `STATUS_PENDING` — scripts/quality_gate/resolve_pytest_signal.py:53 — defined here
- `STATUS_STALE` — scripts/quality_gate/resolve_pytest_signal.py:54 — defined here
- `STATUS_CANCELLED` — scripts/quality_gate/resolve_pytest_signal.py:55 — defined here
- `STATUS_UNKNOWN` — scripts/quality_gate/resolve_pytest_signal.py:56 — defined here
- `STATUS_UNCLASSIFIED` — scripts/quality_gate/resolve_pytest_signal.py:57 — defined here
- `AGREE` — scripts/quality_gate/resolve_pytest_signal.py:71 — defined here
- `DISAGREE` — scripts/quality_gate/resolve_pytest_signal.py:72 — defined here
- `UNCOMPARED` — scripts/quality_gate/resolve_pytest_signal.py:73 — defined here
- `KIND_EXECUTOR` — scripts/quality_gate/resolve_pytest_signal.py:86 — defined here
- `KIND_PASS_THROUGH` — scripts/quality_gate/resolve_pytest_signal.py:87 — defined here

## Structure
- def sanitize(text: str, limit: int = 160) -> str: — scripts/quality_gate/resolve_pytest_signal.py:136
- def _text(mapping: Mapping[str, object], key: str) -> str: — scripts/quality_gate/resolve_pytest_signal.py:141
- class Resolution: — scripts/quality_gate/resolve_pytest_signal.py:148
- class Run: — scripts/quality_gate/resolve_pytest_signal.py:154
- class Job: — scripts/quality_gate/resolve_pytest_signal.py:161
- def run_gh(argv: Sequence[str], *, timeout: float) -> subprocess.CompletedProcess[str]: — scripts/quality_gate/resolve_pytest_signal.py:175
- def gh_json(runner: GhRunner, path: str, label: str) -> Mapping[str, object] | None: — scripts/quality_gate/resolve_pytest_signal.py:188
- def binds_to_pr(item: Mapping[str, object], pr: str, repo: str) -> bool: — scripts/quality_gate/resolve_pytest_signal.py:212
- def parse_runs( — scripts/quality_gate/resolve_pytest_signal.py:232
- def select_latest_run(runs: Sequence[Run]) -> Run: — scripts/quality_gate/resolve_pytest_signal.py:267
- def parse_job(item: Mapping[str, object]) -> Job: — scripts/quality_gate/resolve_pytest_signal.py:275
- def classify(job: Job) -> str: — scripts/quality_gate/resolve_pytest_signal.py:287
- def job_status(job: Job, kind: str) -> str: — scripts/quality_gate/resolve_pytest_signal.py:298
- def aggregate(jobs: Sequence[Job]) -> Resolution: — scripts/quality_gate/resolve_pytest_signal.py:313
- def resolve( — scripts/quality_gate/resolve_pytest_signal.py:351
- def compare(status: str, local_status: str) -> tuple[str, str]: — scripts/quality_gate/resolve_pytest_signal.py:396
- def emit(resolution: Resolution, agreement: str, agreement_reason: str) -> dict[str, str]: — scripts/quality_gate/resolve_pytest_signal.py:408
- def _config_error(message: str) -> int: — scripts/quality_gate/resolve_pytest_signal.py:441
- def main(argv: Sequence[str] | None = None) -> int: — scripts/quality_gate/resolve_pytest_signal.py:446

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/resolve_pytest_signal.py`
- language: Python
- lines: 496
- documented invocation: none documented (CLI script configured with argparse)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/quality_gate/resolve_pytest_signal.py --repo owner/repo --pr 123 --expected-head-sha 0123456789abcdef0123456789abcdef01234567`
- abridged stdout:
  ```text
  shadow_pytest_status=UNKNOWN
  shadow_pytest_reason=the live pull request head could not be read
  shadow_pytest_agreement=UNCOMPARED
  shadow_pytest_compared=false
  ::notice::shadow-pytest-sample status=UNKNOWN agreement=UNCOMPARED compared=false
  ```
- **actual exit code**: 0
- documented exit codes: `"0 once a status is resolved and emitted" — scripts/quality_gate/resolve_pytest_signal.py:27` vs. actual exit paths: lines 487 and 491 return EXIT_OK (0); `"2 for a config error (bad repo, PR number, SHA," — scripts/quality_gate/resolve_pytest_signal.py:29` vs. actual exit paths: line 443 returns EXIT_CONFIG (2), triggered on lines 467, 469, 471, 473, 475.
- for validators/gates: validator/shadow observer; exits 0 once status is resolved even if API fails (returns UNKNOWN status) to ensure shadow evaluation never blocks the calling job; exits 2 on invalid configuration.
- does the output match what the documentation claims? yes, outputs sanitized key-value status strings, emits `::notice::` sample markers, and exits 0/2.

## Defects — required
- `orphan` · scripts/quality_gate/resolve_pytest_signal.py:4 · Shadow observation tool intended for workflow integration, but has no calling references in in-scope lifecycle commands.

## Observations
- Resolves check-status ambiguity caused by GitHub branch protection: both `test` and `skip-tests` jobs declare `name: Run Python Tests`, but only inspecting step names (`Run pytest` vs `Skip tests (no Python test inputs changed)`) reveals whether tests actually executed.
- Subprocess invocations of `gh` are strictly isolated without shell execution (`run_gh`).
- Uses sanitized output parsing to avoid log injection vulnerabilities.

## Context cost
20467 bytes, approximately 5100 tokens.
