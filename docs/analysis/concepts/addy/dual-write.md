---
package: addy
name: dual-write
slug: dual-write
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

# dual-write

## Definition — verbatim
> "dual-write old+new from" — skills/deprecation-and-migration/SKILL.md:171
> "2. **Dual-write.** App writes both `name` and `full_name` on every insert/update. Deploy." — skills/deprecation-and-migration/SKILL.md:178

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 171 | defines | Stated as part of the MIGRATE phase in database schema evolution. |

## Consumes
Expanded database schema containing old and new representations of a data field.

## Produces
Real-time consistency across both schema representations for all new and modified records.

## When applied
Applied during the MIGRATE phase of a database schema transition before switching application reads.

## Sub-concepts
none

## Part of
expand-contract, database-schema-migrations

## Implementation status
clean

## Design notes
A data migration technique where the application writes new and modified records to both the legacy and new schema locations concurrently. This ensures that new data is captured in the new format while old code paths remain fully functional and data consistency is maintained.
