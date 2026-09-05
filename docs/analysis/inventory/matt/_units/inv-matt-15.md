---
unit: inv-matt-15
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-15

## Files assigned
- [x] sources/matt-external/grill-me.md (348368 bytes, 71 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-grill-me-md.md (4284 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-15.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/grill-me.md` is the external documentation snapshot for the stateless `/grill-me` skill on aihero.dev, categorized under "Productivity Skills".
- Contrasted with `grill-with-docs` (stateful, repository-aware, maintains `CONTEXT.md` and ADRs) and `wayfinder` (hierarchical roadmap that runs nested grilling sessions).
- Under the hood, `grill-me/SKILL.md` delegates immediately to the `grilling` primitive with `disable-model-invocation: true`.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~70,000 tokens (348,368 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,100 tokens (inventory card + unit report).
