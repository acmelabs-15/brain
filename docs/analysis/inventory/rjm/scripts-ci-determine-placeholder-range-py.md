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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/determine_placeholder_range.py

## Purpose — required, verbatim
> "Determine the git range to check for placeholder identity violations." — scripts/ci/determine_placeholder_range.py:2

## Design intent — required
Calculates the appropriate git revision range (`<base>..<head>`) for placeholder identity verification across different GitHub Actions trigger events (`pull_request`, `merge_group`, or `workflow_dispatch`). This isolates event payload parsing and git merge-base computation from workflow YAML definitions, ensuring a standard commit range is supplied to downstream identity checks.

## Phase — required
none

## Inputs — required
- Environment variable `EVENT_NAME` — scripts/ci/determine_placeholder_range.py:23
- Environment variable `PR_BASE_SHA` — scripts/ci/determine_placeholder_range.py:26
- Environment variable `PR_HEAD_SHA` — scripts/ci/determine_placeholder_range.py:27
- Environment variable `MG_BASE_SHA` — scripts/ci/determine_placeholder_range.py:29
- Environment variable `MG_HEAD_SHA` — scripts/ci/determine_placeholder_range.py:30
- Git repository commit history via `merge-base` — scripts/ci/determine_placeholder_range.py:34

## Outputs — required
- Single line commit range string (`<base>..<head>`) written to stdout — scripts/ci/determine_placeholder_range.py:5

## Invokes — required
- command git — scripts/ci/determine_placeholder_range.py:34

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `placeholder-identity-check` — scripts/ci/determine_placeholder_range.py:4 — used here
- `EVENT_NAME` — scripts/ci/determine_placeholder_range.py:8 — used here
- `PR_BASE_SHA` — scripts/ci/determine_placeholder_range.py:9 — used here
- `PR_HEAD_SHA` — scripts/ci/determine_placeholder_range.py:10 — used here
- `MG_BASE_SHA` — scripts/ci/determine_placeholder_range.py:11 — used here
- `MG_HEAD_SHA` — scripts/ci/determine_placeholder_range.py:12 — used here
- `_resolve_range` — scripts/ci/determine_placeholder_range.py:22 — defined here

## Structure
- Module docstring detailing environment variable requirements (lines 2-13)
- `_resolve_range` helper parsing event context and computing git range (lines 22-43)
- Script execution block invoking `_resolve_range` and handling exit errors (lines 46-51)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/determine_placeholder_range.py`
- **language:** Python 3
- **lines:** 52
- **documented invocation:**
  > "Called by the placeholder-identity-check workflow. Outputs the range as" — scripts/ci/determine_placeholder_range.py:4
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/determine_placeholder_range.py`
- **stdout:** `7fd8966100ca34029bfbab01f02eb421179381f5..HEAD`
- **actual exit code:** 0
- **documented exit codes:**
  - `> "raise SystemExit(2) from exc" — scripts/ci/determine_placeholder_range.py:51`
- **actual exit paths:**
  - `raise SystemExit(2) from exc` — scripts/ci/determine_placeholder_range.py:51
  - implicit exit 0 after `print(_resolve_range())` — scripts/ci/determine_placeholder_range.py:48
- **for validators/gates:** Not a validator or gate; commit range calculator. Can exit 2 on `KeyError` (missing required env vars for PR or merge_group events) or `CalledProcessError` (if `git merge-base` fails). Exits 0 on default branch.
- **output matches documentation:** yes, outputs a single line to stdout in the form `<base>..<head>`.

## Defects — required
- orphan — scripts/ci/determine_placeholder_range.py:4 — not invoked by any in-scope file; called by out-of-scope placeholder-identity-check CI workflow

## Observations
Falls back gracefully to computing `git merge-base origin/main HEAD` when neither `pull_request` nor `merge_group` event types are supplied, making local testing or `workflow_dispatch` executions straightforward.

## Context cost
1,525 bytes source (~380 tokens).
