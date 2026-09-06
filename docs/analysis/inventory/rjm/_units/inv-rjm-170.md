---
unit: inv-rjm-170
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-170

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/software-engineering-library/references/enterprise-patterns.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/software-engineering-library/references/philosophy-of-software-design.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/software-engineering-library/references/refactoring.md`

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-enterprise-patterns-md.md (5056 bytes)
- docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-philosophy-of-software-design-md.md (6729 bytes)
- docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-refactoring-md.md (8205 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-170.md (2255 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The references in this unit are part of the `software-engineering-library` skill router, divided across inv-rjm-169 (part 1), inv-rjm-170 (part 2), and inv-rjm-171 (part 3).
- `refactoring.md` explicitly cites `enterprise-patterns.md` (line 120) when refactorings cross Repository, Service Layer, or Data Mapper architectural boundaries.
- `philosophy-of-software-design.md` defines concepts (deep module, information hiding, cognitive load) that are directly applied in `software-engineering-library/SKILL.md` router design as well as agent prompt specifications across rjm.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~9720 tokens (38880 bytes across 3 assigned files, plus 4840 bytes context SKILL.md)
- Approximate tokens of output written: ~5400 tokens across 3 cards and unit report
