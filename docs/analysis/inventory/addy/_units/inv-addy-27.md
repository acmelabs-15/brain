---
unit: inv-addy-27
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-27

## Files assigned
- [x] sources/addy-external/performance-optimization.md (26603 bytes, 20 lines)
- [x] sources/addy-external/planning-and-task-breakdown.md (22310 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-performance-optimization-md.md (8610 bytes)
- docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md (6840 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-27.md (2202 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/performance-optimization.md` is the public web catalog page for `skills/performance-optimization/SKILL.md`. It places `performance-optimization` in `addy:Review` phase alongside `code-review-and-quality`, `code-simplification`, and `security-and-hardening`, and links to slash command `/webperf`.
- `external/planning-and-task-breakdown.md` is the public web catalog page for `skills/planning-and-task-breakdown/SKILL.md`. It places `planning-and-task-breakdown` in `addy:Plan` phase and links to slash command `/plan`. Unlike `external/performance-optimization.md`, it does not include a related skills grid.
- Both external catalog pages assert an idealized 6-part anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/performance-optimization.md:9, external/planning-and-task-breakdown.md:9), which diverges from the richer, multi-section markdown structure found in the repository `SKILL.md` files (doc-drift defects documented on both cards).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,228 tokens (48,913 bytes across 2 source files); approximate tokens of output written: ~4,413 tokens (17,652 bytes total).


