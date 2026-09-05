---
unit: inv-addy-23
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-23

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/idea-refine.md (24943 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-idea-refine-md.md (5226 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-23.md (1814 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/idea-refine.md` is the published website page for skill `idea-refine` (`skills/idea-refine/SKILL.md` in repository).
- Identifies documentation drift (`doc-drift`): the site claims every skill follows a 6-part anatomy including Rationalizations, but `skills/idea-refine/SKILL.md` has a legacy structure (How-It-Works/Usage/Anti-patterns) and lacks a Rationalizations section, as acknowledged in `sources/addy/scripts/lib/skill-lint.js:59`.
- Identifies documentation drift (`doc-drift`): the site sidebar lists Command `/spec` under the Define phase card on the `idea-refine` page, but `/spec` is tied to `spec-driven-development` and `idea-refine` has no slash command in Addy's package.
- Links to related Define phase skills `interview-me` (`skills/interview-me/SKILL.md`) and `spec-driven-development` (`skills/spec-driven-development/SKILL.md`).

## Blocked or uncertain
none

## Time and size
Source read: 24,943 bytes (~6,235 tokens)
Output written: ~6,796 bytes (~1,700 tokens)
