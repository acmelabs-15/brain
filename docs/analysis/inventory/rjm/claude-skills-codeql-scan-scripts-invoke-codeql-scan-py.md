---
package: rjm
path: .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py
type: script
bytes: 10865
unit: inv-rjm-104
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py, sha256: 5f404643d7e29b77bf9bff1ae2eb1e747d8641513abf85bccf62130e7220fd73}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py

## Purpose — required, verbatim
> "CodeQL scan skill wrapper providing unified interface for security analysis." — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:2

## Design intent — required
Primary skill-level CLI wrapper script documented by `.claude/skills/codeql-scan/SKILL.md` to run CodeQL operations (`full`, `quick`, `validate`). Normalizes repository root paths, maps the skill's `--operation quick` parameter to the delegate's `--use-cache` flag (caching databases rather than switching to quick-scan query configs), standardizes return codes to ADR-035, and includes a graceful early exit (returncode 0 with `[SKIP]`) when `.codeql/` is absent.

## Phase — required
rjm:verify

## Inputs — required
- CLI arguments parsed via argparse:
  - `--operation`: choice of `full`, `quick`, or `validate` (default: `full`) — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:128
  - `--languages`: list of languages to scan (`python`, `actions`) — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:134
  - `--ci`: flag to enable CI mode and exit 1 on findings — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:139
- Repository worktree root inspected via `--show-toplevel` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:94
- Filesystem dependencies:
  - Configuration delegate: `.codeql/scripts/test_codeql_config.py` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:18
  - Scan delegate: `.codeql/scripts/invoke_codeql_scan.py` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:22
  - Installer delegate: `.codeql/scripts/install_codeql.py` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:27
  - CodeQL CLI binary checked at `codeql_cli_path` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:240

## Outputs — required
- Stderr status messages with ANSI prefixes (`[ok]`, `[x]`, `[!]`, `[i]`) — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:76-79
- Standardized exit codes (0, 1, 2, 3) per ADR-035 — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:11-14
- References to delegate-generated SARIF results in `.codeql/results/` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:233

## Invokes — required
- script test_codeql_config.py — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:55
- script invoke_codeql_scan.py — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:56
- script install_codeql.py — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:57

## Invoked by — required
- skill codeql-scan — .claude/skills/codeql-scan/SKILL.md:19
- skill codeql-scan — .claude/skills/codeql-scan/SKILL.md:22
- skill codeql-scan — .claude/skills/codeql-scan/SKILL.md:25
- skill codeql-scan — .claude/skills/codeql-scan/SKILL.md:100
- skill codeql-scan — .claude/skills/codeql-scan/SKILL.md:113
- skill codeql-scan — .claude/skills/codeql-scan/SKILL.md:126
- skill codeql-scan — .claude/skills/codeql-scan/SKILL.md:356
- skill codeql-scan — .claude/skills/codeql-scan/SKILL.md:368

## Concepts named — required, verbatim
- `ADR-035` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:10 — used here
- `DELEGATE_SCRIPT_NAMES` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:6 — defined here
- `CONFIG_SCRIPT_NAME` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:55 — defined here
- `SCAN_SCRIPT_NAME` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:56 — defined here
- `INSTALL_SCRIPT_NAME` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:57 — defined here

## Structure
none (python script; functions and definitions: `CONFIG_SCRIPT_NAME`, `SCAN_SCRIPT_NAME`, `INSTALL_SCRIPT_NAME`, `DELEGATE_SCRIPT_NAMES`, `_COLORS`, `_PREFIXES`, `_color_print`, `_get_repo_root`, `build_parser`, `_python_executable`, `_delegate_path`, `_run_delegate`, `_validate_config`, `_build_scan_command`, `_report_scan_outcome`, `_run_scan`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py`, language: Python 3, lines: 300
- documented invocation:
  - "python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py --operation full" — .claude/skills/codeql-scan/SKILL.md:19
  - "python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py --operation quick" — .claude/skills/codeql-scan/SKILL.md:22
  - "python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py --operation validate" — .claude/skills/codeql-scan/SKILL.md:25
- **executed:** yes
- actual command run: `python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py --operation validate` (in `sources/rjm`)
  abridged stdout:
  ```text
  === CodeQL Security Scan ===
  Operation: validate

  [i] Validating CodeQL configuration...
  Validating CodeQL configuration...
  Config: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/codeql/codeql-config.yml
  PyYAML not installed; falling back to regex YAML validation
  [PASS] YAML syntax valid
  [PASS] Schema validation passed
  [PASS] Configuration is valid
  [ok] Configuration validation passed
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths in code:
  Documented in docstring:
  - "0 - Success (no findings or findings ignored)" — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:11
  - "1 - Findings detected (CI mode only)" — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:12
  - "2 - Configuration invalid" — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:13
  - "3 - Scan execution failed (CLI not found, script error)" — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:14
  Actual exit paths in code:
  - `raise SystemExit(main())` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:299
  - `return 0` (.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:286) when `.codeql/` is missing, line 191 on validation success, or returned by delegate execution (line 273).
  - `return 2` (.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:193) on configuration validation failure, or returned by delegate (line 273).
  - `return 3` (.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:182) when configuration script is missing, line 188 on runner failure, line 255 when CodeQL CLI is missing, line 262 when scan script is missing, line 269 on scan runner failure, line 282 when not in a git repository.
  - `return 1` is returned by the scan delegate in CI mode when findings are detected.
- for validators/gates: can it exit non-zero? yes, exits 2 on config failure, 3 on missing CLI/scripts or execution failure, and 1 on findings in CI mode. Does it fail on the source repo's own default branch? No, `--operation validate` exits 0 (and `--operation quick` without CLI exits 3 prompting installation).
- does the output match what the documentation claims? Yes, validates configuration and reports exit codes per ADR-035.

## Defects — required
- `missing-path` · .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:240 · Default path `.codeql/cli/codeql` does not exist in repository until downloaded via `install_codeql.py`.

## Observations
- Contains graceful skip logic at line 284: `if not (repo_root / ".codeql").exists(): print("[SKIP] .codeql/ not found. CodeQL scanning requires project setup.", file=sys.stderr); return 0`, allowing the script to be safely invoked in repositories without CodeQL without failing pipelines.
- Maps `--operation quick` to delegate's `--use-cache` flag (line 201) rather than the delegate's `--quick-scan` flag (which swaps the configuration file for `codeql-config-quick.yml`), preserving consistent query sets while reusing cached databases.

## Context cost
10865 bytes (~2716 tokens).
