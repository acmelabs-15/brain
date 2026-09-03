## 2026-09-03T17:24:30Z

<USER_REQUEST>
You are the Project Orchestrator for work unit `inv-addy-25`.

Your working directory is:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_25_1

The workspace root is:
/Users/peterkloss/Dev/ACMElabs/brain-v2

Authoritative user request is recorded in:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md

Mission:
Execute inventory extraction (Phase 1) for work unit `inv-addy-25` containing 1 file totaling 26,179 bytes, following METHOD.md rules (R1-R6) and returning the fully populated inventory-entry template and work-unit report.

Assigned file:
1. `sources/addy-external/ci-cd-and-automation.md` (26,179 bytes)
(Referenced in `docs/analysis/manifest/addy.md` line 200 as `../addy-external/ci-cd-and-automation.md`, type: external-doc)

Deliverables:
1. 1 inventory entry in `docs/analysis/inventory/addy/`:
   - Inventory entry for `sources/addy-external/ci-cd-and-automation.md` (naming: `sources-addy-external-ci-cd-and-automation-md.md` or established project slug convention matching other inventory entries)
2. 1 work-unit report: `docs/analysis/inventory/addy/_units/inv-addy-25.md`
3. Manifest updates in `docs/analysis/manifest/addy.md`: mark row for `../addy-external/ci-cd-and-automation.md` as `[x]`.
4. STATE updates in `docs/plan/STATE.md`: mark `inv-addy-25` as `complete`, session `006`, output path `docs/analysis/inventory/addy/_units/inv-addy-25.md`, update counts.

Operating Rules:
- Read `AGENTS.md`, `docs/plan/METHOD.md` (rules R1-R6, §4 checklist, §1.1 external docs rules), `docs/plan/STATE.md`.
- Comply strictly with DO-NOT-READ.md (v2 branch only, no pre-project git history).
- Bun/TypeScript only for any scripts.
- Verbatim extraction for required verbatim fields (R3).
- Execute every script/command in scope with documented examples and capture real exit codes and outputs (R2).
- GLOSSARY.md conventions (package prefix `addy:`).
- Orchestrate via subagents (Explorers -> Worker -> Reviewers -> Challengers -> Forensic Auditor). IMPORTANT: Use Model: "flash" for all subagent invocations to avoid individual pro quota limits.
- Maintain progress.md and BRIEFING.md in your working directory.
- Report completion and handoff back to Sentinel upon unanimous approval across all review gates.
</USER_REQUEST>
