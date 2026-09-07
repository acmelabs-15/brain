---
package: rjm
name: Authentication Failures
slug: authentication-failures
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

# Authentication Failures

## Definition — verbatim
> "| A07 | Authentication Failures | Broken credential/session management |" — .claude/skills/threat-modeling/references/security-owasp-top-10.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 21 | defined here | Cataloged in OWASP Top 10 reference table as vulnerability category A07 mapping to Spoofing in STRIDE. |

## Consumes
Identity providers, session tokens, credential stores, and login flows.

## Produces
Multi-factor authentication (MFA) requirements, robust session lifecycle rules, and rate-limiting policies.

## When applied
During threat modeling and authentication design whenever identity confirmation and credential validation are evaluated.

## Sub-concepts
none

## Part of
- owasp-top-10

## Implementation status
defects: missing-path

## Design notes
Authentication Failures (OWASP A07) represents compromised session or credential verification allowing spoofing or brute-forcing; mitigated by multi-factor authentication, secure session tokens, and request throttling.
