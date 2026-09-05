---
unit: inv-matt-5
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-5

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/domain-modeling.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/grill-with-docs.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/implement.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/docs/engineering/improve-codebase-architecture.md`

## Outputs produced
- `docs/analysis/inventory/matt/docs-engineering-domain-modeling-md.md` (4822 bytes)
- `docs/analysis/inventory/matt/docs-engineering-grill-with-docs-md.md` (4549 bytes)
- `docs/analysis/inventory/matt/docs-engineering-implement-md.md` (4944 bytes)
- `docs/analysis/inventory/matt/docs-engineering-improve-codebase-architecture-md.md` (6461 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-5 covers four core engineering documentation pages detailing human-facing and agent-facing operational procedures:
  - `domain-modeling.md`: Details active inline domain modeling versus passive glossary extraction. Establishes the strict separation between `CONTEXT.md` (glossary only) and ADRs (three-condition gate).
  - `grill-with-docs.md`: Documents the stateful interview skill at the head of the main build chain (`grill-with-docs → to-spec → to-tickets → implement → code-review`). Relies on `grilling` and `domain-modeling`.
  - `implement.md`: Documents the non-interactive build execution skill driving `tdd` at pre-agreed seams. Uncovered cross-file contradiction: `implement` runs `code-review` before committing (line 39), but `code-review` only reviews `git diff <fixed-point>...HEAD`, resulting in an empty diff unless an interim commit exists.
  - `improve-codebase-architecture.md`: Documents periodic maintenance surveying codebases for module deepening opportunities using John Ousterhout's depth philosophy and the deletion test. Generates an HTML report in `<tmpdir>`.
- None of this unit's files appears in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9,900 tokens (42,737 bytes across 4 files); approximate tokens of output written: ~4,800 tokens (20,776 bytes across 4 inventory cards).
