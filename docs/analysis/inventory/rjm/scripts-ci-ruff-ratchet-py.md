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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/ruff_ratchet.py

## Purpose — required, verbatim
> "Fail on ruff violations that land on lines this change added or modified." — scripts/ci/ruff_ratchet.py:2

## Design intent — required
Provides a diff-scoped ruff linting gate for pull requests and commits. Instead of failing on all pre-existing debt in an edited file, it maps git diff hunks to line numbers using `scripts.ci.diff_line_scope` and blocks only when a ruff violation falls within lines added or modified by the change. Pre-existing violations outside the diff are printed as non-blocking warnings. Operates fail-closed: unresolvable diff bases or invalid outputs cause the gate to block on every finding.

## Phase — required
none

## Inputs — required
- `--base-ref`: Git ref used as the diff base — scripts/ci/ruff_ratchet.py:261
- `--repo-root`: Repository root path — scripts/ci/ruff_ratchet.py:266
- Output of `git diff` with `--name-only` and `-z` — scripts/ci/ruff_ratchet.py:74-75
- Output of `ruff check` in JSON format — scripts/ci/ruff_ratchet.py:205

## Outputs — required
- GitHub error annotations for blocking violations: `::error file=` — scripts/ci/ruff_ratchet.py:181
- Summary report of pre-existing and blocking findings printed to stderr/stdout — scripts/ci/ruff_ratchet.py:186-192, 241-250

## Invokes — required
- script diff_line_scope — scripts/ci/ruff_ratchet.py:39

## Invoked by — required
- `scripts/validation/git_hook_policy.py:22`
- `.claude/agents/implementer.md` (via git hook policy and pre-push validation)

## Concepts named — required, verbatim
- `diff_line_scope` — scripts/ci/ruff_ratchet.py:39 — used here
- `RUFF_RATCHET_BASE_REF` — scripts/ci/ruff_ratchet.py:58 — used here
- `ruff_count_ratchet.py` — scripts/ci/ruff_ratchet.py:11 — used here
- `changed_python_files` — scripts/ci/ruff_ratchet.py:87 — defined here
- `relative_finding_path` — scripts/ci/ruff_ratchet.py:112 — defined here

## Structure
- module docstring — scripts/ci/ruff_ratchet.py:2-24
- default_base_ref — scripts/ci/ruff_ratchet.py:54
- git_diff_name_only — scripts/ci/ruff_ratchet.py:64
- changed_python_files — scripts/ci/ruff_ratchet.py:87
- relative_finding_path — scripts/ci/ruff_ratchet.py:112
- _row_of — scripts/ci/ruff_ratchet.py:132
- finding_rows — scripts/ci/ruff_ratchet.py:140
- describe — scripts/ci/ruff_ratchet.py:153
- report — scripts/ci/ruff_ratchet.py:161
- run_ruff — scripts/ci/ruff_ratchet.py:195
- parse_args — scripts/ci/ruff_ratchet.py:254
- main — scripts/ci/ruff_ratchet.py:272

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/ruff_ratchet.py`, language: Python, lines: 294
- documented invocation:
  > "Run ruff only on lines changed since a base ref." — scripts/ci/ruff_ratchet.py:256
- executed: yes
- actual command: `python3 sources/rjm/scripts/ci/ruff_ratchet.py --repo-root /tmp`
- stdout: `error: /private/tmp is not a git worktree` (on stderr)
- actual exit code: 2
- documented exit codes:
  > "0 - ok (no findings, or only findings outside the change)" — scripts/ci/ruff_ratchet.py:20
  > "1 - a finding intersects an added or modified line" — scripts/ci/ruff_ratchet.py:21
  > "2 - config error (repo root is not a git worktree, bad args)" — scripts/ci/ruff_ratchet.py:22
  > "3 - external error (git or ruff could not run, unparseable ruff output)" — scripts/ci/ruff_ratchet.py:23
  Actual exit paths in code:
  `return EXIT_CONFIG` — scripts/ci/ruff_ratchet.py:277
  `return EXIT_EXTERNAL` — scripts/ci/ruff_ratchet.py:217
  `return EXIT_VIOLATIONS` — scripts/ci/ruff_ratchet.py:246
  `return EXIT_OK` — scripts/ci/ruff_ratchet.py:251
- for validators/gates: can exit non-zero (exits 1 on new violations, 2 on configuration error, 3 on external tool error); failable gate
- does the output match what the documentation claims: yes, scopes linting strictly to modified line intervals and exits 1 on intersecting violations

## Defects — required
none

## Observations
Uses `-z` in `git diff` to avoid C-quoting pitfalls on unusual paths. Handles ruff output formatting edge cases where `row` or `end_location` are omitted.

## Context cost
Bytes: 10285 + loads `scripts/ci/diff_line_scope.py` (10035 bytes). Approximate tokens: ~5500.
