---
package: addy
name: audit table
slug: audit-table
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/documentation-and-adrs/decision-context.md, sha256: d7c35e0ff7c16b0716076df5513d18fe3569c0ea32d5756295ae0d47c8ec6de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# audit table

## Definition — verbatim
> "1. Keep the current model and add an append-only audit table." — evals/fixtures/documentation-and-adrs/decision-context.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/documentation-and-adrs/decision-context.md | 9 | used here | Considered as an architectural persistence option for storing an append-only record of order state transitions. |

## Consumes
State transition mutations and relational schema definitions.

## Produces
Append-only history of state records for point-in-time auditing.

## When applied
When historical auditing and state reconstruction are required without adopting full event sourcing.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An architectural persistence pattern maintaining an immutable log of state transitions within a relational database to satisfy compliance and support reconstruction requirements.
