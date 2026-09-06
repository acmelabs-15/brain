---
unit: cc-addy-37
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-37

## Files assigned
- [x] sources/addy/skills/debugging-and-error-recovery/SKILL.md
- [x] sources/addy/skills/deprecation-and-migration/SKILL.md
- [x] sources/addy/skills/documentation-and-adrs/SKILL.md
- [x] sources/addy/skills/doubt-driven-development/SKILL.md
- [x] sources/addy/skills/shipping-and-launch/SKILL.md
- [x] docs/analysis/inventory/addy/skills-debugging-and-error-recovery-skill-md.md
- [x] docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md
- [x] docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md
- [x] docs/analysis/inventory/addy/skills-doubt-driven-development-skill-md.md
- [x] docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md

## Outputs produced
- docs/analysis/concepts/addy/build-failure-triage.md (1375 bytes)
- docs/analysis/concepts/addy/runtime-error-triage.md (1416 bytes)
- docs/analysis/concepts/addy/safe-fallback-patterns.md (1476 bytes)
- docs/analysis/concepts/addy/instrumentation-guidelines.md (1536 bytes)
- docs/analysis/concepts/addy/treating-error-output-as-untrusted-data.md (1691 bytes)
- docs/analysis/concepts/addy/code-is-a-liability.md (1418 bytes)
- docs/analysis/concepts/addy/deprecation.md (1424 bytes)
- docs/analysis/concepts/addy/migration.md (1438 bytes)
- docs/analysis/concepts/addy/deprecation-planning.md (1498 bytes)
- docs/analysis/concepts/addy/the-deprecation-decision.md (1418 bytes)
- docs/analysis/concepts/addy/advisory-deprecation.md (1499 bytes)
- docs/analysis/concepts/addy/compulsory-deprecation.md (1693 bytes)
- docs/analysis/concepts/addy/deprecation-notice.md (1320 bytes)
- docs/analysis/concepts/addy/the-churn-rule.md (1523 bytes)
- docs/analysis/concepts/addy/strangler-pattern.md (1508 bytes)
- docs/analysis/concepts/addy/canary.md (1541 bytes)
- docs/analysis/concepts/addy/adapter-pattern.md (1466 bytes)
- docs/analysis/concepts/addy/feature-flag-migration.md (1439 bytes)
- docs/analysis/concepts/addy/database-schema-migrations.md (1492 bytes)
- docs/analysis/concepts/addy/expand-contract.md (1530 bytes)
- docs/analysis/concepts/addy/expand.md (1497 bytes)
- docs/analysis/concepts/addy/migrate.md (1527 bytes)
- docs/analysis/concepts/addy/contract.md (2292 bytes)
- docs/analysis/concepts/addy/dual-write.md (1366 bytes)
- docs/analysis/concepts/addy/backfill.md (1343 bytes)
- docs/analysis/concepts/addy/vertical-slice.md (1407 bytes)
- docs/analysis/concepts/addy/down-path.md (1381 bytes)
- docs/analysis/concepts/addy/zombie-code.md (1512 bytes)
- docs/analysis/concepts/addy/adrs.md (1487 bytes)
- docs/analysis/concepts/addy/madr.md (986 bytes)
- docs/analysis/concepts/addy/_units/cc-addy-37.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/addy/<slug>.md (exit 0, 54 PASS 0 FAIL)
- bun scripts/synthesis/coverage.ts (checked package addy clean, 0 empty required, 0 orphan cards, 0 addy index problems)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `canary` spans two skills: defined in `skills/shipping-and-launch/SKILL.md` (Step 4 of staged rollout) and cited in `skills/deprecation-and-migration/SKILL.md` (Phase 2 of the Strangler Pattern). Both occurrences are documented.
- `contract` spans two distinct domains and phases: in `skills/deprecation-and-migration/SKILL.md` (Ship phase), CONTRACT is Phase 3 of the Expand/Contract database migration pattern; in `skills/doubt-driven-development/SKILL.md` (Build phase), CONTRACT denotes the formal specification/constraints against which an artifact is cross-examined by a fresh-context reviewer. Both usages and all three occurrences are captured on the card.
- `MADR` was assigned `kind: name-only` with `(used, not defined)` since it is an external template format cited as an example repository convention rather than an internal lifecycle concept.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~15,200 tokens (~60.8 KB across 5 source files and 5 inventory cards).
Approximate tokens of output written: ~11,100 tokens (30 concept cards: 44,439 bytes; 1 unit report).
