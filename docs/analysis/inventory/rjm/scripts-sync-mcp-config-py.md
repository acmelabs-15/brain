---
package: rjm
path: scripts/sync_mcp_config.py
type: script
bytes: 5726
unit: inv-rjm-262
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/sync_mcp_config.py, sha256: 121e1c3cf83183f12974ea194d84fb4bb3e5f5827fcd336a323acd5a6fa494df}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/sync_mcp_config.py

## Purpose — required, verbatim
> "Synchronize MCP configuration from Claude's .mcp.json to VS Code and Factory formats." — scripts/sync_mcp_config.py:2

## Design intent — required
Maintains cross-IDE configuration parity by translating Claude Code's root `.mcp.json` into `.vscode/mcp.json` and `.factory/mcp.json`, mapping the `mcpServers` key to `servers` for VS Code, adapting Serena MCP command arguments and port bindings, and enforcing security checks against symlink traversal.

## Phase — required
cross-phase

## Inputs — required
- Source `.mcp.json` file (default: `.mcp.json` or path via `--source`): `scripts/sync_mcp_config.py:122`, `scripts/sync_mcp_config.py:142`
- CLI arguments: `--destination`, `--target` (`vscode` or `factory`), `--sync-all`, `--force`, `--dry-run`, `--repo-root-override`: `scripts/sync_mcp_config.py:123-131`

## Outputs — required
- Synchronized configuration files at `.vscode/mcp.json` and/or `.factory/mcp.json`: `scripts/sync_mcp_config.py:115`, `scripts/sync_mcp_config.py:145-148`, `scripts/sync_mcp_config.py:153-155`
- Status and dry-run messages to stdout: `scripts/sync_mcp_config.py:107`, `scripts/sync_mcp_config.py:111`, `scripts/sync_mcp_config.py:116`
- Error messages to stderr: `scripts/sync_mcp_config.py:74`, `scripts/sync_mcp_config.py:78`, `scripts/sync_mcp_config.py:85`, `scripts/sync_mcp_config.py:89`, `scripts/sync_mcp_config.py:103`, `scripts/sync_mcp_config.py:135`, `scripts/sync_mcp_config.py:138`

## Invokes — required
- script get_repo_root — scripts/sync_mcp_config.py:32

## Invoked by — required
- script git_hook_policy.py — scripts/validation/git_hook_policy.py:6937

## Concepts named — required, verbatim
- `ADR-035 Exit Code Standardization` — scripts/sync_mcp_config.py:16 — used here
- `get_repo_root` — scripts/sync_mcp_config.py:35 — defined here
- `transform_for_vscode` — scripts/sync_mcp_config.py:41 — defined here
- `transform_for_factory` — scripts/sync_mcp_config.py:58 — defined here
- `sync_config` — scripts/sync_mcp_config.py:66 — defined here
- `main` — scripts/sync_mcp_config.py:120 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
For `scripts/sync_mcp_config.py`:
- path, language, lines: `scripts/sync_mcp_config.py`, Python, 163 lines
- documented invocation:
  "python3 -m scripts.sync_mcp_config --sync-all" — scripts/AGENTS.md:198
- **executed:** yes
- actual command run: `python3 scripts/sync_mcp_config.py --dry-run --sync-all`
- actual stdout (abridged):
```
MCP config already in sync: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.factory/mcp.json
[DRY-RUN] Would sync: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.mcp.json -> /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.vscode/mcp.json
```
- **actual exit code:** 0
- documented exit codes:
  "0  - Success: Configuration synced" — scripts/sync_mcp_config.py:13
  "1  - Error: File not found, invalid JSON, transformation failure" — scripts/sync_mcp_config.py:14
  vs. actual exit paths:
  `sys.exit(1)` at `scripts/sync_mcp_config.py:75` (missing source)
  `sys.exit(1)` at `scripts/sync_mcp_config.py:79` (source symlink security check)
  `sys.exit(1)` at `scripts/sync_mcp_config.py:86` (JSON parse failure)
  `sys.exit(1)` at `scripts/sync_mcp_config.py:90` (missing mcpServers key)
  `sys.exit(1)` at `scripts/sync_mcp_config.py:104` (dest symlink security check)
  `return 1` at `scripts/sync_mcp_config.py:136` (--sync-all with --destination)
  `return 1` at `scripts/sync_mcp_config.py:139` (--sync-all with --target)
  `return 0` at `scripts/sync_mcp_config.py:149`, `scripts/sync_mcp_config.py:158`
  `sys.exit(main())` at `scripts/sync_mcp_config.py:162`
- for validators/gates: not a validation gate; exits 1 on invalid arguments or file/format errors, exits 0 on successful sync.
- does the output match what the documentation claims? yes, synchronizes MCP configuration files across formats as documented.

## Defects — required
- doc-drift — scripts/README.md:177 — scripts/README.md documents PowerShell syntax (.\scripts\sync_mcp_config.py -Target factory -SyncAll -WhatIf -PassThru) for running sync_mcp_config.py, which is a Python script expecting standard Python CLI flags.

## Observations
Includes server-specific transformation rules for Serena MCP server (`"claude-code"` -> `"ide"`, `"24282"` -> `"24283"` in `transform_for_vscode` at `scripts/sync_mcp_config.py:47`).

## Context cost
5726 bytes (plus ~1150 bytes from `scripts/github_core/repo.py`), ~1720 tokens.
