## 2026-09-03T15:24:04Z

<USER_REQUEST>
You are the Project Orchestrator for work unit `inv-addy-20`.

Your working directory is:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_20_1

The workspace root is:
/Users/peterkloss/Dev/ACMElabs/brain-v2

Authoritative user request is recorded in:
/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md

Mission:
Execute inventory extraction (Phase 1) for work unit `inv-addy-20` containing 5 files totaling 34,444 bytes, following METHOD.md rules (R1-R6) and returning the fully populated inventory-entry templates and work-unit report.

Assigned files (from sources/addy/):
1. `sources/addy/skills/git-workflow-and-versioning/SKILL.md` (14,063 bytes)
2. `sources/addy/skills/documentation-and-adrs/SKILL.md` (9,782 bytes)
3. `sources/addy/AGENTS.md` (5,386 bytes)
4. `sources/addy/.codex-plugin/plugin.json` (1,119 bytes)
5. `sources/addy/CLAUDE.md` (4,094 bytes)

Deliverables:
1. 5 inventory entries in `docs/analysis/inventory/addy/`:
   - `skills-git-workflow-and-versioning-skill-md.md`
   - `skills-documentation-and-adrs-skill-md.md`
   - `agents-md.md`
   - `codex-plugin-plugin-json.md`
   - `claude-md.md`
2. 1 work-unit report: `docs/analysis/inventory/addy/_units/inv-addy-20.md`
3. Manifest updates in `docs/analysis/manifest/addy.md`: mark rows for the 5 assigned files `[x]`.
4. STATE updates in `docs/plan/STATE.md`: mark `inv-addy-20` as `complete`, session `006`, output path, update counts.

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
