---
package: rjm
path: scripts/ci/check_pr_merge_state.py
type: script
bytes: 5233
unit: inv-rjm-200
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/check_pr_merge_state.py, sha256: 0c52b022af263573b6c0c82e21d401ea3c70f91707de248ca4997bec6a5f8e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/check_pr_merge_state.py

## Purpose — required, verbatim
> "Fail loud when a pushed branch has an open PR that cannot merge." — scripts/ci/check_pr_merge_state.py:2

## Design intent — required
Detects open pull requests whose GitHub merge state makes PR validation unreachable and fails fast during branch push events. By querying open PRs for a branch using GitHub CLI (`gh pr list`) and inspecting `mergeStateStatus`, it treats conflict state `DIRTY` as an immediate blocking error (`EXIT_REGRESSION = 1`) requiring rebase, while treating recoverable states (`BEHIND`, `BLOCKED`, `CLEAN`, `HAS_HOOKS`, `UNSTABLE`) as passing. This prevents developers from pushing changes that cannot be merged without conflict resolution.

## Phase — required
none

## Inputs — required
- CLI options: `--repo` — scripts/ci/check_pr_merge_state.py:134, `--head-ref` — scripts/ci/check_pr_merge_state.py:135 (or environment variables `GITHUB_REPOSITORY` and `GITHUB_REF_NAME`)
- GitHub CLI query: `pr`, `list` — scripts/ci/check_pr_merge_state.py:56-57 via `run_gh` — scripts/ci/check_pr_merge_state.py:41

## Outputs — required
- GitHub Actions error annotations: `::error::PR #` lines for blocked or unauthoritative states — scripts/ci/check_pr_merge_state.py:110, 118
- Console informational messages to stdout for passing states or branches with no open PR — scripts/ci/check_pr_merge_state.py:102, 126

## Invokes — required
- command gh — scripts/ci/check_pr_merge_state.py:43

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `PASS_STATES` — scripts/ci/check_pr_merge_state.py:27 — defined here
- `FAIL_STATES` — scripts/ci/check_pr_merge_state.py:28 — defined here
- `PullRequest` — scripts/ci/check_pr_merge_state.py:32 — defined here
- `run_gh` — scripts/ci/check_pr_merge_state.py:41 — defined here
- `load_open_prs` — scripts/ci/check_pr_merge_state.py:52 — defined here
- `check_prs` — scripts/ci/check_pr_merge_state.py:100 — defined here
- `build_parser` — scripts/ci/check_pr_merge_state.py:130 — defined here
- `main` — scripts/ci/check_pr_merge_state.py:139 — defined here
- `EXIT_OK` — scripts/ci/check_pr_merge_state.py:14 — defined here
- `EXIT_REGRESSION` — scripts/ci/check_pr_merge_state.py:15 — defined here
- `EXIT_CONFIG` — scripts/ci/check_pr_merge_state.py:16 — defined here
- `EXIT_EXTERNAL` — scripts/ci/check_pr_merge_state.py:17 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/check_pr_merge_state.py`, language: Python, lines: 157
- documented invocation:
  "Detect open PRs whose merge state makes PR validation unreachable." — scripts/ci/check_pr_merge_state.py:132
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/check_pr_merge_state.py --help`
  abridged stdout: `usage: check_pr_merge_state.py [-h] [--repo REPO] [--head-ref HEAD_REF]`
  actual exit code: 0
- documented exit codes:
  "EXIT_OK = 0" — scripts/ci/check_pr_merge_state.py:14
  "EXIT_REGRESSION = 1" — scripts/ci/check_pr_merge_state.py:15
  "EXIT_CONFIG = 2" — scripts/ci/check_pr_merge_state.py:16
  "EXIT_EXTERNAL = 3" — scripts/ci/check_pr_merge_state.py:17
  vs. actual exit paths in code:
  `return EXIT_EXTERNAL, []` — scripts/ci/check_pr_merge_state.py:70 (gh launch failure)
  `return EXIT_EXTERNAL, []` — scripts/ci/check_pr_merge_state.py:73 (gh non-zero exit)
  `return EXIT_EXTERNAL, []` — scripts/ci/check_pr_merge_state.py:78 (invalid JSON)
  `return EXIT_EXTERNAL, []` — scripts/ci/check_pr_merge_state.py:81 (non-list JSON)
  `return EXIT_EXTERNAL, []` — scripts/ci/check_pr_merge_state.py:86 (malformed PR item)
  `return EXIT_OK, prs` — scripts/ci/check_pr_merge_state.py:97
  `return EXIT_OK` — scripts/ci/check_pr_merge_state.py:103 (no open PR)
  `return EXIT_REGRESSION` — scripts/ci/check_pr_merge_state.py:115 (DIRTY merge status)
  `return EXIT_EXTERNAL` — scripts/ci/check_pr_merge_state.py:123 (unknown merge status)
  `return EXIT_OK` — scripts/ci/check_pr_merge_state.py:127 (all open PRs mergeable)
  `return EXIT_CONFIG` — scripts/ci/check_pr_merge_state.py:144 (missing repo)
  `return EXIT_CONFIG` — scripts/ci/check_pr_merge_state.py:147 (missing head-ref)
  `return rc` — scripts/ci/check_pr_merge_state.py:151
  `return check_prs(prs)` — scripts/ci/check_pr_merge_state.py:152
  `raise SystemExit(main())` — scripts/ci/check_pr_merge_state.py:156
- for validators/gates: can it exit non-zero? yes (exits 1 on DIRTY conflict, 2 on missing configuration, 3 on gh tool/network error or non-authoritative status). Does it fail on default branch? Exits 2 when invoked without `--repo` and `--head-ref`.
- does the output match what the documentation claims? yes (detects merge state and exits with ADR-035 exit codes).

## Defects — required
- orphan — scripts/ci/check_pr_merge_state.py:1 — Not invoked by any in-scope lifecycle script or agent; only referenced in tests, out-of-scope `.github/workflows/`, and docstring notes in `scripts/github_core/pr_merge_state.py:66`.

## Observations
- Carefully documents the semantic distinction between `PASS_STATES` here (which includes `BEHIND` and `BLOCKED` because both are repairable without force-push) and `_SUPPORTED_MERGE_STATES` in `test_pr_merge_ready.py` (which only includes `CLEAN`, `HAS_HOOKS`, and `UNSTABLE` for immediate merging by pr-autofix).

## Context cost
5233 bytes (~1300 tokens). Uses Python standard library only; executes external `gh` CLI.
