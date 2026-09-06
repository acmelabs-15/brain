---
package: rjm
path: scripts/ci/write_pr_maintenance_summary.py
type: script
bytes: 2308
unit: inv-rjm-211
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/write_pr_maintenance_summary.py, sha256: eecaebee965826cc090a8d784719c101978eb7ca5fc80e9543a715b9f93f3639}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/write_pr_maintenance_summary.py

## Purpose — required, verbatim
> "Write final PR maintenance summary to GITHUB_STEP_SUMMARY." — scripts/ci/write_pr_maintenance_summary.py:1

## Design intent — required
CI utility that replaces an inline PowerShell block in `pr-maintenance.yml` (ADR-006). It inspects `SUMMARY_JSON` passed via environment variables (preventing expression injection from untrusted PR titles), filters PRs categorized as `agent-controlled`, emits a `::notice::` directive with `/pr-review` invocation syntax, and appends a "Next Steps" action table to `$GITHUB_STEP_SUMMARY`.

## Phase — required
cross-phase

## Inputs — required
- Destination file path via environment variable `GITHUB_STEP_SUMMARY` — scripts/ci/write_pr_maintenance_summary.py:48
- PR scan results JSON payload via environment variable `SUMMARY_JSON` — scripts/ci/write_pr_maintenance_summary.py:53

## Outputs — required
- Workflow annotations and `/pr-review` instructions printed to stdout — scripts/ci/write_pr_maintenance_summary.py:27-28
- Next Steps markdown table appended to summary output file — scripts/ci/write_pr_maintenance_summary.py:6,73
- Error message to stderr when summary path is unset — scripts/ci/write_pr_maintenance_summary.py:50
- Process exit code: 0 on success (including empty inputs), 2 on configuration error — scripts/ci/write_pr_maintenance_summary.py:9-10

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `SUMMARY_JSON` — scripts/ci/write_pr_maintenance_summary.py:4 — used here
- `pr-maintenance.yml` — scripts/ci/write_pr_maintenance_summary.py:3 — used here
- `ADR-006` — scripts/ci/write_pr_maintenance_summary.py:3 — used here
- `ADR-035` — scripts/ci/write_pr_maintenance_summary.py:8 — used here
- `EXIT_SUCCESS` — scripts/ci/write_pr_maintenance_summary.py:20 — defined here
- `EXIT_CONFIG` — scripts/ci/write_pr_maintenance_summary.py:21 — defined here
- `/pr-review` — scripts/ci/write_pr_maintenance_summary.py:28 — used here
- `agent-controlled` — scripts/ci/write_pr_maintenance_summary.py:66 — used here

## Structure
- build_next_steps(action_required: list[dict[str, Any]]) -> str
- main() -> int

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/write_pr_maintenance_summary.py`, Python 3, 80 lines
- **documented invocation:**
  > "Reads SUMMARY_JSON from the environment (routed through env to avoid" — scripts/ci/write_pr_maintenance_summary.py:4
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/ci/write_pr_maintenance_summary.py`
- **actual exit code:** 2
- **abridged stdout/stderr:** `ERROR: GITHUB_STEP_SUMMARY not set`
- **documented exit codes:**
  > "0 - Success (includes "nothing to write" cases)" — scripts/ci/write_pr_maintenance_summary.py:9
  > "2 - Configuration error (GITHUB_STEP_SUMMARY not set)" — scripts/ci/write_pr_maintenance_summary.py:10
  vs. actual exit paths:
  - `scripts/ci/write_pr_maintenance_summary.py:51`: `return EXIT_CONFIG` (when `GITHUB_STEP_SUMMARY` is empty)
  - `scripts/ci/write_pr_maintenance_summary.py:57`: `return EXIT_SUCCESS` (when `SUMMARY_JSON` is empty)
  - `scripts/ci/write_pr_maintenance_summary.py:63`: `return EXIT_SUCCESS` (when JSON decode fails)
  - `scripts/ci/write_pr_maintenance_summary.py:69`: `return EXIT_SUCCESS` (when no agent-controlled PRs found)
  - `scripts/ci/write_pr_maintenance_summary.py:75`: `return EXIT_SUCCESS` (when table is appended)
  - `scripts/ci/write_pr_maintenance_summary.py:79`: `sys.exit(main())`
- **validators/gates:** can exit non-zero: yes (exits 2 when `GITHUB_STEP_SUMMARY` is not configured). Fails on source repo default branch: yes (exits 2 when run directly without environment variable).
- **output match:** yes, routes PR payloads through environment to prevent expression injection and filters for agent-controlled PRs.

## Defects — required
none

## Observations
Security-hardened design explicitly documented at lines 4-5: routes PR summaries through environment variables rather than direct GitHub Actions expression interpolation to prevent prompt or command injection from pull request titles and descriptions.

## Context cost
File size: 2308 bytes (~580 tokens). Standard library only.
