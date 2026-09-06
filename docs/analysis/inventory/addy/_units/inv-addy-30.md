---
unit: inv-addy-30
phase: 1
package: addy
session: 011
subagent_returned: complete
---

# Unit inv-addy-30

## Files assigned
- [x] sources/addy-external/source-driven-development.md

## Outputs produced
- docs/analysis/inventory/addy/external-source-driven-development-md.md (10474 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/source-driven-development.md` is the website catalog page (`https://skills.addy.ie/skills/source-driven-development/`) corresponding to `skills/source-driven-development/SKILL.md` (unit inv-addy-8).
- Addressed all Phase 1V verification findings from `docs/analysis/inventory/addy/_verification.md`: recorded in `## Invokes` command `/build` (line 12), file `skills/source-driven-development/SKILL.md` (line 10), and skills `incremental-implementation`, `test-driven-development`, `context-engineering` (line 12).
- Recorded `doc-drift` defects comparing the website catalog page against `sources/addy/skills/source-driven-development/SKILL.md` (summary/description divergence, omission of specific and negative triggering conditions, and omission of specialized subsections such as Retrieval Safety and the source hierarchy table from the generic 6-part anatomy on the web page).
- Recorded `orphan` defect because no in-scope repository file links to or invokes this external documentation URL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,590 tokens (26,358 bytes source file + ~8,000 tokens of reference SKILL.md/commands for cross-checks). Approximate tokens of output written: ~2,620 tokens (10,474 bytes inventory card).
