---
package: rjm
path: scripts/AGENTS.md
type: script
bytes: 8224
unit: inv-rjm-195
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: scripts/AGENTS.md, sha256: c36cd367a4f2c02dd84b708c93bcef1a0b76d811885f9f768ae4a98ac70cdc5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/AGENTS.md

## Purpose — required, verbatim
> "This document contains PowerShell coding standards and describes the automated actors that handle agent installation, configuration sync, and validation utilities." — scripts/AGENTS.md:6

## Design intent — required
Directory-level instructions and coding standards document automatically loaded when working in `scripts/`. Details the transition from legacy PowerShell standards (ADR-005) to Python-first development (ADR-042), preserves legacy PowerShell conventions for historical reference, and catalogs utility scripts acting as automated actors (`sync_mcp_config.py`, `check_skill_exists.py`, `validate_session_json.py`). Documents input/output contracts, invocation flags, pre-commit triggers, and testing standards for repository scripting. Without this file, developers and agents modifying `scripts/` would lack clear guidance on language constraints (Python-only, no bash), exit code conventions (ADR-035), or how script agents maintain MCP sync and session log validation.

## Phase — required
cross-phase

## Inputs — required
- Claude Code `.mcp.json` configuration file — scripts/AGENTS.md:181
- Operation types and action names for skill verification (`--operation`, `--action`, `--list-available`) — scripts/AGENTS.md:215, 232-236
- Session log JSON files (`.agents/sessions/*.json`) and schema definitions (`.agents/schemas/session-log.schema.json`) — scripts/AGENTS.md:246, 255

## Outputs — required
- Synchronized VS Code MCP config (`.vscode/mcp.json`) — scripts/AGENTS.md:182
- Skill existence verification booleans, skill listings, and process exit codes — scripts/AGENTS.md:216, 223
- Session protocol compliance reports — scripts/AGENTS.md:247

## Invokes — required
- script sync_mcp_config.py — scripts/AGENTS.md:158
- script check_skill_exists.py — scripts/AGENTS.md:159
- script validate_session_json.py — scripts/AGENTS.md:160
- doc docs/installation.md — scripts/AGENTS.md:171
- doc README.md — scripts/AGENTS.md:318
- doc build/AGENTS.md — scripts/AGENTS.md:319
- doc .github/AGENTS.md — scripts/AGENTS.md:320

## Invoked by — required
README.md

## Concepts named — required, verbatim
- `PowerShell Coding Standards` — scripts/AGENTS.md:10 — defined here
- `Python-first` — scripts/AGENTS.md:14 — used here
- `ADR-042` — scripts/AGENTS.md:14 — used here
- `ADR-005` — scripts/AGENTS.md:14 — used here
- `ADR-035` — scripts/AGENTS.md:44 — used here
- `Agent Catalog` — scripts/AGENTS.md:173 — defined here
- `sync_mcp_config.py` — scripts/AGENTS.md:175 — defined here
- `check_skill_exists.py` — scripts/AGENTS.md:209 — defined here
- `Phase 1.5 BLOCKING gate` — scripts/AGENTS.md:211 — used here
- `validate_session_json.py` — scripts/AGENTS.md:240 — defined here
- `session-policy` — scripts/AGENTS.md:248 — used here

## Structure
- `# Scripts Directory: Agents and Coding Standards` — scripts/AGENTS.md:1
- `## PowerShell Coding Standards` — scripts/AGENTS.md:10
- `### Language Constraint` — scripts/AGENTS.md:12
- `### Script Structure` — scripts/AGENTS.md:23
- `### Naming Conventions` — scripts/AGENTS.md:74
- `### Error Handling Pattern` — scripts/AGENTS.md:81
- `### Cross-Platform Patterns` — scripts/AGENTS.md:95
- `### Testing Standards` — scripts/AGENTS.md:108
- `### Module Structure` — scripts/AGENTS.md:115
- `### Security` — scripts/AGENTS.md:125
- `### Related References` — scripts/AGENTS.md:131
- `## Installation & Utility Agents` — scripts/AGENTS.md:140
- `## Overview` — scripts/AGENTS.md:142
- `## Architecture` — scripts/AGENTS.md:146
- `## Agent Catalog` — scripts/AGENTS.md:173
- `### sync_mcp_config.py` — scripts/AGENTS.md:175
- `### check_skill_exists.py` — scripts/AGENTS.md:209
- `### validate_session_json.py` — scripts/AGENTS.md:240
- `## Error Handling` — scripts/AGENTS.md:272
- `## Security Considerations` — scripts/AGENTS.md:279
- `## Testing` — scripts/AGENTS.md:287
- `## Monitoring` — scripts/AGENTS.md:309
- `## Related Documentation` — scripts/AGENTS.md:316

