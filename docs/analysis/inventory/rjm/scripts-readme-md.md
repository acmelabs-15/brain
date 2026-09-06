---
package: rjm
path: scripts/README.md
type: script
bytes: 9021
unit: inv-rjm-257
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/README.md

## Purpose — required, verbatim
> "PowerShell scripts for the AI Agents system." — scripts/README.md:3

## Design intent — required
Documents the architecture, placement principles, and usage conventions for scripts across the `ai-agents` repository. Implements the script categorization principles established in ADR-019, partitioning utilities across developer-facing tools (`scripts/`), CI/CD automation (`.github/scripts/`), build automation (`build/scripts/`), internal skill implementations (`.claude/skills/`), and tests (`tests/`). Provides multi-platform installation guidance across Claude Code, Copilot CLI, VS Code, and Visual Studio, and documents technical guardrail scripts and keep-disposition entry points. However, the file reflects a historical transition state from PowerShell (ADR-005) to Python-first scripting (ADR-042), retaining legacy references to PowerShell syntax, Windows CLI parameters, and non-existent Pester tests.

## Phase — required
cross-phase

## Inputs — required
- Session log files:
  - `.agents/sessions/2025-12-17-session-01.json` — scripts/README.md:48
- GitHub Actions workflow files:
  - `.github/workflows/pr-validation.yml` — scripts/README.md:68
  - `.github/workflows/pytest.yml` — scripts/README.md:138
- Git staged files and ignore configurations:
  - `--staged-only` — scripts/README.md:91
  - `.testignore` — scripts/README.md:94
- Pull request titles, bodies, and CLI flags:
  - `--title "feat: Add feature"` — scripts/README.md:112
  - `--body "Description"` — scripts/README.md:112
  - `--skip-validation` — scripts/README.md:108
  - `--audit-reason "hotfix"` — scripts/README.md:118
- MCP configuration files:
  - `.mcp.json` — scripts/README.md:171,197

## Outputs — required
- Pull requests created via GitHub CLI wrapper (`new_validated_pr.py`) — scripts/README.md:101-122
- Synced MCP configuration files:
  - `.factory/mcp.json` — scripts/README.md:207
  - `.vscode/mcp.json` — scripts/README.md:208
- Validation reports, exit codes, and CLI help messages:
  - `0`: All validations passed — scripts/README.md:155
  - `1`: Validation errors found — scripts/README.md:156
  - `2`: Script error — scripts/README.md:157

## Invokes — required
- script scripts/validate_session_json.py — scripts/README.md:48
- script scripts/validation/pr_description.py — scripts/README.md:65
- script scripts/detect_skill_violation.py — scripts/README.md:78
- script detect_test_coverage_gaps.py — scripts/README.md:83
- script scripts/new_validated_pr.py — scripts/README.md:224
- script scripts/validate_workflows.py — scripts/README.md:132
- script scripts/validation/hook_contracts.py — scripts/README.md:163
- script scripts/validation/traceability.py — scripts/README.md:164
- script sync_mcp_config.py — scripts/README.md:165
- script check_skill_exists.py — scripts/README.md:166
- script invoke_batch_pr_review.py — scripts/README.md:167
- script scripts/compute_health_status.py — scripts/README.md:221
- script scripts/consolidate_skills.py — scripts/README.md:222
- script scripts/maintenance/gc_worktrees.py — scripts/README.md:223
- script scripts/openclaw_bridge.py — scripts/README.md:225
- script scripts/split_bundled_skills.py — scripts/README.md:226
- script scripts/normalize_line_endings.py — scripts/README.md:227
- script scripts/traceability/reconstruct_trace.py — scripts/README.md:228
- reference docs/installation.md — scripts/README.md:32
- reference docs/WORKFLOW-VALIDATION.md — scripts/README.md:159
- reference docs/technical-guardrails.md — scripts/README.md:212
- reference .agents/architecture/ADR-019-script-organization.md — scripts/README.md:22

## Invoked by — required
- docs/eval/moq-analyzers-provider-comparison.md:96
- scripts/AGENTS.md:318

