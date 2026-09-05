---
unit: inv-matt-12
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-12

## Files assigned
- [x] sources/matt-external/codebase-design.md (365134 bytes, 69 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-codebase-design-md.md (5011 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-12.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Defines canonical architecture vocabulary across the package: `module`, `interface`, `depth`, `seam`, `adapter`, `leverage`, and `locality`.
- Establishes core design principles: "Depth is a property of the interface, not the implementation", "The deletion test", "The interface is the test surface", and "One adapter means a hypothetical seam. Two adapters means a real one."
- Accompanied by reference documents `DEEPENING.md` and `DESIGN-IT-TWICE.md`.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~74,000 tokens (365,134 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,150 tokens (5,011 bytes inventory card + unit report).
