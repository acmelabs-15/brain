---
package: rjm
path: .claude/skills/security-scan/scripts/scan_constants.py
type: script
bytes: 678
unit: inv-rjm-156
in_scope_via: .claude/skills/security-scan/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/security-scan/scripts/scan_constants.py, sha256: 4dec891d77fd21fe9f3fb63ee816f6e06dbb56287faa6db33af7dcc7e518c249}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/security-scan/scripts/scan_constants.py

## Purpose — required, verbatim
> "Exit-code constants for the security scanner (ADR-035 compliant)." — .claude/skills/security-scan/scripts/scan_constants.py:1

## Design intent — required
Defines standardized exit-code constants (`EXIT_SUCCESS=0`, `EXIT_ERROR=1`, `EXIT_EXTERNAL=3`, `EXIT_VULNERABILITIES=10`) shared between the scanner entry point (`scan_vulnerabilities.py`) and the console formatter (`scan_format.py`). It was extracted as an independent leaf module specifically to prevent circular import dependencies between the CLI driver and the output formatting components while maintaining adherence to ADR-035 exit code conventions. Without it, the formatter could not display accurate exit codes without importing the scanner module, risking cyclic import failures.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script scan_constants — .claude/skills/security-scan/scripts/scan_format.py:20
- script scan_constants.py — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:64

## Concepts named — required, verbatim
- `EXIT_SUCCESS` — .claude/skills/security-scan/scripts/scan_constants.py:15 — defined here
- `EXIT_ERROR` — .claude/skills/security-scan/scripts/scan_constants.py:16 — defined here
- `EXIT_EXTERNAL` — .claude/skills/security-scan/scripts/scan_constants.py:17 — defined here
- `EXIT_VULNERABILITIES` — .claude/skills/security-scan/scripts/scan_constants.py:18 — defined here

## Structure
- EXIT_SUCCESS = 0
- EXIT_ERROR = 1
- EXIT_EXTERNAL = 3
- EXIT_VULNERABILITIES = 10

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/security-scan/scripts/scan_constants.py`, Python 3, 19 lines
- documented invocation: none (module intended for import by `scan_vulnerabilities.py` and `scan_format.py`)
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/security-scan/scripts/scan_constants.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- documented exit codes:
  - `0  - No vulnerabilities found` — .claude/skills/security-scan/scripts/scan_constants.py:9
  - `1  - Scan error (file not found, invalid arguments)` — .claude/skills/security-scan/scripts/scan_constants.py:10
  - `3  - External dependency failure (e.g. git enumeration failed)` — .claude/skills/security-scan/scripts/scan_constants.py:11
  - `10 - Vulnerabilities detected` — .claude/skills/security-scan/scripts/scan_constants.py:12
  vs actual exit paths in code: none in this file (constants definitions only; defines `EXIT_SUCCESS = 0`, `EXIT_ERROR = 1`, `EXIT_EXTERNAL = 3`, `EXIT_VULNERABILITIES = 10` for use in callers)
- for validators/gates: module defines constants, does not directly validate
- does the output match what the documentation claims: yes, definitions match docstring and ADR-035

## Defects — required
none

## Observations
Provides a single source of truth for scanner exit codes complying with ADR-035 (0=success, 1=user/scan error, 3=external dependency failure, 10=vulnerabilities detected). Decoupled into its own module to break cyclic imports between `scan_vulnerabilities.py` and `scan_format.py`.

## Context cost
678 bytes (approximately 170 tokens). Loads no external files.
