---
unit: inv-matt-28
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-28

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/to-spec.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-to-spec-md.md` (9248 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-28 covers the external documentation snapshot for Matt Pocock's `to-spec` skill (`aihero.dev/skills-to-spec`), fetched to `sources/matt-external/to-spec.md`.
- Key lifecycle findings:
  - Establishes `to-spec` as the second step in the main build chain: `grill-with-docs → to-spec → to-tickets → implement → code-review`.
  - Defines the core design principle of `to-spec`: it performs synthesis only, never interviewing or making new decisions ("It does not interview you. By the time you reach for it the deciding is already done").
  - Identifies the trigger condition: reaching for `/to-spec` is only justified for multi-session changes where work must survive across multiple context windows; single-session changes skip the spec entirely (`grilling → /implement`).
  - Mandates "seams before prose": upfront agreement on testing seams before generating specification text, establishing binding invariants for downstream `tdd` and `code-review`.
  - Serves as the consolidation point for `wayfinder` maps, collapsing dispersed decision tickets (`/to-spec #<map_issue>`) into a single actionable specification.
  - Documents known defects and friction points: automated AFK agent collisions with the `ready-for-agent` triage label, template mismatch for architectural refactors (heavy bias toward user stories), omission of tracker de-duplication, and issue truncation without local backup.
- Cross-file relationships:
  - Corresponds directly to internal markdown doc `sources/matt/docs/engineering/to-spec.md` and the skill definition `sources/matt/skills/engineering/to-spec/SKILL.md`.
  - Heavily referenced across `sources/matt/` (including `grill-with-docs`, `to-tickets`, `wayfinder`, `tdd`, `implement`, `prototype`, `improve-codebase-architecture`, and `ask-matt`).
- Duplication ledger status:
  - None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~89,800 tokens (359,264 bytes); approximate tokens of output written: ~2,300 tokens (9,248 bytes for inventory card + unit report).
