---
unit: inv-addy-19
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-19

## Files assigned
- [x] sources/addy-external/documentation-and-adrs.md (26223 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-documentation-and-adrs-md.md (7104 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-19.md (1528 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The external page `external/documentation-and-adrs.md` classifies the `documentation-and-adrs` skill under `addy:Ship` with command `/ship`, whereas the repository skill `skills/documentation-and-adrs/SKILL.md` carries no phase in its frontmatter and describes practices (ADRs, API documentation, inline gotchas) relevant across the lifecycle from Define to Ship. Phase 3 concordance should note this phase divergence.
- The external page displays a standardized 6-part anatomy banner including step "03 Process", which is not present in the in-repo `SKILL.md`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,550 tokens (26,223 bytes); approximate tokens of output written: ~2,100 tokens.
