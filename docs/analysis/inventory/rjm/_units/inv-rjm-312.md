---
unit: inv-rjm-312
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-312

## Files assigned
- [x] `src/claude/analyst.md` (14835 bytes) — read in full
- [x] `src/claude/orchestrator.md` (28813 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/src-claude-analyst-md.md` (7269 bytes)
- `docs/analysis/inventory/rjm/src-claude-orchestrator-md.md` (11499 bytes)
- `docs/analysis/inventory/rjm/_divergence/src-claude-analyst-md--templates-agents-analyst-shared-md.md` (4530 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-312.md`

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `src/claude/orchestrator.md` (28813 bytes) and `src/claude/analyst.md` (14835 bytes) are exact byte duplicates of `.claude/agents/orchestrator.md` (inv-rjm-69) and `.claude/agents/analyst.md` (inv-rjm-64) respectively, satisfying EXACT duplication ledger rows 1 and 3.
- `src/claude/orchestrator.md` forms VARIANT pair V5 (94% shared lines, 6 hunks) with `templates/agents/orchestrator.shared.md` (inv-rjm-319), whose divergence card was already present at `docs/analysis/inventory/rjm/_divergence/src-claude-orchestrator-md--templates-agents-orchestrator-shared-md.md`.
- `src/claude/analyst.md` forms VARIANT pair V28 (72% shared lines, 7 hunks) with `templates/agents/analyst.shared.md` (inv-rjm-313), authored here at `docs/analysis/inventory/rjm/_divergence/src-claude-analyst-md--templates-agents-analyst-shared-md.md`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,000 tokens (43,648 bytes source).
Approximate tokens of output written: ~6,000 tokens.
