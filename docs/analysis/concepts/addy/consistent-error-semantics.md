---
package: addy
name: Consistent Error Semantics
slug: consistent-error-semantics
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

# Consistent Error Semantics

## Definition — verbatim
> "Pick one error strategy and use it everywhere:" — skills/api-and-interface-design/SKILL.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 61 | defined here | Core principle 2 mandating a uniform error representation across all API endpoints |

## Consumes
HTTP status code standards, error response schemas (`APIError`).

## Produces
Uniform error responses containing structured machine-readable error codes, human-readable messages, and optional contextual details.

## When applied
Across all API route handlers, RPC methods, and service error boundaries.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Consistent Error Semantics enforces a uniform error envelope across an entire service surface. Mixing disparate error patterns (such as returning null, throwing unexpected exceptions, or varying JSON envelope shapes) breaks consumer predictability and complicates client recovery logic.
