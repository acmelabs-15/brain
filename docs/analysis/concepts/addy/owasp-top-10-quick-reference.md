---
package: addy
name: OWASP Top 10 Quick Reference
slug: owasp-top-10-quick-reference
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

# OWASP Top 10 Quick Reference

## Definition — verbatim
(used, not defined)
> "| # | Vulnerability | Prevention |" — references/security-checklist.md:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 18 | defines | Reference table mapping the ten primary web application vulnerability categories to practical preventions. |

## Consumes
Web application source code, API contracts, and architecture definitions.

## Produces
Concise mappings from major vulnerability categories to specific engineering controls.

## When applied
Used during security reviews, threat modeling, and code audits to assess defense posture.

## Sub-concepts
broken-access-control, cryptographic-failures, injection, insecure-design, security-misconfiguration, vulnerable-components, auth-failures, data-integrity-failures, logging-failures

## Part of
security-checklist

## Implementation status
clean

## Design notes
The OWASP Top 10 Quick Reference provides a concise mapping of the 2021 OWASP Top 10 web application vulnerabilities alongside their primary prevention strategies. It acts as an accessible, rapid-assessment reference for agents and developers to quickly cross-check code against known threat categories.
