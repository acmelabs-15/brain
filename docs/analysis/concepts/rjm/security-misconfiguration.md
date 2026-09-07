---
package: rjm
name: Security Misconfiguration
slug: security-misconfiguration
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

# Security Misconfiguration

## Definition — verbatim
> "| A05 | Security Misconfiguration | Insecure defaults, unnecessary features enabled |" — .claude/skills/threat-modeling/references/security-owasp-top-10.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-owasp-top-10.md | 19 | defined here | Cataloged in OWASP Top 10 reference table as vulnerability category A05 mapping to Denial of Service in STRIDE. |

## Consumes
Deployment manifests, service configuration templates, and platform defaults.

## Produces
Hardened configuration baselines, removal of unused endpoints and features, and secure default settings.

## When applied
Evaluated during configuration review, deployment architecture design, and threat modeling.

## Sub-concepts
none

## Part of
- owasp-top-10

## Implementation status
defects: missing-path

## Design notes
Security Misconfiguration (OWASP A05) covers vulnerabilities arising from insecure default settings, unnecessary active features, or unhardened services; mitigated by automated configuration baselines and feature minimization.
