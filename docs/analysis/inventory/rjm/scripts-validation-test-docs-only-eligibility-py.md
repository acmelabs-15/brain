---
package: rjm
path: scripts/validation/test_docs_only_eligibility.py
type: script
bytes: 7088
unit: inv-rjm-307
in_scope_via: scripts/validate_session_json.py
aliases: []
memo_inputs:
  - {path: scripts/validation/test_docs_only_eligibility.py, sha256: 48f4efe6536b3925eff5d41113d6f3a1079f5d87fdb1b300e3fb01d89c72ffbf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/test_docs_only_eligibility.py

## Purpose — required, verbatim
> "Check if changed files qualify for the docs-only QA skip." — scripts/validation/test_docs_only_eligibility.py:2

## Design intent — required
Enforces strict qualification criteria for bypassing QA via `SKIPPED: docs-only` across a commit range. While editorial documentation changes (spelling, prose clarification, punctuation) do not require running full test suites, accidental or undeclared modifications to executable code examples, configurations, or non-documentation files introduce regression risk. The script evaluates all files modified between `--base-ref` and `--head-ref` (using `git log --first-parent --no-merges` to exclude upstream changes brought by branch merges, per issue #4915). It verifies that all changed files end with `.md` and scans fenced (backticks or tildes) and indented code blocks between revisions. If any non-documentation file was changed or any code block content was altered, it reports violations and marks eligibility false. Per ADR-035, it always exits with code 0, providing the structured verdict in JSON to callers.

## Phase — required
none

## Inputs — required
- CLI option `--base-ref`: Start of the commit range (exclusive) — scripts/validation/test_docs_only_eligibility.py:156
- CLI option `--head-ref`: End of the commit range (inclusive) — scripts/validation/test_docs_only_eligibility.py:161
- Git log and show commands executed via `_run_git` — scripts/validation/test_docs_only_eligibility.py:77

## Outputs — required
- JSON payload to stdout containing `"Eligible"` boolean, `"ChangedFiles"`, and `"Violations"` lists — scripts/validation/test_docs_only_eligibility.py:200-202
- Exit code 0 always per ADR-035: `0 - Success (always returns 0, eligibility is in JSON output)` — scripts/validation/test_docs_only_eligibility.py:18

## Invokes — required
none

## Invoked by — required
- script test_docs_only_eligibility.py — scripts/validate_session_json.py:168
- doc test_docs_only_eligibility.py — .claude/skills/ai-agents-config-catalog/SKILL.md:101

## Concepts named — required, verbatim
- `_COMMIT_PATTERN` — scripts/validation/test_docs_only_eligibility.py:28 — defined here
- `_FENCE_START_PATTERN` — scripts/validation/test_docs_only_eligibility.py:29 — defined here
- `_INDENTED_CODE_PATTERN` — scripts/validation/test_docs_only_eligibility.py:30 — defined here
- `_DOC_EXTENSIONS` — scripts/validation/test_docs_only_eligibility.py:31 — defined here
- `_is_doc_file` — scripts/validation/test_docs_only_eligibility.py:34 — defined here
- `_code_block_lines` — scripts/validation/test_docs_only_eligibility.py:39 — defined here
- `_run_git` — scripts/validation/test_docs_only_eligibility.py:77 — defined here
- `_name_status_paths` — scripts/validation/test_docs_only_eligibility.py:94 — defined here
- `_changed_files` — scripts/validation/test_docs_only_eligibility.py:105 — defined here
- `_content_at` — scripts/validation/test_docs_only_eligibility.py:131 — defined here
- `_file_is_editorial` — scripts/validation/test_docs_only_eligibility.py:139 — defined here
- `build_parser` — scripts/validation/test_docs_only_eligibility.py:148 — defined here
- `_error_output` — scripts/validation/test_docs_only_eligibility.py:166 — defined here
- `main` — scripts/validation/test_docs_only_eligibility.py:175 — defined here

## Structure
- Shebang and module docstring — scripts/validation/test_docs_only_eligibility.py:1-20
- Imports and regex constants — scripts/validation/test_docs_only_eligibility.py:21-32
- Documentation file check and code block extractor (_code_block_lines) — scripts/validation/test_docs_only_eligibility.py:34-75
- Git query execution and changed file discovery (_changed_files) — scripts/validation/test_docs_only_eligibility.py:77-137
- Editorial comparator (_file_is_editorial) — scripts/validation/test_docs_only_eligibility.py:139-146
- Argument parser and main CLI runner — scripts/validation/test_docs_only_eligibility.py:148-210

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/test_docs_only_eligibility.py`, language: Python 3, lines: 210
- documented invocation:
  - "Check whether changed files qualify for docs-only QA skip." — scripts/validation/test_docs_only_eligibility.py:151
- executed: yes
- actual command run: `python3 scripts/validation/test_docs_only_eligibility.py --base-ref ef34453af203206cc69e0aa4ab4ff8c3c86395b9 --head-ref 2abef31dc6812b62696297bd1065b58727a35786`
- abridged stdout:
  ```
  {
    "Eligible": false,
    "ChangedFiles": [
      "tests/conftest.py",
      "tests/test_conftest_local_env_vars_cache.py",
      "tests/test_conftest_local_env_vars_xdist.py"
    ],
    "Violations": [
      "tests/conftest.py: not a documentation file",
      "tests/test_conftest_local_env_vars_cache.py: not a documentation file",
      "tests/test_conftest_local_env_vars_xdist.py: not a documentation file"
    ]
  }
  ```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "0 - Success (always returns 0, eligibility is in JSON output)" — scripts/validation/test_docs_only_eligibility.py:18
  - Actual exit paths in code:
    - line 180: `return 0` on invalid base ref
    - line 183: `return 0` on invalid head ref
    - line 188: `return 0` on git execution error
    - line 205: `return 0` on completed check
    - line 209: `raise SystemExit(main())`
- for validators/gates:
  - can it exit non-zero: no, designed per ADR-035 to always exit 0 and convey errors and eligibility in JSON payload
  - does it fail on the source repo's own default branch: N/A (requires commit range parameters; executed against commit range with clean exit code 0)
- does the output match what the documentation claims: yes, outputs JSON payload with eligibility verdict and violation details

## Defects — required
none

## Observations
- Conservative code block parsing treats four-space indented lines outside fences as code, which may over-flag list continuation prose as code but ensures code changes are never under-flagged (fail closed).
- Excludes merge commits via `git log --first-parent --no-merges` to ensure upstream changes integrated into the branch do not disqualify documentation eligibility (issue #4915).

## Context cost
7088 bytes, 210 lines, ~1770 tokens.
