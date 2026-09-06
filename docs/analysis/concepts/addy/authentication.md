---
package: addy
name: Authentication
slug: authentication
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

# Authentication

## Definition — verbatim
(used, not defined)
> "Passwords hashed with bcrypt (≥12 rounds), scrypt, or argon2" — references/security-checklist.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 9 | defines | Checklist section prescribing standards for password hashing, session cookies, rate limiting, and reset tokens. |

## Consumes
User credentials, authentication endpoints, session stores, and token generation facilities.

## Produces
Verified user identity assertions, secure session cookies, and rate-limited authentication flows.

## When applied
Applied when designing, implementing, or auditing user login, session management, or password reset features.

## Sub-concepts
none

## Part of
security-checklist, security-and-hardening

## Implementation status
clean

## Design notes
Authentication verifies the identity of users and services requesting access to the system. Addy outlines explicit defensive baselines including robust password hashing algorithms (bcrypt ≥12 rounds, scrypt, argon2), secure cookie parameters (`httpOnly`, `secure`, `sameSite: 'lax'`), strict login rate limiting (≤10 attempts per 15 minutes), and single-use password reset tokens to prevent credential stuffing and session theft.
