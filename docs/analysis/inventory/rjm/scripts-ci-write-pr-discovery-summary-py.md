---
package: rjm
path: scripts/ci/write_pr_discovery_summary.py
type: script
bytes: 2174
unit: inv-rjm-211
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/write_pr_discovery_summary.py, sha256: 606ee2545ae45f5844c9c52ffd9fe276782f0d605abe4e4e6eb0b15617a11241}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/write_pr_discovery_summary.py

## Purpose — required, verbatim
> "Write PR discovery summary to GITHUB_STEP_SUMMARY." — scripts/ci/write_pr_discovery_summary.py:1

## Design intent — required
CI workflow reporting utility that replaces an inline PowerShell block in `pr-maintenance.yml` (ADR-006 burn-down). It extracts scan statistics from the `SUMMARY_JSON` environment variable and formats a GitHub Actions Step Summary containing open PR counts, action requirements, blocked counts, and an actionable PR table indicating conflict states.

## Phase — required
cross-phase

## Inputs — required
- Destination file path via environment variable `GITHUB_STEP_SUMMARY` — scripts/ci/write_pr_discovery_summary.py:57
- PR scan metrics payload via environment variable `SUMMARY_JSON` — scripts/ci/write_pr_discovery_summary.py:62

## Outputs — required
- Formatted markdown tables appended to summary destination file — scripts/ci/write_pr_discovery_summary.py:5,72
- Error message to stderr when summary path is missing — scripts/ci/write_pr_discovery_summary.py:59
- Process exit code: 0 on success, 2 on configuration error — scripts/ci/write_pr_discovery_summary.py:8-9

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `pr-maintenance.yml` — scripts/ci/write_pr_discovery_summary.py:3 — used here
- `ADR-006` — scripts/ci/write_pr_discovery_summary.py:3 — used here
- `ADR-035` — scripts/ci/write_pr_discovery_summary.py:7 — used here
- `EXIT_SUCCESS` — scripts/ci/write_pr_discovery_summary.py:19 — defined here
- `EXIT_CONFIG` — scripts/ci/write_pr_discovery_summary.py:20 — defined here
- `SUMMARY_JSON` — scripts/ci/write_pr_discovery_summary.py:4 — used here

## Structure
- build_summary(parsed: dict[str, Any]) -> str
- main() -> int

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/write_pr_discovery_summary.py`, Python 3, 79 lines
- **documented invocation:**
  > "Reads SUMMARY_JSON from the environment, builds a markdown summary," — scripts/ci/write_pr_discovery_summary.py:4
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/ci/write_pr_discovery_summary.py`
- **actual exit code:** 2
- **abridged stdout/stderr:** `ERROR: GITHUB_STEP_SUMMARY not set`
- **documented exit codes:**
  > "0 - Success" — scripts/ci/write_pr_discovery_summary.py:8
  > "2 - Configuration error (GITHUB_STEP_SUMMARY not set)" — scripts/ci/write_pr_discovery_summary.py:9
  vs. actual exit paths:
  - `scripts/ci/write_pr_discovery_summary.py:60`: `return EXIT_CONFIG` (when `GITHUB_STEP_SUMMARY` is empty)
  - `scripts/ci/write_pr_discovery_summary.py:74`: `return EXIT_SUCCESS` (when summary is appended)
  - `scripts/ci/write_pr_discovery_summary.py:78`: `sys.exit(main())`
- **validators/gates:** can exit non-zero: yes (exits 2 when `GITHUB_STEP_SUMMARY` is not configured). Fails on source repo default branch: yes (exits 2 without `GITHUB_STEP_SUMMARY`).
- **output match:** yes, parses JSON payload with fallback to empty metrics and renders Markdown tables.

## Defects — required
none

## Observations
Implements safe JSON decoding fallback (lines 64-67), gracefully treating invalid or empty `SUMMARY_JSON` strings as empty data dictionaries rather than crashing the workflow.

## Context cost
File size: 2174 bytes (~550 tokens). Standard library only.
