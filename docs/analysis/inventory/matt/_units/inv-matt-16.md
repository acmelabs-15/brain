---
unit: inv-matt-16
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-16

## Files assigned
- [x] sources/matt-external/grill-with-docs.md (362890 bytes, 67 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-grill-with-docs-md.md (4871 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-16.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/grill-with-docs.md` represents the head of the main build chain (`grill-with-docs → to-spec → to-tickets → implement → code-review`), categorized under "The Main Flow".
- Acts as a two-part delegator calling the `grilling` and `domain-modeling` skills to produce inline `CONTEXT.md` vocabulary and `docs/adr/` records for decisions clearing all three gates.
- Documents an open community suggestion to rename the skill to `grill-domain-model` to reduce confusion regarding what is persisted to disk versus retained in conversational context.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~73,000 tokens (362,890 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,200 tokens (inventory card + unit report).
