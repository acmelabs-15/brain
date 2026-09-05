---
unit: inv-addy-25
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-25

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/interview-me.md (24935 bytes, 20 lines) — read in full

## Outputs produced
- docs/analysis/inventory/addy/external-interview-me-md.md (5591 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-25.md (2134 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/interview-me.md` is the public web documentation snapshot for Addy's `interview-me` skill (`skills/interview-me/SKILL.md` in repository).
- The external catalog page places `interview-me` in the `addy:Define` phase alongside related skills `idea-refine` and `spec-driven-development`.
- Identifies documentation drift (`doc-drift`): the website asserts that every skill follows a standardized 6-section anatomy (`external/interview-me.md:9-10`), but `skills/interview-me/SKILL.md` contains multiple custom sections (`Loading Constraints`, `Output`, `Example`, `Interaction with Other Skills`) and non-standard heading titles (`The Process`, `Common Rationalizations`).
- Identifies documentation drift (`doc-drift`): the page sidebar lists Command `/spec` under the Define phase card (`external/interview-me.md:12`), but `/spec` is tied to `spec-driven-development` while `interview-me` has no slash command in Addy's package.
- Identifies orphan status (`orphan`): this external documentation page snapshot is not referenced by any in-scope repository file in `sources/addy/`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,234 tokens (24,935 bytes)
- Approximate tokens of output written: ~1,930 tokens (card: 5,591 bytes; report: 2,135 bytes)
