# Dispatch — Explorer 1 (inv-addy-17)

## Identity
- Role: teamwork_preview_explorer
- Working Directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_1
- Parent Orchestrator: orchestrator_inv_addy_17_1 (ID: 9d06e1e6-15c9-4e83-9868-3d9dd89d69a0)

## Mandatory Rules & Guidelines
- Read `ORIGINAL_REQUEST.md`: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`
- Read `SCOPE.md`: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_17_1/SCOPE.md`
- Follow `docs/plan/METHOD.md` rules R1-R6 and §4 checklist strictly.
- Read every line of assigned file from start to end (use view_file).

## Assigned File
- Target: `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/security-and-hardening/SKILL.md` (24,192 bytes)

## Task
1. Read the entire file in full.
2. Produce a complete draft of the inventory entry per `docs/plan/templates/inventory-entry.md`:
   - Purpose (verbatim quote, path:line)
   - Design intent (one substantive paragraph)
   - Lifecycle phase (`addy:<Phase>`, verified from CLAUDE.md, AGENTS.md, README.md)
   - Inputs and Outputs (verbatim paths where mentioned)
   - Invokes (every skill, reference, script, command loaded or linked, with path:line)
   - Invoked by (grep or inspect where this skill is mentioned across `sources/addy/`)
   - Concepts named (exhaustive list, verbatim, path:line, `defined here` or `used here`)
   - Structure (verbatim section headings in order)
   - Scripts (any scripts referenced, embedded, or shipped)
   - Defects (missing paths, doc drift against external doc / commands / README, internal contradictions)
   - Observations & Context cost
3. Verify all referenced paths exist using `view_file` or directory tools.
4. Write your full detailed findings and draft inventory entry to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_1/handoff.md`.
5. Send a completion message back to parent orchestrator via `send_message`.

## 2026-09-03T15:25:46Z
<USER_REQUEST>
You are Explorer 1 for work unit inv-addy-17.
Your working directory is `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_1/`.
Your parent orchestrator conversation ID is `9d06e1e6-15c9-4e83-9868-3d9dd89d69a0`.

MANDATORY FIRST STEPS:
1. Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md` completely.
2. Read your dispatch instructions in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_1/DISPATCH.md`.
3. Read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_17_1/SCOPE.md`.
4. Read `docs/plan/METHOD.md` §3 (Rules R1-R6) and §4 (Comprehensive Checklist).
5. Read template `docs/plan/templates/inventory-entry.md` and exemplar `docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md`.

YOUR TARGET FILE:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/security-and-hardening/SKILL.md` (24,192 bytes)

TASK:
1. Read the assigned file from line 1 to the end in full (use view_file).
2. Deeply analyze all fields required by `docs/plan/templates/inventory-entry.md`:
   - Purpose (verbatim quote, path:line)
   - Design intent (one substantive paragraph)
   - Lifecycle phase (`addy:<Phase>`, verify against sources/addy/CLAUDE.md, AGENTS.md, README.md)
   - Inputs and Outputs (verbatim file/artifact paths)
   - Invokes (every skill, reference, script, command loaded or linked with path:line)
   - Invoked by (find all occurrences across sources/addy/)
   - Concepts named (exhaustive list, verbatim, path:line, defined here vs used here)
   - Structure (verbatim section headings in order)
   - Scripts (any scripts referenced or shipped, or note none)
   - Defects (missing-path, doc-drift, internal contradictions, etc.)
   - Observations & Context cost
3. Verify existence of all referenced files (`ls` or view_file).
4. Write your full detailed report and complete draft inventory entry to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_17_1/handoff.md`.
5. When complete, send a message back to parent orchestrator (`9d06e1e6-15c9-4e83-9868-3d9dd89d69a0`) with a summary of findings and the path to your handoff.md.
</USER_REQUEST>
