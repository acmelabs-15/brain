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
verified: 2026-09-05 quote-check+coverage
---

# scripts/quality_gate/resolve_pytest_signal.py

## Purpose — required, verbatim
> "Resolve the authoritative pytest.yml verdict for a pull request head." — scripts/quality_gate/resolve_pytest_signal.py:2

## Design intent — required
Operates in shadow mode (Issue #4822 Phase 1) to prepare for eliminating redundant pytest executions in CI. Currently, `ai-pr-quality-gate.yml` re-runs the entire test suite simply to provide a test verdict string to the QA agent; this script queries GitHub Actions API via `gh` to read the verdict already computed by `pytest.yml` for the same head commit. It distinguishes actual test suite executions from pass-through/skip jobs by inspecting internal step names rather than check names (which share identical labels due to branch protection requirements), verifies PR binding and commit freshness, and compares the remote shadow verdict against the local run without altering workflow outcomes.

## Phase — required
rjm:build

## Inputs — required
- `--repo` or `GITHUB_REPOSITORY`: repository owner and name
- `--pr` or `PR_NUMBER`: pull request number
- `--expected-head-sha` or `EXPECTED_HEAD_SHA`: "The 40 hex head sha the caller believes it tested." — scripts/quality_gate/resolve_pytest_signal.py:453
- `--local-status` or `LOCAL_PYTEST_STATUS`: local pytest execution status to compare against
- `--workflow`: workflow filename (defaults to `pytest.yml`)
- `--job-name`: job display name (defaults to `Run Python Tests`)
- `--timeout`: API call timeout in seconds (default: 60.0s)
- `GITHUB_OUTPUT`: path to GitHub Actions step output file

## Outputs — required
- GitHub Actions output parameters written to `$GITHUB_OUTPUT`:
  - `shadow_pytest_status`: resolved status (`PASS`, `FAIL`, `SKIPPED`, `PENDING`, `STALE`, `CANCELLED`, `UNKNOWN`)
  - `shadow_pytest_reason`: sanitized explanation string
  - `shadow_pytest_agreement`: agreement status (`AGREE`, `DISAGREE`, `UNCOMPARED`)
  - `shadow_pytest_compared`: boolean string (`true` or `false`)
- GitHub Actions notice annotation: "::notice::{SAMPLE_MARKER} status={resolution.status} " — scripts/quality_gate/resolve_pytest_signal.py:429
- Process exit code (0 on completed shadow evaluation, 2 on configuration error)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `shadow mode` — scripts/quality_gate/resolve_pytest_signal.py:4 — used here
- `pytest.yml` — scripts/quality_gate/resolve_pytest_signal.py:2 — used here
- `ai-pr-quality-gate.yml` — scripts/quality_gate/resolve_pytest_signal.py:4 — used here
- `ADR-035` — scripts/quality_gate/resolve_pytest_signal.py:27 — used here
- `EXIT_OK` — scripts/quality_gate/resolve_pytest_signal.py:47 — defined here
- `EXIT_CONFIG` — scripts/quality_gate/resolve_pytest_signal.py:48 — defined here
- `STATUS_PASS` — scripts/quality_gate/resolve_pytest_signal.py:50 — defined here
- `STATUS_FAIL` — scripts/quality_gate/resolve_pytest_signal.py:51 — defined here
- `STATUS_SKIPPED` — scripts/quality_gate/resolve_pytest_signal.py:52 — defined here
- `STATUS_PENDING` — scripts/quality_gate/resolve_pytest_signal.py:53 — defined here
- `STATUS_STALE` — scripts/quality_gate/resolve_pytest_signal.py:54 — defined here
- `STATUS_CANCELLED` — scripts/quality_gate/resolve_pytest_signal.py:55 — defined here
- `STATUS_UNKNOWN` — scripts/quality_gate/resolve_pytest_signal.py:56 — defined here
- `STATUS_UNCLASSIFIED` — scripts/quality_gate/resolve_pytest_signal.py:57 — defined here
- `SAMPLE_MARKER` — scripts/quality_gate/resolve_pytest_signal.py:76 — defined here
- `Resolution` — scripts/quality_gate/resolve_pytest_signal.py:148 — defined here
- `Run` — scripts/quality_gate/resolve_pytest_signal.py:154 — defined here
- `Job` — scripts/quality_gate/resolve_pytest_signal.py:161 — defined here
- `binds_to_pr` — scripts/quality_gate/resolve_pytest_signal.py:212 — defined here
- `parse_runs` — scripts/quality_gate/resolve_pytest_signal.py:232 — defined here
- `classify` — scripts/quality_gate/resolve_pytest_signal.py:287 — defined here
- `job_status` — scripts/quality_gate/resolve_pytest_signal.py:298 — defined here
- `aggregate` — scripts/quality_gate/resolve_pytest_signal.py:313 — defined here
- `resolve` — scripts/quality_gate/resolve_pytest_signal.py:351 — defined here
- `compare` — scripts/quality_gate/resolve_pytest_signal.py:396 — defined here
- `emit` — scripts/quality_gate/resolve_pytest_signal.py:408 — defined here
- `main` — scripts/quality_gate/resolve_pytest_signal.py:446 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/resolve_pytest_signal.py`, language: Python 3, lines: 496
- documented invocation: none (invoked as an observational shadow step in CI)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/quality_gate/resolve_pytest_signal.py --repo owner/repo --pr 123 --expected-head-sha 0123456789abcdef0123456789abcdef01234567`
  abridged stdout: `gh api returned exit 1 for the live head ref\nshadow_pytest_status=UNKNOWN\nshadow_pytest_reason=the live pull request head could not be read\nshadow_pytest_agreement=UNCOMPARED\nshadow_pytest_compared=false\n::notice::shadow-pytest-sample status=UNKNOWN agreement=UNCOMPARED compared=false\n::warning::Shadow pytest signal collected no sample.`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes:
  - "Exit codes (ADR-035): 0 once a status is resolved and emitted, which is EVERY" — scripts/quality_gate/resolve_pytest_signal.py:27
  - "never change the job's verdict; 2 for a config error (bad repo, PR number, SHA," — scripts/quality_gate/resolve_pytest_signal.py:29
  Actual exit paths in code:
  - `return _config_error(...)` (returns `EXIT_CONFIG = 2`) — scripts/quality_gate/resolve_pytest_signal.py:467
  - `return EXIT_OK` (returns 0) — scripts/quality_gate/resolve_pytest_signal.py:487
  - `return EXIT_OK` (returns 0) — scripts/quality_gate/resolve_pytest_signal.py:491
  - `sys.exit(main())` — scripts/quality_gate/resolve_pytest_signal.py:495
- for validators/gates: can it exit non-zero? yes (exits 2 on invalid configuration inputs; shadow resolution itself always exits 0 to never block CI). Does it fail on the source repo's own default branch? exits 2 if required args/env vars are missing.
- does the output match what the documentation claims? yes, outputs sanitized key-value lines and notice annotations matching the specification.

## Defects — required
none

## Observations
Solves a subtle GitHub Actions quirk: required status checks demand a `success` conclusion, forcing skip jobs (`skip-tests`) to declare the identical name (`Run Python Tests`) as the test runner job (`test`). To reliably tell them apart, `resolve_pytest_signal.py` classifies jobs by inspecting their constituent step names (`Run pytest` vs `Skip tests (no Python test inputs changed)`).

## Context cost
20467 bytes (~5116 tokens).
