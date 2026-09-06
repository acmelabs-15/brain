---
unit: inv-rjm-70
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-70

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/qa.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/quality-auditor.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-agents-qa-md.md` (12689 bytes)
- `docs/analysis/inventory/rjm/claude-agents-quality-auditor-md.md` (7117 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-70.md`

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Addressed Phase 1V verification finding: in `docs/analysis/inventory/rjm/claude-agents-qa-md.md`, added `agent orchestrator` to `## Invokes` (citing lines 804 and 810).
- `.claude/agents/qa.md` forms VARIANT pair V19 with `templates/agents/qa.shared.md` (87% shared, 8 hunks). Divergence card is present at `docs/analysis/inventory/rjm/_divergence/claude-agents-qa-md--templates-agents-qa-shared-md.md`.
- `.claude/agents/quality-auditor.md` forms VARIANT pair V10 with `templates/agents/quality-auditor.shared.md` (93% shared, 1 hunk). Divergence card is present at `docs/analysis/inventory/rjm/_divergence/claude-agents-quality-auditor-md--templates-agents-quality-auditor-shared-md.md`.
- Both agents reference Memory Router (ADR-037) script `search_memory.py` and Serena MCP tools for persistence. QA agent additionally references `.agents/governance/TESTING-RIGOR.md`, `AGENTS.md`, and `validate_pr_description.py`.
- Missing paths verified via filesystem check and logged under defects: `Qwiq.sln` (.claude/agents/qa.md:735), `coverage.runsettings` (.claude/agents/qa.md:738), and `.agents/notes/` (.claude/agents/qa.md:777).

## Blocked or uncertain
none

## Time and size
- Source read: 34,836 bytes (972 lines, ~8,500 tokens) across 2 assigned files.
- Deliverables written: 19,806 bytes (~4,800 tokens) across 2 inventory cards plus this unit report.
