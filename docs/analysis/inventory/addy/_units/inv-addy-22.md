---
unit: inv-addy-22
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-22

## Files assigned
- [x] `sources/addy-external/git-workflow-and-versioning.md` (26,317 bytes, 20 lines) — read in full

## Outputs produced
- `docs/analysis/inventory/addy/external-git-workflow-and-versioning-md.md` (8,116 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The skill `git-workflow-and-versioning` is assigned to unit `inv-addy-10` (`skills/git-workflow-and-versioning/SKILL.md`). This external doc (`external/git-workflow-and-versioning.md`) represents the public website landing page for that skill (`https://skills.addy.ie/skills/git-workflow-and-versioning/`).
- Document drift was detected between the external catalog page and the actual `SKILL.md`: the external page's standardized six-part anatomy lists section 03 as "Process" ("Step-by-step workflow"), but `skills/git-workflow-and-versioning/SKILL.md` contains no `## Process` section (instead organizing workflow guidance across `## Core Principles`, `## Branching Strategy`, `## Working with Worktrees`, `## The Save Point Pattern`, `## Change Summaries`, `## Pre-Commit Hygiene`, `## Handling Generated Files`, `## Using Git for Debugging`, and `## Release & Versioning`). Section 04 is also labeled "Rationalizations" on the webpage versus `## Common Rationalizations` in `SKILL.md`.
- The external page assigns the skill to the `Ship` lifecycle phase (`/ship`) and references related Ship phase skills: `ci-cd-and-automation`, `deprecation-and-migration`, and `documentation-and-adrs`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,500 tokens (26,317 bytes); approximate tokens of output written: ~2,500 tokens.
