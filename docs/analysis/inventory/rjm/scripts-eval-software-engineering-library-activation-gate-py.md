---
package: rjm
path: scripts/eval/software_engineering_library_activation_gate.py
type: script
bytes: 8686
unit: inv-rjm-238
in_scope_via: scripts/eval/software_engineering_library_activation_ci.py
aliases: []
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/software_engineering_library_activation_gate.py

## Purpose — required, verbatim
> "Persist rollback-trigger state for software-engineering-library activation evals." — scripts/eval/software_engineering_library_activation_gate.py:2

## Design intent — required
Maintains cross-run state tracking for consecutive activation failures across the eight ADR-088 moved software engineering book references (`clean-architecture`, `domain-driven-design`, etc.). It processes evaluation result summaries from `eval-rule-activation.py`, increments failure streaks when a reference yields a rollback-qualifying verdict (`FAIL_THRESHOLD`, `FAIL_NO_DELTA`, `NO_POSITIVE_CASES`, `NO_RESULT`), resets streaks to zero on `PASS`, and ignores non-rule measurement failures like `FAIL_JUDGE_ERRORS`. When any reference reaches the threshold (default: 2 consecutive failures), it signals threshold exceeded and optionally exits with non-zero exit code 1 to fail CI and trigger rollback issue creation. Without this stateful gate, activation failures across weekly CI runs would remain isolated data points without an enforceable, automated rollback mechanism.

## Phase — required
none

## Inputs — required
- CLI argument `--results`: path to eval-rule-activation JSON output — scripts/eval/software_engineering_library_activation_gate.py:195
- CLI argument `--state`: path to previous persistent state JSON — scripts/eval/software_engineering_library_activation_gate.py:196
- CLI argument `--output-state`: path to write updated persistent state JSON — scripts/eval/software_engineering_library_activation_gate.py:197
- CLI argument `--report`: optional path to write markdown gate report — scripts/eval/software_engineering_library_activation_gate.py:198
- CLI argument `--threshold-report`: optional path to write threshold report JSON — scripts/eval/software_engineering_library_activation_gate.py:199
- CLI argument `--threshold`: consecutive activation failure limit (default: 2) — scripts/eval/software_engineering_library_activation_gate.py:200
- CLI argument `--run-id`: run identifier (default: GITHUB_RUN_ID or "local") — scripts/eval/software_engineering_library_activation_gate.py:201
- CLI argument `--checked-at`: ISO-8601 UTC timestamp (default: current UTC time) — scripts/eval/software_engineering_library_activation_gate.py:202
- CLI argument `--fail-on-threshold`: flag to exit 1 if threshold is exceeded — scripts/eval/software_engineering_library_activation_gate.py:203
- JSON files read via `load_json`: results JSON and prior state JSON — scripts/eval/software_engineering_library_activation_gate.py:147

## Outputs — required
- JSON state file written to path specified by `--output-state`: schema version 1, owner `agent-qa`, cadence, rollback_threshold, restoration_pr_policy, and per-reference consecutive failure counts — scripts/eval/software_engineering_library_activation_gate.py:59-66, 223
- Optional JSON threshold report written to `--threshold-report` with threshold evaluation details — scripts/eval/software_engineering_library_activation_gate.py:137-144, 225
- Optional markdown report written to `--report` rendered with markdown summary table and rollback warning — scripts/eval/software_engineering_library_activation_gate.py:167-190, 228
- Rendered report printed to stdout — scripts/eval/software_engineering_library_activation_gate.py:229
- Exit codes:
  - 0: success (threshold not exceeded or `--fail-on-threshold` not set) — scripts/eval/software_engineering_library_activation_gate.py:232
  - 1: rollback threshold exceeded when `--fail-on-threshold` is set — scripts/eval/software_engineering_library_activation_gate.py:231
  - 2: configuration or input file read/parse error — scripts/eval/software_engineering_library_activation_gate.py:214

## Invokes — required
none

## Invoked by — required
- script scripts/eval/software_engineering_library_activation_ci.py — scripts/eval/software_engineering_library_activation_ci.py:87
- doc scripts/eval/README.md — scripts/eval/README.md:336

