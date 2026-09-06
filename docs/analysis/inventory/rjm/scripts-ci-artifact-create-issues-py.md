---
package: rjm
path: scripts/ci/artifact_create_issues.py
type: script
bytes: 5408
unit: inv-rjm-199
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/artifact_create_issues.py, sha256: fb16852af5a0a38c29c2fbd7d3d1ef2dcd5632c410819b730a2d2ea903c0255f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/artifact_create_issues.py

## Purpose — required, verbatim
> "Create GitHub issues from artifact insight findings." — scripts/ci/artifact_create_issues.py:2

## Design intent — required
Converts artifact insight findings (generated during static analysis or CI workflows) into deduplicated GitHub issues with provenance footers, replacing former PowerShell inline blocks in CI workflows per ADR-006. Without it, automated findings cannot be registered as actionable GitHub issues, or duplicate issues would be created across repeated scanner runs.

## Phase — required
none

## Inputs — required
- Environment variable `FINDINGS_JSON` — JSON array of finding objects (`title`, `body`, `labels`, `source`) — scripts/ci/artifact_create_issues.py:8
- Environment variable `GITHUB_REPOSITORY` — target repository (`owner/repo`) for issue creation — scripts/ci/artifact_create_issues.py:9
- Environment variable `SERVER_URL` — GitHub server URL — scripts/ci/artifact_create_issues.py:10
- Environment variable `RUN_ID` — workflow run ID used in the provenance footer — scripts/ci/artifact_create_issues.py:11
- Environment variable `GH_TOKEN` — authentication token consumed automatically by `gh` CLI — scripts/ci/artifact_create_issues.py:12
- Environment variable `GITHUB_OUTPUT` — output parameter file path — scripts/ci/artifact_create_issues.py:34
- Existing GitHub issues queried via `gh` CLI (lines 47-56)

## Outputs — required
- GitHub issues created via `gh issue create` with title, body, provenance footer, and labels — scripts/ci/artifact_create_issues.py:137-150
- Run summary printed to stdout (and optional `GITHUB_OUTPUT`) reporting created, duplicate, and failed counts — scripts/ci/artifact_create_issues.py:163-166

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `artifact insight findings` — scripts/ci/artifact_create_issues.py:2 — used here
- `artifact-insight-scanner.yml` — scripts/ci/artifact_create_issues.py:5 — used here
- `ADR-006` — scripts/ci/artifact_create_issues.py:5 — used here
- `FINDINGS_JSON` — scripts/ci/artifact_create_issues.py:8 — used here
- `ADR-035` — scripts/ci/artifact_create_issues.py:14 — used here
- `EXIT_OK` — scripts/ci/artifact_create_issues.py:27 — defined here
- `EXIT_CONFIG` — scripts/ci/artifact_create_issues.py:28 — defined here
- `EXIT_EXTERNAL` — scripts/ci/artifact_create_issues.py:29 — defined here
- `write_github_output` — scripts/ci/artifact_create_issues.py:32 — defined here
- `_is_duplicate` — scripts/ci/artifact_create_issues.py:42 — defined here
- `_build_footer` — scripts/ci/artifact_create_issues.py:86 — defined here
- `Artifact Insight Scanner` — scripts/ci/artifact_create_issues.py:90 — used here

## Structure
- Module docstring and environment documentation (lines 1-18)
- Imports and exit code constants (lines 20-30)
- `write_github_output` helper function (lines 32-40)
- `_is_duplicate` issue query and title comparison (lines 42-84)
- `_build_footer` Markdown provenance footer builder (lines 86-93)
- `run` main processing and issue creation loop (lines 95-168)
- `main` entrypoint function (lines 170-172)
- `__main__` caller (lines 175-177)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/artifact_create_issues.py`
- **language:** Python 3
- **lines:** 177
- **documented invocation:**
  > "FINDINGS_JSON       - JSON array of finding objects (title, body, labels, source)" — scripts/ci/artifact_create_issues.py:8
- **executed:** yes
- **command:** `FINDINGS_JSON='[]' python3 sources/rjm/scripts/ci/artifact_create_issues.py`
- **stdout:**
  ```text
  === SUMMARY ===
  Issues created: 0
  Duplicates skipped: 0
  Issues failed: 0
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - `> "0 - completed (some issues may have been skipped as duplicates)" — scripts/ci/artifact_create_issues.py:15`
  - `> "2 - FINDINGS_JSON is missing or malformed" — scripts/ci/artifact_create_issues.py:16`
  - `> "3 - GitHub issue lookup or creation failed" — scripts/ci/artifact_create_issues.py:17`
- **actual exit paths:**
  - `return EXIT_CONFIG` — scripts/ci/artifact_create_issues.py:100
  - `return EXIT_CONFIG` — scripts/ci/artifact_create_issues.py:106
  - `return EXIT_EXTERNAL` — scripts/ci/artifact_create_issues.py:127
  - `return EXIT_EXTERNAL if failed_count else EXIT_OK` — scripts/ci/artifact_create_issues.py:167
  - `sys.exit(main())` — scripts/ci/artifact_create_issues.py:176
- **for validators/gates:** Can exit non-zero (exits 2 when `FINDINGS_JSON` is missing or invalid JSON; exits 3 when `gh issue` lookup or creation fails). When run without `FINDINGS_JSON`, exits 2 (`::error::FINDINGS_JSON env var is required`). With `FINDINGS_JSON='[]'`, exits 0.
- **output matches documentation:** yes, exit codes and printed summary match documented ADR-035 contract.

## Defects — required
none

## Observations
Employs bidirectional substring matching for duplicate detection (`title_lower in issue_title or issue_title in title_lower` at lines 75-76), which can produce false duplicate matches if short titles are used. Appends a Markdown footer to each created issue providing links back to the originating GitHub Actions workflow run for complete auditability.

## Context cost
5408 bytes, ~1350 tokens. Loads no other internal files. Total context cost: 5408 bytes.
