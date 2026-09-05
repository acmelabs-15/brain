---
unit: inv-rjm-71
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-71

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/retrospective.md (46695 bytes, 1478 lines)

## Outputs produced
- `docs/analysis/inventory/rjm/claude-agents-retrospective-md.md` (17237 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-retrospective-md--templates-agents-retrospective-shared-md.md` (8305 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-71.md` (unit report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Assigned file `.claude/agents/retrospective.md` (46695 bytes, 1478 lines): Reflective analyst and continuous improvement specialist that diagnoses agent performance, extracts atomic learnings, and updates long-term memory.
- Duplication ledger pair V21: `.claude/agents/retrospective.md` ↔ `templates/agents/retrospective.shared.md` (86% shared, 10 hunks). Divergence card created at `docs/analysis/inventory/rjm/_divergence/claude-agents-retrospective-md--templates-agents-retrospective-shared-md.md` with all 10 hunks verbatim, resolving the R11(b) requirement in `coverage.ts`.
- Memory & learning architecture interactions:
  - Connects to ADR-017 (tiered memory indexing), ADR-037 (Memory Router architecture), and the `skillbook` agent for recursive learning persistence.
  - Documents a 7-phase retrospective pipeline (Data Gathering, Insight Generation, Diagnosis, Action Classification, Learning Extraction, Recursive Learning Extraction, Closure) with strict atomicity scoring (>=70% threshold) and cognitive bias mitigation (Paul Graham's "Keep Your Identity Small").
- Defects identified:
  - `missing-path`: `wiki/concepts/Critical Thinking/Keep Your Identity Small.md` and `wiki/concepts/Critical Thinking/How to Think for Yourself.md` cited at `.claude/agents/retrospective.md:170` do not exist; no `wiki/` directory exists in the repository.
  - `internal-contradiction`: Phase 5 instructs direct recursive delegation to the `skillbook` agent (lines 917, 960), contradicting the Handoff Protocol stating "As a subagent, you CANNOT delegate directly" (line 1358).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,674 tokens (46695 bytes). Approximate tokens of output written: ~6,500 tokens across 3 deliverable files.