## Concepts named — required, verbatim
- `software-engineering-library` — scripts/eval/software_engineering_library_activation_gate.py:2 — used here
- `rollback-trigger` — scripts/eval/software_engineering_library_activation_gate.py:2 — defined here
- `progressive-disclosure` — scripts/eval/software_engineering_library_activation_gate.py:5 — used here
- `consecutive activation failures` — scripts/eval/software_engineering_library_activation_gate.py:129 — defined here
- `ADR-088` — scripts/eval/software_engineering_library_activation_gate.py:6 — used here
- `MOVED_REFERENCE_IDS` — scripts/eval/software_engineering_library_activation_gate.py:20 — defined here
- `clean-architecture` — scripts/eval/software_engineering_library_activation_gate.py:21 — used here
- `domain-driven-design` — scripts/eval/software_engineering_library_activation_gate.py:22 — used here
- `enterprise-patterns` — scripts/eval/software_engineering_library_activation_gate.py:23 — used here
- `refactoring` — scripts/eval/software_engineering_library_activation_gate.py:24 — used here
- `release-it` — scripts/eval/software_engineering_library_activation_gate.py:25 — used here
- `philosophy-of-software-design` — scripts/eval/software_engineering_library_activation_gate.py:26 — used here
- `data-intensive-applications` — scripts/eval/software_engineering_library_activation_gate.py:27 — used here
- `working-with-legacy-code` — scripts/eval/software_engineering_library_activation_gate.py:28 — used here
- `OWNER` — scripts/eval/software_engineering_library_activation_gate.py:31 — defined here
- `agent-qa` — scripts/eval/software_engineering_library_activation_gate.py:31 — used here
- `CADENCE` — scripts/eval/software_engineering_library_activation_gate.py:32 — defined here
- `DEFAULT_THRESHOLD` — scripts/eval/software_engineering_library_activation_gate.py:33 — defined here
- `ROLLBACK_VERDICTS` — scripts/eval/software_engineering_library_activation_gate.py:34 — defined here
- `FAIL_THRESHOLD` — scripts/eval/software_engineering_library_activation_gate.py:34 — used here
- `FAIL_NO_DELTA` — scripts/eval/software_engineering_library_activation_gate.py:34 — used here
- `NO_POSITIVE_CASES` — scripts/eval/software_engineering_library_activation_gate.py:34 — used here
- `NO_RESULT` — scripts/eval/software_engineering_library_activation_gate.py:34 — used here
- `EXTERNAL_VERDICTS` — scripts/eval/software_engineering_library_activation_gate.py:35 — defined here
- `FAIL_JUDGE_ERRORS` — scripts/eval/software_engineering_library_activation_gate.py:35 — used here
- `RESTORATION_PR_POLICY` — scripts/eval/software_engineering_library_activation_gate.py:36 — defined here
- `restoration PR` — scripts/eval/software_engineering_library_activation_gate.py:39 — used here
- `always-on rule surface` — scripts/eval/software_engineering_library_activation_gate.py:40 — used here
- `update_state` — scripts/eval/software_engineering_library_activation_gate.py:105 — defined here
- `evaluate_thresholds` — scripts/eval/software_engineering_library_activation_gate.py:128 — defined here
- `render_report` — scripts/eval/software_engineering_library_activation_gate.py:166 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/software_engineering_library_activation_gate.py`, language: Python, lines: 237
- documented invocation: "scripts/eval/software_engineering_library_activation_gate.py" — scripts/eval/README.md:336
- **executed:** yes
- actual command run: `python3 scripts/eval/software_engineering_library_activation_gate.py --help`
  abridged stdout:
  ```
  usage: software_engineering_library_activation_gate.py [-h] --results RESULTS
                                                         --state STATE
                                                         --output-state OUTPUT_STATE
                                                         [--report REPORT]
                                                         [--threshold-report THRESHOLD_REPORT]
                                                         [--threshold THRESHOLD]
                                                         [--run-id RUN_ID]
                                                         [--checked-at CHECKED_AT]
                                                         [--fail-on-threshold]

  Persist rollback-trigger state for software-engineering-library activation
  evals.
  ```
  **actual exit code:** 0
- documented exit codes:
  No exit codes in module docstring; actual exit paths:
  - `sys.exit(main())` — scripts/eval/software_engineering_library_activation_gate.py:236
  - `return 2` — scripts/eval/software_engineering_library_activation_gate.py:214
  - `return 1` — scripts/eval/software_engineering_library_activation_gate.py:231
  - `return 0` — scripts/eval/software_engineering_library_activation_gate.py:232
- for validators/gates: can exit non-zero (exits 1 on threshold breach with `--fail-on-threshold`, 2 on bad JSON/missing files). Does not fail on source repo default branch when tested with clean passing data (`test_software_engineering_library_activation_gate.py` passed all 33 tests).
- does the output match what the documentation claims? yes, renders markdown table and evaluates consecutive failure thresholds as documented in `scripts/eval/README.md`.

## Defects — required
none

## Observations
- Distinguishes rule underperformance verdicts (`FAIL_THRESHOLD`, `FAIL_NO_DELTA`, `NO_POSITIVE_CASES`, `NO_RESULT`) which increment consecutive failure streaks, from external measurement failures (`FAIL_JUDGE_ERRORS`, `FAIL_ROUTE_MISSED_TARGET`, etc.) which do not count against the rule.
- Encapsulates governance metadata directly in the state JSON schema (`owner: agent-qa`, `cadence`, `restoration_pr_policy`), ensuring the state file is self-describing.

## Context cost
8686 bytes (237 lines), approximately 2170 tokens. Isolated script with no imports outside Python standard library (`argparse`, `json`, `os`, `sys`, `datetime`, `pathlib`, `typing`).
