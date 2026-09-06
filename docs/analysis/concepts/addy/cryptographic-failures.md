---
package: addy
name: Cryptographic Failures
slug: cryptographic-failures
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

# Cryptographic Failures

## Definition — verbatim
(used, not defined)
> "| 2 | Cryptographic Failures | HTTPS, strong hashing, no secrets in code |" — references/security-checklist.md:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 180 | references | Listed as OWASP #2 risk mitigated by HTTPS transport, strong password hashing, and excluding secrets from code. |

## Consumes
Sensitive user data, plaintext passwords, transmission protocols, and encryption keys.

## Produces
Strong cryptographic safeguards including HTTPS encryption, robust hashing, and secret isolation.

## When applied
When transmitting data over networks, hashing passwords, or configuring environment secrets.

## Sub-concepts
none

## Part of
owasp-top-10-quick-reference, security-checklist

## Implementation status
clean

## Design notes
Cryptographic Failures (OWASP A02) encompass vulnerabilities resulting from absent or flawed cryptography, including transmitting data over plaintext HTTP, utilizing weak hashing algorithms (MD5/SHA1), or embedding secrets directly in source code. Addy counters this with mandatory HTTPS transport, salted iterative password hashing (bcrypt, argon2, scrypt), and strict pre-commit secret screening.
