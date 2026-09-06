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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/ruleset_context_drift.py

## Purpose — required, verbatim
> "Detect and alert on required-context drift from the live GitHub ruleset." — scripts/ci/ruleset_context_drift.py:2

## Design intent — required
Monitors branch protection ruleset 11104075 on GitHub to detect divergence between live required status checks and the pinned in-tree contract in `scripts/ci/ruleset_required_contexts.py`. When run with `--alert` in scheduled CI, constructs an actionable issue payload with diffs and reproduction commands, and idempotently creates a new alert issue or updates an existing open alert's comment using `.claude/skills/github/scripts/issue/` CLI utilities.

## Phase — required
cross-phase

## Inputs — required
- `--alert`: "Create or update the alert issue when drift is found." — scripts/ci/ruleset_context_drift.py:284
- Live GitHub ruleset status checks fetched via `scripts.github_core.checks_rollup.fetch_ruleset_required_contexts`
- Pinned contexts from `scripts/ci/ruleset_required_contexts.py:REQUIRED_CONTEXTS`
- Environment variables: `GITHUB_SERVER_URL`, `GITHUB_RUN_ID`, `RUNNER_TEMP`

## Outputs — required
- Comparison summary and formatted alert body printed to stdout
- Created or updated GitHub issue with labels `bug,area-workflows,drift-detected,automated`

## Invokes — required
- script ruleset_required_contexts — scripts/ci/ruleset_context_drift.py:27
- script checks_rollup — scripts/ci/ruleset_context_drift.py:34
- script list_issues.py — scripts/ci/ruleset_context_drift.py:169
- script new_issue.py — scripts/ci/ruleset_context_drift.py:215
- script post_issue_comment.py — scripts/ci/ruleset_context_drift.py:232

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/ci/ruleset_context_drift.py:4 — used here
- `EXIT_OK` — scripts/ci/ruleset_context_drift.py:36 — defined here
- `EXIT_DRIFT` — scripts/ci/ruleset_context_drift.py:37 — defined here
- `EXIT_CONFIG` — scripts/ci/ruleset_context_drift.py:38 — defined here
- `EXIT_EXTERNAL` — scripts/ci/ruleset_context_drift.py:39 — defined here
- `ALERT_TITLE` — scripts/ci/ruleset_context_drift.py:41 — defined here
- `ALERT_MARKER` — scripts/ci/ruleset_context_drift.py:42 — defined here
- `ALERT_LABELS` — scripts/ci/ruleset_context_drift.py:43 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/ruleset_context_drift.py`, language: Python, lines: 296
- documented invocation:
  "Create or update the alert issue when drift is found." — scripts/ci/ruleset_context_drift.py:284
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/ruleset_context_drift.py --help`
    stdout: `usage: ruleset_context_drift.py [-h] [--alert]`
    actual exit code: 0
  - Command: `python3 sources/rjm/scripts/ci/ruleset_context_drift.py`
    stdout: `Compared 9 live contexts with 9 pinned contexts. No required-context drift detected.`
    actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "0 - live and pinned contexts match" — scripts/ci/ruleset_context_drift.py:5
    - "1 - drift detected and alert published when requested" — scripts/ci/ruleset_context_drift.py:6
    - "2 - local configuration error" — scripts/ci/ruleset_context_drift.py:7
    - "3 - GitHub API or issue operation failed" — scripts/ci/ruleset_context_drift.py:8
    - "4 - GitHub authentication failed" — scripts/ci/ruleset_context_drift.py:9
  - Actual exit paths:
    - `return EXIT_EXTERNAL` on query failure — scripts/ci/ruleset_context_drift.py:256
    - `return EXIT_OK` when no drift detected — scripts/ci/ruleset_context_drift.py:266
    - `return EXIT_DRIFT` when drift detected without alert — scripts/ci/ruleset_context_drift.py:271
    - `raise SystemExit(main())` — scripts/ci/ruleset_context_drift.py:295
- for validators/gates: can it exit non-zero?
  Yes, exits 1 on detected drift, 2 on local config failure, 3 on API failure, 4 on authentication failure.
  Does it fail on the source repo's own default branch?
  When run on clean default branch, exits 0 with no drift detected.
- does the output match what the documentation claims?
  Yes, compares live contexts against pinned contract and formats actionable drift report.

## Defects — required
- orphan — scripts/ci/ruleset_context_drift.py:1 — not referenced by any in-scope file (only referenced by out-of-scope .github/workflows/ruleset-context-drift.yml).

## Observations
Idempotently finds existing open alert issues and updates the marked comment with `ALERT_MARKER` rather than filing duplicate issues.

## Context cost
8063 bytes, 296 lines. Approximate tokens: ~2000.
