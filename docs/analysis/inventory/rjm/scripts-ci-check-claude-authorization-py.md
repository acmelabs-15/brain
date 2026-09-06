---
package: rjm
path: scripts/ci/check_claude_authorization.py
type: script
bytes: 3643
unit: inv-rjm-200
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/check_claude_authorization.py, sha256: 02d1029955d370a06572aac4b1f500a8043a0f588edfd0aca83258ccf33b7297}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/check_claude_authorization.py

## Purpose — required, verbatim
> "Run the Claude authorization check and validate its answer." — scripts/ci/check_claude_authorization.py:2

## Design intent — required
Separates script execution faults (checker exiting non-zero) from authorization denials (checker printing `false`), preventing unexpected script crashes or unparseable outputs from silently masquerading as access denials or false decisions in CI workflows.

## Phase — required
cross-phase

## Inputs — required
- Authorization checker script path via `--checker`: `scripts/ci/check_claude_authorization.py:74`
- Event metadata via `--event-name`, `--actor`, `--author-association`, `--comment-body`, `--review-body`, `--issue-body`, `--issue-title`, `--pr-body`, `--pr-title`: `scripts/ci/check_claude_authorization.py:35-45`
- Environment variable `GITHUB_OUTPUT`: `scripts/ci/check_claude_authorization.py:102`

## Outputs — required
- GitHub Actions error annotations `::error::` to stdout: `scripts/ci/check_claude_authorization.py:50`
- Output variable `authorized=<true|false>` appended to `GITHUB_OUTPUT`: `scripts/ci/check_claude_authorization.py:105`
- Fallback console output `authorized=<true|false>` if `GITHUB_OUTPUT` is unset: `scripts/ci/check_claude_authorization.py:107`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`ADR-006` — scripts/ci/check_claude_authorization.py:4 — used here
`_VALID` — scripts/ci/check_claude_authorization.py:33 — defined here
`_ARGUMENTS` — scripts/ci/check_claude_authorization.py:35 — defined here
`_fail` — scripts/ci/check_claude_authorization.py:48 — defined here
`run_check` — scripts/ci/check_claude_authorization.py:54 — defined here
`main` — scripts/ci/check_claude_authorization.py:72 — defined here
`GITHUB_OUTPUT` — scripts/ci/check_claude_authorization.py:102 — used here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/check_claude_authorization.py`, language: Python 3, lines: 113
- documented invocation: `"Run the Claude authorization check and validate its answer." — scripts/ci/check_claude_authorization.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/check_claude_authorization.py --checker ./tests/workflows/test_claude_authorization.py --actor peter --author-association MEMBER --event-name issue_comment --comment-body "@claude help"`, abridged stdout: `INFO: Result: Authorized - Authorized via author association: MEMBER\nauthorized=true`, **actual exit code**: 0
- documented exit codes: none verbatim in docstring; actual exit paths: `scripts/ci/check_claude_authorization.py:108` (returns 0 on valid boolean authorization string), `scripts/ci/check_claude_authorization.py:51` (returns 1 on checker file not found at line 81, checker non-zero returncode at line 87, or unparseable output at line 96), argparse exits 2 on missing `--checker` at line 77; dispatched via `sys.exit(main())` at `scripts/ci/check_claude_authorization.py:112`
- for validators/gates: can exit non-zero (exits 1 on missing checker or invalid output, 2 on usage error); exits 0 on valid invocation on default branch
- does the output match what the documentation claims? yes, verifies checker output is `true` or `false` and outputs `authorized=<val>`

## Defects — required
none

## Observations
Implements ADR-006 policy by extracting workflow shell logic into a tested Python script. Correctly distinguishes script faults from authorization denials.

## Context cost
3643 bytes, approximately 910 tokens.
