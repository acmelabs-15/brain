---
package: rjm
path: scripts/github_core/output.py
type: script
bytes: 11470
unit: inv-rjm-242
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/output.py, sha256: d440cb852e8bebf189d17d130b5715593516e4ce0a2d71bc303d7cf8357efead}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/output.py

## Purpose — required, verbatim
> "Standard skill output helpers per ADR-056." — scripts/github_core/output.py:1

## Design intent — required
Standardizes stdout output envelopes across skill scripts according to ADR-056 and ADR-103. Provides functions write_skill_output, write_skill_error, and get_output_format with support for both machine-readable JSON and human-readable ANSI-colored text. Enforces strict type and value constraints (valid error types, non-empty error messages, integer exit codes) to ensure downstream parsers and schemas (.agents/schemas/skill-output.schema.json) receive compliant envelopes, while automatically inferring script metadata and execution context (CI, TTY).

## Phase — required
cross-phase

## Inputs — required
- Result payload object (`data: object`) at `scripts/github_core/output.py:97`.
- Output format strings (`"json"`, `"human"`, `"auto"`) at `scripts/github_core/output.py:99` and `scripts/github_core/output.py:150`.
- Human summary text string (`human_summary: str`) at `scripts/github_core/output.py:100`.
- Status indicator strings (`"PASS"`, `"FAIL"`, `"WARNING"`, `"INFO"`) at `scripts/github_core/output.py:101` and `scripts/github_core/output.py:280`.
- Calling script name and version strings at `scripts/github_core/output.py:102-103` and `scripts/github_core/output.py:151-152`.
- Error message string (`message: str`) and exit code integer (`exit_code: int`) at `scripts/github_core/output.py:146-147`.
- Error category string (`error_type: str`) from `VALID_ERROR_TYPES` at `scripts/github_core/output.py:149`.
- Optional extra properties dictionary (`extra: dict[str, object] | None`) at `scripts/github_core/output.py:153`.
- Environment variables: `CI`, `GITHUB_ACTIONS`, `TF_BUILD` at `scripts/github_core/output.py:86`.
- Terminal TTY status: `sys.stdout.isatty()` at `scripts/github_core/output.py:90`.
- Call stack frames via `inspect.currentframe()` at `scripts/github_core/output.py:273`.

## Outputs — required
- Compact standardized JSON envelope string emitted to stdout and returned as `str` at `scripts/github_core/output.py:136-137` and `scripts/github_core/output.py:262-263`.
- ANSI colored one-line status summary emitted to stdout returning `None` at `scripts/github_core/output.py:141-142` and `scripts/github_core/output.py:265-266`.

## Invokes — required
none

## Invoked by — required
- script output — scripts/github_core/__init__.py:50

## Concepts named — required, verbatim
- `ADR-056` — scripts/github_core/output.py:1 — used here
- `write_skill_output` — scripts/github_core/output.py:3 — defined here
- `write_skill_error` — scripts/github_core/output.py:3 — defined here
- `get_output_format` — scripts/github_core/output.py:3 — defined here
- `ADR-103` — scripts/github_core/output.py:8 — used here
- `ADR-035` — scripts/github_core/output.py:9 — used here
- `VALID_ERROR_TYPES` — scripts/github_core/output.py:42 — defined here
- `add_output_format_arg` — scripts/github_core/output.py:54 — defined here
- `_detect_script_name` — scripts/github_core/output.py:269 — defined here
- `_status_color` — scripts/github_core/output.py:280 — defined here

## Structure
none (python module; constants: VALID_ERROR_TYPES; functions: add_output_format_arg, get_output_format, write_skill_output, write_skill_error, _detect_script_name, _status_color)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/output.py`, language: Python 3, lines: 289
- documented invocation: none (library module; imported by dependent skill scripts)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/output.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.output import write_skill_output; write_skill_output({'test': 1}, output_format='json')"`
  abridged stdout: `{"Success":true,"Data":{"test":1},"Error":null,"Metadata":{"Script":"unknown","Version":"1.0.0","Timestamp":"2026-09-06T05:51:45.078944+00:00"}}`
  **actual exit code:** 0
- documented exit codes: none (library module) vs. actual exit paths in code:
  - ValueError: `scripts/github_core/output.py:170` (invalid error_type)
  - ValueError: `scripts/github_core/output.py:194` (empty message)
  - ValueError: `scripts/github_core/output.py:207` (non-string message)
  - ValueError: `scripts/github_core/output.py:238` (non-integer exit_code)
  - clean module execution exits 0
- for validators/gates:
  - can it exit non-zero? no (raises ValueError on validation violations rather than calling sys.exit)
  - does it fail on the source repo's own default branch? no, standalone module execution exits 0
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Rigorous envelope validation: implements fail-closed runtime checks on `write_skill_error` ensuring that `message` is a non-empty string and `exit_code` is a genuine integer (not boolean), preventing malformed envelopes from violating `.agents/schemas/skill-output.schema.json`.
- Historical divergence tracking: detailed code comments (lines 20-41, 174-194, 196-207, 208-239) trace review feedback across PR #5283, ADR-103 Round 5, and issue #5303.
- Context cost: 11,470 bytes, approximately 2,868 tokens.
