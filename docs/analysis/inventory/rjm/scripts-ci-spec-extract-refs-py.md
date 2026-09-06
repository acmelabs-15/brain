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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/spec_extract_refs.py

## Purpose — required, verbatim
> "Extract spec references from a PR title and body." — scripts/ci/spec_extract_refs.py:2

## Design intent — required
Replaces an inline bash script block in the GitHub Actions `ai-spec-validation.yml` workflow per ADR-006 (thin workflows, testable Python modules). It extracts specification requirement, design, and task identifiers (`REQ-NNN`, `DESIGN-NNN`, `TASK-NNN`), spec file paths under `.agents/specs/` or `.agents/planning/`, issue references (such as `Closes #123`), and incremental scope declarations (delegating to `.github/scripts/extract_incremental_scope.py`) from PR titles and bodies, falling back to the GitHub CLI (`gh pr view`) if environment variables are omitted.

## Phase — required
rjm:spec

## Inputs — required
- Environment variable `PR_TITLE_INPUT` (line 8)
- Environment variable `PR_BODY_INPUT` (line 9)
- Environment variable `PR_NUMBER` (line 10)
- Environment variable `GITHUB_REPOSITORY` (line 11)
- Environment variable `RUNNER_TEMP` (line 12)
- Environment variable `GITHUB_OUTPUT` (line 13)

## Outputs — required
- GitHub step output `spec_refs` (line 16)
- GitHub step output `issue_refs` (line 17)
- GitHub step output `incremental_scope` (line 18)
- GitHub step output `has_specs` (line 19)
- Temporary files `pr-title-<RUN_ID>.txt` and `pr-body-<RUN_ID>.txt` in `RUNNER_TEMP` (cleaned up upon completion)

## Invokes — required
- script gh — scripts/ci/spec_extract_refs.py:53
- script .github/scripts/extract_incremental_scope.py — scripts/ci/spec_extract_refs.py:116

## Invoked by — required
- doc src/copilot-cli/instructions/ci-scripts.instructions.md — src/copilot-cli/instructions/ci-scripts.instructions.md:43
- script tests/ci/test_merge_group_readiness.py — tests/ci/test_merge_group_readiness.py:88

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/spec_extract_refs.py:5 — used here
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
- `def write_github_output` — scripts/ci/spec_extract_refs.py:38
- `def _gh_pr_field` — scripts/ci/spec_extract_refs.py:48
- `def _extract_spec_refs` — scripts/ci/spec_extract_refs.py:82
- `def _extract_issue_refs` — scripts/ci/spec_extract_refs.py:97
- `def _extract_incremental_scope` — scripts/ci/spec_extract_refs.py:112
- `def run` — scripts/ci/spec_extract_refs.py:135
- `def main` — scripts/ci/spec_extract_refs.py:187

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/spec_extract_refs.py`, language: Python, lines: 194
- documented invocation:
  - "Extract spec references from a PR title and body." — scripts/ci/spec_extract_refs.py:2
  - "spec_extract_refs.py" — src/copilot-cli/instructions/ci-scripts.instructions.md:43
- **executed:** yes
- actual command run: `PR_TITLE_INPUT="feat: Phase 1 of #123" PR_BODY_INPUT="Closes #456. Implements REQ-003" python3 scripts/ci/spec_extract_refs.py`, abridged stdout:
  ```
  spec_refs=REQ-003
  issue_refs=456
  incremental_scope=Phase 1 of #123
  Found spec references: REQ-003
  Found issue references: 456
  has_specs=true
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - extraction complete" — scripts/ci/spec_extract_refs.py:22
    - "3 - GitHub or incremental-scope subprocess failed" — scripts/ci/spec_extract_refs.py:23
  - actual exit paths:
    - `return EXIT_EXTERNAL, ""` — scripts/ci/spec_extract_refs.py:72
    - `return EXIT_EXTERNAL, ""` — scripts/ci/spec_extract_refs.py:78
    - `return EXIT_EXTERNAL, ""` — scripts/ci/spec_extract_refs.py:125
    - `return EXIT_EXTERNAL, ""` — scripts/ci/spec_extract_refs.py:131
    - `return exit_code` — scripts/ci/spec_extract_refs.py:146
    - `return exit_code` — scripts/ci/spec_extract_refs.py:149
    - `return exit_code` — scripts/ci/spec_extract_refs.py:164
    - `return EXIT_OK` — scripts/ci/spec_extract_refs.py:184
    - `return run()` — scripts/ci/spec_extract_refs.py:189
    - `sys.exit(main())` — scripts/ci/spec_extract_refs.py:193
- for validators/gates: can exit non-zero (exits 3 if gh CLI or incremental scope parsing fails). On the repository default branch without env vars, exits 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
Adheres strictly to ADR-006 by encapsulating workflow step logic into testable Python modules and ADR-035 for standardized CI exit code semantics (0 for OK, 3 for external dependency failure). Operates under a strict stdlib-only constraint because CI executes the script using the runner's ambient `python3` prior to package setup.

## Context cost
6285 bytes, approximately 1570 tokens.
