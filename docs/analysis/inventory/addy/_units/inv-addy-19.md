---
unit: inv-addy-19
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-19

## Files assigned
- [x] sources/addy-external/documentation-and-adrs.md (manifest path: external/documentation-and-adrs.md, 26223 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-documentation-and-adrs-md.md (5381 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-19.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/documentation-and-adrs.md` is an external documentation snapshot fetched from `https://skills.addy.ie/skills/documentation-and-adrs/` and stored in `sources/addy-external/documentation-and-adrs.md`.
- It corresponds to the in-repo skill `skills/documentation-and-adrs/SKILL.md`. Two documentation drift defects were identified and cataloged on the inventory card:
  1. The page claims a standardized 6-step skill anatomy including a "Process" section and "Rationalizations", whereas `skills/documentation-and-adrs/SKILL.md` contains no Process section and titles its rationalizations section "Common Rationalizations".
  2. The page abbreviates the trigger conditions ("Use when") relative to the comprehensive trigger specification in `skills/documentation-and-adrs/SKILL.md:3`.
- The web page classifies `documentation-and-adrs` under the `Ship` lifecycle phase under the `/ship` command, alongside related skills `git-workflow-and-versioning`, `ci-cd-and-automation`, and `deprecation-and-migration`.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~1,850 tokens (26,223 bytes across 1 file).
Approximate output tokens: ~1,450 tokens (5,381 bytes card + report).
