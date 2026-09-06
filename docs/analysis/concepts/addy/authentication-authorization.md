---
package: addy
name: Authentication & Authorization
slug: authentication-authorization
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

# Authentication & Authorization

## Definition — verbatim
> "### 2. Authentication & Authorization" — agents/security-auditor.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 19 | defines | Defines the audit checklist for password hashing, session cookies, and endpoint authorization |

## Consumes
Authentication endpoints, session management configs, and access-control checks.

## Produces
Security evaluation of credential storage, token lifecycles, and endpoint permission enforcement.

## When applied
Applied during security audits on all protected endpoints, login paths, and role-gated routes.

## Sub-concepts
idor

## Part of
review-scope

## Implementation status
clean

## Design notes
Ensures that security reviews rigorously verify identity confirmation and access permissions across all protected resources, protecting against broken object level authorization and authentication bypasses.
