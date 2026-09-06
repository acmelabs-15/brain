---
unit: inv-rjm-323
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-323

## Files assigned
- [x] `sources/rjm/templates/agents/silent-failure-hunter.shared.md` — read in full
- [x] `sources/rjm/templates/agents/skillbook.shared.md` — read in full
- [x] `sources/rjm/templates/agents/task-decomposer.shared.md` — read in full
- [x] `sources/rjm/templates/agents/type-design-analyzer.shared.md` — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/templates-agents-silent-failure-hunter-shared-md.md` (6383 bytes)
- `docs/analysis/inventory/rjm/templates-agents-skillbook-shared-md.md` (5732 bytes)
- `docs/analysis/inventory/rjm/templates-agents-task-decomposer-shared-md.md` (8956 bytes)
- `docs/analysis/inventory/rjm/templates-agents-type-design-analyzer-shared-md.md` (5436 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-323.md` (this report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 4 files assigned to this unit are cross-platform agent prompt templates (`templates/agents/*.shared.md`) that participate in duplication ledger VARIANT pairs:
  - VARIANT V2 (95% shared): `.claude/agents/skillbook.md` ↔ `templates/agents/skillbook.shared.md`
  - VARIANT V11 (92% shared): `.claude/agents/silent-failure-hunter.md` ↔ `templates/agents/silent-failure-hunter.shared.md`
  - VARIANT V14 (91% shared): `.claude/agents/type-design-analyzer.md` ↔ `templates/agents/type-design-analyzer.shared.md`
  - VARIANT V22 (86% shared): `.claude/agents/task-decomposer.md` ↔ `templates/agents/task-decomposer.shared.md`
- Confirmed that all 4 required divergence cards already exist in `docs/analysis/inventory/rjm/_divergence/` from unit `inv-rjm-73`:
  - `docs/analysis/inventory/rjm/_divergence/claude-agents-skillbook-md--templates-agents-skillbook-shared-md.md`
  - `docs/analysis/inventory/rjm/_divergence/claude-agents-silent-failure-hunter-md--templates-agents-silent-failure-hunter-shared-md.md`
  - `docs/analysis/inventory/rjm/_divergence/claude-agents-type-design-analyzer-md--templates-agents-type-design-analyzer-shared-md.md`
  - `docs/analysis/inventory/rjm/_divergence/claude-agents-task-decomposer-md--templates-agents-task-decomposer-shared-md.md`
  No divergence cards needed to be rewritten.
- In `templates/agents/skillbook.shared.md`, line 121 references `scripts/Validate-MemoryIndex.ps1`, which is missing on disk (`ls` confirms non-existence), flagged as a `missing-path` defect.
- In `templates/agents/task-decomposer.shared.md`, Memory Protocol references Memory Router script `.claude/skills/memory/scripts/search_memory.py` (which exists on disk, but per METHOD.md §1.2 memory implementation is an excluded subsystem).

## Blocked or uncertain
none

## Time and size
- Source read: 35,980 bytes (~8,995 tokens) across 4 files.
- Output written: 26,507 bytes (~6,625 tokens) across 4 inventory cards and 1 unit report.
