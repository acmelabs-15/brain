---
package: rjm
path: .codeql/scripts/get_codeql_diagnostics.py
type: script
bytes: 15672
unit: inv-rjm-180
in_scope_via: docs/codeql-integration.md
aliases: []
memo_inputs:
  - {path: .codeql/scripts/get_codeql_diagnostics.py, sha256: 2372f00b68a7a924f56957e139c6b0c1f1e64fce73a2cc350e49fe85ee4504a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .codeql/scripts/get_codeql_diagnostics.py

## Purpose — required, verbatim
> "Performs a complete health check of the CodeQL infrastructure including:" — .codeql/scripts/get_codeql_diagnostics.py:4

## Design intent — required
Automated diagnostic health check for repository CodeQL static analysis infrastructure. Inspects four critical subsystems: CLI installation status and version, configuration YAML syntax and query pack declarations, database existence, sizing, and multi-factor cache validity (git HEAD commit, config file hash, scripts directory hash, config directory hash), and last scan SARIF results and findings breakdown by language. Generates machine-readable (JSON) and human-readable (console, markdown) reports, exiting 0 if all checks pass and 1 if warnings or missing components require remediation per ADR-035.

## Phase — required
rjm:verify

## Inputs — required
- CLI options parsed via argparse:
  - `--repo-path`: path to repository root (default: `CODEQL_REPO_PATH` or `.`) — .codeql/scripts/get_codeql_diagnostics.py:37
  - `--config-path`: path to CodeQL config YAML (default: `CODEQL_CONFIG_PATH` or `.github/codeql/codeql-config.yml`) — .codeql/scripts/get_codeql_diagnostics.py:41
  - `--database-path`: path to database cache (default: `CODEQL_DATABASE_PATH` or `.codeql/db`) — .codeql/scripts/get_codeql_diagnostics.py:48
  - `--results-path`: path to SARIF results (default: `CODEQL_RESULTS_PATH` or `.codeql/results`) — .codeql/scripts/get_codeql_diagnostics.py:53
  - `--output-format`: output format choice (`console`, `json`, `markdown`, default: `console`) — .codeql/scripts/get_codeql_diagnostics.py:58
- Filesystem components:
  - Configuration file at `config_path` (.github/codeql/codeql-config.yml)
  - Cache metadata file `.cache-metadata.json` — .codeql/scripts/get_codeql_diagnostics.py:184
  - SARIF files: `*.sarif` in `results_path` — .codeql/scripts/get_codeql_diagnostics.py:298
  - CodeQL binary path `codeql` — .codeql/scripts/get_codeql_diagnostics.py:74
  - Git repository state checked via `rev-parse` — .codeql/scripts/get_codeql_diagnostics.py:193

## Outputs — required
- Formatted diagnostic report to stdout in console, JSON, or markdown format — .codeql/scripts/get_codeql_diagnostics.py:490-495
- Exit code 0 on PASS, 1 on WARNINGS — .codeql/scripts/get_codeql_diagnostics.py:497

## Invokes — required
- script install_codeql.py — .codeql/scripts/get_codeql_diagnostics.py:88

## Invoked by — required
- skill codeql-scan — .claude/skills/codeql-scan/SKILL.md:159
- doc docs/codeql-integration.md — docs/codeql-integration.md:187
- doc docs/codeql-rollout-checklist.md — docs/codeql-rollout-checklist.md:18

## Concepts named — required, verbatim
- `ADR-035` — .codeql/scripts/get_codeql_diagnostics.py:10 — used here
- `build_parser` — .codeql/scripts/get_codeql_diagnostics.py:31 — defined here
- `check_cli` — .codeql/scripts/get_codeql_diagnostics.py:65 — defined here
- `check_config` — .codeql/scripts/get_codeql_diagnostics.py:107 — defined here
- `compute_file_hash` — .codeql/scripts/get_codeql_diagnostics.py:160 — defined here
- `compute_directory_hash` — .codeql/scripts/get_codeql_diagnostics.py:168 — defined here
- `check_database_cache` — .codeql/scripts/get_codeql_diagnostics.py:181 — defined here
- `check_database` — .codeql/scripts/get_codeql_diagnostics.py:222 — defined here
- `check_results` — .codeql/scripts/get_codeql_diagnostics.py:280 — defined here
- `format_console` — .codeql/scripts/get_codeql_diagnostics.py:327 — defined here
- `format_json` — .codeql/scripts/get_codeql_diagnostics.py:392 — defined here
- `format_markdown` — .codeql/scripts/get_codeql_diagnostics.py:396 — defined here
- `main` — .codeql/scripts/get_codeql_diagnostics.py:453 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `.codeql/scripts/get_codeql_diagnostics.py`, Python 3, 502 lines
- documented invocation:
  - "python3 .codeql/scripts/get_codeql_diagnostics.py --output-format console" — docs/codeql-integration.md:187
  - "python3 .codeql/scripts/get_codeql_diagnostics.py --output-format markdown" — docs/codeql-rollout-checklist.md:131
- **executed:** yes
- actual command run: `python3 .codeql/scripts/get_codeql_diagnostics.py --output-format console`
  abridged stdout:
  ```text
  ========================================
  CodeQL Diagnostics Report
  ========================================

  [CodeQL CLI]
    [FAIL] Status: NOT INSTALLED
    -> CLI not found. Run: python3 .codeql/scripts/install_codeql.py --add-to-path

  [Configuration]
    [PASS] Status: VALID

  [Database]
    [FAIL] Status: NOT FOUND
    -> Database directory not found. Run scan to create database

  [Last Scan Results]
    [WARNING] Status: NO RESULTS
    -> Results directory not found. Run scan to generate results

  ========================================
  Overall Status: WARNINGS
  ========================================
  ```
  **actual exit code**: 1
- documented exit codes vs. actual exit paths in code:
  Documented in docstring:
  - "0 - All checks passed" — .codeql/scripts/get_codeql_diagnostics.py:11
  - "1 - Some checks failed" — .codeql/scripts/get_codeql_diagnostics.py:12
  Actual exit paths in code:
  - `raise SystemExit(main())` — .codeql/scripts/get_codeql_diagnostics.py:501
  - `return 0 if overall_status == "PASS" else 1` — .codeql/scripts/get_codeql_diagnostics.py:497
- for validators/gates: can it exit non-zero? yes, exits 1 when any recommendations are reported. Does it fail on the source repo's own default branch? Yes, exits 1 because CodeQL CLI and database directories are not pre-installed in the clean checkout.
- does the output match what the documentation claims? Yes, checks CLI, configuration, database cache, and scan results, outputting status and actionable remediation steps.

## Defects — required
- `missing-path` · .codeql/scripts/get_codeql_diagnostics.py:81 · Fallback path `.codeql/cli/codeql` is missing until CLI installation script has executed.

## Observations
- Evaluates YAML syntax via native regex checks for tab indentation rather than depending on external PyYAML library, ensuring frictionless out-of-the-box execution in clean environments.
- Implements comprehensive multi-factor cache invalidation (`check_database_cache` lines 181-220) verifying git HEAD commit, configuration file SHA-256, scripts directory hash, and config directory hash.

## Context cost
15672 bytes. Approximately 3918 tokens.
