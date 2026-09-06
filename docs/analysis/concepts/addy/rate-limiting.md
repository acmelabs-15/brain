---
package: addy
name: Rate Limiting
slug: rate-limiting
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Rate Limiting

## Definition — verbatim
(used, not defined)

> "## Rate Limiting" — skills/security-and-hardening/SKILL.md:312

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/security-and-hardening/SKILL.md | 312 | defined here | Implemented as a traffic throttling technique to protect APIs and authentication routes against abuse and brute-force attacks |

## Consumes
Inbound HTTP requests, client IP addresses or user identifiers, endpoint route definitions.

## Produces
Time-window request counters, standard rate limit HTTP headers, and 429 Too Many Requests response rejections.

## When applied
Configured globally across public API routes with stricter thresholds applied to authentication and password reset endpoints.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
Rate limiting restricts the frequency of requests an individual client can execute within a specified time window. In addy, rate limiting provides critical defense against denial of service, credential stuffing, and brute-force authentication attacks, establishing tiered request budgets across general and sensitive API endpoints.
