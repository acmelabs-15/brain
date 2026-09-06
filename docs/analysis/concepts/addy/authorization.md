---
package: addy
name: Authorization
slug: authorization
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Authorization

## Definition — verbatim
(used, not defined)
> "Every resource access checks ownership/role (prevents IDOR)" — references/security-checklist.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 10 | defines | Checklist section defining access control requirements across endpoints and resources. |

## Consumes
Authenticated user contexts, request parameters, resource records, and assigned roles or permissions.

## Produces
Access enforcement decisions preventing unauthorized viewing, modification, or escalation of privileges.

## When applied
Evaluated on every endpoint call accessing or modifying protected application resources.

## Sub-concepts
idor

## Part of
security-checklist, security-and-hardening

## Implementation status
clean

## Design notes
Authorization determines whether an authenticated entity is permitted to access a specific resource or perform an action. Addy requires that every protected endpoint verify ownership or roles to eliminate Insecure Direct Object References (IDOR), that admin interfaces require explicit role checks, and that JWTs and API keys adhere strictly to least privilege and signature verification.
