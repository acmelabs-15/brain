---
package: rjm
path: scripts/ci/check_claude_authorization.py
type: script
bytes: 3643
unit: inv-rjm-200
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/check_claude_authorization.py, sha256: 02d1029955d370a06572aac4b1f500a8043a0f588edfd0aca83258ccf33b7297}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/check_claude_authorization.py

## Purpose — required, verbatim
> "Run the Claude authorization check and validate its answer." — scripts/ci/check_claude_authorization.py:2

## Design intent — required
Validates and standardizes the execution of Claude authorization checks within CI/CD automation. By extracting inline shell logic from GitHub Actions workflow YAML into a tested Python entry point (ADR-006), it cleanly separates script faults (non-zero checker exit) and truncated/malformed responses (not `true` or `false`) from legitimate authorization denials. This ensures authentication infrastructure failures fail loudly rather than silently treating errors as "not authorized", while remaining agnostic of repository layout by accepting the checker script path dynamically.

## Phase — required
none

## Inputs — required
- CLI options: `--checker` — scripts/ci/check_claude_authorization.py:74 (required path to authorization check script)
- Optional context flags: `pr-title` — scripts/ci/check_claude_authorization.py:44 (passed along with event-name, actor, author-association, comment-body, review-body, issue-body, issue-title, pr-body)
- Environment variable: `GITHUB_OUTPUT` — scripts/ci/check_claude_authorization.py:102

## Outputs — required
- GitHub Actions output parameter: `authorized=true` or `authorized=false` written to `$GITHUB_OUTPUT` (or printed to stdout when unset) — scripts/ci/check_claude_authorization.py:105, 107
- GitHub Actions error annotations: `::error::<line>` messages on validation failures — scripts/ci/check_claude_authorization.py:50

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/check_claude_authorization.py:4 — used here
- `run_check` — scripts/ci/check_claude_authorization.py:54 — defined here
- `main` — scripts/ci/check_claude_authorization.py:72 — defined here
- `GITHUB_OUTPUT` — scripts/ci/check_claude_authorization.py:102 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/check_claude_authorization.py`, language: Python, lines: 113
- documented invocation:
  > "Run the Claude authorization check and validate its answer." — scripts/ci/check_claude_authorization.py:2
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/check_claude_authorization.py --help`
  abridged stdout: `usage: check_claude_authorization.py [-h] --checker CHECKER ...`
  actual exit code: 0
- documented exit codes:
  "The checker exited non-zero. That is a script fault, not a denial, and it" — scripts/ci/check_claude_authorization.py:10
  vs. actual exit paths in code:
  `return _fail(f"Authorization check script not found: {checker}")` — scripts/ci/check_claude_authorization.py:81 (returns 1)
  `return _fail(` — scripts/ci/check_claude_authorization.py:87 (returns 1)
  `return _fail(` — scripts/ci/check_claude_authorization.py:96 (returns 1)
  `return 0` — scripts/ci/check_claude_authorization.py:108
  `sys.exit(main())` — scripts/ci/check_claude_authorization.py:112
- for validators/gates: can it exit non-zero? yes (returns exit code 1 when the checker script is missing, exits non-zero, or emits an invalid answer). Does it fail on default branch? No failing execution when provided a valid checker script.
- does the output match what the documentation claims? yes (executes checker script, validates output, and writes authorization status to GITHUB_OUTPUT).

## Defects — required
- orphan — scripts/ci/check_claude_authorization.py:1 — Not invoked by any in-scope lifecycle script or agent; only referenced in test suites and out-of-scope `.github/workflows/claude.yml`.

## Observations
- Implements ADR-006 ("no logic in workflow YAML") by moving shell parameter extraction and error handling into a unit-testable Python script (issue #3536).
- Explicitly documents why whitespace deletion via `tr -d '[:space:]'` was unsafe (would convert malformed "tr ue" into "true") and replaces it with `strip()`.

## Context cost
3643 bytes (~900 tokens). Self-contained script using only Python standard library modules.
