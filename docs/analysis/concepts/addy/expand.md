---
package: addy
name: EXPAND
slug: expand
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

# EXPAND

## Definition — verbatim
> "EXPAND ──────────────→ MIGRATE ──────────────→ CONTRACT" — skills/deprecation-and-migration/SKILL.md:169
> "add the new column," — skills/deprecation-and-migration/SKILL.md:170
> "1. **Expand.** Add `full_name` as nullable. Deploy. (Old code ignores it; nothing breaks.)" — skills/deprecation-and-migration/SKILL.md:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 169 | defines | Phase 1 of Expand/Contract adding new nullable column alongside the old one. |

## Consumes
Target database schema design requiring new fields, tables, or structural changes.

## Produces
Additive database migration script adding nullable or optional structures that existing production code safely ignores.

## When applied
The first step in any database schema modification sequence.

## Sub-concepts
none

## Part of
expand-contract, database-schema-migrations

## Implementation status
clean

## Design notes
The initial, purely additive phase of the Expand/Contract database migration pattern. Adding new columns as nullable or creating new tables ensures that existing production code continues functioning without error while new infrastructure is established.
