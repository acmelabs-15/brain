---
package: rjm
path: .claude/skills/security-scan/scripts/scan_format.py
type: script
bytes: 4262
unit: inv-rjm-156
in_scope_via: .claude/skills/security-scan/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/security-scan/scripts/scan_format.py, sha256: aa736a5f23675ecf04e4af3cf2aadc61fafba473407ed2d365ca13967b029bd1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/security-scan/scripts/scan_format.py

## Purpose — required, verbatim
> "Console formatting for the security scanner." — .claude/skills/security-scan/scripts/scan_format.py:1

## Design intent — required
Extracts console output formatting logic from `scan_vulnerabilities.py` to keep the public `format_console_output` function under a cyclomatic complexity threshold of 10 while maintaining stable output formatting. Uses typing protocols (`_VulnerabilityLike` and `_ScanResultLike`) for duck typing to decouple formatting from internal data model implementations and prevent circular imports with the main scanner module. Without it, output generation would inflate cyclomatic complexity in the primary scanner or create tight coupling and import cycles between scanning logic and presentation layers.

## Phase — required
cross-phase

## Inputs — required
- Scan result objects satisfying `_ScanResultLike` protocol (containing `errors`, `vulnerabilities`, `files_scanned`, and `suppressed` findings).

## Outputs — required
- Formatted console output string with banners, error blocks, vulnerability details grouped by severity, and exit-code summaries.

## Invokes — required
- script scan_constants — .claude/skills/security-scan/scripts/scan_format.py:20

## Invoked by — required
- script scan_format — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:55

## Concepts named — required, verbatim
- `_VulnerabilityLike` — .claude/skills/security-scan/scripts/scan_format.py:25 — defined here
- `_ScanResultLike` — .claude/skills/security-scan/scripts/scan_format.py:36 — defined here
- `format_console_output` — .claude/skills/security-scan/scripts/scan_format.py:43 — defined here

## Structure
- class _VulnerabilityLike(Protocol)
- class _ScanResultLike(Protocol)
- def format_console_output(result: _ScanResultLike) -> str
- def _append_errors(output: list[str], result: _ScanResultLike) -> None
- def _append_no_vulnerabilities(output: list[str], result: _ScanResultLike) -> None
- def _append_vulnerability_details(output: list[str], result: _ScanResultLike) -> None
- def _append_summary(output: list[str], result: _ScanResultLike) -> None

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/security-scan/scripts/scan_format.py`, Python 3, 121 lines
- documented invocation: none (helper module imported by `scan_vulnerabilities.py`)
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm/.claude/skills/security-scan/scripts python3 sources/rjm/.claude/skills/security-scan/scripts/scan_format.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- documented exit codes: none documented or defined in file; formats `EXIT_ERROR` (line 77, 118) and `EXIT_VULNERABILITIES` (line 120) imported from `scan_constants.py`. No direct `sys.exit()` calls in this file.
- for validators/gates: helper formatter module, does not directly validate or exit non-zero
- does the output match what the documentation claims: yes, formatting functions render console banners, severity groupings, and summaries matching documentation

## Defects — required
none

## Observations
Employs `typing.Protocol` structural subtyping to consume results by duck typing without requiring direct imports of concrete dataclasses from the entry point module. Decomposes formatting into 4 helper subroutines to comply with code complexity limits (< 10).

## Context cost
4262 bytes (approximately 1065 tokens). Loads `scan_constants.py` (678 bytes), total 4940 bytes (approximately 1235 tokens).
