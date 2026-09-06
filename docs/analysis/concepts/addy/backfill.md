---
package: addy
name: backfill
slug: backfill
kind: technique
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

# backfill

## Definition — verbatim
> "backfill existing rows," — skills/deprecation-and-migration/SKILL.md:170
> "3. **Backfill.** Copy `name → full_name` for existing rows, in batches, so you don't lock the table." — skills/deprecation-and-migration/SKILL.md:179

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 170 | defines | Stated as part of the MIGRATE phase in database schema evolution. |

## Consumes
Existing table rows lacking populated values in the newly expanded schema column.

## Produces
Populated historical data in the new column without table locking or performance degradation.

## When applied
Applied during the MIGRATE phase after dual-writing is active and before switching application reads.

## Sub-concepts
none

## Part of
expand-contract, database-schema-migrations

## Implementation status
clean

## Design notes
A background data migration process copying legacy data to new columns for historical rows. It must execute in throttled batches off the hot path to avoid exclusive table locks, connection pool exhaustion, or production query latency spikes.
