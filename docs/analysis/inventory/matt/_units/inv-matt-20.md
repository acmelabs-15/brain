---
unit: inv-matt-20
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-20

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/improve-codebase-architecture.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-improve-codebase-architecture-md.md` (11350 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/improve-codebase-architecture.md` is the static web documentation snapshot (from `https://aihero.dev/skills-improve-codebase-architecture`) corresponding to Matt's `improve-codebase-architecture` skill in `sources/matt/skills/engineering/improve-codebase-architecture/` and documentation in `sources/matt/docs/engineering/improve-codebase-architecture.md` (inventoried in `inv-matt-5`).
- Key architectural findings & alignments:
  - Establishes `improve-codebase-architecture` as a periodic maintenance / survey tool (`matt:Upkeep`) rather than an active in-place refactoring driver. It identifies "deepening opportunities" without directly modifying repository code.
  - Outputs an ephemeral, external HTML report to `<tmpdir>/architecture-review-<timestamp>.html` with candidate cards, deletion test validation, before/after diagrams, and recommendation badges (`Strong`, `Worth exploring`, `Speculative`).
  - Employs a dual-filter screening mechanism: candidate modules must pass the deletion test (concentrates complexity behind smaller interface rather than dispersing it) and are biased toward actively changing code paths discovered via commit history.
  - Documents key user friction points: unconstrained post-survey grilling loops ("10's or 100's of questions") leading to requests for a no-grill report-only mode; CDN dependency failures (Tailwind/Mermaid) under offline or SRI-enforcing network environments; and the absence of a `TYPESCRIPT.md` reference guide for concrete module layouts.
  - Inter-skill composition: Consumes vocabulary from `codebase-design`, routes decisions downstream to `/to-spec` and `/to-tickets`, updates `CONTEXT.md` domain glossary, and optionally records durable rejections as ADRs in `docs/adr/`.
- None of this unit's files appear in the duplication ledger (`docs/analysis/manifest/matt-duplicates.md`); no divergence cards required.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~92,100 tokens (368,468 bytes in 1 file); approximate tokens of output written: ~2,800 tokens (11,350 bytes in 1 inventory card).
