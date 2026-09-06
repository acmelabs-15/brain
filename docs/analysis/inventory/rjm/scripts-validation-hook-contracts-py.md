---
package: rjm
path: scripts/validation/hook_contracts.py
type: script
bytes: 37686
unit: inv-rjm-296
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/hook_contracts.py

## Purpose — required, verbatim
> "Validate Claude Code hook contracts between settings.json and hook scripts." — scripts/validation/hook_contracts.py:2

## Design intent — required
Validates hook configuration integrity and interface contracts between registration manifests and target hook scripts across both Claude Code and GitHub Copilot CLI surfaces. Hooks run dynamically in reaction to lifecycle events (such as tool execution or session initialization), and a broken registration—such as a missing script, invalid timeout, unrecognized hook event type, duplicate registration, or missing exit code documentation for blocking gates—causes runtime failure or causes dispatchers to fail closed and block all tool actions. `hook_contracts.py` performs comprehensive static validation of `.claude/settings.json`, `.claude/hooks/hooks.json`, and `src/copilot-cli/hooks/hooks.json`, recursively expanding dispatch group registrations (`invoke_dispatch_claude.py` via `dispatch_groups.json` and Copilot `_dispatch.py` via `_manifest.json`) down to individual hook shims. By checking script existence, parameter boundaries, plugin root variable substitutions, and documented exit code semantics ahead of execution, it prevents unhandled hook crashes and blocks invalid hook configurations in continuous integration.

## Phase — required
none

## Inputs — required
- Command-line option `--path PATH`: Project root path (env: `SCAN_PATH`, default: current directory) — scripts/validation/hook_contracts.py:948
- Command-line option `--settings SETTINGS`: Path to settings.json (default: `<path>/.claude/settings.json`) — scripts/validation/hook_contracts.py:953
- Command-line option `--ci`: CI mode flag to exit non-zero on violations — scripts/validation/hook_contracts.py:958
- Command-line option `--format {console,json}`: Output format (env: `OUTPUT_FORMAT`, default: console) — scripts/validation/hook_contracts.py:964
- Settings file `.claude/settings.json` (or path via `--settings`) — scripts/validation/hook_contracts.py:984
- Plugin hooks configuration path `PLUGIN_HOOKS_PATH` (`.claude/hooks/hooks.json`) — scripts/validation/hook_contracts.py:170
- Dispatch groups configuration path `DISPATCH_GROUPS_PATH` (`.claude/hooks/dispatch_groups.json`) — scripts/validation/hook_contracts.py:169
- Copilot hooks configuration path `COPILOT_HOOKS_PATH` (`src/copilot-cli/hooks/hooks.json`) — scripts/validation/hook_contracts.py:178
- Copilot dispatch manifest filename `COPILOT_MANIFEST_NAME` (`_manifest.json`) — scripts/validation/hook_contracts.py:180
- Hook scripts on disk (first 30 lines read for exit code documentation in blocking hooks) — scripts/validation/hook_contracts.py:704-706

## Outputs — required
- Formatted console report emitted to stdout indicating success (`All hook contracts valid` and `Validated <n> hook entries`) or violation breakdown (`Hook contract violations found`, `Found <n> violation(s):`) — scripts/validation/hook_contracts.py:897, 898, 901, 903
- JSON formatted report emitted to stdout via `--format json` with keys `status`, `entriesValidated`, `violationCount`, and structured `violations` array — scripts/validation/hook_contracts.py:915-929
- Standard error messages for configuration errors (`Error: Path not found:`, `Error: Settings file not found:`, `Error: Cannot read hook registrations from`) — scripts/validation/hook_contracts.py:980, 988, 1008
- Process exit codes conforming to ADR-035:
  - `0`: Success (no violations found, or non-CI mode) — scripts/validation/hook_contracts.py:11, 1018
  - `1`: Logic error (violations found in CI mode) — scripts/validation/hook_contracts.py:12, 1017
  - `2`: Config error (settings file or project path missing or invalid) — scripts/validation/hook_contracts.py:13, 981, 991, 1011

## Invokes — required
none

## Invoked by — required
- script hook_contracts — scripts/README.md:163

