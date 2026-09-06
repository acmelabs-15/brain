---
package: rjm
path: scripts/validation/subprocess_runner.py
type: script
bytes: 3093
unit: inv-rjm-307
in_scope_via: scripts/validation/checks_common.py
aliases: []
memo_inputs:
  - {path: scripts/validation/subprocess_runner.py, sha256: 13a3a7690a4426e9fb0fb86cbc33c402ef526fd9b5e353cdc3a79ccd056d42ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/subprocess_runner.py

## Purpose — required, verbatim
> "Subprocess wrapper shared by the pre-PR validation check modules." — scripts/validation/subprocess_runner.py:2

## Design intent — required
Provides a resilient subprocess execution wrapper (`_run_subprocess`) and stream decoder (`_decode_stream`) for pre-PR validation checks across platforms. Standard Python `subprocess.run` with a timeout discards partial stdout and stderr produced prior to `TimeoutExpired`, obscuring which check or ratchet timed out (issue #4955, resolving issue #4876). This helper captures and preserves partial output across both POSIX (where streams arrive as raw bytes) and Windows (where streams arrive as decoded strings), appending a distinct timeout marker (`Command timed out after Ns`) to stderr and returning exit status -1. In addition, it integrates target platform executable resolution via `resolve_executable` so cross-platform command invocations resolve correctly.

## Phase — required
none

## Inputs — required
- `args`: List of command arguments — scripts/validation/subprocess_runner.py:41
- `timeout`: Subprocess timeout in seconds (default: 300) — scripts/validation/subprocess_runner.py:42
- `cwd`: Working directory path or string (default: None) — scripts/validation/subprocess_runner.py:43
- `env`: Environment variable mapping replacing child environment — scripts/validation/subprocess_runner.py:44

## Outputs — required
- 3-tuple `(returncode, stdout, stderr)` returning process returncode, standard output, and standard error — scripts/validation/subprocess_runner.py:45
- Return code -1 on missing command: `Command not found:` — scripts/validation/subprocess_runner.py:72
- Return code -1 on timeout: `Command timed out after` — scripts/validation/subprocess_runner.py:76

## Invokes — required
- script resolve_executable — scripts/cli_exec.py:99

## Invoked by — required
- script _run_subprocess — scripts/validation/checks_common.py:37

## Concepts named — required, verbatim
- `resolve_executable` — scripts/validation/subprocess_runner.py:20 — used here
- `_decode_stream` — scripts/validation/subprocess_runner.py:23 — defined here
- `_run_subprocess` — scripts/validation/subprocess_runner.py:40 — defined here

## Structure
- Shebang and module docstring — scripts/validation/subprocess_runner.py:1-12
- Imports — scripts/validation/subprocess_runner.py:14-20
- Stream decode helper with UTF-8 replacement (_decode_stream) — scripts/validation/subprocess_runner.py:23-37
- Platform-aware subprocess runner with timeout capture (_run_subprocess) — scripts/validation/subprocess_runner.py:40-79

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/subprocess_runner.py`, language: Python 3, lines: 79
- documented invocation:
  - "Subprocess wrapper shared by the pre-PR validation check modules." — scripts/validation/subprocess_runner.py:2
- executed: yes
- actual command run: `PYTHONPATH=sources/rjm python3 -c "from scripts.validation.subprocess_runner import _run_subprocess; print(_run_subprocess(['echo', 'hello']))"`
- abridged stdout:
  ```
  (0, 'hello\n', '')
  ```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "the exit code is ``-1`` and the" — scripts/validation/subprocess_runner.py:54
  - Actual exit paths in code:
    - line 70: `return result.returncode, result.stdout, result.stderr` on completed execution
    - line 72: `return -1, "", f"Command not found: {args[0]}"` on `FileNotFoundError`
    - line 78: `return -1, partial_stdout, combined_stderr` on `subprocess.TimeoutExpired`
- for validators/gates:
  - can it exit non-zero: library module does not exit process directly; returns -1 in return tuple on command failure or timeout
  - does it fail on the source repo's own default branch: no, library functions execute cleanly
- does the output match what the documentation claims: yes, captures stdout, stderr, and preserves partial output on timeout

## Defects — required
none

## Observations
- Pure library module without CLI `main()` entry point, imported by `checks_common.py` and re-exported to pre-PR gate validators.
- Preserves partial stdout and stderr from `TimeoutExpired` across POSIX (`bytes`) and Windows (`str`) execution models.

## Context cost
3093 bytes, 79 lines, ~770 tokens.
