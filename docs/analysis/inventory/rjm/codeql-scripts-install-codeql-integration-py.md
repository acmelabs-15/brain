---
package: rjm
path: .codeql/scripts/install_codeql_integration.py
type: script
bytes: 9060
unit: inv-rjm-180
in_scope_via: docs/codeql-integration.md
aliases: []
memo_inputs:
  - {path: .codeql/scripts/install_codeql_integration.py, sha256: adbf946c456edd42fee06b3b1b9f5aa133615fc62a8ef671279817400e886012}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .codeql/scripts/install_codeql_integration.py

## Purpose — required, verbatim
> "Orchestration script that installs all CodeQL integration components:" — .codeql/scripts/install_codeql_integration.py:4

## Design intent — required
End-to-end orchestration script for setting up local CodeQL static analysis integration. Provides unified automation across four components: executing `install_codeql.py` to install the CodeQL CLI binary, verifying VSCode workspace configurations (`extensions.json`, `tasks.json`, `settings.json`), verifying the Claude Code skill installation and setting execution permissions on `invoke_codeql_scan.py`, and checking pre-commit hook integration in `lefthook.yml` for `actionlint`. Concludes by running `test_codeql_config.py` to validate configuration files, exiting according to ADR-035 exit code conventions.

## Phase — required
rjm:verify

## Inputs — required
- CLI options parsed via argparse:
  - `--skip-cli`: skip CodeQL CLI installation — .codeql/scripts/install_codeql_integration.py:33
  - `--skip-vscode`: skip VSCode configuration files creation — .codeql/scripts/install_codeql_integration.py:37
  - `--skip-claude-skill`: skip Claude Code skill installation — .codeql/scripts/install_codeql_integration.py:41
  - `--skip-pre-commit`: skip pre-commit hook verification — .codeql/scripts/install_codeql_integration.py:45
  - `--ci`: CI mode (non-interactive) — .codeql/scripts/install_codeql_integration.py:49
- Filesystem components:
  - Installer script `install_codeql.py` — .codeql/scripts/install_codeql_integration.py:87
  - VSCode configuration files `extensions.json` — .codeql/scripts/install_codeql_integration.py:114
  - VSCode tasks configuration `tasks.json` — .codeql/scripts/install_codeql_integration.py:115
  - VSCode settings configuration `settings.json` — .codeql/scripts/install_codeql_integration.py:116
  - Claude Code skill directory `codeql-scan` — .codeql/scripts/install_codeql_integration.py:135
  - Skill script `invoke_codeql_scan.py` — .codeql/scripts/install_codeql_integration.py:142
  - Pre-commit hook configuration `lefthook.yml` — .codeql/scripts/install_codeql_integration.py:166
  - Validation script `test_codeql_config.py` — .codeql/scripts/install_codeql_integration.py:189
- Git repository root detected via `--git-common-dir` — .codeql/scripts/install_codeql_integration.py:72

## Outputs — required
- Status logs to stderr with formatted prefixes (`[PASS]`, `[FAIL]`, `[WARNING]`, `[INFO]`, `===`) — .codeql/scripts/install_codeql_integration.py:56-68
- CLI installation directory `.codeql/cli/` — .codeql/scripts/install_codeql_integration.py:101
- Execution permissions set on `invoke_codeql_scan.py` via `0o755` — .codeql/scripts/install_codeql_integration.py:149
- Standardized exit codes (0, 1, 2, 3) per ADR-035 — .codeql/scripts/install_codeql_integration.py:10-14

## Invokes — required
- script install_codeql.py — .codeql/scripts/install_codeql_integration.py:87
- script test_codeql_config.py — .codeql/scripts/install_codeql_integration.py:189
- script invoke_codeql_scan.py — .codeql/scripts/install_codeql_integration.py:142
- config lefthook.yml — .codeql/scripts/install_codeql_integration.py:166
- config extensions.json — .codeql/scripts/install_codeql_integration.py:114
- config tasks.json — .codeql/scripts/install_codeql_integration.py:115
- config settings.json — .codeql/scripts/install_codeql_integration.py:116
- skill codeql-scan — .codeql/scripts/install_codeql_integration.py:135

