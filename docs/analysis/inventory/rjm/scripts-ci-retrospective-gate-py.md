---
package: rjm
path: scripts/ci/retrospective_gate.py
type: script
bytes: 4571
unit: inv-rjm-206
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/retrospective_gate.py, sha256: 81a59bf6bd1a29a33873685f2678ff5147cf806feea4bfbbe919a68cb6e4ccc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/retrospective_gate.py

## Purpose — required, verbatim
> "Decide whether a closed pull request gets a retrospective, and how deep." — scripts/ci/retrospective_gate.py:1

## Design intent — required
Determines whether an automated AI retrospective should run for a closed pull request and whether it should escalate to a deeper review depth. It filters out bot-authored pull requests (`dependabot[bot]`, `renovate[bot]`, etc.) and fork pull requests (which lack secrets). It then evaluates friction signals to determine whether to escalate analysis depth: whether the PR closed unmerged, whether the PR title includes rework/retry markers, or whether the review comment count exceeds an escalation threshold (>= 10). Replaces inline workflow shell logic to prevent workflow command injection vulnerabilities by construction.

## Phase — required
none

## Inputs — required
- `GITHUB_OUTPUT`: Path to the step output file — scripts/ci/retrospective_gate.py:131
- `EVENT_NAME`: GitHub event name (e.g. `workflow_dispatch`) — scripts/ci/retrospective_gate.py:88
- `PR_AUTHOR`: Author username of the PR — scripts/ci/retrospective_gate.py:96
- `PR_HEAD_REPO`: Head repository of the PR — scripts/ci/retrospective_gate.py:101
- `PR_BASE_REPO`: Base repository of the PR — scripts/ci/retrospective_gate.py:102
- `PR_MERGED`: Merge status string (`true`/`false`) — scripts/ci/retrospective_gate.py:106
- `PR_TITLE`: Title of the pull request — scripts/ci/retrospective_gate.py:109
- `REVIEW_COMMENTS`: Count of review comments on the PR — scripts/ci/retrospective_gate.py:110
- `PR_NUMBER`: Pull request number — scripts/ci/retrospective_gate.py:91, 114
- `DISPATCH_ESCALATE`: Optional depth override for manual dispatches — scripts/ci/retrospective_gate.py:93

## Outputs — required
- Step output lines appended to `$GITHUB_OUTPUT`:
  - `should_run` — scripts/ci/retrospective_gate.py:90
  - `pr_number` — scripts/ci/retrospective_gate.py:91
  - `merged` — scripts/ci/retrospective_gate.py:92
  - `escalate_depth` — scripts/ci/retrospective_gate.py:93

## Invokes — required
none

## Invoked by — required
- `.github/workflows/retrospective.yml` (CI workflow, excluded from lifecycle analysis)

## Concepts named — required, verbatim
- `BOT_AUTHORS` — scripts/ci/retrospective_gate.py:22 — defined here
- `REWORK_TITLE_RE` — scripts/ci/retrospective_gate.py:32 — defined here
- `REVIEW_COMMENT_ESCALATION_THRESHOLD` — scripts/ci/retrospective_gate.py:34 — defined here
- `should_run` — scripts/ci/retrospective_gate.py:90 — defined here
- `escalate_depth` — scripts/ci/retrospective_gate.py:93 — defined here

## Structure
- module docstring — scripts/ci/retrospective_gate.py:1-8
- BOT_AUTHORS — scripts/ci/retrospective_gate.py:22
- REWORK_TITLE_RE — scripts/ci/retrospective_gate.py:32
- REVIEW_COMMENT_ESCALATION_THRESHOLD — scripts/ci/retrospective_gate.py:34
- is_bot — scripts/ci/retrospective_gate.py:37
- is_fork — scripts/ci/retrospective_gate.py:42
- review_comment_count — scripts/ci/retrospective_gate.py:51
- should_escalate — scripts/ci/retrospective_gate.py:73
- decide — scripts/ci/retrospective_gate.py:86
- write_outputs — scripts/ci/retrospective_gate.py:120
- main — scripts/ci/retrospective_gate.py:126

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/retrospective_gate.py`, language: Python, lines: 142
- documented invocation: `python scripts/ci/retrospective_gate.py`
- executed: yes
- actual command: `python3 sources/rjm/scripts/ci/retrospective_gate.py`
- stdout: `::error::GITHUB_OUTPUT is required` (on stderr)
- actual exit code: 2
- documented exit codes:
  > "EXIT_OK = 0" — scripts/ci/retrospective_gate.py:19
  > "EXIT_CONFIG = 2" — scripts/ci/retrospective_gate.py:20
  Actual exit paths in code:
  `return EXIT_CONFIG` — scripts/ci/retrospective_gate.py:134
  `return EXIT_OK` — scripts/ci/retrospective_gate.py:137
- for validators/gates: can exit non-zero (exits 2 when GITHUB_OUTPUT is missing); gating outcomes are surfaced via step outputs
- does the output match what the documentation claims: yes, formats step outputs determining retrospective execution and depth

## Defects — required
none

## Observations
Encapsulates workflow-injection mitigations by consuming untrusted pull request metadata exclusively through environment variables rather than shell interpolation.

## Context cost
Bytes: 4571. Uses Python standard library only (`argparse`, `os`, `re`, `sys`, `pathlib`, `collections.abc`). Approximate tokens: ~1100.
