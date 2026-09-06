---
package: addy
name: change-data capture
slug: change-data-capture
kind: technique
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

# change-data capture

## Definition — verbatim
> "3. Use database change-data capture as the audit history." — evals/fixtures/documentation-and-adrs/decision-context.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/documentation-and-adrs/decision-context.md | 11 | used here | Evaluated as an architectural option for capturing database mutation streams for audit history. |

## Consumes
Database transaction logs or mutation events.

## Produces
Stream of database mutation events for external audit replication and history.

## When applied
When audit history must be extracted from existing database transactions without modifying application write paths.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An architectural integration technique that observes and extracts committed row-level database changes into an audit stream, avoiding application-level audit logging code at the cost of operational coupling.
