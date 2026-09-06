---
package: rjm
path: scripts/ci/artifact_build_context.py
type: script
bytes: 3292
unit: inv-rjm-198
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/artifact_build_context.py, sha256: f339c103901b07ad898ad3e37e6863f3a961ef0bea50d2188095074e6b05c3f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/artifact_build_context.py

## Purpose — required, verbatim
> "Build artifact context file for AI analysis." — scripts/ci/artifact_build_context.py:2

## Design intent — required
CI utility script that replaces an inline bash step in `artifact-insight-scanner.yml` to satisfy ADR-006 ("Thin Workflows, Testable Modules"). It reads a list of recently collected artifact file paths, aggregates up to 500 lines of content per file into a single consolidated markdown document (`artifact-context.md`), and redacts secrets and credentials by invoking `scripts.redact_secrets.redact_ci_sink` before writing the context to disk. The redaction checks for known secret environment variables (`GH_TOKEN`, `GITHUB_TOKEN`, `COPILOT_GITHUB_TOKEN`, and `BOT_PAT`) and recognized token patterns, preventing sensitive data exposure when artifacts are submitted for downstream automated AI analysis. Finally, it records the output file path and byte size in `GITHUB_OUTPUT`.

## Phase — required
rjm:test

## Inputs — required
- Path to artifact list file via environment variable `ARTIFACT_FILE` — scripts/ci/artifact_build_context.py:8,66
- Intermediate file directory via environment variable `RUNNER_TEMP` (default ".") — scripts/ci/artifact_build_context.py:9,76
- GitHub Actions step output file via environment variable `GITHUB_OUTPUT` — scripts/ci/artifact_build_context.py:10,53
- Secret environment variables `GH_TOKEN`, `GITHUB_TOKEN`, `COPILOT_GITHUB_TOKEN`, `BOT_PAT` used for redaction — scripts/ci/artifact_build_context.py:34-37

## Outputs — required
- Consolidated markdown file containing artifact excerpts written to `artifact-context.md` — scripts/ci/artifact_build_context.py:77
- Step outputs `context_file` and `context_size` emitted to GITHUB_OUTPUT — scripts/ci/artifact_build_context.py:13-14
- Exit code: 0 on success, 1 on missing ARTIFACT_FILE or unreadable file — scripts/ci/artifact_build_context.py:17-18

## Invokes — required
- script redact_secrets — scripts/ci/artifact_build_context.py:31

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/artifact_build_context.py:5 — used here
- `ADR-035` — scripts/ci/artifact_build_context.py:16 — used here
- `redact_artifact_text` — scripts/ci/artifact_build_context.py:41 — defined here
- `write_github_output` — scripts/ci/artifact_build_context.py:51 — defined here

## Structure
(no section headings in script; top-level imports, sys.path configuration, constants `_SECRET_ENVIRONMENT_VARIABLES`, helper functions `redact_artifact_text`, `write_github_output`, constant `_MAX_LINES_PER_FILE`, build runner `run`, and entry point `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/artifact_build_context.py`, language: Python, lines: 114
- documented invocation: none explicit (requires environment variable `ARTIFACT_FILE`, optional `RUNNER_TEMP`, `GITHUB_OUTPUT`)
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/artifact_build_context.py`
- abridged stdout: `::error::ARTIFACT_FILE env var is required`
- actual exit code: 1
- documented exit codes:
  - "0 - context file built" — scripts/ci/artifact_build_context.py:17
  - "1 - ARTIFACT_FILE env var missing or file not found" — scripts/ci/artifact_build_context.py:18
  vs. actual exit paths:
  - line 69: `return 1` (exit code 1)
  - line 74: `return 1` (exit code 1)
  - line 104: `return 0` (exit code 0)
  - line 113: `sys.exit(main())`
- for validators/gates: not a validator or gate; artifact preparation script for AI analysis workflows
- does the output match what the documentation claims: yes

## Defects — required
- orphan — scripts/ci/artifact_build_context.py:1 — not invoked by any in-scope file (called by out-of-scope .github/workflows/artifact-insight-scanner.yml:73)
- doc-drift — scripts/ci/artifact_build_context.py:16-19 — docstring cites ADR-035 exit code conventions but returns exit code 1 for missing configuration variable ARTIFACT_FILE where ADR-035 reserves exit 2 for configuration errors

## Observations
Caps each artifact's contribution at 500 lines (`_MAX_LINES_PER_FILE = 500`) to bound context window consumption for downstream AI analysis prompts. Redacts tokens in sink mode without redacting assignments (`redact_assignments=False`).

## Context cost
3292 bytes plus loaded module `scripts/redact_secrets.py` (16298 bytes) = 19590 bytes (~4900 tokens).
