---
unit: inv-rjm-313
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-313

## Files assigned
- [x] `templates/AGENTS.md` (12193 bytes, 320 lines) — read in full
- [x] `templates/agents/analyst.shared.md` (13633 bytes, 295 lines) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/templates-agents-md.md` (8849 bytes)
- `docs/analysis/inventory/rjm/templates-agents-analyst-shared-md.md` (8550 bytes)
- `docs/analysis/inventory/rjm/_divergence/src-claude-analyst-md--templates-agents-analyst-shared-md.md` (4530 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-313.md` (work unit report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `templates/AGENTS.md` governs the two-source agent template architecture (ADR-036), establishing `templates/agents/*.shared.md` as the source of truth for generating VS Code and Copilot CLI agent definitions via `build/generate_agents.py`, while segregating them from hand-maintained Claude Code agents (`src/claude/*.md`).
- Duplication ledger pair V27 (`.claude/agents/analyst.md` ↔ `templates/agents/analyst.shared.md`) was previously documented in `_divergence/claude-agents-analyst-md--templates-agents-analyst-shared-md.md` under unit `inv-rjm-64`. Duplication ledger pair V28 (`src/claude/analyst.md` ↔ `templates/agents/analyst.shared.md`) shares identical hunks to V27 and was documented in `_divergence/src-claude-analyst-md--templates-agents-analyst-shared-md.md` to ensure complete coverage for the duplication ledger.
- `templates/agents/analyst.shared.md` cites `.serena/memories/cynefin-framework.md` as a fallback file at line 233, but the file does not exist in `sources/rjm/.serena/memories/`, matching the same defect identified in `.claude/agents/analyst.md`.

## Blocked or uncertain
none

## Time and size
- Approximate source read: ~6,450 tokens (25,826 bytes across 2 assigned files)
- Approximate output written: ~5,500 tokens (21,929 bytes across 3 cards plus unit report)
