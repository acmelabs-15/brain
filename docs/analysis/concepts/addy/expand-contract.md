---
package: addy
name: Expand/Contract
slug: expand-contract
kind: pattern
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

# Expand/Contract

## Definition — verbatim
> "### Database Schema Migrations (Expand/Contract)" — skills/deprecation-and-migration/SKILL.md:164
> "EXPAND ──────────────→ MIGRATE ──────────────→ CONTRACT" — skills/deprecation-and-migration/SKILL.md:169

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 164 | defines | Core pattern cited for database schema migrations to avoid breaking running code during rollouts. |

## Consumes
Target schema transformation requiring column or table structural changes.

## Produces
Three-phase migration sequence ensuring old and new application code versions remain valid simultaneously.

## When applied
Applied when executing any breaking database schema alteration in production environments.

## Sub-concepts
expand, migrate, contract

## Part of
database-schema-migrations, deprecation-and-migration

## Implementation status
clean

## Design notes
The foundational architectural pattern for zero-downtime database evolution. By dividing schema transitions into additive expansion (new nullable column), data migration (dual-write and backfill), and deferred contraction (dropping old column), it guarantees system stability across multi-version rollout windows.
