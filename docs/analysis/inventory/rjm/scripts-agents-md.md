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
verified: 2026-09-06 quote-check+coverage
---

# scripts/AGENTS.md

## Purpose — required, verbatim
> "This document contains PowerShell coding standards and describes the automated actors that handle agent installation, configuration sync, and validation utilities." — scripts/AGENTS.md:6

## Design intent — required
Governs script authoring and utility tooling in the `scripts/` directory, establishing coding conventions, testing guidelines, cross-platform rules, and documenting three utility script agents (`sync_mcp_config.py`, `check_skill_exists.py`, and `validate_session_json.py`). It documents the architectural migration from PowerShell (ADR-005) to Python (ADR-042) while preserving historical reference standards.

## Phase — required
cross-phase

## Inputs — required
- "Claude Code format" — scripts/AGENTS.md:181
- "Operation type, action name" — scripts/AGENTS.md:215
- "A session log JSON handed to it" — scripts/AGENTS.md:246

## Outputs — required
- "VS Code format" — scripts/AGENTS.md:182
- "Boolean result or skill list" — scripts/AGENTS.md:216
- "Protocol compliance report" — scripts/AGENTS.md:247

## Invokes — required
- doc .agents/guides/python-for-powershell-developers.md — scripts/AGENTS.md:21
- doc .agents/architecture/ADR-035-exit-code-standardization.md — scripts/AGENTS.md:133
- doc .claude/skills/CLAUDE.md — scripts/AGENTS.md:134
- doc docs/installation.md — scripts/AGENTS.md:171
- script scripts.sync_mcp_config — scripts/AGENTS.md:198
- script check_skill_exists.py — scripts/AGENTS.md:224
- script validate_session_json.py — scripts/AGENTS.md:264
- doc scripts/README.md — scripts/AGENTS.md:318
- doc build/AGENTS.md — scripts/AGENTS.md:319
- doc .github/AGENTS.md — scripts/AGENTS.md:320

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `PowerShell Coding Standards` — scripts/AGENTS.md:10 — defined here | used here
- `ADR-042` — scripts/AGENTS.md:14 — defined here | used here
- `ADR-005` — scripts/AGENTS.md:14 — defined here | used here
- `ADR-035` — scripts/AGENTS.md:44 — defined here | used here
- `Script Structure` — scripts/AGENTS.md:23 — defined here | used here
- `Naming Conventions` — scripts/AGENTS.md:74 — defined here | used here
- `Error Handling Pattern` — scripts/AGENTS.md:81 — defined here | used here
- `Cross-Platform Patterns` — scripts/AGENTS.md:95 — defined here | used here
- `Testing Standards` — scripts/AGENTS.md:108 — defined here | used here
- `Module Structure` — scripts/AGENTS.md:115 — defined here | used here
- `Installation & Utility Agents` — scripts/AGENTS.md:140 — defined here | used here
- `sync_mcp_config.py` — scripts/AGENTS.md:175 — defined here | used here
- `check_skill_exists.py` — scripts/AGENTS.md:209 — defined here | used here
- `validate_session_json.py` — scripts/AGENTS.md:240 — defined here | used here
- `Phase 1.5 BLOCKING gate` — scripts/AGENTS.md:211 — defined here | used here
- `session-policy` — scripts/AGENTS.md:248 — defined here | used here

## Structure
# Scripts Directory: Agents and Coding Standards — scripts/AGENTS.md:1
## PowerShell Coding Standards — scripts/AGENTS.md:10
### Language Constraint — scripts/AGENTS.md:12
### Script Structure — scripts/AGENTS.md:23
### Naming Conventions — scripts/AGENTS.md:74
### Error Handling Pattern — scripts/AGENTS.md:81
### Cross-Platform Patterns — scripts/AGENTS.md:95
### Testing Standards — scripts/AGENTS.md:108
### Module Structure — scripts/AGENTS.md:115
### Security — scripts/AGENTS.md:125
### Related References — scripts/AGENTS.md:131
## Installation & Utility Agents — scripts/AGENTS.md:140
## Overview — scripts/AGENTS.md:142
## Architecture — scripts/AGENTS.md:146
## Agent Catalog — scripts/AGENTS.md:173
### sync_mcp_config.py — scripts/AGENTS.md:175
### check_skill_exists.py — scripts/AGENTS.md:209
### validate_session_json.py — scripts/AGENTS.md:240
## Error Handling — scripts/AGENTS.md:272
## Security Considerations — scripts/AGENTS.md:279
## Testing — scripts/AGENTS.md:287
## Monitoring — scripts/AGENTS.md:310
## Related Documentation — scripts/AGENTS.md:316

## Scripts — required if type is script or the skill ships scripts
The file itself is a markdown guide classified as type `script` in the unit facts mapping table. It documents invocations for three utility scripts:

1. `scripts/sync_mcp_config.py`:
- path: `scripts/sync_mcp_config.py`, language: Python, lines: 345
- documented invocation: "python3 -m scripts.sync_mcp_config --sync-all" — scripts/AGENTS.md:198
- executed: yes
- actual command run: `python3 -m scripts.sync_mcp_config --sync-all --dry-run`, stdout: `MCP config already in sync: ... [DRY-RUN] Would sync: ...`, actual exit code: 0
- documented exit codes: none in table vs. actual exit paths: `sys.exit(main())` exits 0 on success, non-zero on error
- does the output match what the documentation claims? yes, dry-run successfully previews sync actions without writing

2. `scripts/check_skill_exists.py`:
- path: `scripts/check_skill_exists.py`, language: Python, lines: 175
- documented invocation: "python3 scripts/check_skill_exists.py --list-available" — scripts/AGENTS.md:227
- executed: yes
- actual command run: `python3 scripts/check_skill_exists.py --list-available`, stdout: listings for issue, milestone, pr, reactions, actual exit code: 0
- documented exit codes: "exit 0 = found, exit 1 = not found" — scripts/AGENTS.md:223 vs. actual exit paths: `sys.exit(0)` and `sys.exit(1)`
- does the output match what the documentation claims? yes, lists all available skills by category

3. `scripts/validate_session_json.py`:
- path: `scripts/validate_session_json.py`, language: Python, lines: 579
- documented invocation: "uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24.json" — scripts/AGENTS.md:264
- executed: yes
- actual command run: `uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24.json`, stdout: `ERROR: Session file not found: ...`, actual exit code: 1
- documented exit codes: none in table vs. actual exit paths: returns 0 on valid session, 1 on validation error or missing file
- does the output match what the documentation claims? documented session `.agents/sessions/2025-12-18-session-24.json` does not exist in repository

## Defects — required
- missing-path · scripts/AGENTS.md:264 · Documented invocation references non-existent session file `.agents/sessions/2025-12-18-session-24.json`.
- missing-path · scripts/AGENTS.md:318 · Relative markdown link `[scripts/README.md](README.md)` points to non-existent `scripts/README.md`.
- doc-drift · scripts/AGENTS.md:144 · States "The `scripts/` directory contains PowerShell scripts", but per ADR-042 (lines 17-18) the repo contains zero PowerShell files.
- orphan · scripts/AGENTS.md:1 · Directory instruction file is not invoked or loaded by other in-scope lifecycle commands.

## Observations
Documents the transition from PowerShell (ADR-005) to Python (ADR-042). While all active scripts are in Python, PowerShell coding standards and patterns are preserved for historical reference and potential `.ps1` tooling.

## Context cost
8224 bytes, ~2056 tokens.
