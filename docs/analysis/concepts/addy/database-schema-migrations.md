---
package: addy
name: Database Schema Migrations
slug: database-schema-migrations
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

# Database Schema Migrations

## Definition — verbatim
> "The fix is to **never change a column in place**. Migrate in additive phases so old and new code are both valid at every step." — skills/deprecation-and-migration/SKILL.md:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 164 | defines | Section heading and discipline governing zero-downtime, reversible database schema evolution. |

## Consumes
Existing relational database schema, target data structure, and persistent production data.

## Produces
Multi-stage additive migration scripts with tested down paths that preserve backward compatibility across deploys.

## When applied
Applied when adding, altering, or dropping database tables, columns, indexes, or relationships in production.

## Sub-concepts
expand-contract, expand, migrate, contract, dual-write, backfill, down-path

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
A zero-downtime database evolution discipline mandating phased, additive schema modifications. Because production data cannot be rolled back simply by reverting a code deploy, schema changes must be decoupled from application code changes through expand/contract phases.
