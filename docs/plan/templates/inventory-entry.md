# Inventory entry

One per in-scope source file. Written to `docs/analysis/inventory/<pkg>/<file-slug>.md`. Fields marked **verbatim** carry the source's exact words in quotes with a `path:line` — no paraphrase (METHOD.md R3); `quote-check.ts` verifies every citation byte-for-byte (R11), so cite the line the words are actually on. For an EXACT alias (§2.4) write one entry for the canonical path and list the aliases in `aliases:`. Fields marked **required** may not be empty; `coverage.ts` enforces this. Write `none` explicitly when a required field has nothing to report — an empty field means "not checked", `none` means "checked, nothing there".

```markdown
---
package: addy | matt | rjm
path: <path relative to sources/<pkg>/>
type: skill | command | reference | agent | script | template | doc | config
bytes: <n>
unit: <unit-id>
deprecated: true | false          # matt only; true if under skills/deprecated/
in_scope_via: <entry point or invoking file that brought this into scope>   # rjm only
aliases: []                       # EXACT alias paths this entry satisfies (§2.4); [] if none
memo_inputs:                      # written by `memo.ts stamp` — never by hand
  - {path: <source path>, sha256: <hex>}
method_sha: <hex>                 # memo.ts stamp
template_sha: <hex>               # memo.ts stamp
model: <model id | unknown>       # the model that wrote this card; never guessed
effort: <level | unknown>
verified:                         # `<YYYY-MM-DD> quote-check+coverage`, written by the verifier only
---

# <path>

## Purpose — required, verbatim
> "<the file's own statement of what it is for>" — path:line
If the file has no such statement, quote its first substantive paragraph and note `(no explicit purpose statement)`.

## Design intent — required
What problem does this solve; what would be lost without it. Your words, one paragraph. Kept separate from implementation status (R5).

## Phase — required
Which lifecycle stage the *package* places this in, using the package's own phase name (verbatim, prefixed: `addy:Define`). `none` if the package does not assign one. `cross-phase` if it is a reference used everywhere.

## Inputs — required
What this consumes: arguments, prior artifacts (with their paths as the source names them), files it reads, questions it asks the user.

## Outputs — required
What this produces: files (with paths as the source names them, verbatim), decisions, verdicts, side effects (commits, tracker tickets). `none` for pure references.

## Invokes — required
Every other skill, command, agent, script, or reference this file calls or loads. One line each: `<kind> <name> — path:line`. `none` if isolated.

## Invoked by — required
Every in-scope file that calls or loads this one (from the manifest graph). `none` if an entry point or orphan. `orphan` if nothing in scope invokes it and it is not an entry point — this matters.

## Concepts named — required, verbatim
Every named technique, framework, artifact, gate, role, checklist, template, or phase this file defines or uses. One line each: `` `<name as written>` — path:line — defined here | used here ``. This list drives Phase 2 (R6). Be exhaustive; a missed name here is a gap in the whole synthesis.

## Structure
Section headings in order (verbatim), so composition can be compared across packages.

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines
- documented invocation (verbatim, path:line)
- **executed:** yes | no — if no, why
- actual command run, abridged stdout, **actual exit code**
- documented exit codes (verbatim) vs. actual exit paths in code (`path:line` for each `exit`/`sys.exit`/`process.exit`)
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
- does the output match what the documentation claims? one line

## Defects — required
Everything found by the METHOD.md §4 checklist. One line each, classified:
- `missing-path` · `script-bug` · `doc-drift` · `internal-contradiction` · `cross-file-contradiction` · `unfailable-gate` · `always-failing-gate` · `exit-code-mismatch` · `orphan` · `other`
Each with `path:line` and one sentence. `none` if clean. These never disqualify the design (R5, D-006).

## Observations
Anything else worth carrying forward that fits no field above: an unusually good pattern, a context-cost note, a reference that an executing agent cannot act on, a duplicate of content found elsewhere (cite both locations).

## Context cost
Bytes of this file plus everything it loads when invoked (follow `Invokes`). Approximate tokens.
```
