---
unit: inv-matt-32
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-32

## Files assigned
- [x] sources/matt-external/wayfinder.md (374029 bytes, 84 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-wayfinder-md.md (5611 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-32.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/wayfinder.md` places the skill under section 3 "Shaping" on aihero.dev, whereas internal docs in `docs/engineering/wayfinder.md` place it under "engineering".
- Clarifies the transition to implementation: wayfinder strictly charts and resolves decisions, culminating in a handoff to `/to-spec #<map_issue>` rather than writing production code directly.
- Identifies behavioural defects where models attempt to self-authorize code execution by writing permissions into map issue Notes.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~75,000 tokens (374,029 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,400 tokens (5,611 bytes inventory card + unit report).
