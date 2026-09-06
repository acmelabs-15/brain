---
package: addy
name: Review Scope
slug: review-scope
kind: checklist
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Review Scope

## Definition — verbatim
> "## Review Scope" — agents/security-auditor.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 10 | defines | Section heading establishing the five core focus areas for security audits |

## Consumes
Code changes, endpoints, data access patterns, and dependencies.

## Produces
Systematic security evaluation covering input handling, authentication, sensitive data, dependencies, and business logic.

## When applied
Used by the `security-auditor` persona during security reviews.

## Sub-concepts
input-handling, authentication-authorization, idor

## Part of
personas

## Implementation status
clean

## Design notes
Defines the exhaustive checklist of security inspection dimensions used by the security auditor persona to identify exploitable vulnerabilities rather than theoretical risks.
