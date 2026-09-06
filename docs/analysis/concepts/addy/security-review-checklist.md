---
package: addy
name: Security Review Checklist
slug: security-review-checklist
kind: checklist
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Security Review Checklist

## Definition — verbatim
(used, not defined)

> "## Security Review Checklist" — skills/security-and-hardening/SKILL.md:405

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/security-and-hardening/SKILL.md | 405 | defined here | Provides an actionable 4-domain audit checklist spanning Authentication, Authorization, Input, and Data security |

## Consumes
Application implementation, authentication logic, authorization checks, database queries, sensitive data handling.

## Produces
A completed verification record confirming compliance across authentication, authorization, input validation, and data privacy domains.

## When applied
Executed during security audits, pre-merge reviews, and production release preparation.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
The security review checklist operationalizes defensive engineering principles into a structured pre-release verification instrument. Spanning authentication mechanics, endpoint authorization guards, input validation and SSRF defenses, and sensitive data protections, it guarantees comprehensive evaluation prior to deploying changes.
