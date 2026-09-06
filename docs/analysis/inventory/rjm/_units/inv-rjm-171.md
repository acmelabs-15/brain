---
unit: inv-rjm-171
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-171

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/software-engineering-library/references/release-it.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/software-engineering-library/references/working-with-legacy-code.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/software-engineering-library/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-release-it-md.md (10127 bytes)
- docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-working-with-legacy-code-md.md (8143 bytes)
- docs/analysis/inventory/rjm/claude-skills-software-engineering-library-skill-md.md (8151 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-171.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-171` covers `.claude/skills/software-engineering-library` part 3 (`references/release-it.md`, `references/working-with-legacy-code.md`, and `SKILL.md`).
- Sibling units cover parts 1 and 2:
  - Part 1 (`inv-rjm-169`): `clean-architecture.md`, `data-intensive-applications.md`, `domain-driven-design.md`.
  - Part 2 (`inv-rjm-170`): `enterprise-patterns.md`, `philosophy-of-software-design.md`, `refactoring.md`.
- `software-engineering-library/SKILL.md` functions as the centralized on-demand routing gatekeeper across all eight book references, loaded only when code-risk evidence (such as low test coverage, old file age, external APIs, queues, retries, or layer boundary changes) is identified.
- Defects observed:
  - `release-it.md:177`: `missing-path` citing `wiki/concepts/Reliability/Silent API Migration Failures.md` which does not exist in the repository.
- Duplication ledger:
  - None of this unit's files appears in `docs/analysis/manifest/rjm-duplicates.md`. No divergence cards are required.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~9,400 tokens (37,474 bytes across 3 files).
- Approximate tokens of output written: ~7,500 tokens across 3 inventory cards and 1 unit report.
