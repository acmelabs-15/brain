---
package: addy
name: MIGRATE
slug: migrate
kind: phase
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# MIGRATE

## Definition — verbatim
> "EXPAND ──────────────→ MIGRATE ──────────────→ CONTRACT" — skills/deprecation-and-migration/SKILL.md:169
> "3. **Backfill.** Copy `name → full_name` for existing rows, in batches, so you don't lock the table." — skills/deprecation-and-migration/SKILL.md:179

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 169 | defines | Phase 2 of Expand/Contract performing dual-writes, batch backfills, and switching read queries. |

## Consumes
Expanded database schema containing both legacy and new structures concurrently.

## Produces
Synchronized data across both columns/tables, completed backfill of historical rows, and application reads switched to the new structure.

## When applied
The intermediate data-synchronization phase between schema expansion and legacy column contraction.

## Sub-concepts
dual-write, backfill

## Part of
expand-contract, database-schema-migrations

## Implementation status
clean

## Design notes
The intermediate operational phase of Expand/Contract where applications dual-write to both old and new schema fields, historical records are backfilled off the hot path in throttled batches, and application reads are safely redirected to the new shape.
