---
package: addy
name: down path
slug: down-path
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

# down path

## Definition — verbatim
> "**Every migration has a tested down path.** A migration you can't reverse is a deploy you can't roll back. Write and run the `down` before merging." — skills/deprecation-and-migration/SKILL.md:187

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 187 | defines | Mandatory rule requiring verified rollback scripts for all database schema migrations. |

## Consumes
Forward database schema migration script and baseline production schema state.

## Produces
Automated and verified rollback script that reverses database schema changes cleanly during an operational failure.

## When applied
Applied and tested before merging any database schema migration or deployment artifact.

## Sub-concepts
none

## Part of
database-schema-migrations, deprecation-and-migration

## Implementation status
clean

## Design notes
A mandatory quality gate requiring that every database migration script include an executable, pre-tested rollback mechanism (`down`). A migration that cannot be reversed prevents rolling back application deploys, turning minor operational issues into catastrophic outages.
