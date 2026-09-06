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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/spec_prepare_context.py

## Purpose — required, verbatim
> "Prepare spec context for AI review." — scripts/ci/spec_prepare_context.py:2

## Design intent — required
Formats loaded specification content and optional incremental PR scope declarations into a sanitized multiline markdown context block for the AI review step in CI. Critically replaces a vulnerable bash heredoc block that used a fixed "EOF_SPEC" delimiter by generating a cryptographically secure, randomized heredoc delimiter (`EOF_<hex>`) via `secrets.token_hex(16)`, eliminating CWE-78 content injection vulnerabilities if specification content contains delimiter strings.

## Phase — required
rjm:spec

## Inputs — required
- Environment variable `SPEC_FILE` (line 12)
- Environment variable `INCREMENTAL_SCOPE` (line 13)
- Environment variable `GITHUB_OUTPUT` (line 14)

## Outputs — required
- GitHub step output `spec_context` containing the complete formatted multiline specification context block (line 17, 77, 79)

## Invokes — required
none

## Invoked by — required
- doc src/copilot-cli/instructions/ci-scripts.instructions.md — src/copilot-cli/instructions/ci-scripts.instructions.md:43
- script tests/ci/test_spec_prepare_context.py — tests/ci/test_spec_prepare_context.py:1

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/spec_prepare_context.py:5 — used here
- `CWE-78` — scripts/ci/spec_prepare_context.py:8, 33 — used here
- `ADR-035` — scripts/ci/spec_prepare_context.py:19 — used here
- `_write_multiline_output` — scripts/ci/spec_prepare_context.py:32 — defined here
- `run` — scripts/ci/spec_prepare_context.py:39 — defined here
- `main` — scripts/ci/spec_prepare_context.py:84 — defined here

## Structure
- `def _write_multiline_output` — scripts/ci/spec_prepare_context.py:32
- `def run` — scripts/ci/spec_prepare_context.py:39
- `def main` — scripts/ci/spec_prepare_context.py:84

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/spec_prepare_context.py`, language: Python, lines: 91
- documented invocation:
  - "Prepare spec context for AI review." — scripts/ci/spec_prepare_context.py:2
  - "spec_prepare_context.py" — src/copilot-cli/instructions/ci-scripts.instructions.md:43
- **executed:** yes
- actual command run: `SPEC_FILE=".agents/specs/requirements/req-003-multi-tool-artifact-build.md" INCREMENTAL_SCOPE="Phase 1 of #123" python3 scripts/ci/spec_prepare_context.py`, abridged stdout:
  ```
  spec_context=## Specification Content ... ## Incremental Scope Declaration ...
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - context written" — scripts/ci/spec_prepare_context.py:20
    - "2 - spec content file missing or unreadable" — scripts/ci/spec_prepare_context.py:21
  - actual exit paths:
    - `return 2` — scripts/ci/spec_prepare_context.py:47
    - `return 2` — scripts/ci/spec_prepare_context.py:52
    - `return 2` — scripts/ci/spec_prepare_context.py:58
    - `return 0` — scripts/ci/spec_prepare_context.py:81
    - `return run()` — scripts/ci/spec_prepare_context.py:86
    - `sys.exit(main())` — scripts/ci/spec_prepare_context.py:90
- for validators/gates: can exit non-zero (exits 2 when `SPEC_FILE` is missing, unreadable, or not a regular file). When executed without environment variables, exits 2 with `::error::SPEC_FILE is required when spec validation runs`.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
Provides CWE-78 mitigation through cryptographic randomization of heredoc delimiters. Dynamically injects an incremental scope directive instructing AI reviewers to restrict evaluation strictly to criteria relevant to declared scope slices.

## Context cost
2833 bytes, approximately 710 tokens.
