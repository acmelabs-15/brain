---
package: rjm
path: scripts/mcp_cli/__init__.py
type: script
bytes: 330
unit: inv-rjm-253
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/mcp_cli/__init__.py, sha256: c9d37bc78b96dd6b43741d469e74ab4665b26cec4a8632efdb68856d515d0bf9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/mcp_cli/__init__.py

## Purpose — required, verbatim
> "MCP CLI wrapper using MCPorter." — scripts/mcp_cli/__init__.py:1

## Design intent — required
Package initialization module providing a clean public interface for the `mcp_cli` package by re-exporting `McpCliError`, `mcp_call`, and `mcp_list_tools` from `scripts.mcp_cli.wrapper`. This provides other scripts and hooks a clean import path for programmatic MCP tool invocation via `mcporter` without requiring direct module imports.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
- Re-exports symbols `McpCliError`, `mcp_call`, and `mcp_list_tools` in `__all__` (scripts/mcp_cli/__init__.py:11)

## Invokes — required
- script wrapper — scripts/mcp_cli/__init__.py:9

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `MCPorter` — scripts/mcp_cli/__init__.py:1 — used here
- `McpCliError` — scripts/mcp_cli/__init__.py:9 — used here
- `mcp_call` — scripts/mcp_cli/__init__.py:9 — used here
- `mcp_list_tools` — scripts/mcp_cli/__init__.py:9 — used here

## Structure
- Package docstring — scripts/mcp_cli/__init__.py:1
- Re-exports from scripts.mcp_cli.wrapper — scripts/mcp_cli/__init__.py:9
- __all__ export list — scripts/mcp_cli/__init__.py:11

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/mcp_cli/__init__.py`
- **language:** Python (python3)
- **lines:** 12
- **documented invocation:**
  - `none` (package initialization module; usage is via `from scripts.mcp_cli import mcp_call`)
- **executed:** yes
- **actual command run:** `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/mcp_cli/__init__.py`
- **abridged stdout:** `none` (exited silently)
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented: `none` (package init module, no exit codes documented)
  - Actual: exits 0 when PYTHONPATH is configured; exits 1 with `ModuleNotFoundError: No module named 'scripts'` if executed directly without PYTHONPATH.
- **for validators/gates:**
  - Can exit non-zero: no validation logic; exits non-zero only if import fails.
  - Verified on default branch: executes cleanly with exit code 0 when PYTHONPATH includes package root.
- **does the output match what the documentation claims:** yes, exports expected public API symbols.

## Defects — required
- `orphan`: `scripts/mcp_cli/__init__.py:1` is not imported or referenced by any active in-scope lifecycle script or command (only tested in `tests/test_mcp_cli_wrapper.py`).

## Observations
- Created under Issue #1484 to eliminate LLM inference overhead when invoking MCP tools deterministically from hooks and scripts.

## Context cost
330 bytes, 12 lines, plus `scripts/mcp_cli/wrapper.py` (6194 bytes). Total ~6524 bytes, ~1600 tokens.
