---
package: rjm
path: scripts/ci/run_pr_conflict_resolver.py
type: script
bytes: 2992
unit: inv-rjm-207
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/run_pr_conflict_resolver.py, sha256: f28868a8c1249d92092e818576df413c46d0fdaec6dc81c3d8f5930f642ecf29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/run_pr_conflict_resolver.py

## Purpose — required, verbatim
> "Auto-resolve PR conflicts by calling resolve_pr_conflicts.py." — scripts/ci/run_pr_conflict_resolver.py:1

## Design intent — required
Wraps the PR merge conflict resolver skill script, parses its structured JSON output, and writes `needs_ai` and `blocked_files` step outputs to `$GITHUB_OUTPUT` to drive subsequent automated resolution or AI escalation steps in CI, eliminating inline PowerShell logic from `pr-maintenance.yml` per ADR-006 and ADR-035.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"GITHUB_OUTPUT"` — scripts/ci/run_pr_conflict_resolver.py:29
- Environment variable `"PR_NUMBER"` — scripts/ci/run_pr_conflict_resolver.py:34
- Environment variable `"HEAD_REF"` — scripts/ci/run_pr_conflict_resolver.py:35
- Environment variable `"BASE_REF"` — scripts/ci/run_pr_conflict_resolver.py:36
- Environment variable `"REPO_OWNER"` — scripts/ci/run_pr_conflict_resolver.py:37
- Environment variable `"REPO_NAME"` — scripts/ci/run_pr_conflict_resolver.py:38

## Outputs — required
- Output flag `needs_ai=false` written to GITHUB_OUTPUT (`"needs_ai=false\n"` — scripts/ci/run_pr_conflict_resolver.py:86)
- Output flag `needs_ai=true` written to GITHUB_OUTPUT (`"needs_ai=true\n"` — scripts/ci/run_pr_conflict_resolver.py:90)
- Output JSON array `blocked_files` written to GITHUB_OUTPUT (`f"blocked_files={json.dumps(blocked, separators=(',', ':'))}\n"` — scripts/ci/run_pr_conflict_resolver.py:91)

## Invokes — required
- script .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py — scripts/ci/run_pr_conflict_resolver.py:25

## Invoked by — required
orphan

## Concepts named — required, verbatim
`resolve_pr_conflicts.py` — scripts/ci/run_pr_conflict_resolver.py:4 — used here
`ADR-006` — scripts/ci/run_pr_conflict_resolver.py:3 — used here
`GITHUB_OUTPUT` — scripts/ci/run_pr_conflict_resolver.py:6 — used here
`ADR-035` — scripts/ci/run_pr_conflict_resolver.py:8 — used here
`EXIT_SUCCESS` — scripts/ci/run_pr_conflict_resolver.py:21 — defined here
`EXIT_FAILURE` — scripts/ci/run_pr_conflict_resolver.py:22 — defined here
`EXIT_CONFIG` — scripts/ci/run_pr_conflict_resolver.py:23 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/run_pr_conflict_resolver.py`, language: Python 3, lines: 98
- documented invocation: `"Auto-resolve PR conflicts by calling resolve_pr_conflicts.py." — scripts/ci/run_pr_conflict_resolver.py:1`
- **executed:** yes
- actual command run: `python3 scripts/ci/run_pr_conflict_resolver.py`, stderr: `ERROR: GITHUB_OUTPUT not set`, **actual exit code**: 2
- documented exit codes: `"0 - Success (includes both auto-resolved and needs_ai cases)" — scripts/ci/run_pr_conflict_resolver.py:9`, `"1 - Resolver failed with a non-expected exit code (>1)" — scripts/ci/run_pr_conflict_resolver.py:10`, `"2 - Configuration error (GITHUB_OUTPUT not set)" — scripts/ci/run_pr_conflict_resolver.py:11`; actual exit paths: `scripts/ci/run_pr_conflict_resolver.py:32` (`return EXIT_CONFIG` [2]), `scripts/ci/run_pr_conflict_resolver.py:71` (`return result.returncode` [when returncode > 1]), `scripts/ci/run_pr_conflict_resolver.py:80` (`return EXIT_FAILURE` [1] on JSONDecodeError), `scripts/ci/run_pr_conflict_resolver.py:93` (`return EXIT_SUCCESS` [0]), `scripts/ci/run_pr_conflict_resolver.py:97` (`sys.exit(main())`)
- for validators/gates: automation wrapper; returns non-zero (2 if GITHUB_OUTPUT unset, 1 if resolver JSON invalid, or forwards returncode > 1) on errors, and returns 0 for both successful resolutions and flagged AI needs
- does the output match what the documentation claims? yes, passes auto-resolved and blocked cases to GITHUB_OUTPUT and logs status

## Defects — required
none

## Observations
Distinguishes resolver exit codes 0 (cleanly resolved) and 1 (blocked, requiring AI assistance) as normal operating outcomes returning 0 to CI, while propagating fatal exit codes (>1) to fail the workflow.

## Context cost
2992 bytes, approximately 748 tokens.
