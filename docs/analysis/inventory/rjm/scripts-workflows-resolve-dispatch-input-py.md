---
package: rjm
path: scripts/workflows/resolve_dispatch_input.py
type: script
bytes: 3574
unit: inv-rjm-311
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/workflows/resolve_dispatch_input.py, sha256: 35d272602e2bc342d438f73d230f9bfc7c092cdd82e0623fbbfa5915113e7612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/workflows/resolve_dispatch_input.py

## Purpose — required, verbatim
> "Validate a workflow input and write it to a GitHub Actions step output." — scripts/workflows/resolve_dispatch_input.py:2

## Design intent — required
Enforces input validation and sanitization for GitHub Actions workflow inputs (from `workflow_dispatch` or event payloads) before they reach downstream shell or CLI commands. It eliminates command injection attack surfaces (issue #3652) and prevents GitHub Actions output line forgery by validating integer inputs (strictly positive), validating choice inputs against whitelists, and rejecting newline/carriage-return characters in output values.

## Phase — required
rjm:devops

## Inputs — required
Environment variables:
- `GITHUB_OUTPUT` (required; file path where step output is appended)
- `OUTPUT_NAME` (required; identifier matching `^[A-Za-z_][A-Za-z0-9_-]*$`)
- `INPUT_VALUE` (required; raw input string)
- `VALUE_KIND` (optional; `integer` [default] or `choice`)
- `ALLOWED_CHOICES` (comma-separated allowed values when `VALUE_KIND=choice`)

## Outputs — required
Appends `<OUTPUT_NAME>=<value>\n` to the file specified by `$GITHUB_OUTPUT`.
Outputs error annotation `::error::<output_name> <problem>` to stderr if rejected.

## Invokes — required
none

## Invoked by — required
- file .github/workflows/agent-metrics.yml — .github/workflows/agent-metrics.yml:69
- file .github/workflows/copilot-context-synthesis.yml — .github/workflows/copilot-context-synthesis.yml:93

## Concepts named — required, verbatim
- `ConfigError` — scripts/workflows/resolve_dispatch_input.py:38 — defined here
- `parse_choices` — scripts/workflows/resolve_dispatch_input.py:42 — defined here
- `rejection` — scripts/workflows/resolve_dispatch_input.py:46 — defined here
- `write_output` — scripts/workflows/resolve_dispatch_input.py:59 — defined here
- `main` — scripts/workflows/resolve_dispatch_input.py:70 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/workflows/resolve_dispatch_input.py`, Python 3, 95 lines
- documented invocation:
  > "            python scripts/workflows/resolve_dispatch_input.py" — .github/workflows/agent-metrics.yml:69
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command 1 (valid integer): `GITHUB_OUTPUT=/tmp/test_resolve.txt OUTPUT_NAME=days INPUT_VALUE="7" VALUE_KIND=integer python3 scripts/workflows/resolve_dispatch_input.py`
  Stdout: (empty; wrote `days=7` to file)
  Actual exit code: 0
  Command 2 (invalid value rejected): `GITHUB_OUTPUT=/tmp/test_resolve.txt OUTPUT_NAME=days INPUT_VALUE="0" VALUE_KIND=integer python3 scripts/workflows/resolve_dispatch_input.py`
  Stderr: `::error::days must be a positive integer`
  Actual exit code: 1
  Command 3 (config error): `python3 scripts/workflows/resolve_dispatch_input.py`
  Stderr: `error: missing environment variable: GITHUB_OUTPUT`
  Actual exit code: 2
- documented exit codes vs. actual exit paths in code:
  Documented:
  > "Exit codes (AGENTS.md): 0 ok, 1 the value is rejected, 2 config error." — scripts/workflows/resolve_dispatch_input.py:20
  Actual exit paths:
  `sys.exit(main())` at line 94.
  `main()` returns `EXIT_OK` (0) at line 90.
  `main()` returns `EXIT_REJECTED` (1) at line 82 when `problem is not None`.
  `main()` returns `EXIT_CONFIG` (2) at lines 86 and 89 on `KeyError`, `ConfigError`, or `OSError`.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes; exits 1 when an input value fails validation (e.g. non-positive integer, choice not in whitelist), and exits 2 on configuration errors.
- does the output match what the documentation claims?
  Yes; matches documented exit codes (0, 1, 2) and output format exactly.

## Defects — required
none

## Observations
Includes defense-in-depth against GitHub Actions output injection forgery: line 64 explicitly checks `if "\n" in value or "\r" in value:` to prevent forged output lines.

## Context cost
3574 bytes (~894 tokens). Standard library only.
