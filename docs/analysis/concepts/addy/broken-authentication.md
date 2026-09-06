---
package: addy
name: Broken Authentication
slug: broken-authentication
kind: pattern
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

# Broken Authentication

## Definition — verbatim
(used, not defined)

> "### Broken Authentication" — skills/security-and-hardening/SKILL.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/security-and-hardening/SKILL.md | 92 | defined here | Cataloged as an OWASP vulnerability pattern mitigated by secure password hashing and session cookies |

## Consumes
User credentials, authentication endpoints, session storage.

## Produces
Strong cryptographic password hashing (bcrypt with salt rounds ≥ 12) and secure session cookies (httpOnly, secure, sameSite).

## When applied
When reviewing or implementing authentication flows, session handling, password management, and credential verification.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
Broken authentication encompasses security flaws allowing adversaries to compromise user passwords, session tokens, or identity credentials. Addy provides defensive patterns requiring slow cryptographic hashing (bcrypt/argon2) and hardened cookie-based session stores (`httpOnly`, `secure`, `sameSite: 'lax'`) to prevent token theft and impersonation attacks.
