---
unit: inv-rjm-57
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-57

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/projects/v0.3.1/PowerShell-migration.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/projects/v0.4.0/PLAN.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-projects-v0-3-1-powershell-migration-md.md` (13189 bytes)
- `docs/analysis/inventory/rjm/agents-projects-v0-4-0-plan-md.md` (13898 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-57 covers the core milestone project plans under `.agents/projects/`:
  - `v0.3.1/PowerShell-migration.md` (15,567 bytes, 419 lines): Governed by ADR-042 (superseding ADR-005), establishing a 6-phase, 12-month migration plan to convert ~142 PowerShell scripts and ~110 Pester test suites to Python 3.12 and pytest. Enforces zero deprecation period and pytest parity before deletion.
  - `v0.4.0/PLAN.md` (29,810 bytes, 765 lines): Governed by ADR-045, detailing the extraction of the multi-agent framework into `rjmurillo/awesome-ai` distributed as a 4-plugin Claude Code marketplace (`core-agents`, `framework-skills`, `session-protocol`, `quality-gates`).
- Sequential gating relationship:
  - `v0.4.0/PLAN.md` establishes a hard blocking prerequisite (lines 10-11, 30-33, 220-226) that no extraction work begins until v0.3.1 Phase 5 retirement (retiring Pester and PSScriptAnalyzer) completes.
  - Physical inspection of the pinned repository tree confirms that the v0.3.1 migration has already completed in full: all PowerShell scripts have been converted to Python or deleted (0 active .ps1 files remain, with only `.venv/bin/activate.ps1` in the virtualenv), whereas `v0.4.0` remains at "Proposed" status with no `plugins/` directory created.
- Shared missing-path defect:
  - Both documents cite `.agents/SESSION-PROTOCOL.md` (e.g. `PLAN.md` lines 465 and 618; `PowerShell-migration.md` line 193). However, `.agents/SESSION-PROTOCOL.md` was deleted in PR #5179 (as recorded in QA report `2026-08-20-session-99922-adr-100-101-qa.md:59` and ADR-101), making it a missing-path defect in both plans.
- Neither assigned file appears in `docs/analysis/manifest/rjm-duplicates.md` (no duplicate ledger rows; no divergence cards required).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,350 tokens (45,377 bytes across 2 files, 1184 lines); approximate tokens of output written: ~7,650 tokens (27,087 bytes across 2 inventory cards + ~3,500 bytes for unit report).