## Concepts named — required, verbatim
- `Script Organization` — scripts/README.md:5 — defined here
- `ADR-019` — scripts/README.md:22 — used here
- `Installation` — scripts/README.md:24 — defined here
- `Validation Scripts` — scripts/README.md:34 — defined here
- `Issue #230` — scripts/README.md:36 — used here
- `Session Protocol Validation` — scripts/README.md:38 — defined here
- `validate_session_json.py` — scripts/README.md:40 — defined here
- `PR and Code Quality` — scripts/README.md:56 — defined here
- `pr_description.py` — scripts/README.md:58 — defined here
- `CRITICAL_FAIL` — scripts/README.md:60 — used here
- `detect_skill_violation.py` — scripts/README.md:70 — defined here
- `detect_test_coverage_gaps.py` — scripts/README.md:83 — defined here
- `PR Creation` — scripts/README.md:99 — defined here
- `new_validated_pr.py` — scripts/README.md:101 — defined here
- `validate_workflows.py` — scripts/README.md:124 — defined here
- `ADR-006` — scripts/README.md:126 — used here
- `Other Validation Scripts` — scripts/README.md:161 — defined here
- `hook_contracts.py` — scripts/README.md:163 — used here
- `traceability.py` — scripts/README.md:164 — used here
- `sync_mcp_config.py` — scripts/README.md:165 — defined here
- `check_skill_exists.py` — scripts/README.md:166 — used here
- `invoke_batch_pr_review.py` — scripts/README.md:167 — used here
- `Factory Droid` — scripts/README.md:171 — used here
- `Keep-Disposition Script Entry Points` — scripts/README.md:214 — defined here
- `compute_health_status.py` — scripts/README.md:221 — used here
- `consolidate_skills.py` — scripts/README.md:222 — used here
- `gc_worktrees.py` — scripts/README.md:223 — used here
- `openclaw_bridge.py` — scripts/README.md:225 — used here
- `split_bundled_skills.py` — scripts/README.md:226 — used here
- `normalize_line_endings.py` — scripts/README.md:227 — used here
- `reconstruct_trace.py` — scripts/README.md:228 — used here
- `Running Tests` — scripts/README.md:230 — defined here
- `Pester` — scripts/README.md:232 — used here

## Structure
- `# AI Agents Scripts` — scripts/README.md:1
- `## Script Organization` — scripts/README.md:5
- `## Installation` — scripts/README.md:24
- `## Validation Scripts` — scripts/README.md:34
- `### Session Protocol Validation` — scripts/README.md:38
- `#### validate_session_json.py` — scripts/README.md:40
- `### PR and Code Quality` — scripts/README.md:56
- `#### pr_description.py` — scripts/README.md:58
- `#### detect_skill_violation.py` — scripts/README.md:70
- `#### detect_test_coverage_gaps.py` — scripts/README.md:83
- `### PR Creation` — scripts/README.md:99
- `#### new_validated_pr.py` — scripts/README.md:101
- `#### validate_workflows.py` — scripts/README.md:124
- `### Other Validation Scripts` — scripts/README.md:161
- `#### sync_mcp_config.py` — scripts/README.md:169
- `## Keep-Disposition Script Entry Points` — scripts/README.md:214
- `## Running Tests` — scripts/README.md:230
- `## Full Documentation` — scripts/README.md:248

## Scripts — required if type is script or the skill ships scripts
`scripts/README.md` is a Markdown documentation document typed as `script` in the manifest due to its location under `scripts/`. Executing it as a Python script (`python3 sources/rjm/scripts/README.md`) fails with a SyntaxError on line 22 (exit code 1). It documents invocations and interfaces for multiple utility scripts:

#### compute_health_status.py
- path: `scripts/compute_health_status.py`, language: Python, lines: 367
- documented invocation:
  `uv run python scripts/compute_health_status.py --help` — scripts/README.md:221
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/compute_health_status.py --help`
- abridged stdout:
  ```text
  usage: compute_health_status.py [-h] [--memories-dir MEMORIES_DIR]
                                  [--sessions-dir SESSIONS_DIR] [--limit LIMIT]
                                  [--format {json,table,markdown}]
                                  [--project-root PROJECT_ROOT]

  Compute aggregate health status from metrics
  ```
- **actual exit code:** 0
- documented exit codes: prints help and exits cleanly
- does the output match what the documentation claims? yes, prints CLI options.

#### maintenance/gc_worktrees.py
- path: `scripts/maintenance/gc_worktrees.py`, language: Python, lines: 489
- documented invocation:
  `uv run python scripts/maintenance/gc_worktrees.py --help` — scripts/README.md:223
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/maintenance/gc_worktrees.py --help`
- abridged stdout:
  ```text
  usage: gc_worktrees.py [-h] [--apply] [--base BASE] [--json]
                         [--time-budget SECONDS]

  Safely garbage-collect stale git worktrees (dry-run by default).
  ```
