---
package: rjm
name: Rate Limits
slug: rate-limits
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

# Rate Limits

## Definition — verbatim
(used, not defined)

> "## Rate Limits" — .claude/skills/codebase-documenter/assets/templates/API.template.md:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 114 | defined here | Template section detailing request throughput tiers, burst capacity, and throttling headers. |

## Consumes
Service capacity constraints, API tier definitions, and quota tracking state.

## Produces
Documented request rate limits and HTTP 429 response contracts with retry headers.

## When applied
Applied when designing and documenting multi-tier API usage policies.

## Sub-concepts
retry-after, x-ratelimit-remaining

## Part of
api-reference

## Implementation status
clean

## Design notes
Rate Limits specifies API quota policies across consumption tiers (requests per minute and burst limits) and documents the response headers (X-RateLimit-Remaining, Retry-After) that clients must observe. Documenting these limits explicitly prevents denial-of-service degradation and sets unambiguous throttling expectations for client retry policies.
