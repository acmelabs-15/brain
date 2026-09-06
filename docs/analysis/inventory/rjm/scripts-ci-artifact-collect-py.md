---
package: rjm
path: scripts/ci/artifact_collect.py
type: script
bytes: 2796
unit: inv-rjm-198
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/artifact_collect.py, sha256: 910064a4608b09ccb0a153a4362a2c48fda3e52051bc40af061d2d6201289f15}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/artifact_collect.py

## Purpose — required, verbatim
> "Collect recently modified artifacts from agent directories." — scripts/ci/artifact_collect.py:2

## Design intent — required
CI workflow utility that replaces an inline bash step in `artifact-insight-scanner.yml` to satisfy ADR-006 ("Thin Workflows, Testable Modules"). It scans agent workspace subdirectories (`.agents/sessions`, `.agents/retrospective`, `.agents/planning`, `.agents/critique`, `.agents/scratch`) for markdown and JSON artifacts modified within a configurable rolling lookback window (`SCAN_DEPTH_DAYS`, defaulting to 7 days). It writes a deterministic, sorted list of matching artifact file paths to `artifact-list.txt` in the runner temporary directory and exports the file path and count via `GITHUB_OUTPUT` (falling back to stdout when running locally). Without this script, retrospective and insight workflows would need complex shell `find` and timestamp filtering commands directly in workflow YAML, impeding local testing and reproducibility.

## Phase — required
rjm:test

## Inputs — required
- Lookback window in days via environment variable `SCAN_DEPTH_DAYS` (default 7) — scripts/ci/artifact_collect.py:8,69
- Runner temporary directory via environment variable `RUNNER_TEMP` (default ".") — scripts/ci/artifact_collect.py:9,70
- GitHub Actions output file path via environment variable `GITHUB_OUTPUT` — scripts/ci/artifact_collect.py:10,29
- Scans artifact paths under agent directories: `.agents/sessions`, `.agents/retrospective`, `.agents/planning`, `.agents/critique`, and `.agents/scratch` — scripts/ci/artifact_collect.py:44-49

## Outputs — required
- File listing recently modified artifact paths written to `artifact-list.txt` — scripts/ci/artifact_collect.py:73
- Documented output parameter `artifact_file` — scripts/ci/artifact_collect.py:13
- Documented output parameter `artifact_count` — scripts/ci/artifact_collect.py:14
- Process return code 0 (collection complete; zero artifacts is still treated as success) — scripts/ci/artifact_collect.py:17,86

## Invokes — required
none

## Invoked by — required
- script scripts/ci/artifact_collect.py — scripts/bulk_cancel_guard.py:93

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/artifact_collect.py:5 — used here
- `ADR-035` — scripts/ci/artifact_collect.py:16 — used here
- `collect_artifacts` — scripts/ci/artifact_collect.py:37 — defined here
- `write_github_output` — scripts/ci/artifact_collect.py:27 — defined here

## Structure
(no section headings in script; top-level imports, helper function `write_github_output`, artifact discovery function `collect_artifacts`, runner `run`, and entry point `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/artifact_collect.py`, language: Python, lines: 96
- documented invocation: none explicit (configures via environment variables `SCAN_DEPTH_DAYS`, `RUNNER_TEMP`, `GITHUB_OUTPUT`)
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/artifact_collect.py`
- abridged stdout: `Collecting artifacts modified in last 7 days...`
- actual exit code: 0
- documented exit codes:
  - "0 - collection complete (zero artifacts is still success)" — scripts/ci/artifact_collect.py:17
  vs. actual exit paths:
  - line 86: `return 0` (exit code 0)
  - line 95: `sys.exit(main())`
- for validators/gates: not a validator or gate; artifact collection script
- does the output match what the documentation claims: yes

## Defects — required
none

## Observations
Gracefully handles missing directories or inaccessible files during `rglob` traversal by skipping nonexistent base paths and catching `OSError` on `stat()` calls.

## Context cost
2796 bytes (~700 tokens).
