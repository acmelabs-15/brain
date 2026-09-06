---
package: addy
name: OpenAPI / Swagger
slug: openapi-swagger
kind: reference
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

# OpenAPI / Swagger

## Definition — verbatim
(used, not defined)
> "OpenAPI / Swagger for REST APIs" — skills/documentation-and-adrs/SKILL.md:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 176 | used here | Section heading illustrating standard YAML schema definitions for REST endpoints and request/response payloads. |

## Consumes
REST endpoint paths, HTTP methods, request bodies, query parameters, and response schemas.

## Produces
Standardized OpenAPI / Swagger YAML or JSON schema specifications.

## When applied
Used when documenting public REST APIs to support automated schema validation, documentation generation, and client SDK generation.

## Sub-concepts
none

## Part of
api-documentation

## Implementation status
clean

## Design notes
`OpenAPI / Swagger` defines declarative, machine-readable specifications for REST interfaces, serving as an authoritative contract that eliminates ambiguities in endpoint parameters, response payloads, and validation error models.
