---
package: rjm
path: .github/scripts/run_with_retry.py
type: script
bytes: 4063
unit: inv-rjm-185
in_scope_via: .agents/architecture/ADR-005-powershell-only-scripting.md
aliases: []
memo_inputs:
  - {path: .github/scripts/run_with_retry.py, sha256: ee8221f3d767bbe3936d275d141cc0dea77c267cd2b8d95accb99a35333b10dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/run_with_retry.py

## Purpose — required, verbatim
> "Run a command with ADR-035 exit code handling." — .github/scripts/run_with_retry.py:2

## Design intent — required
A command execution wrapper enforcing ADR-035 exit code semantics across CI workflows and developer automation. It distinguishes between logic/validation errors (exit 1), configuration errors (exit 2), transient external service failures (exit 3), and authentication errors (exit 4). For transient failures, it executes exponential backoff retries before escalating; for configuration and authentication errors, it fails immediately with GitHub Actions error annotations. Without this script, CI jobs would either fail immediately on transient network glitches or blindly retry unrecoverable configuration and authentication errors.

## Phase — required
cross-phase

## Inputs — required
Command-line arguments:
- `--max-retries`: int (default: 2), maximum retry attempts for transient failures
- `--retry-delay`: int (default: 5), base delay seconds between retries, scaled by attempt
- `--`: separator argument dividing wrapper options from the command to run
- `COMMAND [ARGS...]`: command and arguments to execute as child process

## Outputs — required
- Standard output and standard error from the wrapped command passed through to the terminal
- GitHub Actions workflow commands: `::warning::` annotations on transient retries and `::error::` annotations on fatal configuration, authentication, or exhausted transient errors
- Process exit code matching the child process or wrapper failure

## Invokes — required
none

## Invoked by — required
- script scripts/ci/cli_exit_contract_coverage.py — scripts/ci/cli_exit_contract_coverage.py:298
- script scripts/validation/run_workflow_local_test.py — scripts/validation/run_workflow_local_test.py:752
- script .github/scripts/set_item_milestone.py — .github/scripts/set_item_milestone.py:292

## Concepts named — required, verbatim
- `ADR-035` — .github/scripts/run_with_retry.py:2 — used here
- `retry logic` — .github/scripts/run_with_retry.py:4 — defined here
- `Exit codes` — .github/scripts/run_with_retry.py:7 — defined here
- `_EXIT_SUCCESS` — .github/scripts/run_with_retry.py:32 — defined here
- `_EXIT_LOGIC` — .github/scripts/run_with_retry.py:33 — defined here
- `_EXIT_CONFIG` — .github/scripts/run_with_retry.py:34 — defined here
- `_EXIT_TRANSIENT` — .github/scripts/run_with_retry.py:35 — defined here
- `_EXIT_AUTH` — .github/scripts/run_with_retry.py:36 — defined here
- `parse_args` — .github/scripts/run_with_retry.py:39 — defined here
- `run_with_retry` — .github/scripts/run_with_retry.py:79 — defined here

## Structure
- def parse_args — .github/scripts/run_with_retry.py:39
- def run_with_retry — .github/scripts/run_with_retry.py:79
- def main — .github/scripts/run_with_retry.py:136

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/run_with_retry.py`, Python 3, 148 lines
- documented invocation: `python3 run_with_retry.py [--max-retries N] [--retry-delay N] -- COMMAND [ARGS...]` — .github/scripts/run_with_retry.py:15
- **executed:** yes
- actual command run: `python3 sources/rjm/.github/scripts/run_with_retry.py -- echo "hello"`
  abridged stdout:
  ```text
  hello
  ```
  **actual exit code:** 0
- documented exit codes (`0 - Success`, `1 - Logic/validation error (passthrough)`, `2 - Configuration error (fail-fast, passthrough)`, `3 - External service error (retried, then passthrough)`, `4 - Authentication error (fail-fast, passthrough)` from `.github/scripts/run_with_retry.py:8-12`) vs actual exit paths in code:
  - `return 0` at `.github/scripts/run_with_retry.py:95` (`code == _EXIT_SUCCESS`)
  - `return _EXIT_CONFIG` (2) at `.github/scripts/run_with_retry.py:103` (`code == _EXIT_CONFIG`)
  - `return _EXIT_AUTH` (4) at `.github/scripts/run_with_retry.py:111` (`code == _EXIT_AUTH`)
  - `return _EXIT_TRANSIENT` (3) at `.github/scripts/run_with_retry.py:129` and line 133
  - `return code` at `.github/scripts/run_with_retry.py:131` (other codes such as exit 1 passthrough)
  - `parser.error(...)` (exits 2) at `.github/scripts/run_with_retry.py:70` when command is empty
  - `sys.exit(main())` at `.github/scripts/run_with_retry.py:147`
- for validators/gates: can exit non-zero (verified with `python3 sources/rjm/.github/scripts/run_with_retry.py -- python3 -c "import sys; sys.exit(2)"`, exit code 2; verified transient retry with `python3 sources/rjm/.github/scripts/run_with_retry.py --max-retries 1 --retry-delay 1 -- python3 -c "import sys; sys.exit(3)"`, exit code 3)
- does the output match what the documentation claims: yes, wrapped command runs transparently and exit codes map accurately to ADR-035 specifications

## Defects — required
none

## Observations
Provides standard retry and error categorization for GitHub Actions workflow steps without requiring complex workflow YAML syntax. Employs `sys.stdout.flush()` before spawning subprocesses to preserve line ordering across pipes.

## Context cost
4063 bytes, approximately 1015 tokens.