## Invoked by — required
- doc docs/codeql-integration.md — docs/codeql-integration.md:37
- doc docs/codeql-rollout-checklist.md — docs/codeql-rollout-checklist.md:15

## Concepts named — required, verbatim
- `ADR-035` — .codeql/scripts/install_codeql_integration.py:10 — used here
- `build_parser` — .codeql/scripts/install_codeql_integration.py:28 — defined here
- `write_status` — .codeql/scripts/install_codeql_integration.py:55 — defined here
- `get_repo_root` — .codeql/scripts/install_codeql_integration.py:70 — defined here
- `step_install_cli` — .codeql/scripts/install_codeql_integration.py:85 — defined here
- `step_verify_vscode` — .codeql/scripts/install_codeql_integration.py:110 — defined here
- `step_verify_claude_skill` — .codeql/scripts/install_codeql_integration.py:133 — defined here
- `step_verify_pre_commit` — .codeql/scripts/install_codeql_integration.py:164 — defined here
- `step_validate` — .codeql/scripts/install_codeql_integration.py:186 — defined here
- `main` — .codeql/scripts/install_codeql_integration.py:208 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `.codeql/scripts/install_codeql_integration.py`, Python 3, 268 lines
- documented invocation:
  - "python3 .codeql/scripts/install_codeql_integration.py" — docs/codeql-integration.md:37
  - "python3 .codeql/scripts/install_codeql_integration.py --skip-vscode --skip-pre-commit" — docs/codeql-integration.md:50
- **executed:** yes
- actual command run: `python3 .codeql/scripts/install_codeql_integration.py --skip-cli` (in `sources/rjm`)
  abridged stdout:
  ```text
  === CodeQL Integration Setup ===
  [INFO] Skipping CodeQL CLI installation
  [INFO] Verifying VSCode configurations...
  [PASS] VSCode configurations verified
  [INFO] Verifying Claude Code skill...
  [PASS] Claude Code skill verified
  [INFO] Verifying Lefthook pre-commit integration...
  [WARNING] actionlint not found
  [INFO] Validating installation...
  [PASS] Configuration validation passed

  === Installation Summary ===
  [SKIP] CodeQL CLI installation skipped
  [PASS] VSCode configurations created
  [PASS] Claude Code skill installed
  [WARNING] actionlint not found - install for YAML validation

  [PASS] Installation complete!
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths in code:
  Documented in docstring:
  - "0 - Success" — .codeql/scripts/install_codeql_integration.py:11
  - "1 - Logic error (not in a git repository, prerequisite check failed)" — .codeql/scripts/install_codeql_integration.py:12
  - "2 - Configuration error (missing directories, permission denied)" — .codeql/scripts/install_codeql_integration.py:13
  - "3 - External dependency error (CodeQL CLI installation failed)" — .codeql/scripts/install_codeql_integration.py:14
  Actual exit paths in code:
  - `raise SystemExit(main())` — .codeql/scripts/install_codeql_integration.py:267
  - `return 0` — .codeql/scripts/install_codeql_integration.py:263
  - `return 1` — .codeql/scripts/install_codeql_integration.py:217
  - `sys.exit(2)` — .codeql/scripts/install_codeql_integration.py:91
  - `sys.exit(3)` — .codeql/scripts/install_codeql_integration.py:107
- for validators/gates: can it exit non-zero? yes, exits 1 when not in a git repo, 2 when install script missing, and 3 when CLI installation subprocess fails. Does it fail on the source repo's own default branch? No, `--skip-cli` exits 0 on default branch. Running outside a git repo exits 1.
- does the output match what the documentation claims? Yes, checks VSCode configs, Claude Code skill files, Lefthook pre-commit configuration, and runs config validation.

## Defects — required
- `doc-drift` · .codeql/scripts/install_codeql_integration.py:259 · Next steps instructions direct user to run scan script without noting that CodeQL CLI must be installed if skipped during setup.

## Observations
- Robust git repository resolution using `git rev-parse --git-common-dir` (line 72) supporting linked worktrees.
- Automatically ensures POSIX execute permissions (`0o755`) on `invoke_codeql_scan.py` at line 149.

## Context cost
9060 bytes. Approximately 2265 tokens.
