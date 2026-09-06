---
package: addy
name: account data
slug: account-data
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/spec-driven-development-decomposition/portal-brief.md, sha256: 8c4a441acbd9c1826d2a67f8413e5bff4c57c29c525a0ae6cddf25b596e95de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# account data

## Definition — verbatim
(used, not defined)
> "- Billing must know who the customer is, so it depends on account data." — evals/fixtures/spec-driven-development-decomposition/portal-brief.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/spec-driven-development-decomposition/portal-brief.md | 16 | references | Customer entity state identified as a foundational dependency required by the billing system |

## Consumes
User registration records, organization tenant definitions, and membership rosters

## Produces
Authoritative customer identity records and profile state accessible by downstream modules

## When applied
Defined in the initial decomposition stage as a prerequisite entity before downstream billing or notification flows

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The core domain data entity capturing customer identity, organization ownership, and team structures; in Addy's spec decomposition evals, it demonstrates an upstream architectural dependency that must be established before dependent billing logic.
