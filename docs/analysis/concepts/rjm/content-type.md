---
package: rjm
name: Content type
slug: content-type
kind: pattern
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

# Content type

## Definition — verbatim
> "`application/json; charset=utf-8` for both request and response unless noted." — .claude/skills/codebase-documenter/assets/templates/API.template.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 21 | defined here | Defines the standard MIME type and character encoding required for HTTP requests and responses. |

## Consumes
HTTP request payloads and serialized response data.

## Produces
Consistent Content-Type headers on HTTP interactions.

## When applied
Applied as the default media type contract for all REST endpoints unless a specific binary format is required.

## Sub-concepts
json, mime-type

## Part of
conventions, api-reference

## Implementation status
clean

## Design notes
Content type establishes application/json; charset=utf-8 as the universal payload serialization standard across REST APIs. Enforcing this uniform MIME specification prevents parsing ambiguities, charset mismatch defects, and content-negotiation failures between diverse client runtimes.
