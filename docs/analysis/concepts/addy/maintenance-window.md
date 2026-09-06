---
package: addy
name: maintenance window
slug: maintenance-window
kind: pattern
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

# maintenance window

## Definition — verbatim
> "- The operation completes within the maintenance window." — evals/fixtures/doubt-driven-development/migration-plan.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/doubt-driven-development/migration-plan.md | 14 | used here | Cited as a scheduled operational duration constraint for performing disruptive database migrations. |

## Consumes
Scheduled downtime schedule, traffic drain, or write-disabling mechanism.

## Produces
Bounded operational window for executing breaking schema changes or infrastructure upgrades.

## When applied
When performing high-risk, non-zero-downtime maintenance or migrations requiring write cessation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction

## Design notes
An operational release pattern establishing a scheduled time block during which normal system availability guarantees are temporarily paused to conduct breaking migrations.
