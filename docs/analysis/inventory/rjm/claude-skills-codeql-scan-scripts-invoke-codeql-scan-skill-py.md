---
package: rjm
path: .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py
type: script
bytes: 10612
unit: inv-rjm-104
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py, sha256: 7683c7365a23e18d99753f024c1c4a4ce49c01a2881863be56746d4fc3d11bca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py

## Purpose — required, verbatim
> "CodeQL scan skill wrapper providing unified interface for security analysis operations." — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:2

## Design intent — required
Provides a Python CLI wrapper for CodeQL security operations (`full`, `quick`, `validate`), mapping skill-level invocations to underlying scripts in `.codeql/scripts/` (`invoke_codeql_scan.py`, `test_codeql_config.py`, `install_codeql.py`). Standardizes exit codes according to ADR-035 (0 for success, 1 for findings in CI, 2 for invalid config, 3 for execution failure) and normalizes working directories and Python interpreter execution across worktree layouts. Without this wrapper, callers would need to directly invoke and coordinate individual delegate scripts with differing parameter flags and inconsistent exit codes.

## Phase — required
rjm:verify

## Inputs — required
- CLI arguments parsed via argparse:
  - `--operation`: choice of `full`, `quick`, or `validate` (default: `full`) — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:270
  - `--languages`: list of languages to scan (`python`, `actions`) — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:276
  - `--ci`: flag to enable CI mode and exit 1 on findings — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:283
- Repository worktree root inspected via `--show-toplevel` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:70
- Filesystem dependencies:
  - Configuration delegate: `.codeql/scripts/test_codeql_config.py` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:21
  - Scan delegate: `.codeql/scripts/invoke_codeql_scan.py` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:25
  - Installer delegate: `.codeql/scripts/install_codeql.py` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:30
  - CodeQL CLI binary checked at `codeql_cli_path` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:229

## Outputs — required
- Stderr status messages with bracketed prefixes (`[PASS]`, `[FAIL]`, `[WARNING]`, `[INFO]`) — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:101-104
- Standardized exit codes (0, 1, 2, 3) per ADR-035 — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:14-17
- References to delegate-generated SARIF results in `.codeql/results/` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:206

## Invokes — required
- script test_codeql_config.py — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:55
- script invoke_codeql_scan.py — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:56
- script install_codeql.py — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:57

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:5 — used here
- `DELEGATE_SCRIPT_NAMES` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:9 — defined here
- `VALID_OPERATIONS` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:52 — defined here
- `VALID_LANGUAGES` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:53 — defined here
- `CONFIG_SCRIPT_NAME` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:55 — defined here
- `SCAN_SCRIPT_NAME` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:56 — defined here
- `INSTALL_SCRIPT_NAME` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:57 — defined here

## Structure
none (python script; functions and definitions: `VALID_OPERATIONS`, `VALID_LANGUAGES`, `CONFIG_SCRIPT_NAME`, `SCAN_SCRIPT_NAME`, `INSTALL_SCRIPT_NAME`, `DELEGATE_SCRIPT_NAMES`, `get_repo_root`, `write_colored`, `_python_executable`, `_delegate_path`, `_run_delegate`, `_validate_config`, `_build_scan_command`, `_report_scan_outcome`, `run_scan`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py`, language: Python 3, lines: 296
- documented invocation:
  - "Operation type: full, quick, or validate" — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:272
  - `python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py --operation validate`
- **executed:** yes
- actual command run: `python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py --operation validate` (in `sources/rjm`)
  abridged stdout:
  ```text
  === CodeQL Security Scan ===
  Operation: validate

  [INFO] Validating CodeQL configuration...
  Validating CodeQL configuration...
  Config: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/codeql/codeql-config.yml
  PyYAML not installed; falling back to regex YAML validation
  [PASS] YAML syntax valid
  [PASS] Schema validation passed
  [PASS] Configuration is valid
  [PASS] Configuration validation passed
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths in code:
  Documented in docstring:
  - "0 - Success (no findings or findings ignored)" — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:14
  - "1 - Findings detected (CI mode only)" — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:15
  - "2 - Configuration invalid" — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:16
  - "3 - Scan execution failed (CLI not found, script error)" — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:17
  Actual exit paths in code:
  - `sys.exit(main())` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:295
  - `return 0` (.claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:159) on validation success, or returned by delegate execution (line 260).
  - `return 2` (.claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:161) on configuration validation failure, or returned by delegate (line 260).
  - `return 3` (.claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:150) when configuration script is missing, line 156 on runner failure, line 220 when not in a git repository, line 242 when CodeQL CLI is missing, line 249 when scan script is missing, line 256 on scan runner failure.
  - `return 1` is returned by the scan delegate in CI mode when findings are detected.
- for validators/gates: can it exit non-zero? yes, exits 2 on config failure, 3 on missing CLI/scripts or execution failure, and 1 on findings in CI mode. Does it fail on the source repo's own default branch? No, `--operation validate` exits 0 (and `--operation quick` without CLI exits 3 prompting installation).
- does the output match what the documentation claims? Yes, validates configuration and reports exit codes per ADR-035.

## Defects — required
- `orphan` · .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:2 · Script is an undocumented sibling variant of `invoke_codeql_scan.py` that is omitted from `SKILL.md` and only retained for regression tests in `test_codeql_delegate_paths.py`.
- `missing-path` · .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py:229 · Default path `.codeql/cli/codeql` does not exist in repository until downloaded via `install_codeql.py`.

## Observations
- Uses `write_colored` (line 98) with text status tags (`[PASS]`, `[FAIL]`, `[WARNING]`, `[INFO]`) rather than ANSI color escape codes used in sibling `invoke_codeql_scan.py`.
- Lacks the `.codeql` directory existence check present in `invoke_codeql_scan.py` (which returns exit code 0 with `[SKIP]`), meaning running this script in a repo without `.codeql/` results in an error exit code 3 instead of a graceful skip.

## Context cost
10612 bytes (~2653 tokens).
