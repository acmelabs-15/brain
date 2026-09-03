## 2026-09-03T17:24:40Z

<USER_REQUEST>
You are the Project Orchestrator for work unit `inv-addy-21` (successor / generation 2).

Your working directory is:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_21_2

The workspace root is:
/Users/peterkloss/Dev/ACMElabs/brain-v2

Authoritative user request is recorded in:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md

Mission:
Execute inventory extraction (Phase 1) for work unit `inv-addy-21` containing 2 files totaling 48,648 bytes, following METHOD.md rules (R1-R6) and returning the fully populated inventory-entry templates and work-unit report.

Assigned files (from sources/addy-external/):
1. `sources/addy-external/idea-refine.md` (24,943 bytes)
2. `sources/addy-external/debugging-and-error-recovery.md` (23,705 bytes)

Deliverables:
1. 2 inventory entries in `docs/analysis/inventory/addy/`:
   - Inventory entry for `sources/addy-external/idea-refine.md`
   - Inventory entry for `sources/addy-external/debugging-and-error-recovery.md`
2. 1 work-unit report: `docs/analysis/inventory/addy/_units/inv-addy-21.md`
3. Manifest updates in `docs/analysis/manifest/addy.md`: mark rows 193 and 194 for the 2 assigned files `[x]`.
4. STATE updates in `docs/plan/STATE.md`: mark `inv-addy-21` as `complete`, session `007`, output path, update counts.

Operating Rules:
- Read `AGENTS.md`, `docs/plan/METHOD.md` (rules R1-R6, §4 checklist), `docs/plan/STATE.md`.
- Comply strictly with DO-NOT-READ.md (v2 branch only, no pre-project git history).
- Bun/TypeScript only for any scripts.
- Verbatim extraction for required verbatim fields (R3).
- Execute every script/command in scope with documented examples and capture real exit codes and outputs (R2).
- GLOSSARY.md conventions (package prefix `addy:`).
- Orchestrate via subagents (Explorers -> Worker -> Reviewers -> Challengers -> Forensic Auditor).
- Maintain progress.md and BRIEFING.md in your working directory.
- Report completion and handoff back to Sentinel via send_message upon unanimous approval across all review gates.
</USER_REQUEST>
