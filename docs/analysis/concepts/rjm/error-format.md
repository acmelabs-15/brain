---
package: rjm
name: Error Format
slug: error-format
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

# Error Format

## Definition — verbatim
> "All error responses share this shape:" — .claude/skills/codebase-documenter/assets/templates/API.template.md:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 100 | defined here | Template section establishing the universal JSON error response envelope. |

## Consumes
Application exceptions, HTTP error responses, and support tracing contexts.

## Produces
Consistent JSON error response payloads containing machine-readable codes and support request IDs.

## When applied
Applied to all 4xx and 5xx HTTP API error responses.

## Sub-concepts
error-code, request-id

## Part of
api-reference

## Implementation status
clean

## Design notes
Error Format standardizes the JSON envelope returned by all failing API calls into a unified structure (error.code, error.message, error.details, error.request_id). By ensuring that error representations never vary by route or failure type, it enables client libraries to implement predictable exception decoding and provides unique request correlation IDs for rapid debugging.
