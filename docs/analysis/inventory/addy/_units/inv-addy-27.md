---
unit: inv-addy-27
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-27

## Files assigned
- [x] sources/addy-external/performance-optimization.md (26603 bytes, 20 lines)
- [x] sources/addy-external/planning-and-task-breakdown.md (22310 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-performance-optimization-md.md (8865 bytes)
- docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md (6724 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-27.md (2540 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/performance-optimization.md` corresponds to manifest row `external/performance-optimization.md` and provides the web catalog entry for the `performance-optimization` skill (`skills/performance-optimization/SKILL.md`). It places the skill in the Review phase (`addy:Review`). The page header displays a badge for command `/webperf`, but the sidebar displays `Command /review`, and in the repository `commands/webperf.toml:20` spawns `agents/web-performance-auditor.md` rather than directly invoking `performance-optimization`.
- `external/planning-and-task-breakdown.md` corresponds to manifest row `external/planning-and-task-breakdown.md` and provides the web catalog entry for the `planning-and-task-breakdown` skill (`skills/planning-and-task-breakdown/SKILL.md`). It represents the sole skill in the Plan phase (`addy:Plan`) and therefore has no "More in the Plan phase" related skill section. It references command `/plan`, while repository commands also provide `commands/planning.toml` (`/planning`).
- Both external pages exhibit doc-drift relative to their repository `SKILL.md` files: the web pages declare a standardized six-part anatomy ("01 Overview" through "06 Verification"), but both `skills/performance-optimization/SKILL.md` and `skills/planning-and-task-breakdown/SKILL.md` implement several additional major sections not captured in the web anatomy list.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,228 tokens (48,913 bytes)
Approximate tokens of output written: ~4,500 tokens (18,019 bytes)
