---
unit: cc-rjm-208
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-208

## Files assigned
- [x] .claude/skills/slo-designer/SKILL.md
- [x] .claude/skills/slo-designer/templates/slo-config-template.yaml
- [x] .claude/skills/software-engineering-library/references/clean-architecture.md
- [x] .claude/skills/software-engineering-library/references/domain-driven-design.md
- [x] .claude/skills/software-engineering-library/references/enterprise-patterns.md
- [x] .claude/skills/spec-generator/references/spec-prior-art-schema.md

## Outputs produced
- docs/analysis/concepts/rjm/output-template.md (900 bytes)
- docs/analysis/concepts/rjm/slo-configuration-template.md (1476 bytes)
- docs/analysis/concepts/rjm/service.md (975 bytes)
- docs/analysis/concepts/rjm/user-journeys.md (1004 bytes)
- docs/analysis/concepts/rjm/slis.md (1328 bytes)
- docs/analysis/concepts/rjm/alerts.md (973 bytes)
- docs/analysis/concepts/rjm/dependency-rule.md (1786 bytes)
- docs/analysis/concepts/rjm/the-dependency-rule.md (1128 bytes)
- docs/analysis/concepts/rjm/frameworks-and-drivers.md (1646 bytes)
- docs/analysis/concepts/rjm/interface-adapters.md (1679 bytes)
- docs/analysis/concepts/rjm/use-cases.md (1641 bytes)
- docs/analysis/concepts/rjm/application-services.md (1545 bytes)
- docs/analysis/concepts/rjm/entities.md (1528 bytes)
- docs/analysis/concepts/rjm/abstract-ports.md (1582 bytes)
- docs/analysis/concepts/rjm/adapter-seams.md (1367 bytes)
- docs/analysis/concepts/rjm/invariants.md (1222 bytes)
- docs/analysis/concepts/rjm/anemic-domain-model.md (2100 bytes)
- docs/analysis/concepts/rjm/use-case.md (1544 bytes)
- docs/analysis/concepts/rjm/unit-of-work.md (1845 bytes)
- docs/analysis/concepts/rjm/adapters.md (1728 bytes)
- docs/analysis/concepts/rjm/wire-format.md (1424 bytes)
- docs/analysis/concepts/rjm/to-domain.md (1359 bytes)
- docs/analysis/concepts/rjm/to-record.md (1347 bytes)
- docs/analysis/concepts/rjm/boundary-protection.md (1525 bytes)
- docs/analysis/concepts/rjm/direction-by-name.md (1506 bytes)
- docs/analysis/concepts/rjm/plain-types-at-the-seam.md (1467 bytes)
- docs/analysis/concepts/rjm/one-owner-per-concept.md (1487 bytes)
- docs/analysis/concepts/rjm/explicit-ports.md (1584 bytes)
- docs/analysis/concepts/rjm/no-ambient-access.md (1428 bytes)
- docs/analysis/concepts/rjm/tests-respect-direction.md (1457 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-208.md (3975 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-208 covers 30 concepts extracted from `slo-designer`, `spec-generator`, and `software-engineering-library` (Clean Architecture, DDD, and Enterprise Patterns references).
- Concepts spanning multiple source files (`Anemic Domain Model`, `unit of work`, `slis`) have all occurrences recorded in their `Where used` tables and reflect defects from all citing inventory cards.
- Non-lifecycle concepts (section headings `Output Template` and `The Dependency Rule`, and YAML configuration property keys `service`, `user_journeys`, `slis`, `alerts`) were classified as `kind: name-only` per METHOD §5 Phase 2 and D-023.
- All 30 concept cards pass `bun scripts/synthesis/quote-check.ts` with 41 PASS, 0 FAIL, 0 MISSING source across 30 cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~36,000 tokens across 6 assigned source files and 6 citing inventory cards; approximate tokens of output written: ~11,800 tokens across 30 concept cards and this unit report.
