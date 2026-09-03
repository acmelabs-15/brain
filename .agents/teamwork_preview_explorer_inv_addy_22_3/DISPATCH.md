## 2026-09-03T17:26:10Z
<USER_REQUEST>
You are Explorer 3 (teamwork_preview_explorer) for work unit inv-addy-22.
Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_22_3
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

Assigned File:
`sources/addy-external/test-driven-development.md` (26,483 bytes) — Read the file in full from line 1 to the end.

Template to fill (verbatim from docs/plan/templates/inventory-entry.md):
```markdown
---
package: addy
path: ../addy-external/test-driven-development.md
type: external-doc
bytes: 26483
unit: inv-addy-22
---

# ../addy-external/test-driven-development.md

## Purpose — required, verbatim
> "<the file's own statement of what it is for>" — path:line
If the file has no such statement, quote its first substantive paragraph and note `(no explicit purpose statement)`.

## Design intent — required
What problem does this solve; what would be lost without it. Your words, one paragraph. Kept separate from implementation status (R5).

## Phase — required
Which lifecycle stage the *package* places this in, using the package's own phase name (verbatim, prefixed: `addy:...`). `none` if the package does not assign one. `cross-phase` if it is a reference used everywhere.

## Inputs — required
What this consumes: arguments, prior artifacts (with their paths as the source names them), files it reads, questions it asks the user.

## Outputs — required
What this produces: files (with paths as the source names them, verbatim), decisions, verdicts, side effects (commits, tracker tickets). `none` for pure references.

## Invokes — required
Every other skill, command, agent, script, or reference this file calls or loads. One line each: `<kind> <name> — path:line`. `none` if isolated.

## Invoked by — required
Every in-scope file that calls or loads this one (from the manifest graph). `none` if an entry point or orphan. `orphan` if nothing in scope invokes it and it is not an entry point — this matters.

## Concepts named — required, verbatim
Every named technique, framework, artifact, gate, role, checklist, template, or phase this file defines or uses. One line each: `<name as written>` — path:line — defined here | used here. This list drives Phase 2 (R6). Be exhaustive; a missed name here is a gap in the whole synthesis.

## Structure
Section headings in order (verbatim), so composition can be compared across packages.

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
Everything found by the METHOD.md §4 checklist. One line each, classified:
- `missing-path` · `script-bug` · `doc-drift` · `internal-contradiction` · `cross-file-contradiction` · `unfailable-gate` · `always-failing-gate` · `exit-code-mismatch` · `orphan` · `other`
Each with `path:line` and one sentence. `none` if clean.

## Observations
Anything else worth carrying forward that fits no field above.

## Context cost
Bytes of this file plus everything it loads when invoked. Approximate tokens.
```

Instructions:
1. Deeply analyze `sources/addy-external/test-driven-development.md` against `sources/addy/skills/test-driven-development/SKILL.md`.
2. Extract all verbatim sections with exact line numbers.
3. Identify all concepts named exhaustively.
4. Identify all defects (doc-drift, missing-path, cross-file-contradiction, etc.).
5. Produce a complete draft inventory entry and write it to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_22_3/analysis.md` and `handoff.md`.
6. Notify orchestrator via `send_message(Recipient="b5a107ba-96e6-44dc-b23e-f495191e347d", Message="Explorer 3 analysis complete...")`.
</USER_REQUEST>
