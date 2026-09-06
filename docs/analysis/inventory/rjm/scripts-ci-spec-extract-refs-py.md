---
package: rjm
path: scripts/ci/spec_extract_refs.py
type: script
bytes: 6285
unit: inv-rjm-208
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/spec_extract_refs.py

## Purpose — required, verbatim
> "Extract spec references from a PR title and body." — scripts/ci/spec_extract_refs.py:2

## Design intent — required
Extracts requirement IDs (matching `REQ-\d+`, `DESIGN-\d+`, `TASK-\d+`), spec file paths (matching `.agents/(?:specs|planning)/\S+\.md`), and issue closure references (e.g. `Closes #123`) from pull request titles and bodies. Replaces an inline bash block from GitHub Actions workflow `ai-spec-validation.yml` per ADR-006 (no complex logic in YAML) and ADR-035 (standardized exit codes). Handles missing environment variables by falling back to the GitHub CLI (`gh pr view`) and parses incremental scope declarations via `.github/scripts/extract_incremental_scope.py`.

## Phase — required
none

## Inputs — required
- Environment variable `PR_TITLE_INPUT` — scripts/ci/spec_extract_refs.py:8
- Environment variable `PR_BODY_INPUT` — scripts/ci/spec_extract_refs.py:9
- Environment variable `PR_NUMBER` — scripts/ci/spec_extract_refs.py:10
- Environment variable `GITHUB_REPOSITORY` — scripts/ci/spec_extract_refs.py:11
- Environment variable `RUNNER_TEMP` — scripts/ci/spec_extract_refs.py:12
- Environment variable `GITHUB_OUTPUT` — scripts/ci/spec_extract_refs.py:13
- Environment variable `GITHUB_RUN_ID` — scripts/ci/spec_extract_refs.py:152
- Subprocess `gh pr view` output for title and body fallback — scripts/ci/spec_extract_refs.py:53
- Subprocess `extract_incremental_scope.py` output — scripts/ci/spec_extract_refs.py:116

## Outputs — required
- Step output `spec_refs` appended to `GITHUB_OUTPUT` or stdout — scripts/ci/spec_extract_refs.py:16
- Step output `issue_refs` appended to `GITHUB_OUTPUT` or stdout — scripts/ci/spec_extract_refs.py:17
- Step output `incremental_scope` appended to `GITHUB_OUTPUT` or stdout — scripts/ci/spec_extract_refs.py:18
- Step output `has_specs` ("true" or "false") appended to `GITHUB_OUTPUT` or stdout — scripts/ci/spec_extract_refs.py:19
- Temporary files `pr-title-{GITHUB_RUN_ID}.txt` and `pr-body-{GITHUB_RUN_ID}.txt` in `RUNNER_TEMP` (cleaned up before exit) — scripts/ci/spec_extract_refs.py:152

