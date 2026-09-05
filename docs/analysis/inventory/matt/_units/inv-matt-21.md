---
unit: inv-matt-21
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-21

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/prototype.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-prototype-md.md` (8429 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-21 covers the external documentation snapshot `sources/matt-external/prototype.md` (manifest path `external/prototype.md`, 341,956 bytes, 68 lines).
- `external/prototype.md` is an HTML snapshot of `https://aihero.dev/skills-prototype` fetched 2026-09-05T01:31:44.445Z. It corresponds to the in-repo documentation file `sources/matt/docs/engineering/prototype.md` and the skill definition at `sources/matt/skills/engineering/prototype/SKILL.md`.
- Key lifecycle architecture insights:
  - Defines `/prototype` as a rapid, throwaway technique to answer unresolvable design questions before implementation, placed in `matt:Shaping`.
  - Contrasts prototyping against conversation/grilling: when discussions balloon or turn in circles ("grilling sessions balloon on exactly these questions"), stop grilling and build a throwaway version to inspect and answer in one line.
  - Divides prototyping into two distinct branches based on the question:
    1. Logic / state model branch ("Does this logic / state model feel right?"): generates a single, self-contained, double-clickable HTML walkthrough with tabbed guided walkthroughs and state inspection panels that non-developers (PMs, designers, domain experts) can drive without cloning the repository or installing a runtime.
    2. UI branch ("What should this look like?"): creates radically different UI variations on a single route, switchable via a floating bottom bar and URL parameters (`?variant=`), evaluated against real data density.
  - Establishes a primary-source archival discipline: rather than deleting throwaway prototypes ("bin the code"), the durable decision is folded into production code/ADR/issue, and the runnable prototype is preserved on an unmerged `prototype/<name>` branch with a context pointer left on the tracker issue, keeping `main` clean while preserving evidence across session boundaries.
  - Warns against scope creep: a prototype must answer one question in one sitting; whole-application prototypes lack stopping criteria and inevitably become untested production code by momentum.
  - Documents a known naming defect where agents recommend `/prototype` inappropriately when tickets already exist and the design is settled (the next step is `/implement`).
- Defects recorded:
  - `orphan`: External documentation page snapshot is an orphan not referenced or linked by any in-scope file in `sources/matt/`.
  - `doc-drift`: External documentation notes that prototypes are no longer deleted upon completion ("Not any more. It used to be: build it, keep the answer, bin the code." — `external/prototype.md:44`), whereas earlier discipline called for deletion and the in-repo skill still defines a prototype as "throwaway code that answers a question" — `external/prototype.md:25`.
  - `doc-drift`: Documents retirement of terminal apps in favor of HTML ("The logic branch now emits a single shareable HTML file instead. A terminal app can only be driven by someone with the repo cloned and a runtime installed" — `external/prototype.md:46`).
  - `other`: Documents a known naming problem where flow-unaware agents recommend the skill prematurely ("Known, and it is a naming problem." — `external/prototype.md:48` with "the obvious next step" — `external/prototype.md:48`).
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~85,000 tokens (341,956 bytes); approximate tokens of output written: ~1,800 tokens (8,429 bytes in inventory card).
