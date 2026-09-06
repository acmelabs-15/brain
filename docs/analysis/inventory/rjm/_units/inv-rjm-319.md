---
unit: inv-rjm-319
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-319

## Files assigned
- [x] sources/rjm/templates/agents/orchestrator.shared.md

## Outputs produced
- docs/analysis/inventory/rjm/templates-agents-orchestrator-shared-md.md (15341 bytes)
- docs/analysis/inventory/rjm/_divergence/src-claude-orchestrator-md--templates-agents-orchestrator-shared-md.md (5153 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-319.md (1600 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `templates/agents/orchestrator.shared.md` is paired in duplication ledger `rjm-duplicates.md` with `.claude/agents/orchestrator.md` (VARIANT V4) and `src/claude/orchestrator.md` (VARIANT V5). V4 divergence card was previously generated under `inv-rjm-69`; V5 divergence card was generated in this unit to fulfill R11(b) coverage for the `src/claude/orchestrator.md` ↔ `templates/agents/orchestrator.shared.md` pair.
- The shared template explicitly resolves `/spec` as `(spec-generator skill)` at line 141, which informs the skill resolution mapping between slash commands and underlying skills in Phase 3 concordance.
- The shared template omits the 15-delegation budget check from its pre-close checklist (line 230) compared to `.claude/agents/orchestrator.md:223`, although the 15-delegation limit is still documented in the orchestration budget section at line 329.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7,200 tokens (28,751 bytes).
Approximate tokens of output written: ~5,500 tokens (22,094 bytes across card, divergence card, and report).