## Concepts named — required, verbatim
- `ADR-035` — scripts/validation/hook_contracts.py:10 — used here
- `BLOCKING_HOOK_TYPES` — scripts/validation/hook_contracts.py:27 — defined here
- `PreToolUse` — scripts/validation/hook_contracts.py:28 — used here
- `PermissionRequest` — scripts/validation/hook_contracts.py:28 — used here
- `Stop` — scripts/validation/hook_contracts.py:28 — used here
- `SubagentStop` — scripts/validation/hook_contracts.py:28 — used here
- `UserPromptSubmit` — scripts/validation/hook_contracts.py:28 — used here
- `NON_BLOCKING_HOOK_TYPES` — scripts/validation/hook_contracts.py:32 — defined here
- `SessionStart` — scripts/validation/hook_contracts.py:34 — used here
- `SessionEnd` — scripts/validation/hook_contracts.py:35 — used here
- `PostToolUse` — scripts/validation/hook_contracts.py:36 — used here
- `PostToolUseFailure` — scripts/validation/hook_contracts.py:37 — used here
- `Notification` — scripts/validation/hook_contracts.py:38 — used here
- `SubagentStart` — scripts/validation/hook_contracts.py:39 — used here
- `PreCompact` — scripts/validation/hook_contracts.py:40 — used here
- `TeammateIdle` — scripts/validation/hook_contracts.py:41 — used here
- `TaskCompleted` — scripts/validation/hook_contracts.py:42 — used here
- `ALL_HOOK_TYPES` — scripts/validation/hook_contracts.py:46 — defined here
- `MIN_TIMEOUT` — scripts/validation/hook_contracts.py:49 — defined here
- `MAX_TIMEOUT` — scripts/validation/hook_contracts.py:50 — defined here
- `_SCRIPT_PATH_PATTERN` — scripts/validation/hook_contracts.py:53 — defined here
- `CLAUDE_ROOT` — scripts/validation/hook_contracts.py:61 — defined here
- `COPILOT_ROOT` — scripts/validation/hook_contracts.py:62 — defined here
- `_PLUGIN_ROOT_PATTERN` — scripts/validation/hook_contracts.py:70 — defined here
- `_MAX_PLUGIN_ROOT_PASSES` — scripts/validation/hook_contracts.py:76 — defined here
- `_PWSH_PATTERN` — scripts/validation/hook_contracts.py:79 — defined here
- `Violation` — scripts/validation/hook_contracts.py:91 — defined here
- `HookEntry` — scripts/validation/hook_contracts.py:101 — defined here
- `ContractReport` — scripts/validation/hook_contracts.py:113 — defined here
- `_resolve_script_path` — scripts/validation/hook_contracts.py:124 — defined here
- `_resolve_plugin_root` — scripts/validation/hook_contracts.py:134 — defined here
- `extract_script_path` — scripts/validation/hook_contracts.py:155 — defined here
- `DISPATCHER_SCRIPT_NAME` — scripts/validation/hook_contracts.py:167 — defined here
- `DISPATCH_GROUPS_PATH` — scripts/validation/hook_contracts.py:169 — defined here
- `PLUGIN_HOOKS_PATH` — scripts/validation/hook_contracts.py:170 — defined here
- `COPILOT_HOOKS_PATH` — scripts/validation/hook_contracts.py:178 — defined here
- `COPILOT_DISPATCHER_NAME` — scripts/validation/hook_contracts.py:179 — defined here
- `COPILOT_MANIFEST_NAME` — scripts/validation/hook_contracts.py:180 — defined here
- `_load_dispatch_groups` — scripts/validation/hook_contracts.py:183 — defined here
- `_expand_dispatch_group` — scripts/validation/hook_contracts.py:232 — defined here
- `parse_settings` — scripts/validation/hook_contracts.py:357 — defined here
- `parse_copilot_hooks` — scripts/validation/hook_contracts.py:420 — defined here
- `_expand_copilot_manifest` — scripts/validation/hook_contracts.py:539 — defined here
- `validate_script_exists` — scripts/validation/hook_contracts.py:620 — defined here
- `validate_hook_type_known` — scripts/validation/hook_contracts.py:643 — defined here
- `validate_timeout` — scripts/validation/hook_contracts.py:655 — defined here
- `_EXIT_DOC_PATTERN` — scripts/validation/hook_contracts.py:676 — defined here
- `validate_exit_code_docs` — scripts/validation/hook_contracts.py:679 — defined here
- `_duplicate_key` — scripts/validation/hook_contracts.py:722 — defined here
- `validate_duplicate_entries` — scripts/validation/hook_contracts.py:739 — defined here
- `_read_copilot_surface` — scripts/validation/hook_contracts.py:769 — defined here
- `validate_all` — scripts/validation/hook_contracts.py:799 — defined here
- `format_console` — scripts/validation/hook_contracts.py:892 — defined here
- `format_json` — scripts/validation/hook_contracts.py:913 — defined here
- `_FORMATTERS` — scripts/validation/hook_contracts.py:936 — defined here
- `build_parser` — scripts/validation/hook_contracts.py:942 — defined here
- `main` — scripts/validation/hook_contracts.py:973 — defined here

