---
package: addy
name: rollback
slug: rollback
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/doubt-driven-development/migration-plan.md, sha256: 544a19cd5387e2cd5e4968ba722eba3395cd949b815508e06f2181ccbfc1cc94}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# rollback

## Definition — verbatim
> "No rehearsal, row count, dependency inventory, restore timing, or rollback" — evals/fixtures/doubt-driven-development/migration-plan.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/doubt-driven-development/migration-plan.md | 18 | used here | Cited as a necessary recovery procedure and test requirement for safe deployment of database changes. |

## Consumes
Tested backup, snapshot, reverse migration script, or deployment version.

## Produces
Restored prior working state following a failed deployment or migration.

## When applied
When an operational migration, release, or deployment encounters unexpected failures or exceeds time budgets.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction

## Design notes
A critical release and operations technique enabling rapid restoration of prior operational state when changes fail, serving as a non-negotiable safety net in production changes.
