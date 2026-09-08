---
unit: cc-rjm-356
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-356

## Files assigned
- [x] sources/rjm/scripts/validation/git_hook_policy.py
- [x] sources/rjm/scripts/validation/hook_contracts.py
- [x] docs/analysis/inventory/rjm/scripts-validation-git-hook-policy-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-hook-contracts-py.md

## Outputs produced
- docs/analysis/concepts/rjm/stage-generated.md (910 bytes)
- docs/analysis/concepts/rjm/security-suppressions-range.md (956 bytes)
- docs/analysis/concepts/rjm/security-suppressions-diff.md (897 bytes)
- docs/analysis/concepts/rjm/root-scratch-allowlist.md (890 bytes)
- docs/analysis/concepts/rjm/prohibited-dashes.md (873 bytes)
- docs/analysis/concepts/rjm/adr-104.md (1128 bytes)
- docs/analysis/concepts/rjm/blocking-hook-types.md (853 bytes)
- docs/analysis/concepts/rjm/non-blocking-hook-types.md (882 bytes)
- docs/analysis/concepts/rjm/teammateidle.md (1091 bytes)
- docs/analysis/concepts/rjm/taskcompleted.md (1053 bytes)
- docs/analysis/concepts/rjm/all-hook-types.md (885 bytes)
- docs/analysis/concepts/rjm/min-timeout.md (820 bytes)
- docs/analysis/concepts/rjm/max-timeout.md (822 bytes)
- docs/analysis/concepts/rjm/script-path-pattern.md (891 bytes)
- docs/analysis/concepts/rjm/claude-root.md (845 bytes)
- docs/analysis/concepts/rjm/copilot-root.md (848 bytes)
- docs/analysis/concepts/rjm/plugin-root-pattern.md (887 bytes)
- docs/analysis/concepts/rjm/max-plugin-root-passes.md (888 bytes)
- docs/analysis/concepts/rjm/pwsh-pattern.md (911 bytes)
- docs/analysis/concepts/rjm/hookentry.md (830 bytes)
- docs/analysis/concepts/rjm/contractreport.md (849 bytes)
- docs/analysis/concepts/rjm/resolve-script-path.md (925 bytes)
- docs/analysis/concepts/rjm/resolve-plugin-root.md (908 bytes)
- docs/analysis/concepts/rjm/extract-script-path.md (918 bytes)
- docs/analysis/concepts/rjm/dispatcher-script-name.md (878 bytes)
- docs/analysis/concepts/rjm/dispatch-groups-path.md (919 bytes)
- docs/analysis/concepts/rjm/plugin-hooks-path.md (893 bytes)
- docs/analysis/concepts/rjm/copilot-hooks-path.md (898 bytes)
- docs/analysis/concepts/rjm/copilot-dispatcher-name.md (875 bytes)
- docs/analysis/concepts/rjm/copilot-manifest-name.md (878 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-356.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/stage-generated.md docs/analysis/concepts/rjm/security-suppressions-range.md docs/analysis/concepts/rjm/security-suppressions-diff.md docs/analysis/concepts/rjm/root-scratch-allowlist.md docs/analysis/concepts/rjm/prohibited-dashes.md docs/analysis/concepts/rjm/adr-104.md docs/analysis/concepts/rjm/blocking-hook-types.md docs/analysis/concepts/rjm/non-blocking-hook-types.md docs/analysis/concepts/rjm/teammateidle.md docs/analysis/concepts/rjm/taskcompleted.md docs/analysis/concepts/rjm/all-hook-types.md docs/analysis/concepts/rjm/min-timeout.md docs/analysis/concepts/rjm/max-timeout.md docs/analysis/concepts/rjm/script-path-pattern.md docs/analysis/concepts/rjm/claude-root.md docs/analysis/concepts/rjm/copilot-root.md docs/analysis/concepts/rjm/plugin-root-pattern.md docs/analysis/concepts/rjm/max-plugin-root-passes.md docs/analysis/concepts/rjm/pwsh-pattern.md docs/analysis/concepts/rjm/hookentry.md docs/analysis/concepts/rjm/contractreport.md docs/analysis/concepts/rjm/resolve-script-path.md docs/analysis/concepts/rjm/resolve-plugin-root.md docs/analysis/concepts/rjm/extract-script-path.md docs/analysis/concepts/rjm/dispatcher-script-name.md docs/analysis/concepts/rjm/dispatch-groups-path.md docs/analysis/concepts/rjm/plugin-hooks-path.md docs/analysis/concepts/rjm/copilot-hooks-path.md docs/analysis/concepts/rjm/copilot-dispatcher-name.md docs/analysis/concepts/rjm/copilot-manifest-name.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-356 completes 30 concept cards spanning Git hook policy enforcement mechanisms and Claude Code / Copilot hook interface validation contracts:
  1. Centralized Git policy enforcement elements in `git_hook_policy.py`: subcommands `stage-generated`, `security-suppressions-range`, and `security-suppressions-diff`; constants `ROOT_SCRATCH_ALLOWLIST` and `PROHIBITED_DASHES`; and architectural timeout guideline reference `ADR-104`.
  2. Hook contract validation infrastructure in `hook_contracts.py`: classification constants `BLOCKING_HOOK_TYPES`, `NON_BLOCKING_HOOK_TYPES`, and `ALL_HOOK_TYPES`; hook event types `TeammateIdle` and `TaskCompleted`; execution timeout bounds `MIN_TIMEOUT` and `MAX_TIMEOUT`; path/regex patterns `_SCRIPT_PATH_PATTERN`, `CLAUDE_ROOT`, `COPILOT_ROOT`, `_PLUGIN_ROOT_PATTERN`, `_MAX_PLUGIN_ROOT_PASSES`, and `_PWSH_PATTERN`; data model classes `HookEntry` and `ContractReport`; resolution functions `_resolve_script_path`, `_resolve_plugin_root`, and `extract_script_path`; and dispatcher/manifest configuration path constants `DISPATCHER_SCRIPT_NAME`, `DISPATCH_GROUPS_PATH`, `PLUGIN_HOOKS_PATH`, `COPILOT_HOOKS_PATH`, `COPILOT_DISPATCHER_NAME`, and `COPILOT_MANIFEST_NAME`.
- Concepts representing functions, regex patterns, constants, file names, or CLI subcommands are classified as `kind: name-only` per D-023.
- Core reference concept `ADR-104` is classified as `kind: reference`.
- Lifecycle hook event types `TeammateIdle` and `TaskCompleted` are classified as `kind: gate` in `package_phase: cross-phase`.
- All 30 occurrences recorded in `facts/cc-rjm-356.txt` are mapped in the Where used tables.
- Defect statuses from citing inventory cards were propagated into `Implementation status` (`clean` for `git_hook_policy.py` concepts; `defects: doc-drift` for `hook_contracts.py` concepts).
- All 30 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~95,000 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
