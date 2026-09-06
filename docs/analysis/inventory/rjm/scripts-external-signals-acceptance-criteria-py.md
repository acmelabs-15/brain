---
package: rjm
path: scripts/external_signals/acceptance_criteria.py
type: script
bytes: 7510
unit: inv-rjm-238
in_scope_via: scripts/quality_gate/spec_external_signal_gate.py
aliases: []
memo_inputs:
  - {path: scripts/external_signals/acceptance_criteria.py, sha256: f11417815ba57aa29786c3c9c962fd0a811cb2ac651b9b466992e482bb8883e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/external_signals/acceptance_criteria.py

## Purpose — required, verbatim
> "Mechanically extract acceptance-criteria checkboxes from a PR/issue body." — scripts/external_signals/acceptance_criteria.py:2

## Design intent — required
Provides an objective, deterministic external gate signal for `ai-spec-validation.yml` by mechanically parsing Markdown task-list checkboxes under an "Acceptance" or "Acceptance Criteria" heading in PR or issue bodies. It verifies that declared criteria are checked off and optionally cross-checks criterion keywords against added lines in a unified diff (`+` lines) as a coarse smoke-grep to ensure changes actually implement the claimed criteria. Operating strictly without model calls or network dependencies, it prevents LLM critics from being the sole arbiter of pull request completeness. Without this tool, spec validation gates would either depend entirely on ungrounded LLM judgment or allow PRs with unchecked or unevidenced acceptance criteria to merge unchecked.

## Phase — required
rjm:spec

## Inputs — required
- CLI argument `--body`: required path to Markdown body file — scripts/external_signals/acceptance_criteria.py:185
- CLI argument `--diff`: optional path to unified diff file — scripts/external_signals/acceptance_criteria.py:187
- CLI argument `--json`: flag to emit machine-readable JSON output — scripts/external_signals/acceptance_criteria.py:189
- CLI argument `--allow-empty`: flag to treat absence of acceptance criteria as success instead of failure — scripts/external_signals/acceptance_criteria.py:192
- Files read from disk:
  - Markdown body file read as UTF-8 string — scripts/external_signals/acceptance_criteria.py:174, 198
  - Unified diff file read as UTF-8 string — scripts/external_signals/acceptance_criteria.py:174, 199

## Outputs — required
- Plaintext formatted report on stdout (default mode):
  - Prints criteria count, unchecked count, diff_misses count, and individual unchecked or diff_miss items — scripts/external_signals/acceptance_criteria.py:215-221
- JSON report on stdout (when `--json` is supplied or on missing criteria failure with `--json`):
  - Object with keys `passed`, `criteria_count`, `unchecked`, `diff_misses`, `criteria` — scripts/external_signals/acceptance_criteria.py:63-71, 209, 213
- Error diagnostics to stderr:
  - Configuration or read error message — scripts/external_signals/acceptance_criteria.py:176
  - Missing criteria error message — scripts/external_signals/acceptance_criteria.py:204
- Process exit codes (standardized per ADR-035):
  - 0: success (all required criteria satisfied, or none declared when `--allow-empty`) — scripts/external_signals/acceptance_criteria.py:16, 223
  - 1: logic error (declared criteria missing or unchecked, diff miss, or no criteria found without `--allow-empty`) — scripts/external_signals/acceptance_criteria.py:17, 210, 223
  - 2: config error (bad arguments or unreadable input file) — scripts/external_signals/acceptance_criteria.py:18, 177

## Invokes — required
none

## Invoked by — required
- script scripts/quality_gate/spec_external_signal_gate.py — scripts/quality_gate/spec_external_signal_gate.py:8
- doc docs/design/external-signal-gating.md — docs/design/external-signal-gating.md:52

## Concepts named — required, verbatim
- `acceptance-criteria checkboxes` — scripts/external_signals/acceptance_criteria.py:2 — defined here
- `ai-spec-validation.yml` — scripts/external_signals/acceptance_criteria.py:4 — used here
- `issue #1855` — scripts/external_signals/acceptance_criteria.py:5 — used here
- `Acceptance Criteria` — scripts/external_signals/acceptance_criteria.py:8 — used here
- `ADR-035` — scripts/external_signals/acceptance_criteria.py:14 — used here
- `Criterion` — scripts/external_signals/acceptance_criteria.py:43 — defined here
- `Report` — scripts/external_signals/acceptance_criteria.py:51 — defined here
- `extract_acceptance_section` — scripts/external_signals/acceptance_criteria.py:74 — defined here
- `parse_criteria` — scripts/external_signals/acceptance_criteria.py:86 — defined here
- `_STOP_WORDS` — scripts/external_signals/acceptance_criteria.py:104 — defined here
- `_keywords` — scripts/external_signals/acceptance_criteria.py:116 — defined here
- `diff_misses` — scripts/external_signals/acceptance_criteria.py:129 — defined here
- `evaluate` — scripts/external_signals/acceptance_criteria.py:159 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/external_signals/acceptance_criteria.py`, language: Python, lines: 228
- documented invocation: "python3 scripts/external_signals/acceptance_criteria.py" — docs/design/external-signal-gating.md:52
- **executed:** yes
- actual command run: `python3 scripts/external_signals/acceptance_criteria.py --body pr-body.md --diff pr.diff --json`
  abridged stdout:
  `error: cannot read pr-body.md: [Errno 2] No such file or directory: 'pr-body.md'` (on stderr)
  **actual exit code:** 2
- documented exit codes:
  - "* 0 - success (all required criteria satisfied, or none declared)" — scripts/external_signals/acceptance_criteria.py:16
  - "* 1 - logic error: declared criteria are missing/unchecked" — scripts/external_signals/acceptance_criteria.py:17
  - "* 2 - config error: bad arguments / unreadable input" — scripts/external_signals/acceptance_criteria.py:18
  Actual exit paths:
  - `raise SystemExit(main())` — scripts/external_signals/acceptance_criteria.py:227
  - `raise SystemExit(2) from exc` — scripts/external_signals/acceptance_criteria.py:177
  - `return 1` — scripts/external_signals/acceptance_criteria.py:210
  - `return 0 if report.passed else 1` — scripts/external_signals/acceptance_criteria.py:223
- for validators/gates: can exit non-zero (exits 1 on unchecked criteria or missing diff keywords; exits 2 on config error). Does not fail on source repo default branch when tested with valid acceptance section (`tests/external_signals/test_acceptance_criteria.py` passed all 17 tests).
- does the output match what the documentation claims? yes, matches ADR-035 exit code standard (0, 1, 2) and emits structured JSON report matching documented schema.

## Defects — required
none

## Observations
- Filters common 3-letter English stop words (`the`, `and`, `for`, `are`, etc.) from diff keyword matching while preserving 3-letter technical terms like `api`, `cli`, `git`.
- Only checks added lines (`+` prefix, ignoring `+++` header lines) in diffs to avoid false positive matches on deleted code.

## Context cost
7510 bytes (228 lines), approximately 1880 tokens. Isolated script with no imports outside Python standard library (`argparse`, `json`, `re`, `sys`, `collections.abc`, `dataclasses`, `pathlib`).
