---
unit: inv-matt-16
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-16

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/grill-with-docs.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-grill-with-docs-md.md` (8880 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-16 covers the external documentation snapshot for Matt Pocock's `grill-with-docs` skill (`aihero.dev/skills-grill-with-docs`), fetched to `sources/matt-external/grill-with-docs.md`.
- Key lifecycle findings:
  - Establishes `grill-with-docs` as the head of the main build chain: `grill-with-docs → to-spec → to-tickets → implement → code-review`.
  - Contrasts single-session exploration (`grill-with-docs`) with multi-session decomposition (`wayfinder`) and portable conversational exploration (`grill-me`).
  - Highlights real-time persistence into `CONTEXT.md` for agreed domain vocabulary, and three-gate qualification for architectural decisions written to `docs/adr/`.
  - Documents failure modes: silent failure to persist files when wrapped in external multi-agent or spec-driven pipelines, and question dumps when sub-dependencies (`grilling` and `domain-modeling`) fail to resolve.
  - Documents widespread user and community critique of the naming (`grill-with-docs`), with an open proposal to rename to `grill-domain-model`.
- Cross-file relationship:
  - Corresponds directly to the internal markdown document `sources/matt/docs/engineering/grill-with-docs.md` and the skill definition `sources/matt/skills/engineering/grill-with-docs/SKILL.md`.
  - Referenced by 18 in-scope docs in `sources/matt/`, confirming its role as the primary entry point to the main engineering flow.
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~90,700 tokens (362,890 bytes); approximate tokens of output written: ~2,200 tokens (8,880 bytes for the inventory card).
