---
unit: cc-rjm-308
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-308

## Files assigned
- [x] sources/rjm/scripts/openclaw_bridge.py
- [x] sources/rjm/scripts/pr_branch_mapping.py
- [x] sources/rjm/scripts/update_reviewer_signal_stats.py
- [x] sources/rjm/scripts/validation/agent_registry.py
- [x] docs/analysis/inventory/rjm/scripts-openclaw-bridge-py.md
- [x] docs/analysis/inventory/rjm/scripts-pr-branch-mapping-py.md
- [x] docs/analysis/inventory/rjm/scripts-update-reviewer-signal-stats-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-agent-registry-py.md

## Outputs produced
- docs/analysis/concepts/rjm/default-role.md (893 bytes)
- docs/analysis/concepts/rjm/model-map.md (897 bytes)
- docs/analysis/concepts/rjm/agentdefinition.md (1046 bytes)
- docs/analysis/concepts/rjm/exportresult.md (904 bytes)
- docs/analysis/concepts/rjm/parse-agent-file.md (998 bytes)
- docs/analysis/concepts/rjm/read-declared-role.md (971 bytes)
- docs/analysis/concepts/rjm/resolve-role.md (982 bytes)
- docs/analysis/concepts/rjm/load-agents.md (957 bytes)
- docs/analysis/concepts/rjm/generate-agents-md.md (946 bytes)
- docs/analysis/concepts/rjm/generate-skill-md.md (925 bytes)
- docs/analysis/concepts/rjm/export-agents.md (976 bytes)
- docs/analysis/concepts/rjm/write-workspace.md (991 bytes)
- docs/analysis/concepts/rjm/export-json.md (880 bytes)
- docs/analysis/concepts/rjm/memory-filename.md (905 bytes)
- docs/analysis/concepts/rjm/memory-relative-path.md (958 bytes)
- docs/analysis/concepts/rjm/prbranchentry.md (885 bytes)
- docs/analysis/concepts/rjm/currentsession.md (880 bytes)
- docs/analysis/concepts/rjm/prbranchmapping.md (914 bytes)
- docs/analysis/concepts/rjm/load-mapping.md (908 bytes)
- docs/analysis/concepts/rjm/try-lock-helpers.md (1066 bytes)
- docs/analysis/concepts/rjm/mapping-lock.md (942 bytes)
- docs/analysis/concepts/rjm/save-mapping.md (932 bytes)
- docs/analysis/concepts/rjm/add-mapping.md (863 bytes)
- docs/analysis/concepts/rjm/get-branch-for-pr.md (930 bytes)
- docs/analysis/concepts/rjm/get-pr-for-branch.md (936 bytes)
- docs/analysis/concepts/rjm/validate-branch-pr-consistency.md (974 bytes)
- docs/analysis/concepts/rjm/remove-merged-entries.md (915 bytes)
- docs/analysis/concepts/rjm/find-entry.md (842 bytes)
- docs/analysis/concepts/rjm/extract-json-block.md (929 bytes)
- docs/analysis/concepts/rjm/build-memory-content.md (943 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-308.md (5988 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/default-role.md docs/analysis/concepts/rjm/model-map.md docs/analysis/concepts/rjm/agentdefinition.md docs/analysis/concepts/rjm/exportresult.md docs/analysis/concepts/rjm/parse-agent-file.md docs/analysis/concepts/rjm/read-declared-role.md docs/analysis/concepts/rjm/resolve-role.md docs/analysis/concepts/rjm/load-agents.md docs/analysis/concepts/rjm/generate-agents-md.md docs/analysis/concepts/rjm/generate-skill-md.md docs/analysis/concepts/rjm/export-agents.md docs/analysis/concepts/rjm/write-workspace.md docs/analysis/concepts/rjm/export-json.md docs/analysis/concepts/rjm/memory-filename.md docs/analysis/concepts/rjm/memory-relative-path.md docs/analysis/concepts/rjm/prbranchentry.md docs/analysis/concepts/rjm/currentsession.md docs/analysis/concepts/rjm/prbranchmapping.md docs/analysis/concepts/rjm/load-mapping.md docs/analysis/concepts/rjm/try-lock-helpers.md docs/analysis/concepts/rjm/mapping-lock.md docs/analysis/concepts/rjm/save-mapping.md docs/analysis/concepts/rjm/add-mapping.md docs/analysis/concepts/rjm/get-branch-for-pr.md docs/analysis/concepts/rjm/get-pr-for-branch.md docs/analysis/concepts/rjm/validate-branch-pr-consistency.md docs/analysis/concepts/rjm/remove-merged-entries.md docs/analysis/concepts/rjm/find-entry.md docs/analysis/concepts/rjm/extract-json-block.md docs/analysis/concepts/rjm/build-memory-content.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-308 covers 30 concept cards representing internal Python identifiers, functions, classes, constants, and helper utilities across `scripts/openclaw_bridge.py`, `scripts/pr_branch_mapping.py`, `scripts/update_reviewer_signal_stats.py`, and `scripts/validation/agent_registry.py`.
- All 30 concepts are categorized as `kind: name-only` per D-023 because they represent code symbols and implementation constructs rather than lifecycle phases, gates, techniques, artifacts, or roles.
- `AgentDefinition` has multiple definitions in the codebase (`scripts/openclaw_bridge.py` and `scripts/validation/agent_registry.py`); both occurrences are documented in the card's Where used table.
- `_try_lock_helpers` is duplicated across `scripts/pr_branch_mapping.py` and `scripts/update_reviewer_signal_stats.py`; both occurrences are captured in its Where used table.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`defects: doc-drift, orphan` for `openclaw_bridge.py` concepts, and `defects: orphan` for `pr_branch_mapping.py`, `update_reviewer_signal_stats.py`, and `agent_registry.py` concepts).
- All 32 occurrences from `facts/cc-rjm-308.txt` are accounted for in the Where used tables.
- All 30 cards pass byte-exact verification via `quote-check.ts` with 0 failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~8,500 tokens across 30 authored concept cards and 1 unit report.
