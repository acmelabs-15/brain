---
package: addy
name: Auth Failures
slug: auth-failures
kind: reference
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

# Auth Failures

## Definition — verbatim
(used, not defined)
> "| 7 | Auth Failures | Strong passwords, rate limiting, session management |" — references/security-checklist.md:185

## Also called — verbatim
"Broken Authentication" — skills/security-and-hardening/SKILL.md:92

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 185 | references | Listed as OWASP #7 risk mitigated through strong password requirements, rate limiting, and session security. |

## Consumes
User authentication endpoints, credential stores, session cookies, and login attempts.

## Produces
Protected authentication endpoints with rate limits, secure session cookies, and strong password hashing.

## When applied
When designing or reviewing authentication mechanisms, login routes, or session management logic.

## Sub-concepts
authentication

## Part of
owasp-top-10-quick-reference, security-checklist

## Implementation status
clean

## Design notes
Identification and Authentication Failures (OWASP A07) occur when authentication mechanisms permit brute-force credential guessing, use weak hashing schemes, or manage sessions insecurely. Addy prescribes strong password hashing algorithms, secure cookie flags (`httpOnly`, `secure`, `sameSite`), strict rate limiting on authentication routes, and short-lived password reset tokens.
