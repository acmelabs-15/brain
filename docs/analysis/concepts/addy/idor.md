---
package: addy
name: IDOR
slug: idor
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# IDOR

## Definition — verbatim
(used, not defined)
> "- Can users access resources belonging to other users (IDOR)?" — agents/security-auditor.md:23

## Also called — verbatim
> "- [ ] Every resource access checks ownership/role (prevents IDOR)" — references/security-checklist.md:49

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 23 | references | Audit question asking whether users can access resources belonging to other users |
| references/security-checklist.md | 49 | references | Security checklist item ensuring resource access verifies ownership/role to prevent IDOR |

## Consumes
Resource endpoints that accept identifiers (e.g. IDs, UUIDs) in URLs or request payloads.

## Produces
Audit findings checking that object-level ownership checks are enforced on every request.

## When applied
Applied during security reviews whenever endpoints expose access to specific entities or documents.

## Sub-concepts
none

## Part of
authentication-authorization, review-scope

## Implementation status
clean

## Design notes
Insecure Direct Object References (IDOR) represent a critical vulnerability pattern where access control checks fail to verify that the requesting user owns the requested record ID; addy's security checklists explicitly audit for ownership checks on every access.
