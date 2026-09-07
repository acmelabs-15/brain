---
package: rjm
name: Pagination
slug: pagination
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

# Pagination

## Definition — verbatim
> "Cursor-based via `next_cursor` in the response and `cursor` query parameter on the next call." — .claude/skills/codebase-documenter/assets/templates/API.template.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 24 | defined here | Defines the standard cursor-based pagination mechanism for collection-returning endpoints. |

## Consumes
Large query result sets and client-provided cursor tokens.

## Produces
Deterministic chunked result sets accompanied by next_cursor tokens.

## When applied
Applied to all API list and collection query endpoints that return unbounded datasets.

## Sub-concepts
cursor-pagination, next-cursor

## Part of
conventions, api-reference

## Implementation status
clean

## Design notes
Pagination mandates cursor-based result streaming over offset-based pagination. By using opaque cursors (next_cursor in responses, cursor in query parameters), rjm ensures consistent query performance and eliminates missing or duplicate item anomalies that occur when underlying data is inserted or deleted between paginated requests.
