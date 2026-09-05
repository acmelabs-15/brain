---
unit: inv-addy-14
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-14

## Files assigned
- [x] sources/addy-external/ci-cd-and-automation.md

## Outputs produced
- docs/analysis/inventory/addy/external-ci-cd-and-automation-md.md (7371 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/ci-cd-and-automation.md` is the external documentation snapshot of `https://skills.addy.ie/skills/ci-cd-and-automation/`. It corresponds to `skills/ci-cd-and-automation/SKILL.md`.
- Doc drift identified: the external page anatomy section asserts a standardized 6-section template (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), whereas canonical `SKILL.md` contains specialized sections (`The Quality Gate Pipeline`, `GitHub Actions Configuration`, `Deployment Strategies`, `Failure Feedback Loops`, `Configuration Templates`, `CI Optimization`) and titles rationalizations as `Common Rationalizations`. The external summary also reduces triggering conditions to a single trigger (`Setting up or modifying build and deploy pipelines`) vs. the 5 detailed triggers in `SKILL.md:18-22`.
- The external page links the skill to the `Ship` lifecycle phase and `/ship` command, grouping it with peer Ship-phase skills (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`).

## Blocked or uncertain
none

## Time and size
Approx. 6,500 tokens of source read (26,179 bytes); approx. 1,850 tokens of output written (7,371 bytes).
