---
unit: inv-matt-14
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-14

## Files assigned
- [x] sources/matt-external/domain-modeling.md (361293 bytes, 72 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-domain-modeling-md.md (4850 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-14.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Defines ubiquitous language development as an active, inline conversational discipline that updates `CONTEXT.md` during discussions rather than post-session batching.
- Governs ADR generation via three strict filters (hard to reverse, surprising without context, real trade-off) saved into `docs/adr/NNNN-slug.md`.
- Works alongside `codebase-design` to establish domain language and module boundary vocabularies.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~73,000 tokens (361,293 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,150 tokens (4,850 bytes inventory card + unit report).
