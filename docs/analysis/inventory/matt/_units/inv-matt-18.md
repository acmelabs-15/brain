---
unit: inv-matt-18
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-18

## Files assigned
- [x] sources/matt-external/handoff.md (380255 bytes, 69 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-handoff-md.md (4279 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-18.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/handoff.md` documents the `/handoff` skill categorized under "Productivity Skills", intended for cross-boundary session portability rather than in-place context compression.
- Defines three phase-boundary context actions: `/compact` (in-place compression), `/clear` (context reset), and `/handoff` (portable document for cross-tool, cross-directory, or branched sessions).
- Directs agents to save handoff documents to the OS temporary directory and strictly reference established artifacts by path or URL rather than inlining them.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~76,000 tokens (380,255 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,100 tokens (inventory card + unit report).
