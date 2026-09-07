---
package: rjm
name: Boundary Controls
slug: boundary-controls
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

# Boundary Controls

## Definition — verbatim
(used, not defined)

> "### Boundary Controls" — .agents/security/architecture-security-template.md:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/architecture-security-template.md | 108 | defines | Checklist specifying required controls across input, auth, and authz trust boundaries. |

## Consumes
Trust boundary definitions (TB1 Input, TB2 Auth, TB3 Authz) and interface communication protocols.

## Produces
Implementation checklist verifying input validation, rate limiting, authentication, TLS, authorization, and audit logging.

## When applied
Applied when reviewing trust boundaries in system designs to ensure each boundary enforces mandatory defense controls.

## Sub-concepts
none

## Part of
trust-boundary-map

## Implementation status
defects: missing-path

## Design notes
A security checklist that pairs each architectural trust boundary with required defensive measures (such as input validation, TLS encryption, and audit logging) to verify enforcement status before deployment.
