---
unit: inv-addy-41
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-41

## Files assigned
- [x] sources/addy/skills/deprecation-and-migration/SKILL.md (12516 bytes, 248 lines)
- [x] sources/addy/skills/documentation-and-adrs/SKILL.md (9782 bytes, 289 lines)
- [x] sources/addy/skills/doubt-driven-development/SKILL.md (16499 bytes, 244 lines)
- [x] sources/addy/skills/frontend-ui-engineering/SKILL.md (10711 bytes, 329 lines)

## Outputs produced
- docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md (6817 bytes)
- docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md (5458 bytes)
- docs/analysis/inventory/addy/skills-doubt-driven-development-skill-md.md (6331 bytes)
- docs/analysis/inventory/addy/skills-frontend-ui-engineering-skill-md.md (6069 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-41.md (2607 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/deprecation-and-migration/SKILL.md` (inv-addy-41) invokes `skills/incremental-implementation/SKILL.md` (inv-addy-39) for thin vertical slicing of database schema migration phases (Expand, Dual-write, Backfill, Switch reads, Contract).
- `skills/doubt-driven-development/SKILL.md` (inv-addy-41) invokes `references/orchestration-patterns.md` (inv-addy-30) to enforce that personas must not invoke other personas, and references companion skills `code-review-and-quality` (inv-addy-37), `source-driven-development` (inv-addy-44), `test-driven-development` (inv-addy-11), and `debugging-and-error-recovery` (inv-addy-38).
- `skills/frontend-ui-engineering/SKILL.md` (inv-addy-41) mutually cross-references `references/accessibility-checklist.md` (inv-addy-29) for WCAG 2.1 AA compliance standards and verification tooling.
- `skills/documentation-and-adrs/SKILL.md` (inv-addy-41) provides the repository-standard ADR template and convention matching logic referenced by `references/definition-of-done.md` (inv-addy-29) and `commands/ship.toml` (inv-addy-1).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,400 tokens (49,508 bytes across 4 files)
Approximate tokens of output written: ~6,800 tokens (27,282 bytes across 5 deliverables)
