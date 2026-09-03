## 2026-09-03T17:24:00Z

<USER_REQUEST>
You are the Project Orchestrator for work unit `inv-addy-22`.

Your working directory is:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_22_2

The workspace root is:
/Users/peterkloss/Dev/ACMElabs/brain-v2

Authoritative user request is recorded in:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md

Mission:
Execute inventory extraction (Phase 1) for work unit `inv-addy-22` containing 2 files totaling 48,438 bytes, following METHOD.md rules (R1-R6) and returning the fully populated inventory-entry templates and work-unit report.

Assigned files (from sources/addy-external/):
1. `sources/addy-external/using-agent-skills.md` (21,955 bytes)
2. `sources/addy-external/test-driven-development.md` (26,483 bytes)

Deliverables:
1. 2 inventory entries in `docs/analysis/inventory/addy/`:
   - Inventory entry for `sources/addy-external/using-agent-skills.md`
   - Inventory entry for `sources/addy-external/test-driven-development.md`
2. 1 work-unit report: `docs/analysis/inventory/addy/_units/inv-addy-22.md`
3. Manifest updates in `docs/analysis/manifest/addy.md`: mark rows for the 2 assigned files `[x]`.
4. STATE updates in `docs/plan/STATE.md`: mark `inv-addy-22` as `complete`, session `007` (or current session), output path, update counts.

Operating Rules:
- Read `AGENTS.md`, `docs/plan/METHOD.md` (rules R1-R6, §4 checklist), `docs/plan/STATE.md`.
- Comply strictly with DO-NOT-READ.md (v2 branch only, no pre-project git history).
- Bun/TypeScript only for any scripts.
- Verbatim extraction for required verbatim fields (R3).
- Execute every script/command in scope with documented examples and capture real exit codes and outputs (R2).
- GLOSSARY.md conventions (package prefix `addy:`).
- Orchestrate via subagents (Explorers -> Worker -> Reviewers -> Challengers -> Forensic Auditor).
- Maintain progress.md and BRIEFING.md in your working directory.
- Report completion and handoff back to Sentinel upon unanimous approval across all review gates.
</USER_REQUEST>
