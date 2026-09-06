---
package: addy
name: API docs
slug: api-docs
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# API docs

## Definition — verbatim
(used, not defined)
> "Architecture Decision Records, API docs, and inline documentation standards - capture the context future engineers and agents need to understand the codebase." — external/documentation-and-adrs.md:5

## Also called — verbatim
> "API Documentation" — skills/documentation-and-adrs/SKILL.md:152

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/ci-cd-and-automation.md | 12 | used here | Listed in documentation-and-adrs related skill card |
| external/documentation-and-adrs.md | 1 | defined here | Included in meta description summarizing documentation-and-adrs |
| external/git-workflow-and-versioning.md | 12 | used here | Cited in documentation-and-adrs card in the Ship skills grid |

## Consumes
Public endpoints, library interfaces, type signatures, error responses, parameters.

## Produces
Type-annotated TSDoc/JSDoc comments and OpenAPI/Swagger schema documentation for public interfaces.

## When applied
When authoring or modifying public APIs, REST/GraphQL endpoints, or reusable library functions.

## Sub-concepts
none

## Part of
`none`

## Implementation status
clean

## Design notes
API docs provide machine-readable and human-readable specifications of interface contracts, parameter requirements, and error modes, enabling downstream consumers and coding agents to integrate reliably without guesswork.
