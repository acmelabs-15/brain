---
package: rjm
path: .claude/skills/orphan-ref-validator/scripts/envelope.py
type: script
bytes: 9867
unit: inv-rjm-129
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/envelope.py, sha256: f51b9de35bb30d74816b925605a9a38d71e0fbe63ce38f9e4bc138ec0f90c1d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/orphan-ref-validator/scripts/envelope.py

## Purpose — required, verbatim
> "orphan-ref-validator output types + ADR-056 envelope rendering." — .claude/skills/orphan-ref-validator/scripts/envelope.py:2

## Design intent — required
Defines the core data models (`Finding`, `SuppressedReference`, `IncompleteScan`, `ScanResult`) and serialization functions for the `orphan-ref-validator` skill conforming to the ADR-056 structured output envelope specification (`Success`, `Data`, `Error`, `Metadata`) and ADR-035 exit code mappings. It guarantees consistent JSON and human-readable output formats across normal scans, warnings, critical failures, and configuration/runtime errors, while providing stable baseline keys for debt suppression and calculating overall scan verdicts based on finding severities.

## Phase — required
rjm:build

## Inputs — required
- Dataclass parameters and scan outcomes:
  - `Finding` attributes: `kind`, `severity`, `target_file`, `line`, `referenced_entity`, `recommendation`, `expected`, `actual`, `suppressed` (.claude/skills/orphan-ref-validator/scripts/envelope.py:41-49)
  - `SuppressedReference` attributes: `target_file`, `line`, `referenced_entity`, `reason` (.claude/skills/orphan-ref-validator/scripts/envelope.py:81-84)
  - `IncompleteScan` attributes: `target`, `reason`, `error_type` (.claude/skills/orphan-ref-validator/scripts/envelope.py:97-99)
  - `ScanResult` attributes: `findings`, `files_scanned`, `files_skipped`, `refs_checked`, `directive_suppressed`, `incomplete_scans` (.claude/skills/orphan-ref-validator/scripts/envelope.py:111-116)
  - `output` format string ("json" or "human") (.claude/skills/orphan-ref-validator/scripts/envelope.py:140, 192, 252)

## Outputs — required
- Formatted string returned by rendering functions:
  - `render_envelope(result, output)`: JSON string conforming to ADR-056 with `Success: true` or human-formatted text, terminated with `VERDICT: <verdict>` (.claude/skills/orphan-ref-validator/scripts/envelope.py:252, 291, 292)
  - `render_error_envelope(message, output, error_type)`: JSON string with `Success: false` and populated `Error` dict or human error string, terminated with `VERDICT: ERROR` (.claude/skills/orphan-ref-validator/scripts/envelope.py:138, 166, 167)
  - `render_scan_error_envelope(result, message, output)`: JSON string with `Success: false`, partial scan data counts/findings, and typed `Error`, terminated with `VERDICT: ERROR` (.claude/skills/orphan-ref-validator/scripts/envelope.py:192, 221, 222)
- Integer exit codes computed by `scan_error_exit_code(result)`: 1 (logic), 2 (config), 3 (external), 4 (auth) (.claude/skills/orphan-ref-validator/scripts/envelope.py:170, 173-178)

## Invokes — required
none

## Invoked by — required
- script envelope — .claude/skills/orphan-ref-validator/scripts/scan.py:75

## Concepts named — required, verbatim
- `orphan-ref-validator` — .claude/skills/orphan-ref-validator/scripts/envelope.py:2 — used here
- `ADR-056` — .claude/skills/orphan-ref-validator/scripts/envelope.py:2 — used here
- `Finding` — .claude/skills/orphan-ref-validator/scripts/envelope.py:4 — defined here
- `ScanResult` — .claude/skills/orphan-ref-validator/scripts/envelope.py:4 — defined here
- `render_envelope` — .claude/skills/orphan-ref-validator/scripts/envelope.py:4 — defined here
- `render_error_envelope` — .claude/skills/orphan-ref-validator/scripts/envelope.py:5 — defined here
- `CRITICAL_FAIL` — .claude/skills/orphan-ref-validator/scripts/envelope.py:10 — used here
- `VERSION` — .claude/skills/orphan-ref-validator/scripts/envelope.py:25 — defined here
- `Severity` — .claude/skills/orphan-ref-validator/scripts/envelope.py:27 — defined here
- `Kind` — .claude/skills/orphan-ref-validator/scripts/envelope.py:28 — defined here
- `ScanErrorType` — .claude/skills/orphan-ref-validator/scripts/envelope.py:35 — defined here
- `Verdict` — .claude/skills/orphan-ref-validator/scripts/envelope.py:36 — defined here
- `SuppressedReference` — .claude/skills/orphan-ref-validator/scripts/envelope.py:80 — defined here
- `IncompleteScan` — .claude/skills/orphan-ref-validator/scripts/envelope.py:96 — defined here
- `ErrorType` — .claude/skills/orphan-ref-validator/scripts/envelope.py:133 — defined here
- `ADR-035` — .claude/skills/orphan-ref-validator/scripts/envelope.py:144 — used here
- `scan_error_exit_code` — .claude/skills/orphan-ref-validator/scripts/envelope.py:170 — defined here
- `render_scan_error_envelope` — .claude/skills/orphan-ref-validator/scripts/envelope.py:192 — defined here

## Structure
none (python library module; classes and functions: `Finding`, `SuppressedReference`, `IncompleteScan`, `ScanResult`, `render_error_envelope`, `scan_error_exit_code`, `_scan_error_envelope_type`, `render_scan_error_envelope`, `_counts_payload`, `_human_summary_lines`, `render_envelope`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/orphan-ref-validator/scripts/envelope.py`, language: Python 3, lines: 293
- documented invocation:
  - "from envelope import (" — .claude/skills/orphan-ref-validator/scripts/scan.py:75
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/envelope.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes in docstrings:
  - "ADR-035: ``2`` for configuration error" — .claude/skills/orphan-ref-validator/scripts/envelope.py:144
  - "Return the ADR-035 exit code for an incomplete scan." — .claude/skills/orphan-ref-validator/scripts/envelope.py:171
  Actual exit paths in code:
  - No direct `sys.exit` or `exit` calls in `envelope.py`.
  - `scan_error_exit_code()` returns integer exit codes: 4 on auth error, 3 on external error, 1 on logic error, 2 on config/default error (.claude/skills/orphan-ref-validator/scripts/envelope.py:173, 175, 177, 178).
- for validators/gates: can it exit non-zero? no direct exit calls; helper returns non-zero exit codes (1, 2, 3, 4) to caller `scan.py`. Does it fail on the source repo's own default branch? no, exits 0.
- does the output match what the documentation claims? yes, provides serialization producing exact ADR-056 envelopes and ADR-035 exit codes matching documentation.

## Defects — required
none

## Observations
- Implements strict separation per ADR-056 between scan success (`Success: true`, indicating the scanner executed without unhandled exception even if critical issues were found) and findings verdict (`CRITICAL_FAIL`, `WARN`, `PASS`).
- Calculates stable finding keys (`f"{target_file}:{line}:{kind}:{referenced_entity}"` at line 59) to support baseline diffing, ensuring legacy debt does not trigger build failures while new orphans are flagged.
- Implements `render_scan_error_envelope` to preserve partial progress and count evidence (files scanned, refs checked, incomplete scan reasons) when a run terminates prematurely.

## Context cost
9867 bytes (~2466 tokens). Python standard library only (`json`, `dataclasses`, `datetime`, `typing`).