## Scripts — required if type is script or the skill ships scripts
The document catalogues and documents three core utility scripts:

1. `scripts/check_skill_exists.py`:
- path: `scripts/check_skill_exists.py`, language: Python, lines: 181
- documented invocation: `python3 scripts/check_skill_exists.py --list-available` — scripts/AGENTS.md:227
- **executed:** yes
- actual command run: `python3 scripts/check_skill_exists.py --list-available`
- actual stdout (abridged):
  ```text
  === issue ===
    - check_existing_pr_for_issue
    - claim_issue
  === pr ===
    - add_pr_review_thread_reply
    - audit_closing_claims
  ```
- **actual exit code:** 0
- documented exit codes: `exit 0 = found, exit 1 = not found` — scripts/AGENTS.md:223 vs. actual exit paths: lines 170, 178 (`sys.exit(0)`, `sys.exit(1)`)
- for validators/gates: can exit 1 on missing skill or unrecognized operation
- does the output match what the documentation claims? yes

2. `scripts/sync_mcp_config.py`:
- path: `scripts/sync_mcp_config.py`, language: Python, lines: 279
- documented invocation: `python3 -m scripts.sync_mcp_config --sync-all --dry-run` — scripts/AGENTS.md:201
- **executed:** yes
- actual command run: `python3 -m scripts.sync_mcp_config --sync-all --dry-run`
- actual stdout (abridged): `MCP config already in sync: .../.factory/mcp.json\n[DRY-RUN] Would sync: .../.mcp.json -> .../.vscode/mcp.json`
- **actual exit code:** 0
- documented exit codes: none documented in markdown vs. actual exit paths: lines 270, 275 (`sys.exit(0)`, `sys.exit(1)`)
- for validators/gates: not a gate; exits 1 on missing configuration file or invalid options
- does the output match what the documentation claims? yes

3. `scripts/validate_session_json.py`:
- path: `scripts/validate_session_json.py`, language: Python, lines: 450
- documented invocation: `uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24.json` — scripts/AGENTS.md:264
- **executed:** yes
- actual command run: `uv run python scripts/validate_session_json.py .agents/sessions/2026-08-21-session-99928-b3f7a91c2-remove-commit-limit-bypass-gate.json`
- actual stdout (abridged): `=== Session Validation ===\n[FAIL] Validation errors:\n  - endingCommit '52c346df2b2927909726599df3e70e881f57522f' names no commit in this repository.`
- **actual exit code:** 1
- documented exit codes: none documented in markdown vs. actual exit paths: line 448 (`sys.exit(main())` returning 0 or 1)
- for validators/gates: can exit 1 on schema violation, missing MUST checklist items, or unresolvable commits
- does the output match what the documentation claims? yes

## Defects — required
- missing-path · scripts/AGENTS.md:21 · Markdown link references `../.agents/guides/python-for-powershell-developers.md`, but `.agents/guides/` does not exist in `sources/rjm/`.
- missing-path · scripts/AGENTS.md:264 · Example command references `.agents/sessions/2025-12-18-session-24.json`, which does not exist in `sources/rjm/.agents/sessions/`.
- internal-contradiction · scripts/AGENTS.md:144 · States "The `scripts/` directory contains PowerShell scripts that automate installation...", contradicting lines 16-18 which state "the repository has since completed the ADR-042 migration and retains zero PowerShell files."

## Observations
Provides an architectural overview of scripts functioning as background agents that keep multi-IDE configurations (Claude Code and VS Code MCP servers) synchronized and validate session protocol compliance.

## Context cost
8,224 bytes (~2,050 tokens) standalone. Loads no external files at runtime.
