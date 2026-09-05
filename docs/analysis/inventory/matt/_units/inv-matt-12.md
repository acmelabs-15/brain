---
unit: inv-matt-12
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-12

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/codebase-design.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-codebase-design-md.md` (7968 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/codebase-design.md` is the static web documentation snapshot (from `https://aihero.dev/skills-codebase-design`) corresponding to Matt's `codebase-design` skill in `sources/matt/skills/engineering/codebase-design/` and docs in `sources/matt/docs/engineering/codebase-design.md`.
- Key architectural findings & alignments:
  - Establishes a 7-term vocabulary (`module`, `interface`, `depth`, `seam`, `adapter`, `leverage`, `locality`) for deep module design, while explicitly proscribing fuzzy terms ("component", "service", "API", "boundary").
  - Categorizes itself as a standalone reference (`cross-phase`), not an executable driver workflow.
  - Documents a major pitfall where AI agents treat reference vocabulary as an active loop, burning context/tokens (filed in Matt's repo as issue #449).
  - Documents the absorption of the former `design-an-interface` skill into `DESIGN-IT-TWICE.md` (using parallel sub-agents to design alternative interfaces).
  - Notes Claude Code specific dependency in `DESIGN-IT-TWICE.md` (Claude Code Agent tool, issue #564).
  - Strongly decouples deep modules from filesystem / folder hierarchies (rejecting issues #95 and #458).
- None of this unit's files appear in the duplication ledger (`docs/analysis/manifest/matt-duplicates.md`); no divergence cards required.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~91,300 tokens (365,134 bytes in 1 file); approximate tokens of output written: ~2,000 tokens (7,968 bytes in 1 inventory card).
