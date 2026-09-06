---
package: rjm
path: .claude/skills/security-scan/scripts/scan_vulnerabilities.py
type: script
bytes: 19702
unit: inv-rjm-156
in_scope_via: .claude/skills/security-scan/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/security-scan/scripts/scan_vulnerabilities.py, sha256: 38a1f357505ed5a7b4b06e9b39bda0c1a6ff3651d6a320e775e7e878c8a06ab9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/security-scan/scripts/scan_vulnerabilities.py

## Purpose — required, verbatim
> "Security vulnerability scanner for CWE-78 (command injection)." — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:3

## Design intent — required
The primary command-line tool and execution engine for local pre-PR security scanning. Detects dangerous command injection patterns (CWE-78) across Python, PowerShell, Bash, and C# source files using regular expressions. It provides targeted scanning of git-staged changes, explicit file arguments, or entire directory trees, supporting both human-readable console and machine-readable JSON outputs with schema versioning. It delegates path traversal (CWE-22) to CodeQL per ADR-054 to eliminate regex false positives. Without this script, developers and automated pre-commit/CI pipelines would lack a rapid, lightweight local gate to block command injection vulnerabilities before committing or merging code.

## Phase — required
cross-phase

## Inputs — required
Command-line arguments:
- Positional `files`: list of file paths to scan
- `--git-staged`: flag to scan git staged files via `git diff --staged --name-only`
- `--directory`, `-d`: directory path to scan recursively
- `--cwe`: integer filter (78 supported; 22 accepted with delegation warning)
- `--format`, `-f`: output format (`console` or `json`, default `console`)
- `--output`, `-o`: destination file path for scan results

## Outputs — required
- Console scan report printed to stdout or written to file specified by `--output`.
- Machine-readable JSON output (schema version 2) containing timestamp, files scanned, vulnerability records, suppressions, errors, summary statistics, and exit code.

## Invokes — required
- script scan_constants — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:49
- script scan_format — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:55
- script scan_patterns — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:56

## Invoked by — required
- script scan_vulnerabilities.py — .claude/skills/security-scan/SKILL.md:77
- script scan_vulnerabilities.py — .claude/rules/security.md:62

## Concepts named — required, verbatim
- `Vulnerability` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:87 — defined here
- `ScanResult` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:101 — defined here
- `GitEnumerationError` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:113 — defined here
- `get_language` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:117 — defined here
- `get_staged_files` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:159 — defined here
- `get_directory_files` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:182 — defined here
- `is_line_suppressed` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:209 — defined here
- `scan_file` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:218 — defined here
- `format_json_output` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:269 — defined here
- `SUPPRESSION_PATTERN` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:80 — defined here
- `CWE-78` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:3 — used here
- `CWE-22` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:8 — used here

## Structure
- class Vulnerability
- class ScanResult
- class GitEnumerationError
- def get_language
- def _get_shebang_language
- def get_staged_files
- def get_directory_files
- def is_line_suppressed
- def scan_file
- def format_json_output
- def _exit_code_for_result
- def _build_parser
- def _validate_cwe_filter
- def _validate_path
- def _validate_input_paths
- def _collect_files_to_scan
- def _filter_supported_files
- def _scan_supported_files
- def _format_output
- def _write_or_print_output
- def main

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/security-scan/scripts/scan_vulnerabilities.py`, Python 3, 562 lines
- documented invocation: `python scan_vulnerabilities.py --directory src/` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:24
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/security-scan/scripts/scan_vulnerabilities.py --directory sources/rjm/.claude/skills/security-scan/scripts/`
  abridged stdout:
  ```text
  === Security Vulnerability Scan ===

  Files scanned: 4
  No vulnerabilities found.
  ```
  **actual exit code:** 0
- documented exit codes:
  - `0  - No vulnerabilities found` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:18
  - `1  - Scan error (file not found, invalid arguments)` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:19
  - `10 - Vulnerabilities detected` — .claude/skills/security-scan/scripts/scan_vulnerabilities.py:20
  vs actual exit paths in code:
  - `sys.exit(EXIT_ERROR)` at `.claude/skills/security-scan/scripts/scan_vulnerabilities.py:406` (unsupported CWE filter)
  - `sys.exit(EXIT_ERROR)` at `.claude/skills/security-scan/scripts/scan_vulnerabilities.py:442` (path traversal detected in input path)
  - `sys.exit(EXIT_EXTERNAL)` at `.claude/skills/security-scan/scripts/scan_vulnerabilities.py:457` (GitEnumerationError / git failure, ADR-035 exit 3)
  - `sys.exit(EXIT_ERROR)` at `.claude/skills/security-scan/scripts/scan_vulnerabilities.py:469` (directory not found)
  - `sys.exit(EXIT_SUCCESS)` at `.claude/skills/security-scan/scripts/scan_vulnerabilities.py:482` (staged run with nothing staged)
  - `sys.exit(EXIT_ERROR)` at `.claude/skills/security-scan/scripts/scan_vulnerabilities.py:484` (no files to scan)
  - `sys.exit(EXIT_SUCCESS)` at `.claude/skills/security-scan/scripts/scan_vulnerabilities.py:495` (no supported files found)
  - `sys.exit(_exit_code_for_result(result))` at `.claude/skills/security-scan/scripts/scan_vulnerabilities.py:557` (returns `EXIT_ERROR=1` if result.errors, `EXIT_VULNERABILITIES=10` if result.vulnerabilities, else `EXIT_SUCCESS=0`)
- for validators/gates: can exit non-zero (exits 1 on error, exits 3 on git failure, exits 10 on vulnerability detection). Fails on source repo's default branch when running against `.claude` (exits 10, detecting 47 findings in unquoted shell variables in `github/scripts/gh-native/*.sh`).
- does the output match what the documentation claims: yes, formats console and JSON outputs matching specification.

## Defects — required
- doc-drift · .claude/skills/security-scan/scripts/scan_vulnerabilities.py:17 — Docstring lists exit codes 0, 1, and 10, omitting exit code 3 (`EXIT_EXTERNAL`), even though the code explicitly imports `EXIT_EXTERNAL` from `scan_constants.py` and exits with it at line 457 on git failure.

## Observations
Implements ADR-054 changes delegating CWE-22 path-traversal detection to CodeQL in CI, leaving only CWE-78 (command injection) pattern matching locally. Features strict path containment validation (`_validate_path`) preventing directory traversal via CLI parameters, and returns structured JSON schema version 2 including `delegated_cwes` metadata.

## Context cost
19702 bytes (approximately 4925 tokens). Plus sibling imports `scan_constants.py` (678 bytes), `scan_format.py` (4262 bytes), `scan_patterns.py` (6798 bytes), total 31440 bytes (approximately 7860 tokens).