- **actual exit code:** 0
- documented exit codes: prints help and exits cleanly
- does the output match what the documentation claims? yes, prints worktree gc options.

#### new_validated_pr.py
- path: `scripts/new_validated_pr.py`, language: Python, lines: 365
- documented invocation:
  `uv run python scripts/new_validated_pr.py --help` — scripts/README.md:224
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/new_validated_pr.py --help`
- abridged stdout:
  ```text
  usage: new_validated_pr.py [-h] [--title TITLE] [--body BODY]
                             [--body-file BODY_FILE] [--base BASE] [--head HEAD]
                             [--draft] [--web] [--skip-validation]
                             [--audit-reason AUDIT_REASON]

  Create a validated PR with guardrails
  ```
- **actual exit code:** 0
- documented exit codes: prints help and exits cleanly
- does the output match what the documentation claims? yes, prints PR creation flags.

#### sync_mcp_config.py
- path: `scripts/sync_mcp_config.py`, language: Python, lines: 172
- documented invocation:
  `.\scripts\sync_mcp_config.py -Target factory` — scripts/README.md:180
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/sync_mcp_config.py --help`
- abridged stdout:
  ```text
  usage: sync_mcp_config.py [-h] [--source SOURCE] [--destination DESTINATION]
                            [--target {factory,vscode}] [--sync-all] [--force]
                            [--dry-run]
                            [--repo-root-override REPO_ROOT_OVERRIDE]

  Sync MCP config to VS Code/Factory formats
  ```
- **actual exit code:** 0
- documented exit codes: prints help and exits cleanly
- does the output match what the documentation claims? no, README documents PowerShell parameter conventions (`-Target`, `-SyncAll`, `-WhatIf`, `-PassThru`) while script is a Python CLI accepting `--target`, `--sync-all`, `--dry-run`, and `--force`.

#### validate_workflows.py
- path: `scripts/validate_workflows.py`, language: Python, lines: 326
- documented invocation:
  `uv run python scripts/validate_workflows.py` — scripts/README.md:132
- documented exit codes:
  > "- `0`: All validations passed (warnings are OK)" — scripts/README.md:155
  > "- `1`: Validation errors found (must fix)" — scripts/README.md:156
  > "- `2`: Script error (missing dependencies)" — scripts/README.md:157
- exit paths in code: `scripts/validate_workflows.py:326`
- does the output match what the documentation claims? yes, documents exit codes for clean, validation error, and script error states.

## Defects — required
- `doc-drift` · "PowerShell scripts for the AI Agents system." — scripts/README.md:3 · Claims scripts in the directory are PowerShell scripts, whereas the repository migrated to Python (ADR-042) and all validation and utility scripts listed in the document are `.py` files.
- `missing-path` · ".agents/sessions/2025-12-17-session-01.json" — scripts/README.md:48 · Documented example session log `.agents/sessions/2025-12-17-session-01.json` does not exist on disk.
- `missing-path` · "Invoke-Pester -Path .\tests\Validate-SessionJson.Tests.ps1" — scripts/README.md:242 · Documented Pester test file `tests/Validate-SessionJson.Tests.ps1` does not exist in `tests/`.
- `doc-drift` · ".\scripts\sync_mcp_config.py -Target factory" — scripts/README.md:180 · Documents PowerShell parameter invocations (`-Target`, `-SyncAll`, `-WhatIf`, `-PassThru`) for `sync_mcp_config.py`, but `sync_mcp_config.py` is a Python CLI accepting `--target`, `--sync-all`, `--dry-run`, and `--force`.
- `internal-contradiction` · "Invoke-Pester -Path .\tests" — scripts/README.md:239 · Instructs running Pester tests in `tests/`, but the test suite consists of Python `pytest` suites rather than Pester `.ps1` files.

## Observations
`scripts/README.md` acts as a historical transition artifact reflecting the repository's evolution from PowerShell (ADR-005) to Python (ADR-042). While the table in § Keep-Disposition Script Entry Points correctly lists Python entry points with `uv run python scripts/<script>.py --help`, earlier sections retain legacy Windows PowerShell command examples and Pester test instructions.

## Context cost
9021 bytes, ~2255 tokens.
