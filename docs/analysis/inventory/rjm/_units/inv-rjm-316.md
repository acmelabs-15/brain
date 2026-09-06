---
unit: inv-rjm-316
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-316

## Files assigned
- [x] `sources/rjm/templates/agents/explainer.shared.md`
- [x] `sources/rjm/templates/agents/high-level-advisor.shared.md`

## Outputs produced
- `docs/analysis/inventory/rjm/templates-agents-explainer-shared-md.md` — 5764 bytes
- `docs/analysis/inventory/rjm/templates-agents-high-level-advisor-shared-md.md` — 8275 bytes

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Both source files in this unit are multi-harness shared agent templates (`templates/agents/*.shared.md`) that are variant counterparts to `.claude/agents/*.md` analyzed in unit `inv-rjm-66`.
- Duplication ledger entries V9 (`.claude/agents/explainer.md` ↔ `templates/agents/explainer.shared.md`, 93% shared) and V23 (`.claude/agents/high-level-advisor.md` ↔ `templates/agents/high-level-advisor.shared.md`, 86% shared) were verified.
- The corresponding divergence cards `docs/analysis/inventory/rjm/_divergence/claude-agents-explainer-md--templates-agents-explainer-shared-md.md` (1 hunk) and `docs/analysis/inventory/rjm/_divergence/claude-agents-high-level-advisor-md--templates-agents-high-level-advisor-shared-md.md` (6 hunks) already exist and were inspected; their hunk counts match the duplication ledger diffs.
- In `templates/agents/high-level-advisor.shared.md`, memory integration uses `cloudmcp-manager` MCP tools (`memory-search_nodes`, `memory-add_observations`) and Serena memories, unlike the Claude Code variant which invokes a non-existent Python script (`.claude/skills/memory/scripts/search_memory.py`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~3800 tokens (15,186 bytes across 2 files).
Approximate tokens of output written: ~3500 tokens (14,039 bytes across 2 inventory cards).
