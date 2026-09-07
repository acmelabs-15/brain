---
package: rjm
name: Logging Failures
slug: logging-failures
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

# Logging Failures

## Definition — verbatim
> "| A09 | Logging Failures | Insufficient logging to detect breaches |" — .claude/skills/threat-modeling/references/security-owasp-top-10.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 23 | defined here | Cataloged in OWASP Top 10 reference table as vulnerability category A09 mapping to Repudiation in STRIDE. |

## Consumes
Application telemetry, authentication event streams, and audit logging frameworks.

## Produces
Comprehensive logging policies, alerting thresholds, and tamper-resistant audit logs.

## When applied
Evaluated during threat modeling and observability design to guarantee breach detection and auditability.

## Sub-concepts
none

## Part of
- owasp-top-10

## Implementation status
defects: missing-path

## Design notes
Security Logging and Monitoring Failures (OWASP A09) prevents timely detection and remediation of active intrusions; mitigated in rjm through comprehensive security event logging, real-time alerting, and non-repudiation controls.
