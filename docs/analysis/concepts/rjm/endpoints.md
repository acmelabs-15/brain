---
package: rjm
name: Endpoints
slug: endpoints
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/API.template.md, sha256: 3492d04b69ed7d24618b208ea66caf4b3009d49c3df7a87bd16bcf81d4e3bdc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Endpoints

## Definition — verbatim
(used, not defined)

> "## Endpoints" — .claude/skills/codebase-documenter/assets/templates/API.template.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 26 | defined here | Core section heading organizing detailed documentation of individual HTTP API routes. |

## Consumes
Route definitions, query parameters, request schemas, status codes, and response payloads.

## Produces
Structured, exhaustive per-route technical documentation.

## When applied
Applied in API.template.md to document HTTP methods, path patterns, parameters, and responses.

## Sub-concepts
query-parameters, request-body, response-codes

## Part of
api-reference

## Implementation status
clean

## Design notes
Endpoints organizes the core specification of individual REST routes within API documentation. It establishes a uniform template structure for each endpoint—mandating HTTP verb and path, summary descriptions, query parameter tables, request body schemas, status-specific response examples, and machine-readable error codes.
