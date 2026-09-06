---
package: addy
name: invoice reconciliation
slug: invoice-reconciliation
kind: gate
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/spec-driven-development/billing-brief.md, sha256: 097d44d7ea2cfe9d93257b2d9052e89b5c993c1775d3d2232ae43445a218740f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# invoice reconciliation

## Definition — verbatim
(used, not defined)
> "- Finance requires invoice reconciliation." — evals/fixtures/spec-driven-development/billing-brief.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/spec-driven-development/billing-brief.md | 12 | references | Mandatory finance constraint requiring billing totals to match auditable underlying events |

## Consumes
Auditable event logs, rating calculation records, and itemized customer invoices

## Produces
Reconciliation reports verifying mathematical parity between raw usage records and billed line items

## When applied
Enforced during billing design and executed continuously across billing periods before issuing customer invoices

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A verification gate ensuring invoice line items balance exactly against auditable consumption events; in Addy's evaluation fixture, it imposes constraints on event idempotency and late-arriving event handling that specs must account for.
