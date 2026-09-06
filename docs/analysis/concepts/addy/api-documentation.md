---
package: addy
name: API Documentation
slug: api-documentation
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# API Documentation

## Definition — verbatim
> "For public APIs (REST, GraphQL, library interfaces):" — skills/documentation-and-adrs/SKILL.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 152 | defined here | Main section heading outlining documentation standards for public interfaces, types, and REST schemas. |

## Consumes
Public endpoints, library functions, parameter signatures, return types, and potential error exceptions.

## Produces
Inline type docstrings (TSDoc/JSDoc) with examples and OpenAPI / Swagger schema specifications.

## When applied
Applied whenever developing, publishing, or modifying public REST APIs, GraphQL endpoints, or exportable libraries.

## Sub-concepts
openapi-swagger

## Part of
none

## Implementation status
clean

## Design notes
`API Documentation` mandates precise, typed interface definitions and schemas for all public interfaces, ensuring human developers and autonomous agents can consume services without guesswork or misinterpretation of input contracts.
