---
package: rjm
path: scripts/ci/prepare_conflict_context.py
type: script
bytes: 3314
unit: inv-rjm-206
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/prepare_conflict_context.py, sha256: b295ad081fbf5c4e50ad56f3ee61caa1437aa66f9c03863f47507511775c5491}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/prepare_conflict_context.py

## Purpose — required, verbatim
> "Prepare conflict context for AI analysis." — scripts/ci/prepare_conflict_context.py:1

## Design intent — required
Replaces an inline PowerShell block in `pr-maintenance.yml` under ADR-006 (no logic in YAML). When merge conflicts occur on a pull request, this script performs a local git merge against the base branch to produce conflict markers, extracts the first 100 conflict lines per file alongside the 5 most recent commit summaries from both branches, and formats them into a Markdown report. It URL-percent-encodes the context string, writes `conflict_context` to `$GITHUB_OUTPUT` for downstream AI resolution consumption, and aborts the in-progress merge to leave the working tree clean.

## Phase — required
none

## Inputs — required
- `GITHUB_OUTPUT`: Path to the step output file — scripts/ci/prepare_conflict_context.py:75
- `HEAD_REF`: PR branch name to fetch and merge — scripts/ci/prepare_conflict_context.py:80
- `BASE_REF`: Base branch name — scripts/ci/prepare_conflict_context.py:81
- `BLOCKED_FILES_JSON`: JSON array string of conflict file paths — scripts/ci/prepare_conflict_context.py:82

## Outputs — required
- Step output line appended to `$GITHUB_OUTPUT`: `conflict_context` (percent-encoded Markdown string) — scripts/ci/prepare_conflict_context.py:103

## Invokes — required
none

## Invoked by — required
- `.github/workflows/pr-maintenance.yml` (CI workflow, excluded from lifecycle analysis)

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/prepare_conflict_context.py:3 — used here
- `ADR-035` — scripts/ci/prepare_conflict_context.py:9 — used here
- `GITHUB_OUTPUT` — scripts/ci/prepare_conflict_context.py:6 — used here
- `conflict_context` — scripts/ci/prepare_conflict_context.py:6 — defined here

## Structure
- module docstring — scripts/ci/prepare_conflict_context.py:1-12
- _git — scripts/ci/prepare_conflict_context.py:25
- _git_log — scripts/ci/prepare_conflict_context.py:35
- _conflict_lines — scripts/ci/prepare_conflict_context.py:42
- build_context — scripts/ci/prepare_conflict_context.py:57
- main — scripts/ci/prepare_conflict_context.py:74

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/prepare_conflict_context.py`, language: Python, lines: 113
- documented invocation: `python scripts/ci/prepare_conflict_context.py`
- executed: yes
- actual command: `python3 sources/rjm/scripts/ci/prepare_conflict_context.py`
- stdout: `ERROR: GITHUB_OUTPUT not set` (on stderr)
- actual exit code: 2
- documented exit codes:
  > "0 - Success" — scripts/ci/prepare_conflict_context.py:10
  > "2 - Configuration error (GITHUB_OUTPUT not set)" — scripts/ci/prepare_conflict_context.py:11
  Actual exit paths in code:
  `return EXIT_CONFIG` — scripts/ci/prepare_conflict_context.py:78
  `return EXIT_SUCCESS` — scripts/ci/prepare_conflict_context.py:108
- for validators/gates: can exit non-zero (exits 2 when GITHUB_OUTPUT is not set)
- does the output match what the documentation claims: yes, verifies presence of GITHUB_OUTPUT and writes percent-encoded context

## Defects — required
- `other` · scripts/ci/prepare_conflict_context.py:92-95 · Unconditionally invokes git fetch, checkout, and merge in the ambient repository without verifying repository origin or clean state before calling merge --abort.

## Observations
Limits conflict lines per file to 100 lines (`len(lines) >= 100` — scripts/ci/prepare_conflict_context.py:52) to avoid unbounded token costs in downstream LLM prompt synthesis.

## Context cost
Bytes: 3314. Uses Python standard library only (`json`, `os`, `subprocess`, `sys`). Approximate tokens: ~850.
