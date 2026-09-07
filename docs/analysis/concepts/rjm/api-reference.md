---
package: rjm
name: API Reference
slug: api-reference
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

# API Reference

## Definition — verbatim
(used, not defined)

> "# API Reference" — .claude/skills/codebase-documenter/assets/templates/API.template.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 1 | defined here | Title heading for the canonical REST/HTTP API documentation template. |

## Consumes
System endpoints, request/response schema specifications, authentication mechanisms, and rate limit rules.

## Produces
Standardized API reference documentation document (typically docs/API.md).

## When applied
Applied when bootstrapping or documenting public or internal HTTP/REST APIs within a repository.

## Sub-concepts
endpoints, error-format, rate-limits, conventions

## Part of
codebase-documenter

## Implementation status
clean

## Design notes
API Reference provides the structural skeleton for developer-facing REST API documentation. It ensures that every documented service includes baseline operational and developer experience essentials, including base URLs, authentication headers, standard HTTP status codes, cursor-based pagination, idempotency keys, unified error envelopes, rate limits, and language-specific client usage examples. Without this standardized template, API docs across teams would diverge in schema and omit critical failure handling guidance.
