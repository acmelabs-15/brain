---
package: rjm
path: scripts/ci/spec_prepare_context.py
type: script
bytes: 2833
unit: inv-rjm-208
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/spec_prepare_context.py, sha256: 6f1d8dd7c64d6ef089d7e00f067f880addbeeaee5a2e4d99a60ff76c42202a9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/spec_prepare_context.py

## Purpose — required, verbatim
> "Prepare spec context for AI review." — scripts/ci/spec_prepare_context.py:2

## Design intent — required
Formats loaded specification content into a structured prompt context for AI spec review in CI. Replaces an inline bash block in `ai-spec-validation.yml` per ADR-006 and ADR-035. Uses a cryptographically random heredoc delimiter (`secrets.token_hex(16)`) to prevent heredoc injection vulnerabilities (CWE-78) if spec content contains delimiter strings, and appends an incremental scope declaration if specified.

## Phase — required
none

## Inputs — required
- Environment variable `SPEC_FILE` — scripts/ci/spec_prepare_context.py:12
- Environment variable `INCREMENTAL_SCOPE` — scripts/ci/spec_prepare_context.py:13
- Environment variable `GITHUB_OUTPUT` — scripts/ci/spec_prepare_context.py:14
- Spec content file referenced by `SPEC_FILE` — scripts/ci/spec_prepare_context.py:12

## Outputs — required
- Multiline step output `spec_context` written to `GITHUB_OUTPUT` or stdout — scripts/ci/spec_prepare_context.py:17

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ai-spec-validation.yml` — scripts/ci/spec_prepare_context.py:5 — used here
- `ADR-006` — scripts/ci/spec_prepare_context.py:5 — used here
- `CWE-78` — scripts/ci/spec_prepare_context.py:8 — used here
- `SPEC_FILE` — scripts/ci/spec_prepare_context.py:12 — used here
- `INCREMENTAL_SCOPE` — scripts/ci/spec_prepare_context.py:13 — used here
- `GITHUB_OUTPUT` — scripts/ci/spec_prepare_context.py:14 — used here
- `spec_context` — scripts/ci/spec_prepare_context.py:17 — defined here
- `ADR-035` — scripts/ci/spec_prepare_context.py:19 — used here
- `_write_multiline_output` — scripts/ci/spec_prepare_context.py:32 — defined here
- `run` — scripts/ci/spec_prepare_context.py:39 — defined here
- `main` — scripts/ci/spec_prepare_context.py:84 — defined here

## Structure
none (python script; functions: _write_multiline_output, run, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/spec_prepare_context.py`, language: Python 3, lines: 91
- documented invocation:
  "Prepare spec context for AI review." — scripts/ci/spec_prepare_context.py:2
  (CLI command: `SPEC_FILE="<path>" python3 scripts/ci/spec_prepare_context.py`)
- executed: yes
- actual command run: `SPEC_FILE=".agents/specs/agent-orchestration-mcp-spec.md" INCREMENTAL_SCOPE="phase 1 orchestration" python3 scripts/ci/spec_prepare_context.py` (executed from `sources/rjm`)
  abridged stdout:
  ```
  spec_context=## Specification Content
  ...
  ## Incremental Scope Declaration

  This PR explicitly declares it implements: phase 1 orchestration
  Evaluate coverage ONLY against the acceptance criteria
  relevant to this declared scope. Criteria belonging to
  other phases or future PRs are NOT expected to be covered
  and must be treated as N/A for this evaluation.
  ```
  actual exit code: 0
- documented exit codes:
  `0 - context written` — scripts/ci/spec_prepare_context.py:20
  `2 - spec content file missing or unreadable` — scripts/ci/spec_prepare_context.py:21
  vs. actual exit paths in code:
  `scripts/ci/spec_prepare_context.py:47` (`return 2`)
  `scripts/ci/spec_prepare_context.py:52` (`return 2`)
  `scripts/ci/spec_prepare_context.py:58` (`return 2`)
  `scripts/ci/spec_prepare_context.py:81` (`return 0`)
  `scripts/ci/spec_prepare_context.py:90` (`sys.exit(main())`)
- for validators/gates: can it exit non-zero? yes (exits 2 if `SPEC_FILE` is unset, nonexistent, or unreadable). does it fail on the source repo's own default branch? no when provided a valid spec file path; exits 2 when run with no environment variables.
- does the output match what the documentation claims? yes (formats spec content and incremental scope section, outputting to `GITHUB_OUTPUT` or stdout)

## Defects — required
- `orphan — scripts/ci/spec_prepare_context.py:4 — not invoked by any in-scope lifecycle file (replaces bash block in out-of-scope .github/workflows/ai-spec-validation.yml)`

## Observations
- Specifically addresses CWE-78 heredoc injection by generating a dynamic cryptographic nonce (`EOF_{secrets.token_hex(16)}`) for GitHub step output formatting rather than relying on a static `EOF_SPEC` string.
- Tested in repository by `tests/ci/test_spec_prepare_context.py`.

## Context cost
2,833 bytes (~708 tokens). Standard library only (`os`, `secrets`, `sys`, `pathlib`).
