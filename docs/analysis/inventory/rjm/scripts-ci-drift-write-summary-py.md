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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/drift_write_summary.py

## Purpose — required, verbatim
> "Write drift detection summary to GITHUB_STEP_SUMMARY." — scripts/ci/drift_write_summary.py:2

## Design intent — required
Formats and publishes a GitHub Actions markdown job summary for agent drift detection runs, replacing inline shell script logic in `drift-detection.yml` (ADR-006). It renders a warning block when drift is detected or a checkmark message clarifying that baselined agent pairs remain tracked, appending the markdown report to `GITHUB_STEP_SUMMARY` or emitting it to stdout for local executions.

## Phase — required
none

## Inputs — required
- Environment variable `DRIFT_DETECTED` (`"true"` or `"false"`) — scripts/ci/drift_write_summary.py:9,52
- Environment variable `GITHUB_STEP_SUMMARY` (path to output summary file) — scripts/ci/drift_write_summary.py:10,53

## Outputs — required
- Markdown summary text appended to file path specified by `GITHUB_STEP_SUMMARY` or emitted to stdout — scripts/ci/drift_write_summary.py:57,59

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `drift-detection.yml` — scripts/ci/drift_write_summary.py:4 — used here
- `ADR-006` — scripts/ci/drift_write_summary.py:4 — used here
- `ADR-035` — scripts/ci/drift_write_summary.py:12 — used here
- `EXIT_OK` — scripts/ci/drift_write_summary.py:21 — defined here
- `build_summary` — scripts/ci/drift_write_summary.py:24 — defined here
- `run` — scripts/ci/drift_write_summary.py:50 — defined here
- `main` — scripts/ci/drift_write_summary.py:63 — defined here

## Structure
- Module docstring describing purpose, environment bindings, and exit codes (lines 2-15)
- Constant `EXIT_OK` (line 21)
- Markdown report generator `build_summary` (lines 24-48)
- Execution handler `run` writing to file or stdout (lines 50-61)
- Entry point `main` and invocation block (lines 63-70)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/drift_write_summary.py`
- **language:** Python 3
- **lines:** 70
- **documented invocation:** none explicit (executed in CI via `python3 scripts/ci/drift_write_summary.py`)
- **executed:** yes
- **command:** `DRIFT_DETECTED=true python3 sources/rjm/scripts/ci/drift_write_summary.py`
- **stdout:**
  ```markdown
  ## Drift Detection Summary

  :warning: **Drift detected** in Claude agents

  See the created/updated GitHub issue for details.

  ### Pairs Compared
  - `src/claude/` vs `src/vs-code-agents/`
  - `.claude/agents/` vs `.github/agents/`, scoped to agents whose prose comes from `templates/agents/`
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - `> "0 - summary written" — scripts/ci/drift_write_summary.py:13`
- **actual exit paths:**
  - `return EXIT_OK` — scripts/ci/drift_write_summary.py:60
  - `sys.exit(main())` — scripts/ci/drift_write_summary.py:69
- **for validators/gates:** Not a validator or gate; summary reporting script. Always writes summary and exits 0 (`EXIT_OK`).
- **output matches documentation:** yes, formats markdown summary according to drift detection state and appends to `GITHUB_STEP_SUMMARY` or prints to stdout.

## Defects — required
- orphan — scripts/ci/drift_write_summary.py:4 — not invoked by any in-scope file; replaces inline shell in out-of-scope drift-detection.yml CI workflow

## Observations
Lists compared agent directory pairs (`src/claude/` vs `src/vs-code-agents/` and `.claude/agents/` vs `.github/agents/`) in summary markdown, explicitly explaining that baselined pairs are tracked rather than fully in sync.

## Context cost
1,932 bytes source (~480 tokens).
