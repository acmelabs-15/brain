---
unit: inv-addy-29
phase: 1
package: addy
session: 011
subagent_returned: complete
---

# Unit inv-addy-29

## Files assigned
- [x] sources/addy-external/shipping-and-launch.md

## Outputs produced
- docs/analysis/inventory/addy/external-shipping-and-launch-md.md (11541 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/shipping-and-launch.md` is the website catalog page (`https://skills.addy.ie/skills/shipping-and-launch/`) corresponding to `skills/shipping-and-launch/SKILL.md` (unit inv-addy-41). It links to `skills/shipping-and-launch/SKILL.md` and displays Ship-phase relationships with `commands/ship.toml` (`/ship`), `skills/git-workflow-and-versioning/SKILL.md`, `skills/ci-cd-and-automation/SKILL.md`, and `skills/deprecation-and-migration/SKILL.md`.
- Addressed all Phase 1V verification findings from `docs/analysis/inventory/addy/_verification.md`: added missing invocations for `/ship` (lines 5, 12), `skills/shipping-and-launch/SKILL.md` (line 10), and related skills `git-workflow-and-versioning`, `ci-cd-and-automation`, and `deprecation-and-migration` (line 12).
- Three `doc-drift` defects were identified and recorded comparing the web page against `sources/addy/skills/shipping-and-launch/SKILL.md`:
  1. Summary drift: web page appends slash-command persona fanout (`Run via /ship to fan out review personas, then merge into a go/no-go.`) which is not mentioned in `SKILL.md`.
  2. Trigger condensation: web page condenses 5 detailed production deployment triggers down to a single phrase (`Preparing to deploy to production.`).
  3. Anatomy drift: web page asserts a standard 6-part anatomy including `Process`, while `SKILL.md` lacks a `Process` section and includes 5 operational domain sections (`The Pre-Launch Checklist`, `Feature Flag Strategy`, `Staged Rollout`, `Monitoring and Observability`, `Rollback Strategy`) plus `See Also`.
- An `orphan` defect was recorded because no in-scope repository file links to or invokes this external documentation URL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,584 tokens (26,336 bytes source file + ~4,500 tokens of reference SKILL.md/commands for cross-checks). Approximate tokens of output written: ~2,885 tokens (11,541 bytes inventory card).
