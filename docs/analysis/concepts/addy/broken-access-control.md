---
package: addy
name: Broken Access Control
slug: broken-access-control
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Broken Access Control

## Definition — verbatim
> "// Always check authorization, not just authentication" — skills/security-and-hardening/SKILL.md:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 179 | references | Ranked as OWASP Top 10 #1 vulnerability requiring auth checks on every endpoint and ownership verification. |
| skills/security-and-hardening/SKILL.md | 130 | defines | Prevention section demonstrating route-level resource ownership checks returning 403 Forbidden. |

## Consumes
User authentication tokens, route parameters, resource identifiers, and database ownership records.

## Produces
Granular authorization checks preventing unauthorized cross-user resource access or modification.

## When applied
Enforced on every route handler that reads, updates, or deletes resources tied to tenants or users.

## Sub-concepts
idor

## Part of
owasp-top-10-quick-reference, security-and-hardening

## Implementation status
clean

## Design notes
Broken Access Control (OWASP A01) occurs when software fails to properly enforce user permissions, allowing unauthorized users to access, modify, or delete protected resources. Addy emphasizes that authentication alone is insufficient: applications must verify that the authenticated subject explicitly possesses ownership or role clearance for the target entity on every single endpoint invocation.
