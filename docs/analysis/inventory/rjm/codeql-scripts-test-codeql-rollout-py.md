---
package: rjm
path: .codeql/scripts/test_codeql_rollout.py
type: script
bytes: 13783
unit: inv-rjm-181
in_scope_via: .claude/skills/codeql-scan/SKILL.md
aliases: []
memo_inputs:
  - {path: .codeql/scripts/test_codeql_rollout.py, sha256: df4acdd40f7657e9b5555ae23cde792405972a61810a7befabd2e5c628576f8d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .codeql/scripts/test_codeql_rollout.py

## Purpose — required, verbatim
> "Validate successful CodeQL integration deployment across all tiers." — .codeql/scripts/test_codeql_rollout.py:2

## Design intent — required
Acts as an end-to-end multi-tier deployment verification gate for CodeQL across 9 distinct categories: CLI binary presence and version, configuration files, automation scripts, CI/CD workflows, local IDE configurations (VSCode and Claude Code), automatic hooks, documentation, test suites, and gitignore settings. Without it, developers and CI maintainers would lack an automated aggregate health check to verify that all components of the CodeQL security scanning infrastructure are properly installed, configured, and synchronized across repository tiers.

## Phase — required
rjm:verify

## Inputs — required
- CLI arguments parsed via `build_parser()` (.codeql/scripts/test_codeql_rollout.py:32):
  - `--format` (`console`, `json`, default: `console`) (.codeql/scripts/test_codeql_rollout.py:37-40)
  - `--ci` (CI mode: returns non-zero exit code on failures) (.codeql/scripts/test_codeql_rollout.py:41-44)
- Files and paths checked across the repository:
  - CodeQL CLI binary: `.codeql/cli/codeql` or `.codeql/cli/codeql.exe` (.codeql/scripts/test_codeql_rollout.py:85)
  - Configuration files: `.github/codeql/codeql-config.yml` and `.github/codeql/codeql-config-quick.yml` (.codeql/scripts/test_codeql_rollout.py:122, 127)
  - Python scripts under `.codeql/scripts/` (.codeql/scripts/test_codeql_rollout.py:159-165)
  - CI workflows: `.github/workflows/codeql-analysis.yml` and `.github/workflows/test-codeql-integration.yml` (.codeql/scripts/test_codeql_rollout.py:194, 199)
  - VSCode configs: `.vscode/extensions.json`, `.vscode/tasks.json`, `.vscode/settings.json` (.codeql/scripts/test_codeql_rollout.py:226-228)
  - Skill and hook files: `.claude/skills/codeql-scan/SKILL.md`, `.claude/skills/codeql-scan/scripts/Invoke-CodeQLScanSkill.ps1`, `.claude/hooks/PostToolUse/Invoke-CodeQLQuickScan.ps1` (.codeql/scripts/test_codeql_rollout.py:239, 244, 253)
  - Documentation: `docs/codeql-integration.md`, `docs/codeql-architecture.md`, `.agents/architecture/ADR-041-codeql-integration.md`, `AGENTS.md` (.codeql/scripts/test_codeql_rollout.py:277-281, 288)
  - Test files: `tests/test_install_codeql.py`, `tests/test_invoke_codeql_scan.py`, `tests/test_codeql_integration.py` (.codeql/scripts/test_codeql_rollout.py:174-178, 300-303, 310)
  - Gitignore file: `.gitignore` (.codeql/scripts/test_codeql_rollout.py:319)

## Outputs — required
- Multi-tier diagnostic report printed to stdout (console status lines and category breakdowns) or JSON payload containing `TotalChecks`, `PassedChecks`, `Status`, and `Categories` (.codeql/scripts/test_codeql_rollout.py:350-367)
- Process exit codes: 0 (all checks passed, or non-CI mode), 1 (one or more checks failed in CI mode) (.codeql/scripts/test_codeql_rollout.py:15-18, 368-371)

## Invokes — required
- script .codeql/scripts/install_codeql.py — .codeql/scripts/test_codeql_rollout.py:160
- script .codeql/scripts/invoke_codeql_scan.py — .codeql/scripts/test_codeql_rollout.py:161
- script .codeql/scripts/test_codeql_config.py — .codeql/scripts/test_codeql_rollout.py:162
- script .codeql/scripts/get_codeql_diagnostics.py — .codeql/scripts/test_codeql_rollout.py:163
- script .codeql/scripts/install_codeql_integration.py — .codeql/scripts/test_codeql_rollout.py:164
- config .github/codeql/codeql-config.yml — .codeql/scripts/test_codeql_rollout.py:122
- config .github/codeql/codeql-config-quick.yml — .codeql/scripts/test_codeql_rollout.py:127
- doc .agents/architecture/ADR-041-codeql-integration.md — .codeql/scripts/test_codeql_rollout.py:280

## Invoked by — required
- doc docs/codeql-rollout-checklist.md — docs/codeql-rollout-checklist.md:19
- doc docs/codeql-architecture.md — docs/codeql-architecture.md:418

## Concepts named — required, verbatim
- `CodeQL` — .codeql/scripts/test_codeql_rollout.py:2 — used here
- `PostToolUse` — .codeql/scripts/test_codeql_rollout.py:10 — used here
- `ADR-035` — .codeql/scripts/test_codeql_rollout.py:15 — used here
- `CI mode` — .codeql/scripts/test_codeql_rollout.py:43 — used here
- `ValidationTracker` — .codeql/scripts/test_codeql_rollout.py:48 — defined here
- `CodeQL CLI` — .codeql/scripts/test_codeql_rollout.py:88 — used here
- `SHA-pinned` — .codeql/scripts/test_codeql_rollout.py:211 — used here
- `ADR-041` — .codeql/scripts/test_codeql_rollout.py:280 — used here

## Structure
- build_parser() -> argparse.ArgumentParser
- class ValidationTracker
  - __init__(self) -> None
  - add(self, category: str, name: str, passed: bool, details: str = "") -> None
  - print_check(self, passed: bool, message: str) -> None
- check_cli(tracker: ValidationTracker) -> None
- check_configuration(tracker: ValidationTracker) -> None
- check_scripts(tracker: ValidationTracker) -> None
- check_cicd(tracker: ValidationTracker) -> None
- check_local_dev(tracker: ValidationTracker) -> None
- check_automatic(tracker: ValidationTracker) -> None
- check_documentation(tracker: ValidationTracker) -> None
- check_tests(tracker: ValidationTracker) -> None
- check_gitignore(tracker: ValidationTracker) -> None
- main(argv: list[str] | None = None) -> int

## Scripts — required if type is script or the skill ships scripts
- path: `.codeql/scripts/test_codeql_rollout.py`
  - language: Python
  - lines: 376
  - documented invocation:
    - "python3 .codeql/scripts/test_codeql_rollout.py --ci" — docs/codeql-rollout-checklist.md:56
    - "python3 .codeql/scripts/test_codeql_rollout.py --format json --ci" — docs/codeql-rollout-checklist.md:62
    - "python3 .codeql/scripts/test_codeql_rollout.py --format console --ci" — docs/codeql-architecture.md:425
  - executed: yes
  - actual command run, abridged stdout, actual exit code:
    - Command: `python3 .codeql/scripts/test_codeql_rollout.py --help`
    - Stdout: `usage: test_codeql_rollout.py [-h] [--format {console,json}] [--ci] Validate CodeQL integration deployment.`
    - Exit code: 0
    - Command: `python3 .codeql/scripts/test_codeql_rollout.py`
    - Stdout: `[CLI Installation] [Configuration] [Scripts] ... Overall Status: FAIL (19/28 checks)`
    - Exit code: 0
    - Command: `python3 .codeql/scripts/test_codeql_rollout.py --ci`
    - Stdout: `[CLI Installation] [Configuration] [Scripts] ... Overall Status: FAIL (19/28 checks)`
    - Exit code: 1
  - documented exit codes vs. actual exit paths:
    - Documented (.codeql/scripts/test_codeql_rollout.py:15-18):
      - 0: All checks passed
      - 1: One or more checks failed
    - Actual exit paths in code:
      - `return 1` in `main()` when `args.ci and status != "PASS"` (.codeql/scripts/test_codeql_rollout.py:369)
      - `return 0` in `main()` otherwise (.codeql/scripts/test_codeql_rollout.py:371)
      - `raise SystemExit(main())` (.codeql/scripts/test_codeql_rollout.py:375)
  - for validators/gates: can it exit non-zero? yes (exits 1 in CI mode when any check fails). Does it fail on the source repo's own default branch? Yes, fails 9 of 28 checks (19 passed) and exits 1 with `--ci` because several expected components are retired or renamed.
  - does output match documentation claims? Yes, categorizes checks across all 9 documented tiers and outputs console banners and JSON payloads as documented.

## Defects — required
- `always-failing-gate` · .codeql/scripts/test_codeql_rollout.py:368-370 · when invoked with `--ci`, it always fails and exits 1 on the repository's default branch because it expects retired components, uncommitted binaries, and renamed test files.
- `doc-drift` · .codeql/scripts/test_codeql_rollout.py:250-272 · `check_automatic()` validates the presence of `.claude/hooks/PostToolUse/Invoke-CodeQLQuickScan.ps1`, directly contradicting `docs/codeql-rollout-checklist.md:5` and `docs/codeql-architecture.md:7` which state the automatic edit-time hook was retired on 2026-07-21.
- `missing-path` · .codeql/scripts/test_codeql_rollout.py:176, 177, 244, 310 · checks hardcoded paths `tests/test_invoke_codeql_scan.py` (renamed to `tests/test_invoke_codeql_scan_py.py`), `tests/test_codeql_integration.py` (exists as `tests/test_install_codeql_integration.py`), and `.claude/skills/codeql-scan/scripts/Invoke-CodeQLScanSkill.ps1` (migrated to python script).

## Observations
Provides an organized, extensible test reporting abstraction through the `ValidationTracker` class (.codeql/scripts/test_codeql_rollout.py:48-80), gathering diagnostic assertions across multiple environment categories.

## Context cost
13,783 bytes; ~3,400 tokens.
