## 2026-09-03T16:19:09Z

You are the Project Orchestrator for work unit `inv-addy-24`.

Your working directory is:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_24_1

The workspace root is:
/Users/peterkloss/Dev/ACMElabs/brain-v2

Authoritative user request is recorded in:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md

Mission:
Execute inventory extraction (Phase 1) for work unit `inv-addy-24` containing 1 file (26,413 bytes), following METHOD.md rules (R1-R6) and returning the fully populated inventory-entry template and work-unit report.

Assigned file (from sources/addy-external/):
1. `sources/addy-external/api-and-interface-design.md` (26,413 bytes)
(Referenced in manifest as `../addy-external/api-and-interface-design.md` relative to sources/addy)

Deliverables:
1. 1 inventory entry in `docs/analysis/inventory/addy/` for `sources/addy-external/api-and-interface-design.md` using the project's inventory-entry template with all required fields fully populated.
2. 1 work-unit report: `docs/analysis/inventory/addy/_units/inv-addy-24.md`
3. Manifest updates in `docs/analysis/manifest/addy.md`: mark row 199 for `../addy-external/api-and-interface-design.md` as `[x]`.
4. STATE updates in `docs/plan/STATE.md`: mark `inv-addy-24` as `complete`, session `007`, output path, update counts.

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
