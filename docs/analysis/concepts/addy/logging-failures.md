---
package: addy
name: Logging Failures
slug: logging-failures
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

# Logging Failures

## Definition — verbatim
(used, not defined)
> "| 9 | Logging Failures | Log security events, don't log secrets |" — references/security-checklist.md:187

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 187 | references | Listed as OWASP #9 risk mitigated by logging security events while strictly redacting sensitive secrets. |

## Consumes
Security event streams, application errors, and logging frameworks.

## Produces
Auditable security event records with automated redaction of passwords, tokens, and PII.

## When applied
When implementing logging, monitoring, and alerting across web application subsystems.

## Sub-concepts
none

## Part of
owasp-top-10-quick-reference, security-checklist

## Implementation status
clean

## Design notes
Security Logging and Monitoring Failures (OWASP A09) allow unauthorized activities to proceed undetected due to insufficient telemetry or, conversely, expose sensitive data through careless logging. Addy requires logging all significant security events (such as failed authentication attempts) while strictly prohibiting the inclusion of passwords, session tokens, or payment data in log messages.
