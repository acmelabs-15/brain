---
unit: inv-matt-30
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-30

## Files assigned
- [x] sources/matt-external/triage.md (376711 bytes, 74 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-triage-md.md (5257 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-30.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/triage.md` documents the external documentation for `/triage`, positioned under section 4 "Upkeep" on aihero.dev, contrasting with internal docs in `docs/engineering/triage.md` which categorizes it under "engineering".
- Clarifies the boundary between internal planning and external intake: `/to-tickets` outputs are already agent-ready and should never be processed by `triage`.
- Documents known open bugs: #468 (`authorAssociation` in `gh pr list` for external PR discovery), #616 (labels not auto-created on tracker), and #200 (duplicate acceptance criteria in templates).

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~75,000 tokens (376,711 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,300 tokens (5,257 bytes inventory card + unit report).
