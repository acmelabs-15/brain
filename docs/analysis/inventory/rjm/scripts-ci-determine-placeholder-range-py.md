---
package: rjm
path: scripts/ci/determine_placeholder_range.py
type: script
bytes: 1525
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/determine_placeholder_range.py, sha256: 3273e70607f3dab85cc6f80bca7f4b994fdd75abb46e1457cfa82f31cb36cf97}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/determine_placeholder_range.py

## Purpose — required, verbatim
> "Determine the git range to check for placeholder identity violations." — scripts/ci/determine_placeholder_range.py:2

## Design intent — required
Resolves the commit range `<base>..<head>` for placeholder identity checks across different GitHub Actions trigger contexts (`pull_request`, `merge_group`, or fallback workflow dispatch calculating merge base against `origin/main`), printing the range as a single line to stdout.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"EVENT_NAME"` — scripts/ci/determine_placeholder_range.py:23
- Environment variable `"PR_BASE_SHA"` — scripts/ci/determine_placeholder_range.py:26
- Environment variable `"PR_HEAD_SHA"` — scripts/ci/determine_placeholder_range.py:27
- Environment variable `"MG_BASE_SHA"` — scripts/ci/determine_placeholder_range.py:29
- Environment variable `"MG_HEAD_SHA"` — scripts/ci/determine_placeholder_range.py:30
- Git commit graph via `"git", "merge-base", "origin/main", "HEAD"` — scripts/ci/determine_placeholder_range.py:34

## Outputs — required
- Revision range string `f"{base}..{head}"` — scripts/ci/determine_placeholder_range.py:43 to stdout
- Error message `f"error: {exc}"` — scripts/ci/determine_placeholder_range.py:50 to stderr on failure

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`placeholder-identity-check` — scripts/ci/determine_placeholder_range.py:4 — used here
`EVENT_NAME` — scripts/ci/determine_placeholder_range.py:8 — used here
`PR_BASE_SHA` — scripts/ci/determine_placeholder_range.py:9 — used here
`PR_HEAD_SHA` — scripts/ci/determine_placeholder_range.py:10 — used here
`MG_BASE_SHA` — scripts/ci/determine_placeholder_range.py:11 — used here
`MG_HEAD_SHA` — scripts/ci/determine_placeholder_range.py:12 — used here
`pull_request` — scripts/ci/determine_placeholder_range.py:25 — used here
`merge_group` — scripts/ci/determine_placeholder_range.py:28 — used here
`workflow_dispatch` — scripts/ci/determine_placeholder_range.py:32 — used here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/determine_placeholder_range.py`, language: Python 3, lines: 52
- documented invocation: `"Determine the git range to check for placeholder identity violations." — scripts/ci/determine_placeholder_range.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/determine_placeholder_range.py`, abridged stdout: `2abef31dc6812b62696297bd1065b58727a35786..HEAD`, **actual exit code**: 0
- documented exit codes: none verbatim in docstring; actual exit paths: `scripts/ci/determine_placeholder_range.py:48` (implicit exit 0 on success), `scripts/ci/determine_placeholder_range.py:51` (`raise SystemExit(2) from exc` on `KeyError` or `subprocess.CalledProcessError`)
- for validators/gates: can exit non-zero (exit code 2) when required environment variables or git merge base resolution fails; exits 0 on source repository default branch
- does the output match what the documentation claims? yes, outputs single line revision range in `<base>..<head>` format

## Defects — required
none

## Observations
Provides clean fallback to `git merge-base origin/main HEAD` when running outside GitHub Actions pull request or merge group event contexts.

## Context cost
1525 bytes, approximately 380 tokens.
