---
package: rjm
path: scripts/ci/drift_write_summary.py
type: script
bytes: 1932
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/drift_write_summary.py, sha256: 2f1c81b0c3802b7e47ef4e4aa76a1664ec5d97998c4382e31001515c9703317c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/drift_write_summary.py

## Purpose — required, verbatim
> "Write drift detection summary to GITHUB_STEP_SUMMARY." — scripts/ci/drift_write_summary.py:2

## Design intent — required
Formats and appends markdown drift detection results to the GitHub Actions job step summary file (`$GITHUB_STEP_SUMMARY`), or prints to stdout when running locally, replacing inline bash conditionals per ADR-006 and ADR-035.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"DRIFT_DETECTED"` — scripts/ci/drift_write_summary.py:52
- Environment variable `"GITHUB_STEP_SUMMARY"` — scripts/ci/drift_write_summary.py:53

## Outputs — required
- Markdown summary heading `"## Drift Detection Summary"` — scripts/ci/drift_write_summary.py:26 appended to `GITHUB_STEP_SUMMARY` or stdout
- Warning message `":warning: **Drift detected** in Claude agents"` — scripts/ci/drift_write_summary.py:29 when drift detected

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`drift-detection` — scripts/ci/drift_write_summary.py:4 — used here
`ADR-006` — scripts/ci/drift_write_summary.py:4 — used here
`ADR-035` — scripts/ci/drift_write_summary.py:12 — used here
`DRIFT_DETECTED` — scripts/ci/drift_write_summary.py:9 — used here
`GITHUB_STEP_SUMMARY` — scripts/ci/drift_write_summary.py:10 — used here
`EXIT_OK` — scripts/ci/drift_write_summary.py:21 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/drift_write_summary.py`, language: Python 3, lines: 70
- documented invocation: `"Write drift detection summary to GITHUB_STEP_SUMMARY." — scripts/ci/drift_write_summary.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/drift_write_summary.py`, abridged stdout: `## Drift Detection Summary ... :white_check_mark: **No new drift**`, **actual exit code**: 0; when run with `DRIFT_DETECTED=true`: `DRIFT_DETECTED=true python3 scripts/ci/drift_write_summary.py`, abridged stdout: `## Drift Detection Summary ... :warning: **Drift detected** in Claude agents`, **actual exit code**: 0
- documented exit codes: `"0 - summary written" — scripts/ci/drift_write_summary.py:13`; actual exit paths: `scripts/ci/drift_write_summary.py:60` (`return EXIT_OK` [0]), `scripts/ci/drift_write_summary.py:69` (`sys.exit(main())`)
- for validators/gates: reporting script; always exits 0 after appending or printing summary
- does the output match what the documentation claims? yes, writes markdown summary based on DRIFT_DETECTED value

## Defects — required
none

## Observations
Simple idempotent summary builder supporting both GitHub Actions step summaries and interactive console runs.

## Context cost
1932 bytes, approximately 483 tokens.
