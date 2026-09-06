---
package: rjm
path: scripts/ci/ruleset_context_drift.py
type: script
bytes: 8063
unit: inv-rjm-206
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/ruleset_context_drift.py, sha256: 56755ce625991eaa7f74bbf22bcef3c07df5e6257092da96e537c4cb4875062d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/ruleset_context_drift.py

## Purpose — required, verbatim
> "Detect and alert on required-context drift from the live GitHub ruleset." — scripts/ci/ruleset_context_drift.py:2

## Design intent — required
Prevents silent divergence between required status checks enforced by GitHub repository rulesets and the checks expected by merge group readiness gates and CI workflows. Queries the live GitHub ruleset via `scripts.github_core.checks_rollup`, compares them against the pinned list in `scripts.ci.ruleset_required_contexts`, and if differences exist, formats an actionable Markdown alert detailing added and removed contexts along with instructions to update the baseline and run tests. Can optionally open or update a GitHub tracking issue via `publish_alert`.

## Phase — required
none

## Inputs — required
- `--alert`: CLI flag to create or update an alert issue when drift is found — scripts/ci/ruleset_context_drift.py:284
- `RUNNER_TEMP`: Environment variable required when `--alert` is set — scripts/ci/ruleset_context_drift.py:196
- Pinned contexts from `REQUIRED_CONTEXTS` — scripts/ci/ruleset_context_drift.py:258
- Live contexts queried via `query_live_contexts` — scripts/ci/ruleset_context_drift.py:253

## Outputs — required
- Markdown alert body rendered to stdout — scripts/ci/ruleset_context_drift.py:269
- GitHub issue created or comment updated when `--alert` is specified — scripts/ci/ruleset_context_drift.py:214-246

## Invokes — required
- script ruleset_required_contexts — scripts/ci/ruleset_context_drift.py:27
- script checks_rollup — scripts/ci/ruleset_context_drift.py:34

## Invoked by — required
- `.github/workflows/ruleset-drift.yml` (CI workflow, excluded from lifecycle analysis)

## Concepts named — required, verbatim
- `ADR-035` — scripts/ci/ruleset_context_drift.py:4 — used here
- `ALERT_MARKER` — scripts/ci/ruleset_context_drift.py:42 — defined here
- `REQUIRED_CONTEXTS` — scripts/ci/ruleset_context_drift.py:31 — used here
- `RULESET_ID` — scripts/ci/ruleset_context_drift.py:32 — used here
- `ruleset_required_contexts` — scripts/ci/ruleset_context_drift.py:27 — used here

## Structure
- module docstring — scripts/ci/ruleset_context_drift.py:2-10
- query_live_contexts — scripts/ci/ruleset_context_drift.py:47
- compare_contexts — scripts/ci/ruleset_context_drift.py:56
- _format_contexts — scripts/ci/ruleset_context_drift.py:64
- render_alert — scripts/ci/ruleset_context_drift.py:70
- _run_issue_skill — scripts/ci/ruleset_context_drift.py:122
- _find_existing_alert — scripts/ci/ruleset_context_drift.py:166
- publish_alert — scripts/ci/ruleset_context_drift.py:194
- run — scripts/ci/ruleset_context_drift.py:250
- build_parser — scripts/ci/ruleset_context_drift.py:277
- main — scripts/ci/ruleset_context_drift.py:289

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/ruleset_context_drift.py`, language: Python, lines: 296
- documented invocation: `python3 scripts/ci/ruleset_context_drift.py [--alert]`
- executed: yes
- actual command: `python3 sources/rjm/scripts/ci/ruleset_context_drift.py`
- stdout: `Compared 9 live contexts with 9 pinned contexts. No required-context drift detected.`
- actual exit code: 0
- documented exit codes:
  > "0 - live and pinned contexts match" — scripts/ci/ruleset_context_drift.py:5
  > "1 - drift detected and alert published when requested" — scripts/ci/ruleset_context_drift.py:6
  > "2 - local configuration error" — scripts/ci/ruleset_context_drift.py:7
  > "3 - GitHub API or issue operation failed" — scripts/ci/ruleset_context_drift.py:8
  > "4 - GitHub authentication failed" — scripts/ci/ruleset_context_drift.py:9
  Actual exit paths in code:
  `return EXIT_EXTERNAL` — scripts/ci/ruleset_context_drift.py:256
  `return EXIT_OK` — scripts/ci/ruleset_context_drift.py:266
  `return EXIT_DRIFT` — scripts/ci/ruleset_context_drift.py:271, 274
  Returns exit code from `publish_alert` which passes through exit codes (`EXIT_CONFIG`, `EXIT_EXTERNAL`, 4) — scripts/ci/ruleset_context_drift.py:149, 199, 206, 274
- for validators/gates: can exit non-zero (exits 1 on drift, 2 on config error, 3 on API failure, 4 on auth failure); clean on default branch
- does the output match what the documentation claims: yes, queries live ruleset, compares against pinned baseline, and exits 0 when in sync

## Defects — required
none

## Observations
Idempotent alert publication: queries existing open issues titled `ALERT_TITLE` and updates the marked comment with `ALERT_MARKER` rather than spamming duplicate issues.

## Context cost
Bytes: 8063 + loads `ruleset_required_contexts.py` (898 bytes) and `checks_rollup.py` (5207 bytes). Approximate tokens: ~3800.
