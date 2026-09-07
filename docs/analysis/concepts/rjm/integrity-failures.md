---
package: rjm
name: Integrity Failures
slug: integrity-failures
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

# Integrity Failures

## Definition — verbatim
> "| A08 | Integrity Failures | Insecure CI/CD, unsigned updates, unsafe deserialization |" — .claude/skills/threat-modeling/references/security-owasp-top-10.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 22 | defined here | Cataloged in OWASP Top 10 reference table as vulnerability category A08 mapping to Tampering in STRIDE. |

## Consumes
CI/CD pipelines, serialized payloads, deployment packages, and update channels.

## Produces
Signed update validation, secure serialization protocols, and pipeline integrity protections.

## When applied
Evaluated during deployment architecture review, build pipeline design, and data deserialization analysis.

## Sub-concepts
none

## Part of
- owasp-top-10

## Implementation status
defects: missing-path

## Design notes
Software and Data Integrity Failures (OWASP A08) involves trusting code, updates, or serialized objects without verification; mitigated by cryptographically signed updates, safe serialization, and hardened CI/CD pipelines.
