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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/prepare_conflict_context.py

## Purpose — required, verbatim
> "Prepare conflict context for AI analysis." — scripts/ci/prepare_conflict_context.py:1

## Design intent — required
Replaces an inline PowerShell block in `.github/workflows/pr-maintenance.yml` under ADR-006 and ADR-035 to gather rich context for AI-driven conflict resolution. Fetches and merges the base branch into the PR branch to generate Git conflict markers, reads up to 100 conflict lines per blocked file alongside recent commit history from both branches, URL-percent-encodes the structured markdown, appends it as `conflict_context` to `GITHUB_OUTPUT`, and cleanly aborts the in-progress merge.

## Phase — required
cross-phase

## Inputs — required
- Environment variables:
  - `GITHUB_OUTPUT`
  - `HEAD_REF`
  - `BASE_REF`
  - `BLOCKED_FILES_JSON`
- Local Git repository commit history and file contents

## Outputs — required
- URL-percent-encoded `conflict_context` appended to `GITHUB_OUTPUT`

## Invokes — required
- command git — scripts/ci/prepare_conflict_context.py:27

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `pr-maintenance.yml` — scripts/ci/prepare_conflict_context.py:3 — used here
- `ADR-006` — scripts/ci/prepare_conflict_context.py:3 — used here
- `ADR-035` — scripts/ci/prepare_conflict_context.py:9 — used here
- `conflict_context` — scripts/ci/prepare_conflict_context.py:6 — defined here
- `EXIT_SUCCESS` — scripts/ci/prepare_conflict_context.py:21 — defined here
- `EXIT_CONFIG` — scripts/ci/prepare_conflict_context.py:22 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/prepare_conflict_context.py`, language: Python, lines: 113
- documented invocation:
  "Prepare conflict context for AI analysis." — scripts/ci/prepare_conflict_context.py:1
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: with empty env: `python3 sources/rjm/scripts/ci/prepare_conflict_context.py`
    stdout: `ERROR: GITHUB_OUTPUT not set` (stderr)
    actual exit code: 2
- documented exit codes vs actual exit paths:
  - Documented:
    - "0 - Success" — scripts/ci/prepare_conflict_context.py:10
    - "2 - Configuration error (GITHUB_OUTPUT not set)" — scripts/ci/prepare_conflict_context.py:11
  - Actual exit paths:
    - `return EXIT_CONFIG` on missing GITHUB_OUTPUT — scripts/ci/prepare_conflict_context.py:78
    - `return EXIT_SUCCESS` on success — scripts/ci/prepare_conflict_context.py:108
    - `sys.exit(main())` — scripts/ci/prepare_conflict_context.py:112
- for validators/gates: can it exit non-zero?
  Yes, exits 2 when `GITHUB_OUTPUT` is not set.
  Does it fail on the source repo's own default branch?
  When run without `GITHUB_OUTPUT`, exits 2.
- does the output match what the documentation claims?
  Yes, encodes conflict context and aborts the in-progress git merge.

## Defects — required
- orphan — scripts/ci/prepare_conflict_context.py:1 — not referenced by any in-scope file (only referenced by out-of-scope .github/workflows/pr-maintenance.yml).

## Observations
Limits extracted conflict lines to 100 lines per file (line 52) to avoid unbounded token inflation in downstream AI analysis.

## Context cost
3314 bytes, 113 lines. Approximate tokens: ~850.
