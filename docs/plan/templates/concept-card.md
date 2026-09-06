# Concept card

One per named thing per package (METHOD.md R6). Written to `docs/analysis/concepts/<pkg>/<concept-slug>.md`. A concept used in several files gets **one** card with several usage rows. Fields marked **verbatim** carry the source's exact words.

The slug is exactly the one `unit-facts.ts` prints for the concept (the inventory's name, lowercased, runs of non-alphanumerics → `-`): `how-might-we`, `definition-of-done`, `vertical-slice`. Do not normalise across packages here — that is Phase 3's job. A `name-only` card fills Definition with `(used, not defined)` plus the most definitional usage, Where used in full, Implementation status, and one sentence of Design notes saying why it is not a lifecycle concept; the other sections may say `none`. If `addy` says "acceptance criteria" and `rjm` says "AC", they are two cards (`addy/acceptance-criteria.md`, `rjm/ac.md`) until the concordance joins them.

```markdown
---
package: addy | matt | rjm
name: <verbatim, as the source most often writes it>
slug: <lowercase-hyphenated>
kind: phase | artifact | technique | gate | role | reference | pattern | checklist | template | name-only   # name-only: an identifier, file name, heading or label the inventory recorded that is not a lifecycle concept (D-023) — the card still exists so coverage stays mechanical; Phase 3 filters on kind
package_phase: <the package's own phase name this belongs to, prefixed: addy:Define>   # or none / cross-phase
implementation_in_scope: true | false     # false for concepts named by an in-scope file but implemented by an excluded one (rjm memory gate, e.g.)
deprecated: true | false                  # matt only
memo_inputs:                              # written by `memo.ts stamp-unit` — every source file the inventory cites for this concept, derived from the concept index (D-023)
  - {path: <source path>, sha256: <hex>}
method_sha: <hex>
template_sha: <hex>
model: <model id | unknown>
effort: <level | unknown>
verified:                                 # written by `memo.ts verify <unit>` after quote-check passes — never by a Worker
---

# <name>

## Definition — verbatim
> "<the source's own definition, or the closest thing to one>" — path:line

If the source never defines it and only uses it, write `(used, not defined)` and quote the most definitional usage.

## Also called — verbatim
Other names *this package* uses for the same thing, each with `path:line`. `none` if consistent.

## Where used
One row per location. **Every** location from the inventory entries' `Concepts named` fields.

| File | Line | Role | How it is used |
|---|---|---|---|
| <path> | <n> | defines / applies / references / produces / consumes | <one sentence> |

## Consumes
What must exist before this concept applies — prior artifacts, inputs, preconditions. `none` if freestanding.

## Produces
What this concept yields when applied — an artifact (with its path as the source names it), a decision, a verdict, a section of a document. `none` if it is purely a lens.

## When applied
The package's own rule for when this is used — a trigger phrase, a phase, a condition. Verbatim where the source states one.

## Sub-concepts
Named things this concept contains or is composed of, as slugs, if any. (A `refinement-criteria` card might list `feasibility`, `differentiation`, `assumption-audit` — each of which also gets its own card.)

## Part of
Named things this concept is a component of, as slugs, if any.

## Implementation status
From the inventory entries' `Defects` fields, for every file that implements this concept. `clean` · `defects: <list of classes>` · `not-implemented` (concept described but nothing executes it) · `out-of-scope`. Kept separate from the definition so a broken implementation does not colour the idea (R5, D-006).

## Design notes
What this concept is *for* in this package's design — your words, one paragraph. Why does the package have it; what would break without it. This is what Phase 3 compares.
```
