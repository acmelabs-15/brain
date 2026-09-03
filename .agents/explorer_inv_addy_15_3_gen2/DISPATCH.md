# Dispatch for Explorer 3 Gen 2 (inv-addy-15)

## Objective
Cross-cutting technical exploration, verification, and empirical testing across all 4 files in inv-addy-15:
1. `sources/addy/skills/frontend-ui-engineering/SKILL.md` (10,711 bytes)
2. `sources/addy/skills/shipping-and-launch/SKILL.md` (10,137 bytes)
3. `sources/addy/skills/spec-driven-development/SKILL.md` (12,163 bytes)
4. `sources/addy/skills/constraint-driven-development/references/floor-guard.md` (5,851 bytes)

Follow METHOD.md R1-R6 and §4 checklist. Produce cross-cutting analysis and verification report in `.agents/explorer_inv_addy_15_3_gen2/report.md`.

## Metadata
- Archetype: explorer
- Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_3_gen2
- Parent Orchestrator ID: 6c3faf20-5077-4549-84dc-6a2dd5b1b92d
- Original Request File: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
- Scope Document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_15_1/SCOPE.md

You MUST read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md` before starting work.

## Hard Rules (verbatim from METHOD.md §3)
R1 — Full reads. Coverage is proven, not asserted. Every in-scope file is read from first line to last. "No sampling" is enforced by the manifest: every file is a row; a row is checked off only when its inventory entry exists on disk. Phase 1 is not done until every row is checked.
R2 — Evidence, and scripts are run. Every claim about a source names path:line. Every script in scope is executed with its own documented example before anything is recorded about what it does; documented exit codes are compared to the code's actual exit paths. Reading a script and describing what it appears to do is not evidence.
R3 — Verbatim in extraction. Inventory and concept-card fields marked verbatim carry the source's exact words, quoted. Paraphrase in those fields is a defect in the analysis. Alignment happens later, on the record, not silently during reading.
R4 — One vocabulary, from the glossary. Until a term is decided in Phase 4, refer to it with its source and package prefix: addy:spec, matt:spec, rjm:spec. After a decision, use only the canonical term from GLOSSARY.md. Never introduce an analyst's own term for a source concept.
R5 — Defect is not dismissal. Record every defect found (broken reference, script bug, doc-drift, unfailable gate) as a defect on the inventory entry. Evaluate the design intent of the thing separately from its implementation status. A broken implementation of a good idea is a good idea with a defect. Never port a defect; never discard a design because its implementation has one.
R6 — Depth rule. If it has a name in any package — a technique, framework, artifact, gate, role, checklist, template, phase — it gets a concept card. Named things are the unit of alignment.

## Cross-Cutting Verification Tasks
1. Exhaustive path existence check: check EVERY path mentioned across all 4 files with `ls` or existence check. Map existing vs missing paths.
2. Execution of commands/scripts: check any CLI commands, scripts (such as hook scripts `hooks/sdd-cache-pre.sh`, `hooks/sdd-cache-post.sh`, etc.), or test runs related to these skills. Record actual commands, exit codes, and output.
3. Eval suites and fixtures: check `evals/cases/` and `evals/fixtures/` for these skills. How do eval prompts evaluate these skills? Does `scripts/run-evals.js` pass on these skills?
4. Cross-file integration & composition: How do these skills interact? For example:
   - Does `spec-driven-development` hand off to `frontend-ui-engineering` or other implementation skills?
   - Does `shipping-and-launch` act as a final gate?
   - How does `floor-guard.md` relate to `constraint-driven-development` and other skills?
5. Inventory Template and GLOSSARY compliance review.

## Required Output
Read files completely from line 1 to end without sampling.
Save your findings in:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_3_gen2/report.md`
and write your completion handoff in:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_3_gen2/handoff.md`.
Then send a message to orchestrator with summary of findings.

## 2026-09-03T10:42:36Z
You are Explorer 3 Gen 2 for work unit inv-addy-15 in Phase 1 (Inventory Extraction).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_3_gen2
You MUST read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Read your task dispatch at /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_3_gen2/DISPATCH.md.

Your focus is cross-cutting verification across all 4 files in inv-addy-15:
1. sources/addy/skills/frontend-ui-engineering/SKILL.md
2. sources/addy/skills/shipping-and-launch/SKILL.md
3. sources/addy/skills/spec-driven-development/SKILL.md
4. sources/addy/skills/constraint-driven-development/references/floor-guard.md

Tasks:
- Check all referenced paths across all 4 files with ls.
- Execute and verify any CLI commands, scripts, hooks, or tests related to these skills.
- Check evals/cases/ and evals/fixtures/ for these skills. Run evaluation checks (e.g. run-evals.js).
- Verify concept naming consistency against GLOSSARY.md.
- Identify cross-file composition, contradictions, and defects per §4 checklist.
Save your comprehensive report in /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_3_gen2/report.md and handoff in /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_3_gen2/handoff.md.
When done, notify parent via send_message.
