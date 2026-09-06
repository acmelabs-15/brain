---
package: rjm
path: scripts/ai_review_outputs.py
type: script
bytes: 2883
unit: inv-rjm-196
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ai_review_outputs.py, sha256: 6d483eb4ec8210bf6680223566ea291dacb103d838f8bc60a0a673b58b14f09f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ai_review_outputs.py

## Purpose — required, verbatim
> "Write ai-review context to GitHub Actions outputs." — scripts/ai_review_outputs.py:1

## Design intent — required
Handles secure persistence and exportation of AI review context to GitHub Actions outputs ($GITHUB_OUTPUT) and runner scratch files. It automatically scrubs known GitHub authentication tokens (`GH_TOKEN`, `GITHUB_TOKEN`, `COPILOT_GITHUB_TOKEN`, `BOT_PAT`) via `redact_ci_sink`, sanitizes file identifiers to prevent path traversal, and computes collision-free multiline heredoc delimiters.

## Phase — required
rjm:review

## Inputs — required
- An object implementing the `ReviewContextLike` protocol (`text: str`, `mode: str`, `infrastructure_failure: bool`).
- Environment variables: `GITHUB_OUTPUT` (required), `RUNNER_TEMP` (required), `GITHUB_RUN_ID`, `PR_NUMBER`, and secret tokens listed in `SECRET_ENVIRONMENT_VARIABLES`.

## Outputs — required
- Sanitized context file written to `$RUNNER_TEMP/ai-review-context-pr<identifier>.txt`.
- GitHub Actions output parameters written to `$GITHUB_OUTPUT`: `context_mode`, `context_file`, `context_built` (multiline heredoc), and optionally `context_infra_failure`.

## Invokes — required
- script redact_secrets — scripts/ai_review_outputs.py:15

## Invoked by — required
- script ai_review_outputs — scripts/ci/build_ai_review_context.py:19

## Concepts named — required, verbatim
- `SECRET_ENVIRONMENT_VARIABLES` — scripts/ai_review_outputs.py:17 — defined here
- `ReviewContextLike` — scripts/ai_review_outputs.py:25 — defined here
- `OutputConfigError` — scripts/ai_review_outputs.py:31 — defined here
- `sanitize_file_identifier` — scripts/ai_review_outputs.py:35 — defined here
- `append_output` — scripts/ai_review_outputs.py:40 — defined here
- `choose_multiline_delimiter` — scripts/ai_review_outputs.py:45 — defined here
- `append_multiline_output` — scripts/ai_review_outputs.py:56 — defined here
- `write_outputs` — scripts/ai_review_outputs.py:62 — defined here
- `GITHUB_OUTPUT` — scripts/ai_review_outputs.py:63 — used here
- `RUNNER_TEMP` — scripts/ai_review_outputs.py:70 — used here

## Structure
- Write ai-review context to GitHub Actions outputs — scripts/ai_review_outputs.py:1

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ai_review_outputs.py`
- language: Python
- lines: 89
- documented invocation:
  "def write_outputs(review_context: ReviewContextLike) -> None:" — scripts/ai_review_outputs.py:62
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ai_review_outputs.py`
- abridged stdout: (empty)
- **actual exit code:** 0
- documented exit codes: none
- actual exit paths in code:
  No `sys.exit()` calls; raises `OutputConfigError` on missing required variables ("raise OutputConfigError(" — scripts/ai_review_outputs.py:65, 72).
- for validators/gates:
  Does not exit directly; raises `OutputConfigError` when `GITHUB_OUTPUT` or `RUNNER_TEMP` is not configured.
- does the output match what the documentation claims?
  Yes, writes context file and exports variables with safe delimiters to GitHub Actions outputs.

## Defects — required
none

## Observations
- Defense-in-depth against secret leakage: automatically intercepts and redacts tokens in `SECRET_ENVIRONMENT_VARIABLES` (`GH_TOKEN`, `GITHUB_TOKEN`, `COPILOT_GITHUB_TOKEN`, `BOT_PAT`) via `redact_ci_sink` before writing to file or environment sinks (scripts/ai_review_outputs.py:17-22, 76-81).
- Dynamic heredoc delimiter selection in `choose_multiline_delimiter` (lines 45-53) loops with incrementing numeric suffixes if the delimiter string appears in the content, eliminating heredoc injection vulnerabilities.

## Context cost
File size: 2,883 bytes (89 lines). Imports `scripts/redact_secrets.py` (16,302 bytes). Total size ~19.2 KB (~4,800 tokens).
