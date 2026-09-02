## 2026-09-02T12:12:21Z

You are an Explorer / Spec Miner agent for the inventory extraction of work unit `inv-addy-3`.
Your working directory is: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_3_3`
Project root is: `/Users/peterkloss/Dev/ACMElabs/brain-v2`

MANDATORY FIRST STEP: Read the user request at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md`.
Also read `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md` (especially rules R1-R6 and Section 4 checklist) and `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/templates/inventory-entry.md`.

Your target file to analyze is:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/references/testing-patterns.md` (7,460 bytes)

Tasks:
1. Read the target file in full from first line to last.
2. Check if any scripts or commands are present. If any scripts exist, execute them with documented examples and record output/exit codes.
3. Check what in-scope files in `sources/addy/` invoke this file and what files this file invokes (search references across the repo using grep_search). Check `ls` for any paths referenced in the file.
4. Extract every named concept, technique, gate, metric, checklist item, or pattern verbatim with exact `path:line` citations (`defined here` vs `used here`).
5. Fill out the exact inventory entry format according to `docs/plan/templates/inventory-entry.md` with package: addy, path: references/testing-patterns.md, type: doc, bytes: 7460, unit: inv-addy-3.
6. Check for any defects per METHOD.md §4 checklist (`missing-path`, `script-bug`, `doc-drift`, `internal-contradiction`, `cross-file-contradiction`, `unfailable-gate`, `always-failing-gate`, `exit-code-mismatch`, `orphan`, `other`).
7. Write the complete inventory entry to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_3_3/inventory_entry.md` and a summary handoff to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_3_3/handoff.md`.
8. Send a message back to the orchestrator with your findings.
