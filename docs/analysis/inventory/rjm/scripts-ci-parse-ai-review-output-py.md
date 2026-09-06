---
package: rjm
path: scripts/ci/parse_ai_review_output.py
type: script
bytes: 3863
unit: inv-rjm-205
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/parse_ai_review_output.py, sha256: 4cc1a530bbbeeb460d5db2626357c51d0ae0ed7c0b100e0e06d974264b31b9b2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/parse_ai_review_output.py

## Purpose — required, verbatim
> "Parse ai-review Copilot output and publish action outputs." — scripts/ci/parse_ai_review_output.py:1

## Design intent — required
Parses raw agent review text from GitHub Copilot AI review jobs in CI, extracting standardized verdict tokens (such as PASS, WARN, CRITICAL_FAIL, REJECTED, NON_COMPLIANT), milestone tags, and issue labels. It exports these values to GitHub Actions `$GITHUB_OUTPUT` environment files and returns exit code 0 or 1 based on whether the verdict is non-blocking or blocking.

## Phase — required
rjm:review

## Inputs — required
- Environment variable "AI_REVIEW_OUTPUT_FILE" pointing to AI output text — scripts/ci/parse_ai_review_output.py:112
- Environment variable "GITHUB_OUTPUT" specifying the destination action output path — scripts/ci/parse_ai_review_output.py:113
- Regex pattern matching verdict lines: `VERDICT_LINE_RE` — scripts/ci/parse_ai_review_output.py:37

## Outputs — required
- Appended output fields written to the file indicated by `$GITHUB_OUTPUT`:
  - `verdict=` — scripts/ci/parse_ai_review_output.py:96
  - `labels=` — scripts/ci/parse_ai_review_output.py:97
  - `milestone=` — scripts/ci/parse_ai_review_output.py:98
  - `exit_code=` — scripts/ci/parse_ai_review_output.py:99
- Process exit code:
  - `EXIT_OK = 0` — scripts/ci/parse_ai_review_output.py:13
  - `EXIT_CONFIG = 2` — scripts/ci/parse_ai_review_output.py:14

## Invokes — required
none

## Invoked by — required
- script scripts/external_signals/gate_aggregator.py — scripts/external_signals/gate_aggregator.py:39

## Concepts named — required, verbatim
- `ai-review` — scripts/ci/parse_ai_review_output.py:1 — used here
- `VALID_VERDICTS` — scripts/ci/parse_ai_review_output.py:15 — defined here
- `BLOCKING_VERDICTS` — scripts/ci/parse_ai_review_output.py:28 — defined here
- `ParseResult` — scripts/ci/parse_ai_review_output.py:44 — defined here
- `VERDICT` — scripts/ci/parse_ai_review_output.py:76 — used here
- `NEEDS_REVIEW` — scripts/ci/parse_ai_review_output.py:83 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/parse_ai_review_output.py`, language: Python, lines: 128
- documented invocation: `python3 scripts/ci/parse_ai_review_output.py` (reads "AI_REVIEW_OUTPUT_FILE" — scripts/ci/parse_ai_review_output.py:112)
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/parse_ai_review_output.py`
    stdout: `error: AI_REVIEW_OUTPUT_FILE is required`
    actual exit code: 2
  - Command: with mock environment variables: `AI_REVIEW_OUTPUT_FILE=... GITHUB_OUTPUT=... python3 sources/rjm/scripts/ci/parse_ai_review_output.py`
    stdout: `Parsed results:\n Verdict: PASS\n Labels: ["test-label"]\n Milestone: v1.0\n Exit Code: 0`
    actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - `EXIT_OK = 0` — scripts/ci/parse_ai_review_output.py:13
    - `EXIT_CONFIG = 2` — scripts/ci/parse_ai_review_output.py:14
  - Actual exit paths in code:
    - `return EXIT_CONFIG` — scripts/ci/parse_ai_review_output.py:110, 116, 119
    - `return EXIT_OK` — scripts/ci/parse_ai_review_output.py:123
    - `raise SystemExit(main())` — scripts/ci/parse_ai_review_output.py:127
- for validators/gates: can it exit non-zero?
  Yes, exits 2 if arguments are provided or required environment variables are absent (lines 110, 116, 119). Note: verdict pass/block evaluation is emitted as `exit_code=` in the step output file (line 99).
- does the output match what the documentation claims?
  Yes, parses verdict, milestone, and label tokens and writes formatted key-value pairs to `$GITHUB_OUTPUT`.

## Defects — required
none

## Observations
Falls back gracefully to searching for JSON formatted verdicts via `JSON_VERDICT_RE` if no literal line starting with `VERDICT:` is found, and treats unparseable verdicts as `NEEDS_REVIEW` to fail closed.

## Context cost
3863 bytes, 128 lines. Approximate tokens: ~950.
