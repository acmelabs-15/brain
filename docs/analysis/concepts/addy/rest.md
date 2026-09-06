---
package: addy
name: REST
slug: rest
kind: reference
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# REST

## Definition — verbatim
(used, not defined)
> "Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." — external/api-and-interface-design.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/api-and-interface-design.md | 1 | used here | Cited as an API paradigm governed by contract-first design and boundary validation. |

## Consumes
HTTP protocol and resource model.

## Produces
Resource-oriented HTTP interfaces.

## When applied
When designing HTTP-based public endpoints or microservice APIs.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
defects: doc-drift

## Design notes
Representational State Transfer (REST) serves as an architectural style for HTTP APIs in addy, targeted for contract-first design and strict boundary validation.
