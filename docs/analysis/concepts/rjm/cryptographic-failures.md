---
package: rjm
name: Cryptographic Failures
slug: cryptographic-failures
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-owasp-top-10.md, sha256: c84e707337731a44229ec09a5a162f88474a205262ad3a0ef9041b6ae9899533}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cryptographic Failures

## Definition — verbatim
> "| A02 | Cryptographic Failures | Poor encryption exposing sensitive data |" — .claude/skills/threat-modeling/references/security-owasp-top-10.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 16 | defined here | Defined in OWASP Top 10 reference table as vulnerability category A02 with encryption and transport requirements. |

## Consumes
Data classification schemas, storage architectures, and transport protocol definitions.

## Produces
Encryption-at-rest standards (AES-256), transport security enforcement (TLS 1.2+), and password hashing rules (bcrypt/Argon2).

## When applied
During Phase 2 (Threat Identification) and Phase 3 (Mitigation Strategy) when assessing sensitive data protection.

## Sub-concepts
none

## Part of
- owasp-top-10

## Implementation status
defects: missing-path

## Design notes
In rjm, Cryptographic Failures (OWASP A02) represents inadequate data protection resulting in exposure of sensitive data; mitigated by AES-256 encryption at rest, TLS 1.2+ in transit, and robust hashing algorithms.
