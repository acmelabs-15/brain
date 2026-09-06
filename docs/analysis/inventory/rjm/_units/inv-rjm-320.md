---
unit: inv-rjm-320
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-320

## Files assigned
- [x] `templates/agents/qa.shared.md`
- [x] `templates/agents/quality-auditor.shared.md`

## Outputs produced
- `docs/analysis/inventory/rjm/templates-agents-qa-shared-md.md` (12983 bytes)
- `docs/analysis/inventory/rjm/templates-agents-quality-auditor-shared-md.md` (7156 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-320.md` (2150 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Both assigned files (`templates/agents/qa.shared.md` and `templates/agents/quality-auditor.shared.md`) are cross-platform source templates corresponding to Claude Code agents inventoried in unit `inv-rjm-70` (`.claude/agents/qa.md` and `.claude/agents/quality-auditor.md`).
- Both pairs have existing divergence cards in `docs/analysis/inventory/rjm/_divergence/`:
  - `claude-agents-qa-md--templates-agents-qa-shared-md.md` (ledger ID V19, 87% shared, 8 hunks)
  - `claude-agents-quality-auditor-md--templates-agents-quality-auditor-shared-md.md` (ledger ID V10, 93% shared, 1 hunk)
- The shared templates use generic model tiers (`model_tier: opus`, `model_tier: sonnet`) and multi-platform tool mappings (`tools_vscode`, `tools_copilot`), whereas their Claude Code counterparts declare runtime-specific `model: opus` / `model: sonnet` and Claude Code tool directives.
- In `templates/agents/qa.shared.md`, Pre-PR Quality Gate Step 5 (PR description validation via `validate_pr_description.py`) is omitted relative to `.claude/agents/qa.md`, reducing the active gates from 5 to 4.
- In `templates/agents/quality-auditor.shared.md`, tool paths using `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}` fall back to non-existent scripts under `.claude/` because `grade_domains.py` and `search_memory.py` exist only under `src/copilot-cli/skills/`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,000 tokens (31,844 bytes across 2 files).
Approximate tokens of output written: ~5,500 tokens (~22 KB across 2 inventory cards and 1 unit report).