## Structure
- Shebang and module docstring — scripts/validation/hook_contracts.py:1-15
- Hook type classification sets and timeout bounds — scripts/validation/hook_contracts.py:27-51
- Script regex pattern, plugin root paths, and environment colors — scripts/validation/hook_contracts.py:53-88
- Data classes: Violation, HookEntry, and ContractReport — scripts/validation/hook_contracts.py:90-123
- Script and plugin root path resolution helpers — scripts/validation/hook_contracts.py:124-162
- Claude dispatch groups loader and fan-out expander — scripts/validation/hook_contracts.py:163-355
- Settings and Copilot registration parsing — scripts/validation/hook_contracts.py:357-537
- Copilot manifest fan-out expander — scripts/validation/hook_contracts.py:539-618
- Contract validator functions (existence, hook type, timeout, docstring exit codes, duplicate keys) — scripts/validation/hook_contracts.py:620-767
- Surface orchestration and validation runner: validate_all — scripts/validation/hook_contracts.py:769-890
- Console and JSON report formatters — scripts/validation/hook_contracts.py:892-940
- CLI argument parsing and main entry point — scripts/validation/hook_contracts.py:942-1023

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/hook_contracts.py`, language: Python 3, lines: 1023
- documented invocation:
  - "Validate Claude Code hook contracts in settings.json." — scripts/validation/hook_contracts.py:945
- executed: yes
- actual command run: `python3 scripts/validation/hook_contracts.py`
- abridged stdout:
```
All hook contracts valid
   Validated 9 hook entries
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "0 - Success (no violations, or non-CI mode)" — scripts/validation/hook_contracts.py:11
  - "1 - Logic error (violations found, CI mode)" — scripts/validation/hook_contracts.py:12
  - "2 - Config error (settings.json not found or invalid)" — scripts/validation/hook_contracts.py:13
  - Actual exit paths in code:
    - line 981: `return 2` when project root directory does not exist
    - line 991: `return 2` when settings file does not exist
    - line 1011: `return 2` on read/parse exception (`OSError`, `UnicodeDecodeError`, `JSONDecodeError`, `TypeError`, `AttributeError`)
    - line 1017: `return 1` when `not report.is_valid and args.ci`
    - line 1018: `return 0` when `report.is_valid` or not in CI mode
    - line 1022: `raise SystemExit(main())`
- for validators/gates:
  - can it exit non-zero: yes, exits 1 when violations are present in `--ci` mode, and exits 2 when configuration or settings files are missing or unreadable
  - does it fail on default branch: no, succeeds with exit code 0 (`Validated 9 hook entries`)
- does the output match what the documentation claims: yes, validates registered hook contracts across settings and manifests, reporting valid contract status and entry count

## Defects — required
- `doc-drift` · scripts/validation/hook_contracts.py:6 · module docstring claims item 2 is "Documents its hook type in docstring" (scripts/validation/hook_contracts.py:6), but the implementation only checks if the registration's hook type is in ALL_HOOK_TYPES (validate_hook_type_known) and checks docstrings only for exit code semantics on blocking hooks (validate_exit_code_docs); furthermore, the docstring claims it only "Parses .claude/settings.json" (scripts/validation/hook_contracts.py:4), whereas the implementation also parses .claude/hooks/hooks.json, .claude/hooks/dispatch_groups.json, and src/copilot-cli/hooks/hooks.json.

## Observations
- Multi-surface support: handles dual harness configurations by parsing Claude Code hook manifests (`.claude/settings.json`, `.claude/hooks/hooks.json`) and Copilot CLI manifests (`src/copilot-cli/hooks/hooks.json`).
- Dispatcher expansion: prevents blind spots where a dispatcher (`invoke_dispatch_claude.py` or `_dispatch.py`) masks errors in dispatched shims, ensuring child scripts are validated for existence and contract compliance.
- Nested macro resolution: handles iterative expansion of `${CLAUDE_PLUGIN_ROOT}` and `${COPILOT_PLUGIN_ROOT}` with bounded recursion (`_MAX_PLUGIN_ROOT_PASSES = 5`) to prevent infinite expansion loops on pathological configuration values.

## Context cost
37686 bytes, 1023 lines, ~9420 tokens.
