---
unit: inv-matt-32
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-32

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/wayfinder.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-wayfinder-md.md` (9943 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/wayfinder.md` is the public web documentation snapshot for the `wayfinder` skill (fetched from `https://aihero.dev/skills-wayfinder`), which pairs with `sources/matt/skills/engineering/wayfinder/SKILL.md` and `sources/matt/docs/engineering/wayfinder.md` (unit inv-matt-7).
- It provides extensive practitioner feedback and documentation on runtime rough edges: agents overriding the "plan, don't do" constraint via Notes in the map issue, confusion between `task` decision tickets and product implementation steps, uncoordinated multi-ticket parallel execution causing duplicate grilling rounds or autonomous UI selection on prototype tickets, and verbosity in long model-driven interview exchanges.
- Renamed from `decision-mapping` to `wayfinder` in v1.1 to standardize on a cohesive navigational metaphor (destination, fog of war, frontier, map), while explicitly preserving the term `decision ticket` to distinguish from implementation tickets.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~93507 tokens (374029 bytes on disk); approximate tokens of output written: ~2500 tokens (9943 bytes).
