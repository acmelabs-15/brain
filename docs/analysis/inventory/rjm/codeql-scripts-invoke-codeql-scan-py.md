---
package: rjm
path: .codeql/scripts/invoke_codeql_scan.py
type: script
bytes: 16170
unit: inv-rjm-181
in_scope_via: .claude/skills/codeql-scan/SKILL.md
aliases: []
memo_inputs:
  - {path: .codeql/scripts/invoke_codeql_scan.py, sha256: 30320c0a737943365bc714ce2971cc19c58606e46fcd3bc1ac904abe4e693274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .codeql/scripts/invoke_codeql_scan.py

## Purpose — required, verbatim
> "Orchestrate CodeQL database creation and analysis for the repository." — .codeql/scripts/invoke_codeql_scan.py:2

## Design intent — required
Serves as the repository's standalone Python orchestrator for CodeQL static analysis, providing a unified automation engine that auto-detects codebase languages (Python and GitHub Actions), creates CodeQL databases, evaluates security query suites, and generates standardized SARIF, JSON, or console output. Without it, the repository would lack an automated, self-contained mechanism to run CodeQL security scanning locally or in CI pipelines without relying on external GitHub Action workflow runners, and could not validate database cache freshness across commits and configuration changes.

## Phase — required
rjm:verify

## Inputs — required
- CLI arguments parsed via `build_parser()` (.codeql/scripts/invoke_codeql_scan.py:31):
  - `--repo-path` (default: environment variable `CODEQL_REPO_PATH` or `.`) (.codeql/scripts/invoke_codeql_scan.py:36)
  - `--config-path` (default: environment variable `CODEQL_CONFIG_PATH` or `.github/codeql/codeql-config.yml`) (.codeql/scripts/invoke_codeql_scan.py:40-43)
  - `--database-path` (default: environment variable `CODEQL_DATABASE_PATH` or `.codeql/db`) (.codeql/scripts/invoke_codeql_scan.py:47-49)
  - `--results-path` (default: environment variable `CODEQL_RESULTS_PATH` or `.codeql/results`) (.codeql/scripts/invoke_codeql_scan.py:52-54)
  - `--languages` (default: None, auto-detected via `detect_languages`) (.codeql/scripts/invoke_codeql_scan.py:57-59)
  - `--use-cache` (reuse cached databases if valid) (.codeql/scripts/invoke_codeql_scan.py:61-63)
  - `--ci` (CI mode, exits with code 1 if findings detected) (.codeql/scripts/invoke_codeql_scan.py:65-67)
  - `--format` (`console`, `sarif`, `json`, default: `console`) (.codeql/scripts/invoke_codeql_scan.py:69-72)
  - `--quick-scan` (quick scan mode with targeted query selection) (.codeql/scripts/invoke_codeql_scan.py:74-76)
- Environment variables: `CODEQL_REPO_PATH`, `CODEQL_CONFIG_PATH`, `CODEQL_DATABASE_PATH`, `CODEQL_RESULTS_PATH`
- Files and directories on disk:
  - Repository tree inspected for `.py` files and `.github/workflows/*.yml` (.codeql/scripts/invoke_codeql_scan.py:100-110)
  - CodeQL configuration YAML: `.github/codeql/codeql-config.yml` or `.github/codeql/codeql-config-quick.yml` (.codeql/scripts/invoke_codeql_scan.py:415-416)
  - Cache metadata: `<database-path>/.cache-metadata.json` (.codeql/scripts/invoke_codeql_scan.py:146)
  - Generated SARIF file: `<results-path>/<language>.sarif` (.codeql/scripts/invoke_codeql_scan.py:272, 303)

## Outputs — required
- CodeQL database directories created under `.codeql/db/<language>` (.codeql/scripts/invoke_codeql_scan.py:224)
- SARIF analysis result files: `.codeql/results/<language>.sarif` (.codeql/scripts/invoke_codeql_scan.py:272)
- Cache metadata file: `.codeql/db/.cache-metadata.json` (.codeql/scripts/invoke_codeql_scan.py:210)
- Scan reports to console stderr/stdout (console summary, JSON payload with `TotalFindings` and `Languages`, or SARIF path list) (.codeql/scripts/invoke_codeql_scan.py:333-373)
- Process exit codes (0 for success/clean, 1 for findings in CI mode, 2 for configuration/path error, 3 for external dependency/analysis failure) (.codeql/scripts/invoke_codeql_scan.py:12-15)

## Invokes — required
- script install_codeql.py — .codeql/scripts/invoke_codeql_scan.py:91
- config .github/codeql/codeql-config.yml — .codeql/scripts/invoke_codeql_scan.py:42
- config .github/codeql/codeql-config-quick.yml — .codeql/scripts/invoke_codeql_scan.py:416

## Invoked by — required
- script .codeql/scripts/test_codeql_rollout.py — .codeql/scripts/test_codeql_rollout.py:161
- skill .claude/skills/codeql-scan/SKILL.md — .claude/skills/codeql-scan/SKILL.md:157
- doc docs/codeql-architecture.md — docs/codeql-architecture.md:237

## Concepts named — required, verbatim
- `CodeQL` — .codeql/scripts/invoke_codeql_scan.py:2 — used here
- `ADR-035` — .codeql/scripts/invoke_codeql_scan.py:11 — used here
- `CI mode` — .codeql/scripts/invoke_codeql_scan.py:13 — used here
- `CodeQL CLI` — .codeql/scripts/invoke_codeql_scan.py:15 — used here
- `Quick scan` — .codeql/scripts/invoke_codeql_scan.py:75 — used here
- `SARIF` — .codeql/scripts/invoke_codeql_scan.py:8 — used here
- `cache-metadata` — .codeql/scripts/invoke_codeql_scan.py:146 — defined here
- `source-root` — .codeql/scripts/invoke_codeql_scan.py:237 — used here
- `codescanning-config` — .codeql/scripts/invoke_codeql_scan.py:241 — used here
- `sarif-category` — .codeql/scripts/invoke_codeql_scan.py:283 — used here

## Structure
- build_parser() -> argparse.ArgumentParser
- find_codeql_executable() -> str
- detect_languages(repo_path: str) -> list[str]
- compute_file_hash(filepath: str) -> str
- compute_directory_hash(directory: str) -> str
- check_database_cache(database_path: str, config_path: str, repo_path: str) -> bool
- write_cache_metadata(database_path: str, config_path: str, repo_path: str) -> None
- create_database(codeql_path: str, language: str, source_root: str, database_path: str, config_path: str, repo_path: str, ci: bool) -> None
- analyze_database(codeql_path: str, language: str, database_path: str, results_path: str, config_path: str, ci: bool) -> dict
- format_results(results: list[dict], output_format: str) -> None
- validate_path_containment(repo_path: str) -> None
- main(argv: list[str] | None = None) -> int

## Scripts — required if type is script or the skill ships scripts
- path: `.codeql/scripts/invoke_codeql_scan.py`
  - language: Python
  - lines: 500
  - documented invocation:
    - "python3 .codeql/scripts/invoke_codeql_scan.py" — docs/codeql-architecture.md:297
    - "python3 .codeql/scripts/invoke_codeql_scan.py --quick-scan --use-cache" — docs/codeql-architecture.md:300
    - "python3 .codeql/scripts/invoke_codeql_scan.py --ci" — docs/codeql-architecture.md:306
  - executed: yes
  - actual command run, abridged stdout, actual exit code:
    - Command: `python3 .codeql/scripts/invoke_codeql_scan.py --help`
    - Stdout: `usage: invoke_codeql_scan.py [-h] [--repo-path REPO_PATH] ... Run CodeQL security scan on the repository.`
    - Exit code: 0
    - Command: `python3 .codeql/scripts/invoke_codeql_scan.py`
    - Stderr: `CodeQL CLI not found. Please install using install_codeql.py or add to PATH.`
    - Exit code: 3
  - documented exit codes vs. actual exit paths:
    - Documented (.codeql/scripts/invoke_codeql_scan.py:11-15):
      - 0: Success (no findings or not in CI mode)
      - 1: Logic error or findings detected in CI mode
      - 2: Configuration error (missing config, invalid paths)
      - 3: External dependency error (CodeQL CLI not found, analysis failed)
    - Actual exit paths in code:
      - `sys.exit(3)` in `find_codeql_executable()` (.codeql/scripts/invoke_codeql_scan.py:94)
      - `sys.exit(3)` in `validate_path_containment()` on git failures (.codeql/scripts/invoke_codeql_scan.py:384, 387, 392)
      - `sys.exit(2)` in `validate_path_containment()` on path traversal attempt (.codeql/scripts/invoke_codeql_scan.py:405)
      - `return 2` in `main()` when repo path is not a directory (.codeql/scripts/invoke_codeql_scan.py:433)
      - `return 0` in `main()` when no languages detected (.codeql/scripts/invoke_codeql_scan.py:453)
      - `return 1` in `main()` when findings detected in CI mode (.codeql/scripts/invoke_codeql_scan.py:489)
      - `return 0` in `main()` on scan completion (.codeql/scripts/invoke_codeql_scan.py:491)
      - `return 3` in `main()` on analysis RuntimeError (.codeql/scripts/invoke_codeql_scan.py:495)
      - `raise SystemExit(main())` (.codeql/scripts/invoke_codeql_scan.py:499)
  - for validators/gates: can it exit non-zero? yes (exits 1 on findings in CI mode, 2 on config/path error, 3 on missing CLI or scan failure). Does it fail on source repo's default branch? Exits 3 if CodeQL CLI is not installed locally.
  - does output match documentation claims? Yes, strictly implements ADR-035 exit code conventions and documented output formats.

## Defects — required
- `missing-path` · .codeql/scripts/invoke_codeql_scan.py:86 · default CLI path `../cli/codeql` is not checked into repository (must be installed via `install_codeql.py`).
- `internal-contradiction` · .codeql/scripts/invoke_codeql_scan.py:12, 453 · docstring specifies exit code 0 as "Success (no findings or not in CI mode)", but if no supported languages are detected in the repository, it logs a warning and exits 0 without running any security scan.

## Observations
Includes a robust database cache validation mechanism (.codeql/scripts/invoke_codeql_scan.py:140-182) that computes SHA256 hashes of the configuration file, scripts directory, configuration directory, and git HEAD commit to determine if cached databases can safely be reused.

## Context cost
16,170 bytes; ~4,000 tokens.
