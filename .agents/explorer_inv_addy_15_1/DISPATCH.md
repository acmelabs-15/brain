# Dispatch for Explorer 1 (inv-addy-15)

## Objective
Technical exploration and verification of:
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/frontend-ui-engineering/SKILL.md` (10,711 bytes)
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/shipping-and-launch/SKILL.md` (10,137 bytes)

Follow METHOD.md R1-R6 and §4 checklist. Produce detailed technical analysis and verification report to be saved in `.agents/explorer_inv_addy_15_1/report.md`.

## Metadata
- Archetype: explorer
- Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_1
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

## METHOD.md §4 Checklist for your 2 focus files
- Existence: Check every path referenced in both files with `ls` or file inspection. Note any missing targets as defects.
- Execution: Check if there are any commands, code snippets, or scripts referenced or documented. Run any applicable validation commands.
- Documentation drift: Compare against external docs (`sources/addy-external/frontend-ui-engineering.md`, `sources/addy-external/shipping-and-launch.md`), commands (`claude/commands/ship.md`, `gemini/commands/ship.toml`), evals cases (`evals/cases/frontend-ui-engineering.json`, `evals/cases/shipping-and-launch.json`), and fixtures.
- Internal & cross-file consistency.
- Composition: Invokes and invoked by relationships.
- Context cost: File byte size and all loaded assets / references.
- Design intent: Separate from implementation status.
- Concepts named: Exhaustively list all named concepts with exact line numbers and `defined here | used here`.

## Required Output
Read files completely from line 1 to end without sampling.
Save your detailed technical findings and proposed draft inventory entries in:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_1/report.md`
and write your completion handoff in:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_1/handoff.md`.
Then send a message to orchestrator with summary of findings.

## 2026-09-03T05:50:24Z
<USER_REQUEST>
You are Explorer 1 for work unit inv-addy-15 in Phase 1 (Inventory Extraction).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_1
You MUST read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Read your task dispatch at /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_1/DISPATCH.md.

Your assigned files to explore deeply:
1. /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/frontend-ui-engineering/SKILL.md (10,711 bytes)
2. /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/shipping-and-launch/SKILL.md (10,137 bytes)

Follow METHOD.md R1-R6 and §4 checklist strictly. Read both files in full from line 1 to end without sampling.
Check existence of all referenced paths. Check documentation drift, commands, and evals.
Extract all named concepts (R6) exhaustively with line numbers and defined/used tag.
Save your detailed technical report and drafted inventory entries in /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_1/report.md and your handoff in /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_1/handoff.md.
When done, notify parent via send_message.
</USER_REQUEST>
