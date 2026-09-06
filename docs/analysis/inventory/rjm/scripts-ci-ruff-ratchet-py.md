---
package: rjm
path: scripts/ci/ruff_ratchet.py
type: script
bytes: 10285
unit: inv-rjm-206
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/ruff_ratchet.py, sha256: 4d1e47b5ae78226bf73fb3d992c619a1884527480dd1fe9d141583a3b92e5bda}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/ruff_ratchet.py

## Purpose — required, verbatim
> "Fail on ruff violations that land on lines this change added or modified." — scripts/ci/ruff_ratchet.py:2

## Design intent — required
Solves the pre-existing debt inheritance problem (Issue #2993) by scoping Ruff linting strictly to lines added or modified in the current diff rather than entire files. Pre-existing findings outside the changed lines are reported as informational messages but do not fail the gate, preventing legacy debt from acting as a tripwire for unrelated changes. Fails closed (exiting 1 or 3) if diff resolution, git, or Ruff parsing fails.

## Phase — required
cross-phase

## Inputs — required
- `--base-ref`: "Git ref used as the diff base (default: RUFF_RATCHET_BASE_REF or origin/main)." — scripts/ci/ruff_ratchet.py:261
- `--repo-root`: "Repository root (default: current working directory)." — scripts/ci/ruff_ratchet.py:267
- Git diff output (`git diff --name-only -z --diff-filter=ACMR <base_ref>...HEAD`)
- Changed Python files in repository

## Outputs — required
- CI annotations for blocking findings on added/modified lines
- Informational output for pre-existing non-blocking findings

## Invokes — required
- script diff_line_scope — scripts/ci/ruff_ratchet.py:39
- command git — scripts/ci/ruff_ratchet.py:70
- command ruff — scripts/ci/ruff_ratchet.py:205

## Invoked by — required
- script scripts/validation/checks_ratchet.py — scripts/validation/checks_ratchet.py:63

## Concepts named — required, verbatim
- `AGENTS.md` — scripts/ci/ruff_ratchet.py:19 — used here
- `EXIT_OK` — scripts/ci/ruff_ratchet.py:45 — defined here
- `EXIT_VIOLATIONS` — scripts/ci/ruff_ratchet.py:46 — defined here
- `EXIT_CONFIG` — scripts/ci/ruff_ratchet.py:47 — defined here
- `EXIT_EXTERNAL` — scripts/ci/ruff_ratchet.py:48 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/ruff_ratchet.py`, language: Python, lines: 294
- documented invocation:
  "Git ref used as the diff base (default: RUFF_RATCHET_BASE_REF or origin/main)." — scripts/ci/ruff_ratchet.py:261
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/ruff_ratchet.py --help`
    stdout: `usage: ruff_ratchet.py [-h] [--base-ref BASE_REF] [--repo-root REPO_ROOT]`
    actual exit code: 0
  - Command: `python3 sources/rjm/scripts/ci/ruff_ratchet.py --repo-root sources/rjm`
    stdout: `No changed Python files found. Ruff ratchet passed.`
    actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "0 - ok (no findings, or only findings outside the change)" — scripts/ci/ruff_ratchet.py:20
    - "1 - a finding intersects an added or modified line" — scripts/ci/ruff_ratchet.py:21
    - "2 - config error (repo root is not a git worktree, bad args)" — scripts/ci/ruff_ratchet.py:22
    - "3 - external error (git or ruff could not run, unparseable ruff output)" — scripts/ci/ruff_ratchet.py:23
  - Actual exit paths:
    - `return EXIT_EXTERNAL` on git failure — scripts/ci/ruff_ratchet.py:102
    - `return EXIT_CONFIG` on non-worktree repo root — scripts/ci/ruff_ratchet.py:277
    - `return EXIT_VIOLATIONS` on blocking violations — scripts/ci/ruff_ratchet.py:246
    - `return EXIT_OK` on clean run — scripts/ci/ruff_ratchet.py:251
    - `sys.exit(main())` — scripts/ci/ruff_ratchet.py:293
- for validators/gates: can it exit non-zero?
  Yes, exits 1 on violations intersecting changed lines, 2 on non-git worktree configuration error, 3 on git or ruff failure.
  Does it fail on the source repo's own default branch?
  When run on clean default branch with no changed Python files, exits 0.
- does the output match what the documentation claims?
  Yes, scopes Ruff linting to changed lines and reports blocking vs pre-existing findings.

## Defects — required
none

## Observations
Uses `git diff -z` (line 65) to handle unusual filenames safely without shell escaping or C-quoting issues.

## Context cost
10285 bytes, 294 lines. Approximate tokens: ~2400.
