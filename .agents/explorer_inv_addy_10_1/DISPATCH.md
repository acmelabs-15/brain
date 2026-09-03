# Dispatch for Explorer 1 (inv-addy-10)

## Objective
Technical exploration and verification of `sources/addy/scripts/run-evals.js` and `sources/addy/scripts/run-evals-test.js`.

Follow METHOD.md R1-R6 and §4 checklist. Produce detailed technical analysis and verification report to be saved in `.agents/explorer_inv_addy_10_1/report.md`.

## 2026-09-03T05:16:44Z
You are Explorer 1 for work unit inv-addy-10 in Phase 1 (Inventory Extraction).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_10_1
You MUST read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.

## Hard Rules (verbatim from METHOD.md §3)
R1 — Full reads. Coverage is proven, not asserted. Every in-scope file is read from first line to last. "No sampling" is enforced by the manifest: every file is a row; a row is checked off only when its inventory entry exists on disk. Phase 1 is not done until every row is checked.
R2 — Evidence, and scripts are run. Every claim about a source names path:line. Every script in scope is executed with its own documented example before anything is recorded about what it does; documented exit codes are compared to the code's actual exit paths. Reading a script and describing what it appears to do is not evidence.
R3 — Verbatim in extraction. Inventory and concept-card fields marked verbatim carry the source's exact words, quoted. Paraphrase in those fields is a defect in the analysis. Alignment happens later, on the record, not silently during reading.
R4 — One vocabulary, from the glossary. Until a term is decided in Phase 4, refer to it with its source and package prefix: addy:spec, matt:spec, rjm:spec. After a decision, use only the canonical term from GLOSSARY.md. Never introduce an analyst's own term for a source concept.
R5 — Defect is not dismissal. Record every defect found (broken reference, script bug, doc-drift, unfailable gate) as a defect on the inventory entry. Evaluate the design intent of the thing separately from its implementation status. A broken implementation of a good idea is a good idea with a defect. Never port a defect; never discard a design because its implementation has one.
R6 — Depth rule. If it has a name in any package — a technique, framework, artifact, gate, role, checklist, template, phase — it gets a concept card. Named things are the unit of alignment.

## Your Focus Files in inv-addy-10
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/scripts/run-evals.js` (24,129 bytes)
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/scripts/run-evals-test.js` (10,378 bytes)
Also cross-reference all files in `sources/addy/` that invoke or reference them.

## METHOD.md §4 Checklist
- Existence: check all referenced paths with `ls`.
- Execution: execute both scripts using documented examples / tests. For run-evals.js, test with --help, dry-run, or specific flags (e.g. `node scripts/run-evals.js --help` or `bun scripts/run-evals.js --help`, and any documented flags). For run-evals-test.js, run with `bun test ./scripts/run-evals-test.js` and `node --test ./scripts/run-evals-test.js`. Record exact command, stdout/stderr, actual exit code, compare against documented exit codes and exit paths in code (`process.exit(...)`).
- Documentation drift: compare against README.md, docs/, comments.
- Internal & cross-file consistency.
- Composition: what it invokes and what invokes it.
- Context cost: byte size and tokens.
- Design intent: separate from implementation status.

## Required Output
Read files completely from line 1 to end without sampling.
Save your detailed technical findings and proposed inventory entries in:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_10_1/report.md`
and write your completion handoff in:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_10_1/handoff.md`.
Then send a message to orchestrator with summary of findings.
