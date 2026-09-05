---
unit: inv-addy-29
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-29

## Files assigned
- [x] sources/addy-external/shipping-and-launch.md (26336 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-shipping-and-launch-md.md (8558 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/shipping-and-launch.md` is the published web documentation snapshot from `https://skills.addy.ie/skills/shipping-and-launch/` corresponding to manifest path `external/shipping-and-launch.md`.
- It exhibits documentation drift against `skills/shipping-and-launch/SKILL.md`:
  1. The external description explicitly couples the skill to the `/ship` command persona fan-out and go/no-go synthesis ("Prepares production launches. Pre-launch checklists, feature-flag lifecycle, staged rollouts, rollback procedures, and monitoring setup. Run via /ship to fan out review personas, then merge into a go/no-go."), whereas the in-repo `SKILL.md` description does not mention `/ship`, review personas, or go/no-go synthesis.
  2. The external page asserts a standardized 6-section anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), but `SKILL.md` does not have a `Process` section, instead structuring its workflow into `The Pre-Launch Checklist`, `Feature Flag Strategy`, `Staged Rollout`, `Monitoring and Observability`, `Rollback Strategy`, and `See Also`, and naming its rationalizations section `Common Rationalizations`.
  3. The `/ship` slash command (`commands/ship.toml`) coordinates three subagent review personas (`code-reviewer`, `security-auditor`, `test-engineer`) directly via prompt orchestration rather than executing the skill sequentially.
- Cross-references peer Ship-phase skills in the Addy catalog: `git-workflow-and-versioning`, `ci-cd-and-automation`, and `deprecation-and-migration`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,584 tokens (26,336 bytes)
Approximate tokens of output written: ~2,140 tokens (8,558 bytes)
