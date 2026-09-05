---
unit: inv-addy-25
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-25

## Files assigned
- [x] sources/addy-external/interview-me.md (24935 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-interview-me-md.md (6637 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/interview-me.md` is an external documentation snapshot from `https://skills.addy.ie/skills/interview-me/` corresponding to `skills/interview-me/SKILL.md` (unit inv-addy-25 external doc counterpart to unit inv-addy-10).
- Categorization check: `external/interview-me.md:5, 12` assigns the skill to `Define phase` (`addy:Define`), aligning with `skills/interview-me/SKILL.md:14` and repository categorization.
- Command association doc-drift: The external doc's sidebar prominently displays `Command /spec` (line 12), but `commands/spec.toml:4` only invokes `spec-driven-development` and does not invoke `interview-me`.
- Related Define-phase skills linked from this page are `idea-refine` (inv-addy-22 external / inv-addy-9 repo) and `spec-driven-development` (inv-addy-30 external / inv-addy-10 repo).

## Blocked or uncertain
none

## Time and size
- Source read: 24935 bytes (~6234 tokens)
- Output written: 6637 bytes (~1659 tokens) for inventory card plus unit report
