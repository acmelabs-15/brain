---
package: rjm
path: scripts/ci/find_copilot_ready_issues.py
type: script
bytes: 2212
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/find_copilot_ready_issues.py, sha256: faf9bb06e7fd11b6e0fd37e7d397cd119e07631df2eb92a142facbeabe9205a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/find_copilot_ready_issues.py

## Purpose — required, verbatim
> "Find issues with the copilot-ready label." — scripts/ci/find_copilot_ready_issues.py:1

## Design intent — required
Queries GitHub issues via `gh issue list` to find open issues labeled `copilot-ready`, writing space-separated issue numbers and total count to `$GITHUB_OUTPUT`, replacing inline bash blocks in `copilot-context-synthesis.yml` per ADR-006 and ADR-035.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"GITHUB_OUTPUT"` — scripts/ci/find_copilot_ready_issues.py:54
- CLI filter flags `"--label"` — scripts/ci/find_copilot_ready_issues.py:32, `"copilot-ready"` — scripts/ci/find_copilot_ready_issues.py:33, and `"--state"` — scripts/ci/find_copilot_ready_issues.py:34

## Outputs — required
- Output parameter `f"issues={issues}\n"` — scripts/ci/find_copilot_ready_issues.py:74 to file at `GITHUB_OUTPUT`
- Output parameter `f"count={count}\n"` — scripts/ci/find_copilot_ready_issues.py:75 to file at `GITHUB_OUTPUT`
- Error message `"ERROR: GITHUB_OUTPUT not set"` — scripts/ci/find_copilot_ready_issues.py:56 to stderr

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`copilot-ready` — scripts/ci/find_copilot_ready_issues.py:1 — used here
`copilot-context-synthesis` — scripts/ci/find_copilot_ready_issues.py:3 — used here
`ADR-006` — scripts/ci/find_copilot_ready_issues.py:4 — used here
`GITHUB_OUTPUT` — scripts/ci/find_copilot_ready_issues.py:6 — used here
`ADR-035` — scripts/ci/find_copilot_ready_issues.py:8 — used here
`EXIT_SUCCESS` — scripts/ci/find_copilot_ready_issues.py:20 — defined here
`EXIT_FAILURE` — scripts/ci/find_copilot_ready_issues.py:21 — defined here
`EXIT_CONFIG` — scripts/ci/find_copilot_ready_issues.py:22 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/find_copilot_ready_issues.py`, language: Python 3, lines: 87
- documented invocation: `"Find issues with the copilot-ready label." — scripts/ci/find_copilot_ready_issues.py:1`
- **executed:** yes
- actual command run: `GITHUB_OUTPUT=/tmp/ready_issues.txt python3 scripts/ci/find_copilot_ready_issues.py`, abridged stdout: `Searching for issues with copilot-ready label... ... Found 1 issue(s) to process: 5603`, **actual exit code**: 0; when run without `GITHUB_OUTPUT`: `python3 scripts/ci/find_copilot_ready_issues.py`, stderr: `ERROR: GITHUB_OUTPUT not set`, **actual exit code**: 2
- documented exit codes: `"0  - Success (includes zero-issues case)" — scripts/ci/find_copilot_ready_issues.py:9`, `"1  - gh CLI failure" — scripts/ci/find_copilot_ready_issues.py:10`, `"2  - Configuration error (GITHUB_OUTPUT not set)" — scripts/ci/find_copilot_ready_issues.py:11`; actual exit paths: `scripts/ci/find_copilot_ready_issues.py:57` (`return EXIT_CONFIG` [2] when `GITHUB_OUTPUT` missing), `scripts/ci/find_copilot_ready_issues.py:68` (`return EXIT_FAILURE` [1] on gh CLI error), `scripts/ci/find_copilot_ready_issues.py:82` (`return EXIT_SUCCESS` [0]), `scripts/ci/find_copilot_ready_issues.py:86` (`sys.exit(main())`)
- for validators/gates: query script; exits 0 on successful issue discovery (including empty list), returning 1 on `gh` network/auth failure and 2 on missing environment variable
- does the output match what the documentation claims? yes, queries issues with specified label and sets issues and count in GITHUB_OUTPUT

## Defects — required
none

## Observations
Gracefully handles the zero-issue case, logging `No issues found with copilot-ready label` while maintaining exit code 0.

## Context cost
2212 bytes, approximately 553 tokens.
