---
package: rjm
path: scripts/ci/artifact_write_summary.py
type: script
bytes: 1919
unit: inv-rjm-199
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/artifact_write_summary.py, sha256: 4782b55fb2b1693c5333d67458add91c9e635e05334eb17e88f2fcae05b7bd62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/artifact_write_summary.py

## Purpose — required, verbatim
> "Write artifact insight scanner results to GITHUB_STEP_SUMMARY." — scripts/ci/artifact_write_summary.py:2

## Design intent — required
Formats artifact insight scanner execution metrics (scanned artifact count, insights count, AI verdict, dry run status) into a GitHub Actions step summary Markdown table and appends it to the file specified by `GITHUB_STEP_SUMMARY` (or writes to stdout if unset), replacing inline bash summary formatting per ADR-006. Without it, artifact scanning workflows lack formatted visibility into scanner outcomes on the GitHub Actions workflow run summary page.

## Phase — required
none

## Inputs — required
- Environment variable `ARTIFACT_COUNT` — number of artifacts scanned (default `"0"`) — scripts/ci/artifact_write_summary.py:8
- Environment variable `FINDING_COUNT` — number of insights found (default `"0"`) — scripts/ci/artifact_write_summary.py:9
- Environment variable `DRY_RUN` — dry-run indicator string (`"true"` or default `"false"`) — scripts/ci/artifact_write_summary.py:10
- Environment variable `VERDICT` — AI verdict string (default `"N/A"`) — scripts/ci/artifact_write_summary.py:11
- Environment variable `GITHUB_STEP_SUMMARY` — destination path for GitHub Actions step summary markdown — scripts/ci/artifact_write_summary.py:12

## Outputs — required
- Markdown summary table appended to `GITHUB_STEP_SUMMARY` file (or written to stdout if variable empty) — scripts/ci/artifact_write_summary.py:61-64

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `GITHUB_STEP_SUMMARY` — scripts/ci/artifact_write_summary.py:2 — used here
- `artifact-insight-scanner.yml` — scripts/ci/artifact_write_summary.py:5 — used here
- `ADR-006` — scripts/ci/artifact_write_summary.py:5 — used here
- `ARTIFACT_COUNT` — scripts/ci/artifact_write_summary.py:8 — used here
- `FINDING_COUNT` — scripts/ci/artifact_write_summary.py:9 — used here
- `DRY_RUN` — scripts/ci/artifact_write_summary.py:10 — used here
- `VERDICT` — scripts/ci/artifact_write_summary.py:11 — used here
- `ADR-035` — scripts/ci/artifact_write_summary.py:14 — used here
- `build_summary` — scripts/ci/artifact_write_summary.py:24 — defined here
- `Artifact Insight Scanner Results` — scripts/ci/artifact_write_summary.py:32 — defined here
- `run` — scripts/ci/artifact_write_summary.py:50 — defined here
- `main` — scripts/ci/artifact_write_summary.py:69 — defined here

## Structure
- Module docstring and environment definitions (lines 1-16)
- Imports (lines 18-21)
- `build_summary` Markdown formatting function (lines 24-47)
- `run` environment retrieval and file-writing logic (lines 50-66)
- `main` entrypoint (lines 69-71)
- `__main__` caller (lines 74-76)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/artifact_write_summary.py`
- **language:** Python 3
- **lines:** 76
- **documented invocation:**
  > "GITHUB_STEP_SUMMARY - path to the step summary file" — scripts/ci/artifact_write_summary.py:12
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/artifact_write_summary.py`
- **stdout:**
  ```text
  ## Artifact Insight Scanner Results

  | Metric | Value |
  |--------|-------|
  | Artifacts Scanned | 0 |
  | Insights Found | 0 |
  | AI Verdict | N/A |
  | Dry Run | false |
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - `> "0 - summary written" — scripts/ci/artifact_write_summary.py:15`
- **actual exit paths:**
  - `return 0` — scripts/ci/artifact_write_summary.py:66
  - `sys.exit(main())` — scripts/ci/artifact_write_summary.py:75
- **for validators/gates:** Cannot exit non-zero (always returns 0). When run on the default branch without environment variables, succeeds and writes default metrics table with exit code 0.
- **output matches documentation:** yes, formats markdown summary table with metric values and note on dry-run mode, exiting 0.

## Defects — required
none

## Observations
Provides defensive default values for all environment variables (`0`, `false`, `N/A`), allowing the script to execute cleanly without arguments or active GitHub Actions environment.

## Context cost
1919 bytes, ~480 tokens. Loads no other internal files. Total context cost: 1919 bytes.
