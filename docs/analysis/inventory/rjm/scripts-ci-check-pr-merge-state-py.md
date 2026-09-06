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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/check_pr_merge_state.py

## Purpose — required, verbatim
> "Fail loud when a pushed branch has an open PR that cannot merge." — scripts/ci/check_pr_merge_state.py:2

## Design intent — required
Inspects GitHub pull request merge state for a pushed branch via GitHub CLI (`gh pr list`), allowing states that can reach merge (`BEHIND`, `BLOCKED`, `CLEAN`, `HAS_HOOKS`, `UNSTABLE`), while failing loudly on merge conflict state (`DIRTY`) or unauthoritative merge verdicts to avoid wasting CI resources on unmergeable branches.

## Phase — required
cross-phase

## Inputs — required
- Arguments `--repo` (default: environment variable `GITHUB_REPOSITORY`) and `--head-ref` (default: environment variable `GITHUB_REF_NAME`): `scripts/ci/check_pr_merge_state.py:134-135`
- Output of `gh pr list` via subprocess: `scripts/ci/check_pr_merge_state.py:54-67`

## Outputs — required
- Error annotations `::error::` to stdout for blocked or unknown PR merge status: `scripts/ci/check_pr_merge_state.py:110`, `scripts/ci/check_pr_merge_state.py:119`
- Status confirmation messages printed to stdout: `scripts/ci/check_pr_merge_state.py:102`, `scripts/ci/check_pr_merge_state.py:126`
- Configuration and subprocess error messages to stderr: `scripts/ci/check_pr_merge_state.py:69`, `scripts/ci/check_pr_merge_state.py:143`, `scripts/ci/check_pr_merge_state.py:146`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`EXIT_OK` — scripts/ci/check_pr_merge_state.py:14 — defined here
`EXIT_REGRESSION` — scripts/ci/check_pr_merge_state.py:15 — defined here
`EXIT_CONFIG` — scripts/ci/check_pr_merge_state.py:16 — defined here
`EXIT_EXTERNAL` — scripts/ci/check_pr_merge_state.py:17 — defined here
`PASS_STATES` — scripts/ci/check_pr_merge_state.py:27 — defined here
`FAIL_STATES` — scripts/ci/check_pr_merge_state.py:28 — defined here
`PullRequest` — scripts/ci/check_pr_merge_state.py:32 — defined here
`run_gh` — scripts/ci/check_pr_merge_state.py:41 — defined here
`load_open_prs` — scripts/ci/check_pr_merge_state.py:52 — defined here
`check_prs` — scripts/ci/check_pr_merge_state.py:100 — defined here
`build_parser` — scripts/ci/check_pr_merge_state.py:130 — defined here
`main` — scripts/ci/check_pr_merge_state.py:139 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/check_pr_merge_state.py`, language: Python 3, lines: 157
- documented invocation: `"Detect open PRs whose merge state makes PR validation unreachable." — scripts/ci/check_pr_merge_state.py:132`
- **executed:** yes
- actual command run: `python3 scripts/ci/check_pr_merge_state.py --repo rjmurillo/ai-agents --head-ref non-existent-branch`, abridged stdout: `PR merge state: no open PR for this branch.`, **actual exit code**: 0
- documented exit codes: none verbatim in docstring; actual exit paths: `scripts/ci/check_pr_merge_state.py:103` (`EXIT_OK = 0`), `scripts/ci/check_pr_merge_state.py:115` (`EXIT_REGRESSION = 1`), `scripts/ci/check_pr_merge_state.py:144` (`EXIT_CONFIG = 2`), `scripts/ci/check_pr_merge_state.py:70` (`EXIT_EXTERNAL = 3`); dispatched via `raise SystemExit(main())` at `scripts/ci/check_pr_merge_state.py:156`
- for validators/gates: can exit non-zero (exits 1 on DIRTY merge state, 2 on missing config, 3 on gh tool/API/JSON failure or unauthoritative verdict); exits 0 when no PR or merge states acceptable
- does the output match what the documentation claims? yes, queries GitHub CLI for open PRs and fails loudly when merge conflicts exist

## Defects — required
none

## Observations
Carefully distinguishes repairable PR states (`BEHIND`, `BLOCKED`) from terminal conflict states (`DIRTY`). Clarifies relationship with `github` skill's `test_pr_merge_ready.py` (lines 19-26).

## Context cost
5233 bytes, approximately 1300 tokens.
