---
package: rjm
path: scripts/mcp_cli/wrapper.py
type: script
bytes: 6194
unit: inv-rjm-253
in_scope_via: scripts/mcp_cli/__init__.py
aliases: []
memo_inputs:
  - {path: scripts/mcp_cli/wrapper.py, sha256: e26e2aaec24230446e7e9c5bfe06ae1888d4272a50de3ca8c93295dd002715e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/mcp_cli/wrapper.py

## Purpose — required, verbatim
> "Thin wrapper around ``npx mcporter call`` for direct MCP tool invocation." — scripts/mcp_cli/wrapper.py:1

## Design intent — required
Replaces custom JSON-RPC client implementations and server process management for Model Context Protocol (MCP) servers with a thin subprocess wrapper delegating execution to `mcporter` (or `npx mcporter`). Provides defense-in-depth argument validation against CLI injection attacks, executes commands synchronously with configurable timeouts, and parses JSON output into native Python data structures.

## Phase — required
cross-phase

## Inputs — required
- Server identifier string (e.g. `"serena"`, `"forgetful"`, `"deepwiki"`) and tool name string (scripts/mcp_cli/wrapper.py:92-93)
- Optional timeout in seconds (default 30) (scripts/mcp_cli/wrapper.py:85)
- Optional working directory `cwd` for mcporter configuration resolution (scripts/mcp_cli/wrapper.py:86)
- Keyword arguments representing tool arguments formatted as key=value pairs (scripts/mcp_cli/wrapper.py:87)

## Outputs — required
- Return value of `mcp_call`: `dict[str, object]` representing parsed JSON result from MCP tool (or `{"raw": stdout}` if JSON parsing fails) (scripts/mcp_cli/wrapper.py:88, 152-155)
- Return value of `mcp_list_tools`: `list[dict[str, str]]` containing tool definitions with `"name"` and `"description"` (scripts/mcp_cli/wrapper.py:172)
- Exception: raises `McpCliError` on argument injection attempts, missing binaries, process timeout, or non-zero exit codes (scripts/mcp_cli/wrapper.py:43-44)

## Invokes — required
none

## Invoked by — required
- script wrapper — scripts/mcp_cli/__init__.py:9

## Concepts named — required, verbatim
- `mcporter` — scripts/mcp_cli/wrapper.py:3 — used here
- `McpCliError` — scripts/mcp_cli/wrapper.py:43 — defined here
- `_validate_arg_value` — scripts/mcp_cli/wrapper.py:47 — defined here
- `_find_mcporter` — scripts/mcp_cli/wrapper.py:64 — defined here
- `mcp_call` — scripts/mcp_cli/wrapper.py:81 — defined here
- `mcp_list_tools` — scripts/mcp_cli/wrapper.py:158 — defined here

## Structure
- Module docstring with usage examples — scripts/mcp_cli/wrapper.py:1
- Constants and regex pattern for argument validation — scripts/mcp_cli/wrapper.py:33
- McpCliError exception class — scripts/mcp_cli/wrapper.py:43
- _validate_arg_value security check function — scripts/mcp_cli/wrapper.py:47
- _find_mcporter binary resolution function — scripts/mcp_cli/wrapper.py:64
- mcp_call tool invocation function — scripts/mcp_cli/wrapper.py:81
- mcp_list_tools tool discovery function — scripts/mcp_cli/wrapper.py:158

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/mcp_cli/wrapper.py`
- **language:** Python (python3)
- **lines:** 219
- **documented invocation:**
  - "from scripts.mcp_cli import mcp_call" — scripts/mcp_cli/wrapper.py:8
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/mcp_cli/wrapper.py`
- **abridged stdout:** `none` (exited silently)
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented: `none` (library module, no process exit codes documented)
  - Actual: exits 0 upon direct execution; errors are raised as `McpCliError` exceptions rather than calling `sys.exit()`.
- **for validators/gates:**
  - Can exit non-zero: no `sys.exit()` calls in code; process exit is 0.
  - Verified on default branch: executes cleanly with exit code 0.
- **does the output match what the documentation claims:** yes, imports cleanly and resolves `_find_mcporter()` as expected.

## Defects — required
none

## Observations
- Implements injection mitigation in `_validate_arg_value`: rejects argument values that begin with `-` (argument injection) or contain null bytes (`\x00`).
- Checks for a locally installed `mcporter` executable before falling back to `npx mcporter`.

## Context cost
6194 bytes, 219 lines, ~1500 tokens.
