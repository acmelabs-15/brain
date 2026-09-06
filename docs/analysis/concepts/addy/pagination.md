---
package: addy
name: Pagination
slug: pagination
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: skills/api-and-interface-design/SKILL.md, sha256: 5dafd0c44a3aabf11cae5bcb34f6fcc24dfa5c01ba6e0d3176bce997f4d68bc8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pagination

## Definition — verbatim
> "Paginate list endpoints:" — skills/api-and-interface-design/SKILL.md:234

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 232 | defined here | Specifies standard query parameters and structured JSON response pagination envelope |

## Consumes
Request query parameters (`page`, `pageSize`, `sortBy`, `sortOrder`), collection datasets.

## Produces
Structured JSON response payloads separating item arrays from pagination metadata (`page`, `pageSize`, `totalItems`, `totalPages`).

## When applied
On all list and collection query endpoints from their initial design to prevent unbounded responses.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Pagination enforces bounded data retrieval across all collection endpoints. Designing pagination into endpoints from inception protects system performance and client responsiveness as datasets grow, preventing server memory bloat and network degradation.
