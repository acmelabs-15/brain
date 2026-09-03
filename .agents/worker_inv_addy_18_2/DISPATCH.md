## 2026-09-03T15:42:31Z
You are Worker 2 for work unit inv-addy-18 (Iteration 2).
Your identity: teamwork_preview_worker
Your working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_18_2
Parent Orchestrator ID: d33b522a-5b61-4615-8dfd-7e95f45ad187

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

MANDATORY FIRST STEP:
Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_18_1/SCOPE.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/METHOD.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/GLOSSARY.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_18_r2_1/report.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_18_r2_2/report.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_18_r2_3/report.md

Rules R1–R6 and R9 verbatim from METHOD.md:
R1 — Full reads. Coverage is proven, not asserted. Every in-scope file is read from first line to last. "No sampling" is enforced by the manifest: every file is a row; a row is checked off only when its inventory entry exists on disk. Phase 1 is not done until every row is checked.
R2 — Evidence, and scripts are run. Every claim about a source names path:line. Every script in scope is executed with its own documented example before anything is recorded about what it does; documented exit codes are compared to the code's actual exit paths. Reading a script and describing what it appears to do is not evidence.
R3 — Verbatim in extraction. Inventory and concept-card fields marked verbatim carry the source's exact words, quoted. Paraphrase in those fields is a defect in the analysis. Alignment happens later, on the record, not silently during reading.
R4 — One vocabulary, from the glossary. Until a term is decided in Phase 4, refer to it with its source and package prefix: addy:spec, matt:spec, rjm:spec. After a decision, use only the canonical term from GLOSSARY.md. Never introduce an analyst's own term for a source concept.
R5 — Defect is not dismissal. Record every defect found (broken reference, script bug, doc/code drift, unfailable gate) as a defect on the inventory entry. Evaluate the design intent of the thing separately from its implementation status. A broken implementation of a good idea is a good idea with a defect. Never port a defect; never discard a design because its implementation has one.
R6 — Depth rule. If it has a name in any package — a technique, framework, artifact, gate, role, checklist, template, phase — it gets a concept card. Named things are the unit of alignment. Examples: jobs-to-be-done, how-might-we, definition-of-done, vertical-slice, acceptance-criteria, pre-mortem, ticket, spec, PRD, one-pager.
R9 — Bun only. Every script written for this project — manifest generation, coverage checks, glossary lint, anything in Part 2 — is Bun/TypeScript. No Node-specific APIs, no Python, no shell scripts longer than a one-liner.

Write Ownership (You exclusively own and will modify):
1. `docs/plan/STATE.md` (Update line 434 from `| Rows inventoried (addy / matt / rjm) | 171 / 0 / 0 |` to `| Rows inventoried (addy / matt / rjm) | 190 / 0 / 0 |`)
2. `docs/analysis/inventory/addy/skills-interview-me-skill-md.md` (Update line 111 citation `133, 209` to `132, 209`)
3. `docs/analysis/inventory/addy/skills-doubt-driven-development-skill-md.md` (Update line 122 citation to prepend `skills/` to `doubt-driven-development/SKILL.md:12-28`)

Post-Edit Verification Tasks:
Run via run_command:
1. `bun scripts/synthesis/coverage.ts`
2. `bun scripts/synthesis/glossary-lint.ts`
3. `bun sources/addy/scripts/validate-skills.js`
4. `bun sources/addy/scripts/validate-reference-links.js`
5. `bun sources/addy/scripts/validate-commands.js`
6. `bun sources/addy/scripts/validate-artifact-paths.js`

Write your complete handoff report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_18_2/handoff.md`.
Send a message to Parent Orchestrator (Recipient: "d33b522a-5b61-4615-8dfd-7e95f45ad187") when done.
