---
unit: inv-rjm-26
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-26

## Files assigned
- [x] `.agents/architecture/ADR-068-consolidated-hook-dispatcher.md` (60198 bytes, 931 lines, sha256 439b04ce5b6ebe11)

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-068-consolidated-hook-dispatcher-md.md (12789 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-26.md (2780 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-068 is a major architectural pivot and historical record for hook dispatching across harnesses in `rjm`.
- Original thesis: issue #2295 isolated hook timeouts and startup latency under Copilot CLI 1.0.57 (3 of 197 kills, ~246ms per-process cold start on Windows). The initial decision was to consolidate multiple hooks into a single host entry per event, running shims in-process via `hook_dispatch.py`.
- Thesis inversion: issue #4706 moved timed gate shims into child processes for crash/termination isolation. Consequently, consolidation on Copilot actually increased interpreter starts on matched calls (dispatcher + 1 child per timed shim = 4 starts) relative to direct registration. Yet consolidation was retained for single host entry, the matcher-union zero-spawn optimization for non-matching calls, and standard error/output policies.
- Matcher-union collapse: when non-standard tool matchers (such as `serena_memory_scope_guard` or `serena_worktree_scope`) were added, `event_matcher_union` could not reduce them to standard Claude core tool names, collapsing the host matcher union to empty and forcing every tool call to spawn the dispatcher.
- Eventual retirement: ADR-097 later retired all live tool-use hook registrations and Copilot dispatcher generation, leaving bare `"hooks": {}` in Copilot CLI, while retaining the Claude-side dispatcher `invoke_dispatch_claude.py` for `SessionStart` groups.
- Cross-references to other units: ADR-068 interfaces with ADR-061 (deterministic matcher shim generation), ADR-071 (hook runtime contracts and probe evidence), ADR-082 (Claude grouped dispatch), ADR-084 (ROI bar for vendored hooks), ADR-085 (permission surface asymmetry and security deletions), ADR-086 (Lefthook local orchestration), and ADR-097 (hook retirement).
- Defects identified: `doc-drift` where the extensive body retains historical claims about active PreToolUse registrations and reduction percentages, relying on an opening amendment to note that all tool-use hooks are retired; and `missing-path` where component impact table references `tests/build_scripts/test_copilot_dispatcher_artifact.py` which does not exist in the repo.

## Blocked or uncertain
none

## Time and size
Source read: 60198 bytes (~15050 tokens). Output written: ~15600 bytes (~3900 tokens).
