---
unit: inv-addy-29
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-29

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/shipping-and-launch.md (26336 bytes, 20 lines) — read in full

## Outputs produced
- docs/analysis/inventory/addy/external-shipping-and-launch-md.md (10534 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-29.md (2376 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/shipping-and-launch.md` is the public web documentation snapshot for Addy's `shipping-and-launch` skill (`skills/shipping-and-launch/SKILL.md`).
- Explicitly places the skill in the `addy:Ship` phase, tying it to the `/ship` command ("Command /ship" on `external/shipping-and-launch.md:12`).
- Identifies documentation drift (`doc-drift`): the external website claims every skill follows a uniform 6-part anatomy with step 03 as "Process", step 04 as "Rationalizations", whereas `skills/shipping-and-launch/SKILL.md` uses domain-specific operational headings ("The Pre-Launch Checklist", "Feature Flag Strategy", "Staged Rollout", "Monitoring and Observability", "Rollback Strategy") and titles section 04 "## Common Rationalizations".
- Identifies documentation drift (`doc-drift`): the external page description states "Run via /ship to fan out review personas, then merge into a go/no-go.", which reflects the multi-agent persona orchestration described in `commands/ship.toml:6`, whereas `skills/shipping-and-launch/SKILL.md` describes single-agent pre-launch checks and staged rollouts without mentioning specialist review personas.
- Identifies orphan status (`orphan`): this external web documentation page is not imported, required, or linked by any in-scope repository code in `sources/addy/`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,584 tokens (26,336 bytes)
- Approximate tokens of output written: ~3,200 tokens (card: 10,534 bytes; report: ~2,350 bytes)
