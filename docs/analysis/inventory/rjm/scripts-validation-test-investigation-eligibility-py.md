---
package: rjm
path: scripts/validation/test_investigation_eligibility.py
type: script
bytes: 7134
unit: inv-rjm-307
in_scope_via: scripts/validate_session_json.py
aliases: []
memo_inputs:
  - {path: scripts/validation/test_investigation_eligibility.py, sha256: 50907c3f8f1d5da028be1849dee966d9cd6119d94ef298e4ea9ae21a0c37289f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/test_investigation_eligibility.py

## Purpose — required, verbatim
> "Check if staged files qualify for investigation-only QA skip." — scripts/validation/test_investigation_eligibility.py:2

## Design intent — required
Enforces qualification rules for skipping QA testing via `SKIPPED: investigation-only` per ADR-034. Research, exploration, and retrospective sessions generate analytical artifacts that do not touch production code, configuration, or tests. To eliminate redundant test suite runs while preventing accidental QA bypass when code is modified, ADR-034 establishes a strict allowlist of permitted paths (`.agents/sessions/`, `.agents/analysis/`, `.agents/retrospective/`, `.serena/memories/`, `.agents/security/`, `.agents/memory/`, `.agents/architecture/REVIEW-*`, `.agents/critique/`). This script verifies that all changed files (or staged files if no commit range is specified) match this allowlist. Per ADR-035, the tool always returns exit code 0 and reports eligibility, changed files, and violations structured in JSON.

## Phase — required
none

## Inputs — required
- CLI option `--base-ref`: Include committed changes from this session starting commit through HEAD — scripts/validation/test_investigation_eligibility.py:150
- CLI option `--head-ref`: End at this commit and exclude working-tree changes — scripts/validation/test_investigation_eligibility.py:154
- Staged or range git file changes retrieved via `_run_git` — scripts/validation/test_investigation_eligibility.py:48
- Investigation allowlist patterns and display strings from `scripts.modules.investigation_allowlist` — scripts/validation/test_investigation_eligibility.py:25

## Outputs — required
- JSON payload to stdout containing `"Eligible"` boolean, `"ChangedFiles"`, `"StagedFiles"`, `"Violations"`, and `"AllowedPaths"` lists — scripts/validation/test_investigation_eligibility.py:219-224
- Exit code 0 always per ADR-035: `0 - Success (always returns 0, eligibility is in JSON output)` — scripts/validation/test_investigation_eligibility.py:9

## Invokes — required
- script get_investigation_allowlist_display — scripts/modules/investigation_allowlist.py:31
- script test_file_matches_allowlist — scripts/modules/investigation_allowlist.py:45

## Invoked by — required
- script test_investigation_eligibility.py — scripts/validate_session_json.py:170
- doc test_investigation_eligibility.py — .claude/skills/ai-agents-config-catalog/SKILL.md:100

## Concepts named — required, verbatim
- `_REPO_ROOT` — scripts/validation/test_investigation_eligibility.py:21 — defined here
- `get_investigation_allowlist_display` — scripts/validation/test_investigation_eligibility.py:26 — used here
- `_file_matches_allowlist` — scripts/validation/test_investigation_eligibility.py:29 — defined here
- `_ALLOWLIST_DISPLAY` — scripts/validation/test_investigation_eligibility.py:32 — defined here
- `_COMMIT_PATTERN` — scripts/validation/test_investigation_eligibility.py:34 — defined here
- `_name_status_paths` — scripts/validation/test_investigation_eligibility.py:37 — defined here
- `_run_git` — scripts/validation/test_investigation_eligibility.py:48 — defined here
- `_changed_files` — scripts/validation/test_investigation_eligibility.py:67 — defined here
- `build_parser` — scripts/validation/test_investigation_eligibility.py:141 — defined here
- `main` — scripts/validation/test_investigation_eligibility.py:159 — defined here

## Structure
- Shebang and module docstring — scripts/validation/test_investigation_eligibility.py:1-11
- Imports, path resolution, and allowlist setup — scripts/validation/test_investigation_eligibility.py:12-35
- Git query execution and path parsing helpers (_run_git, _name_status_paths) — scripts/validation/test_investigation_eligibility.py:37-65
- Changed files collector across commit ranges and staged diffs (_changed_files) — scripts/validation/test_investigation_eligibility.py:67-139
- Argument parser definition — scripts/validation/test_investigation_eligibility.py:141-157
- Eligibility validation engine and JSON reporting — scripts/validation/test_investigation_eligibility.py:159-232

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/test_investigation_eligibility.py`, language: Python 3, lines: 232
- documented invocation:
  - "Check whether changed files qualify for investigation-only QA." — scripts/validation/test_investigation_eligibility.py:144
- executed: yes
- actual command run: `python3 scripts/validation/test_investigation_eligibility.py --base-ref ef34453af203206cc69e0aa4ab4ff8c3c86395b9 --head-ref 2abef31dc6812b62696297bd1065b58727a35786`
- abridged stdout:
  ```
  {
    "Eligible": false,
    "ChangedFiles": [
      "tests/conftest.py",
      "tests/test_conftest_local_env_vars_cache.py",
      "tests/test_conftest_local_env_vars_xdist.py"
    ],
    "StagedFiles": [
      "tests/conftest.py",
      "tests/test_conftest_local_env_vars_cache.py",
      "tests/test_conftest_local_env_vars_xdist.py"
    ],
    "Violations": [
      "tests/conftest.py",
      "tests/test_conftest_local_env_vars_cache.py",
      "tests/test_conftest_local_env_vars_xdist.py"
    ],
    "AllowedPaths": [
      ".agents/sessions/",
      ".agents/analysis/",
      ".agents/retrospective/",
      ".serena/memories/",
      ".agents/security/",
      ".agents/memory/",
      ".agents/architecture/REVIEW-*",
      ".agents/critique/"
    ]
  }
  ```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "0 - Success (always returns 0, eligibility is in JSON output)" — scripts/validation/test_investigation_eligibility.py:9
  - Actual exit paths in code:
    - line 171: `return 0` on invalid base ref
    - line 183: `return 0` on invalid head ref
    - line 195: `return 0` when `--head-ref` provided without `--base-ref`
    - line 212: `return 0` on git execution error
    - line 227: `return 0` on completed check
    - line 231: `raise SystemExit(main())`
- for validators/gates:
  - can it exit non-zero: no, designed per ADR-035 to always exit 0 and convey errors and eligibility in JSON payload
  - does it fail on the source repo's own default branch: N/A (requires commit range parameters; executed against commit range with clean exit code 0)
- does the output match what the documentation claims: yes, outputs JSON payload with eligibility verdict and violation details

## Defects — required
none

## Observations
- Imports canonical allowlist definitions from `scripts.modules.investigation_allowlist`, maintaining single-source-of-truth alignment with CI check `.github/scripts/validate_investigation_claims.py`.
- When invoked without `--base-ref`, defaults to inspecting git staged changes (`git diff --cached`) for pre-commit agent checks.

## Context cost
7134 bytes, 232 lines, ~1780 tokens.
