---
unit: cc-rjm-211
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-211

## Files assigned
- [x] sources/rjm/.claude/skills/software-engineering-library/references/domain-driven-design.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/enterprise-patterns.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-domain-driven-design-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-enterprise-patterns-md.md

## Outputs produced
- docs/analysis/concepts/rjm/domain-service.md (1414 bytes)
- docs/analysis/concepts/rjm/anti-corruption-layer.md (1953 bytes)
- docs/analysis/concepts/rjm/acl.md (1366 bytes)
- docs/analysis/concepts/rjm/context-map.md (1654 bytes)
- docs/analysis/concepts/rjm/customer-supplier.md (1533 bytes)
- docs/analysis/concepts/rjm/conformist.md (1369 bytes)
- docs/analysis/concepts/rjm/shared-kernel.md (1408 bytes)
- docs/analysis/concepts/rjm/partnership.md (1398 bytes)
- docs/analysis/concepts/rjm/open-host-service.md (1497 bytes)
- docs/analysis/concepts/rjm/subdomain-classification.md (1477 bytes)
- docs/analysis/concepts/rjm/aggregates.md (1413 bytes)
- docs/analysis/concepts/rjm/entities-and-value-objects.md (1435 bytes)
- docs/analysis/concepts/rjm/domain-events.md (1445 bytes)
- docs/analysis/concepts/rjm/domain-services.md (1417 bytes)
- docs/analysis/concepts/rjm/context-mapping.md (1517 bytes)
- docs/analysis/concepts/rjm/god-aggregate.md (1466 bytes)
- docs/analysis/concepts/rjm/single-database-single-model.md (1504 bytes)
- docs/analysis/concepts/rjm/generic-subdomain-glamour.md (1483 bytes)
- docs/analysis/concepts/rjm/leaky-boundary.md (1405 bytes)
- docs/analysis/concepts/rjm/command-disguised-as-event.md (1482 bytes)
- docs/analysis/concepts/rjm/pattern-stacking.md (1771 bytes)
- docs/analysis/concepts/rjm/boundaries-with-existing-codebase.md (1066 bytes)
- docs/analysis/concepts/rjm/patterns-of-enterprise-application-architecture.md (1843 bytes)
- docs/analysis/concepts/rjm/peaa.md (1484 bytes)
- docs/analysis/concepts/rjm/domain-object.md (1414 bytes)
- docs/analysis/concepts/rjm/data-mapper.md (1496 bytes)
- docs/analysis/concepts/rjm/identity-map.md (1478 bytes)
- docs/analysis/concepts/rjm/active-record.md (1372 bytes)
- docs/analysis/concepts/rjm/transaction-script.md (1414 bytes)
- docs/analysis/concepts/rjm/smart-ui.md (1583 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-211.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/domain-service.md docs/analysis/concepts/rjm/anti-corruption-layer.md docs/analysis/concepts/rjm/acl.md docs/analysis/concepts/rjm/context-map.md docs/analysis/concepts/rjm/customer-supplier.md docs/analysis/concepts/rjm/conformist.md docs/analysis/concepts/rjm/shared-kernel.md docs/analysis/concepts/rjm/partnership.md docs/analysis/concepts/rjm/open-host-service.md docs/analysis/concepts/rjm/subdomain-classification.md docs/analysis/concepts/rjm/aggregates.md docs/analysis/concepts/rjm/entities-and-value-objects.md docs/analysis/concepts/rjm/domain-events.md docs/analysis/concepts/rjm/domain-services.md docs/analysis/concepts/rjm/context-mapping.md docs/analysis/concepts/rjm/god-aggregate.md docs/analysis/concepts/rjm/single-database-single-model.md docs/analysis/concepts/rjm/generic-subdomain-glamour.md docs/analysis/concepts/rjm/leaky-boundary.md docs/analysis/concepts/rjm/command-disguised-as-event.md docs/analysis/concepts/rjm/pattern-stacking.md docs/analysis/concepts/rjm/boundaries-with-existing-codebase.md docs/analysis/concepts/rjm/patterns-of-enterprise-application-architecture.md docs/analysis/concepts/rjm/peaa.md docs/analysis/concepts/rjm/domain-object.md docs/analysis/concepts/rjm/data-mapper.md docs/analysis/concepts/rjm/identity-map.md docs/analysis/concepts/rjm/active-record.md docs/analysis/concepts/rjm/transaction-script.md docs/analysis/concepts/rjm/smart-ui.md` (exit code 0, 42 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-211 covers 30 concept cards across two core software engineering references in `rjm`:
  1. Domain-Driven Design concepts from `domain-driven-design.md`:
     - Tactical and strategic patterns: `domain-service`, `anti-corruption-layer`, `acl`, `context-map`, `customer-supplier`, `conformist`, `shared-kernel`, `partnership`, `open-host-service`, `subdomain-classification`, `aggregates`, `entities-and-value-objects`, `domain-events`, `domain-services`, `context-mapping`.
     - DDD anti-patterns: `god-aggregate`, `single-database-single-model`, `generic-subdomain-glamour`, `leaky-boundary`, `command-disguised-as-event`, `pattern-stacking`.
     - Codebase contextual section: `boundaries-with-existing-codebase` authored as `kind: name-only` per D-023.
  2. Enterprise Application Architecture patterns from `enterprise-patterns.md`:
     - Reference foundations: `patterns-of-enterprise-application-architecture`, `peaa`.
     - Architectural patterns: `domain-object`, `data-mapper`, `identity-map`, `active-record`, `transaction-script`.
     - Anti-pattern: `smart-ui`.
- All 32 occurrences listed in `facts/cc-rjm-211.txt` have corresponding rows in `Where used` tables.
- All inventory entries report `Defects: none`, resulting in `Implementation status: clean` across all cards.
- All 30 concept cards pass `quote-check.ts` with zero failures (42 citations verified byte-exact).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,000 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 unit report.
