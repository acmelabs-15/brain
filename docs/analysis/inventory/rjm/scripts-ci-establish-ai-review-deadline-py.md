---
package: rjm
path: scripts/ci/establish_ai_review_deadline.py
type: script
bytes: 1789
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/establish_ai_review_deadline.py, sha256: 54901cf4d6d02196ebc876a3be82c92f9e8bb550d804f5e1027d13daa35a2a0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/establish_ai_review_deadline.py

## Purpose — required, verbatim
> "Publish the absolute deadline used by the shared AI review action." — scripts/ci/establish_ai_review_deadline.py:2

## Design intent — required
Calculates an absolute epoch timestamp representing the deadline for the shared AI review action by combining context budget, model timeout minutes (with a 300-second floor), and finalization reserves, writing `deadline_epoch` to `$GITHUB_OUTPUT`.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"TIMEOUT_MINUTES"` — scripts/ci/establish_ai_review_deadline.py:22
- Environment variable `"INHERITED_DEADLINE_EPOCH"` — scripts/ci/establish_ai_review_deadline.py:30
- Environment variable `"GITHUB_OUTPUT"` — scripts/ci/establish_ai_review_deadline.py:41

## Outputs — required
- Output parameter `f"deadline_epoch={deadline:.6f}\n"` — scripts/ci/establish_ai_review_deadline.py:48 to file at `GITHUB_OUTPUT`
- Error message `"error: GITHUB_OUTPUT is required"` — scripts/ci/establish_ai_review_deadline.py:43 to stderr

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`AI review action` — scripts/ci/establish_ai_review_deadline.py:2 — used here
`TIMEOUT_MINUTES` — scripts/ci/establish_ai_review_deadline.py:22 — used here
`INHERITED_DEADLINE_EPOCH` — scripts/ci/establish_ai_review_deadline.py:30 — used here
`GITHUB_OUTPUT` — scripts/ci/establish_ai_review_deadline.py:41 — used here
`deadline_epoch` — scripts/ci/establish_ai_review_deadline.py:48 — defined here
`CONTEXT_BUDGET_SECONDS` — scripts/ci/establish_ai_review_deadline.py:15 — defined here
`MINIMUM_MODEL_BUDGET_SECONDS` — scripts/ci/establish_ai_review_deadline.py:16 — defined here
`FINALIZATION_RESERVE_SECONDS` — scripts/ci/establish_ai_review_deadline.py:17 — defined here
`EXIT_OK` — scripts/ci/establish_ai_review_deadline.py:13 — defined here
`EXIT_CONFIG` — scripts/ci/establish_ai_review_deadline.py:14 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/establish_ai_review_deadline.py`, language: Python 3, lines: 57
- documented invocation: `"Publish the absolute deadline used by the shared AI review action." — scripts/ci/establish_ai_review_deadline.py:2`
- **executed:** yes
- actual command run: `GITHUB_OUTPUT=/tmp/deadline_out.txt TIMEOUT_MINUTES=5 python3 scripts/ci/establish_ai_review_deadline.py`, abridged stdout: ``, file content: `deadline_epoch=1788659013.961184`, **actual exit code**: 0; when run without `GITHUB_OUTPUT`: `python3 scripts/ci/establish_ai_review_deadline.py`, stderr: `error: GITHUB_OUTPUT is required`, **actual exit code**: 2
- documented exit codes: none in docstring; actual exit paths: `scripts/ci/establish_ai_review_deadline.py:44` (`return EXIT_CONFIG` [2] when GITHUB_OUTPUT unset), `scripts/ci/establish_ai_review_deadline.py:51` (`return EXIT_CONFIG` [2] on ValueError or OSError), `scripts/ci/establish_ai_review_deadline.py:52` (`return EXIT_OK` [0] on success), `scripts/ci/establish_ai_review_deadline.py:56` (`raise SystemExit(main())`)
- for validators/gates: calculation utility; returns 0 on successful deadline generation, returns 2 on missing or invalid configuration
- does the output match what the documentation claims? yes, calculates and writes deadline epoch

## Defects — required
none

## Observations
Enforces a minimum model execution budget of 300 seconds regardless of whether smaller timeout values are passed.

## Context cost
1789 bytes, approximately 447 tokens.
