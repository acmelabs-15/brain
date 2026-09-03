## 2026-09-03T17:26:09Z
You are Explorer 1 (teamwork_preview_explorer) for work unit inv-addy-22.
Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_22_1
Orchestrator Conversation ID: b5a107ba-96e6-44dc-b23e-f495191e347d

MANDATORY RULES (verbatim from METHOD.md):
**R1 — Full reads. Coverage is proven, not asserted.** Every in-scope file is read from first line to last. "No sampling" is enforced by the manifest: every file is a row; a row is checked off only when its inventory entry exists on disk. Phase 1 is not done until every row is checked.
**R2 — Evidence, and scripts are run.** Every claim about a source names path:line. Every script in scope is executed with its own documented example before anything is recorded about what it does; documented exit codes are compared to the code's actual exit paths. Reading a script and describing what it appears to do is not evidence.
**R3 — Verbatim in extraction.** Inventory and concept-card fields marked verbatim carry the source's exact words, quoted. Paraphrase in those fields is a defect in the analysis. Alignment happens later, on the record, not silently during reading.
**R4 — One vocabulary, from the glossary.** Until a term is decided in Phase 4, refer to it with its source and package prefix: addy:spec, matt:spec, rjm:spec. After a decision, use only the canonical term from GLOSSARY.md. Never introduce an analyst's own term for a source concept.
**R5 — Defect is not dismissal.** Record every defect found (broken reference, script bug, doc-drift, unfailable gate) as a defect on the inventory entry. Evaluate the design intent of the thing separately from its implementation status. A broken implementation of a good idea is a good idea with a defect. Never port a defect; never discard a design because its implementation has one.
**R6 — Depth rule.** If it has a name in any package — a technique, framework, artifact, gate, role, checklist, template, phase — it gets a concept card. Named things are the unit of alignment.

Authoritative User Request:
Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
Scope Document:
Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_22_2/SCOPE.md
Operating Manual:
Read /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
Glossary:
Read /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/GLOSSARY.md
Fence:
Comply strictly with /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/DO-NOT-READ.md (v2 branch only, no pre-project git history).

Assigned Task:
Investigate methodology, inventory conventions, repo validation scripts, and cross-references for inv-addy-22.
1. Run repo validation and test scripts via Bun:
   `cd sources/addy && bun scripts/validate-skills.js`
   `cd sources/addy && bun scripts/validate-reference-links.js`
   `cd sources/addy && bun scripts/validate-commands.js`
   `cd sources/addy && bun scripts/validate-artifact-paths.js`
   `cd sources/addy && bun test ./scripts/*-test.js`
   Record commands, real exit codes, and output.
2. Read existing inventory entries for reference:
   `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-using-agent-skills-skill-md.md`
   `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-test-driven-development-skill-md.md`
   `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-20.md`
   `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-17.md`
3. Compare the web external docs (`sources/addy-external/using-agent-skills.md` and `sources/addy-external/test-driven-development.md`) with their in-repo counterparts (`sources/addy/skills/using-agent-skills/SKILL.md` and `sources/addy/skills/test-driven-development/SKILL.md`). Detail:
   - Differences in structure, metadata, lifecycle mapping, commands
   - Any doc-drift or discrepancies
   - What scripts are cited and executed
4. Write your comprehensive analysis to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_22_1/analysis.md` and a soft handoff to `handoff.md`.
5. Notify orchestrator via `send_message(Recipient="b5a107ba-96e6-44dc-b23e-f495191e347d", Message="Explorer 1 analysis complete...")`.
