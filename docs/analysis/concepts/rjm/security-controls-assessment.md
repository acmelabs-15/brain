---
package: rjm
name: Security Controls Assessment
slug: security-controls-assessment
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/architecture-security-template.md, sha256: 05ed96c8675d7c953c030e2eca5d3546182f60ec9e873ef7e55f9e2c6a231c5c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Security Controls Assessment

## Definition — verbatim
(used, not defined)

> "## Security Controls Assessment" — .agents/security/architecture-security-template.md:201

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/architecture-security-template.md | 201 | defines | Checklist section evaluating core defensive controls across authentication, authorization, data protection, and logging. |

## Consumes
Authentication specifications, authorization policies, encryption configurations, logging infrastructure.

## Produces
Implementation status checklist and gap notes across Authentication, Authorization, Data Protection, and Logging/Monitoring pillars.

## When applied
Applied during architectural security audits to verify the presence and adequacy of foundational defensive mechanisms.

## Sub-concepts
none

## Part of
architecture-security-audit-template

## Implementation status
defects: missing-path

## Design notes
A structured evaluation checklist that verifies baseline defensive controls across authentication, authorization, data protection, and audit logging to ensure robust defense-in-depth across system components.