## Invokes — required
- command gh — scripts/ci/spec_extract_refs.py:53
- script extract_incremental_scope.py — scripts/ci/spec_extract_refs.py:116

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ai-spec-validation.yml` — scripts/ci/spec_extract_refs.py:5 — used here
- `ADR-006` — scripts/ci/spec_extract_refs.py:5 — used here
- `PR_TITLE_INPUT` — scripts/ci/spec_extract_refs.py:8 — used here
- `PR_BODY_INPUT` — scripts/ci/spec_extract_refs.py:9 — used here
- `PR_NUMBER` — scripts/ci/spec_extract_refs.py:10 — used here
- `GITHUB_REPOSITORY` — scripts/ci/spec_extract_refs.py:11 — used here
- `RUNNER_TEMP` — scripts/ci/spec_extract_refs.py:12 — used here
- `GITHUB_OUTPUT` — scripts/ci/spec_extract_refs.py:13 — used here
- `spec_refs` — scripts/ci/spec_extract_refs.py:16 — defined here
- `issue_refs` — scripts/ci/spec_extract_refs.py:17 — defined here
- `incremental_scope` — scripts/ci/spec_extract_refs.py:18 — defined here
- `has_specs` — scripts/ci/spec_extract_refs.py:19 — defined here
- `ADR-035` — scripts/ci/spec_extract_refs.py:21 — used here
- `EXIT_OK` — scripts/ci/spec_extract_refs.py:34 — defined here
- `EXIT_EXTERNAL` — scripts/ci/spec_extract_refs.py:35 — defined here
- `write_github_output` — scripts/ci/spec_extract_refs.py:38 — defined here
- `_gh_pr_field` — scripts/ci/spec_extract_refs.py:48 — defined here
- `_extract_spec_refs` — scripts/ci/spec_extract_refs.py:82 — defined here
- `_extract_issue_refs` — scripts/ci/spec_extract_refs.py:97 — defined here
- `_extract_incremental_scope` — scripts/ci/spec_extract_refs.py:112 — defined here
- `run` — scripts/ci/spec_extract_refs.py:135 — defined here
- `main` — scripts/ci/spec_extract_refs.py:187 — defined here

## Structure
none (python script; functions: write_github_output, _gh_pr_field, _extract_spec_refs, _extract_issue_refs, _extract_incremental_scope, run, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/spec_extract_refs.py`, language: Python 3, lines: 194
- documented invocation:
  "Extract spec references from a PR title and body." — scripts/ci/spec_extract_refs.py:2
  (CLI command: `python3 scripts/ci/spec_extract_refs.py`)
- executed: yes
- actual command run: `python3 scripts/ci/spec_extract_refs.py` (executed from `sources/rjm`)
  abridged stdout:
  ```
  spec_refs=
  issue_refs=
  incremental_scope=
  No spec references found in PR
  has_specs=false
  ```
  actual exit code: 0
- documented exit codes:
  `0 - extraction complete` — scripts/ci/spec_extract_refs.py:22
  `3 - GitHub or incremental-scope subprocess failed` — scripts/ci/spec_extract_refs.py:23
  vs. actual exit paths in code:
  `scripts/ci/spec_extract_refs.py:72` (`return EXIT_EXTERNAL, ""`)
  `scripts/ci/spec_extract_refs.py:78` (`return EXIT_EXTERNAL, ""`)
  `scripts/ci/spec_extract_refs.py:125` (`return EXIT_EXTERNAL, ""`)
  `scripts/ci/spec_extract_refs.py:131` (`return EXIT_EXTERNAL, ""`)
  `scripts/ci/spec_extract_refs.py:184` (`return EXIT_OK`)
  `scripts/ci/spec_extract_refs.py:193` (`sys.exit(main())`)
- for validators/gates: can it exit non-zero? yes (exits 3 if `gh` CLI or `.github/scripts/extract_incremental_scope.py` fails). does it fail on the source repo's own default branch? no (exits 0 with empty default inputs).
- does the output match what the documentation claims? yes (outputs extracted reference strings and sets `has_specs`)

## Defects — required
- `orphan — scripts/ci/spec_extract_refs.py:4 — not invoked by any in-scope lifecycle file (replaces bash block in out-of-scope .github/workflows/ai-spec-validation.yml)`
- `missing-path — scripts/ci/spec_extract_refs.py:116 — invokes .github/scripts/extract_incremental_scope.py using a relative path that assumes the current working directory is repository root, failing with exit code 3 when invoked from elsewhere`

## Observations
- Writes PR title and body to temporary files (`pr-title-{GITHUB_RUN_ID}.txt`, `pr-body-{GITHUB_RUN_ID}.txt`) under `RUNNER_TEMP` before processing to mitigate shell injection risks, cleaning them up upon completion or early error return.
- Tested in repository by `tests/ci/test_spec_extract_refs.py`.

## Context cost
6,285 bytes (~1,571 tokens). Standard library only (`os`, `re`, `subprocess`, `sys`, `pathlib`).
