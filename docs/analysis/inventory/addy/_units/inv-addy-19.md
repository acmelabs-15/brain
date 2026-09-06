---
unit: inv-addy-19
phase: 1
package: addy
session: 011
subagent_returned: complete
---

# Unit inv-addy-19

## Files assigned
- [x] sources/addy-external/documentation-and-adrs.md

## Outputs produced
- docs/analysis/inventory/addy/external-documentation-and-adrs-md.md (10627 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/documentation-and-adrs.md` is the website catalog page (`https://skills.addy.ie/skills/documentation-and-adrs/`) corresponding to `skills/documentation-and-adrs/SKILL.md` (unit inv-addy-4).
- Addressed all Phase 1V verification findings from `docs/analysis/inventory/addy/_verification.md`: recorded in `## Invokes` command `/ship` (line 12), file `skills/documentation-and-adrs/SKILL.md` (line 10), and skills `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration` (line 12).
- Recorded `doc-drift` defects comparing the website catalog page against `sources/addy/skills/documentation-and-adrs/SKILL.md` (summary/trigger divergence, omission of specific trigger conditions, and mismatch between the generic 6-part anatomy on the web page and the actual ADR/documentation sections in `SKILL.md`).
- Recorded `orphan` defect because no in-scope repository file links to or invokes this external documentation URL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,555 tokens (26,223 bytes source file + ~8,000 tokens of reference SKILL.md/commands for cross-checks). Approximate tokens of output written: ~2,650 tokens (10,627 bytes inventory card).
