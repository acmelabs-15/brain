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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/establish_ai_review_deadline.py

## Purpose — required, verbatim
> "Publish the absolute deadline used by the shared AI review action." — scripts/ci/establish_ai_review_deadline.py:2

## Design intent — required
Establishes a precise epoch timestamp deadline for AI review composite actions in GitHub Actions. It computes total allowed execution time by combining a context preparation budget (210s), model execution budget (at least 300s or `TIMEOUT_MINUTES * 60`), and a finalization reserve buffer (60s), or inherits an existing epoch deadline from upstream workflow steps. Writing `deadline_epoch` to `GITHUB_OUTPUT` allows downstream review steps and subprocess calls to enforce strict timeouts.

## Phase — required
none

## Inputs — required
- Environment variable `GITHUB_OUTPUT` — scripts/ci/establish_ai_review_deadline.py:41
- Environment variable `TIMEOUT_MINUTES` — scripts/ci/establish_ai_review_deadline.py:22
- Environment variable `INHERITED_DEADLINE_EPOCH` — scripts/ci/establish_ai_review_deadline.py:30

## Outputs — required
- Appends `deadline_epoch=<float>` formatted to six decimal places to GITHUB_OUTPUT — scripts/ci/establish_ai_review_deadline.py:48

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `EXIT_OK` — scripts/ci/establish_ai_review_deadline.py:13 — defined here
- `EXIT_CONFIG` — scripts/ci/establish_ai_review_deadline.py:14 — defined here
- `CONTEXT_BUDGET_SECONDS` — scripts/ci/establish_ai_review_deadline.py:15 — defined here
- `MINIMUM_MODEL_BUDGET_SECONDS` — scripts/ci/establish_ai_review_deadline.py:16 — defined here
- `FINALIZATION_RESERVE_SECONDS` — scripts/ci/establish_ai_review_deadline.py:17 — defined here
- `DEADLINE_PATTERN` — scripts/ci/establish_ai_review_deadline.py:18 — defined here
- `resolve_deadline` — scripts/ci/establish_ai_review_deadline.py:21 — defined here
- `main` — scripts/ci/establish_ai_review_deadline.py:40 — defined here

## Structure
- Module docstring detailing purpose for shared AI review action (line 2)
- Budget constants `CONTEXT_BUDGET_SECONDS`, `MINIMUM_MODEL_BUDGET_SECONDS`, and `FINALIZATION_RESERVE_SECONDS` (lines 15-17)
- Regex pattern `DEADLINE_PATTERN` (line 18)
- Deadline resolution function `resolve_deadline` (lines 21-38)
- Entrypoint `main` managing file I/O and exit status (lines 40-52)
- Script execution block (lines 55-56)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/establish_ai_review_deadline.py`
- **language:** Python 3
- **lines:** 57
- **documented invocation:** none explicit (executed in composite action step via `python3 scripts/ci/establish_ai_review_deadline.py`)
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/establish_ai_review_deadline.py`
- **stdout:**
  ```text
  error: GITHUB_OUTPUT is required
  ```
- **actual exit code:** 2
- **documented exit codes:**
  - `> "return EXIT_CONFIG" — scripts/ci/establish_ai_review_deadline.py:44`
  - `> "return EXIT_CONFIG" — scripts/ci/establish_ai_review_deadline.py:51`
  - `> "return EXIT_OK" — scripts/ci/establish_ai_review_deadline.py:52`
- **actual exit paths:**
  - `return EXIT_CONFIG` — scripts/ci/establish_ai_review_deadline.py:44
  - `return EXIT_CONFIG` — scripts/ci/establish_ai_review_deadline.py:51
  - `return EXIT_OK` — scripts/ci/establish_ai_review_deadline.py:52
  - `raise SystemExit(main())` — scripts/ci/establish_ai_review_deadline.py:56
- **for validators/gates:** Not a validator or gate; deadline calculation script. Exits 2 (`EXIT_CONFIG`) if `GITHUB_OUTPUT` is missing, `TIMEOUT_MINUTES` is non-numeric/negative, or `INHERITED_DEADLINE_EPOCH` is malformed. Exits 0 (`EXIT_OK`) when deadline is successfully written.
- **output matches documentation:** yes, appends `deadline_epoch=<timestamp>` to `GITHUB_OUTPUT`.

## Defects — required
- orphan — scripts/ci/establish_ai_review_deadline.py:2 — not invoked by any in-scope file; executed by shared AI review composite action in CI workflows

## Observations
Enforces a minimum 300-second floor for model execution time (`MINIMUM_MODEL_BUDGET_SECONDS`) to ensure large model requests are not abruptly killed if a small timeout is specified. Validates inherited deadline timestamps using regex before acceptance.

## Context cost
1,789 bytes source (~450 tokens).
