---
unit: inv-matt-23
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-23

## Files assigned
- [x] sources/matt-external/resolving-merge-conflicts.md (339023 bytes, 52 lines)

## Outputs produced
- docs/analysis/inventory/matt/external-resolving-merge-conflicts-md.md (5324 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-23.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/resolving-merge-conflicts.md` documents web documentation for `/resolving-merge-conflicts` under Series 4: Upkeep (4.3).
- Focuses on treating merge conflicts as intent synthesis rather than text manipulation, tracing authorial intent via commit messages, PRs, and issues.
- Enforces running repository automated checks (typecheck, tests, formatting) before committing to prevent silent behavioral regressions.
- Forbids `--abort` inside the resolution loop; hands off post-merge behavioral failures to `diagnosing-bugs`.
- Remediated to conform strictly to canonical 13-heading schema from `docs/plan/templates/inventory-entry.md`.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~68,000 tokens (339,023 bytes HTML snapshot with inline hydration bundle).
Approximate output tokens: ~1,300 tokens (5,324 bytes inventory card + unit report).
