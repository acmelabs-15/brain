---
package: rjm
name: Sensitive Data Flow Analysis
slug: sensitive-data-flow-analysis
kind: technique
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

# Sensitive Data Flow Analysis

## Definition — verbatim
(used, not defined)

> "## Sensitive Data Flow Analysis" — .agents/security/architecture-security-template.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/architecture-security-template.md | 144 | defines | Section organizing data classification, data flow diagrams, and data flow risk mitigations. |

## Consumes
Data types (credentials, PII, payment info, session tokens, audit logs), retention policies, transit channels, storage backends.

## Produces
Data classification matrix, Mermaid data flow diagrams, and data flow risk control mappings.

## When applied
Applied during architectural security audits to evaluate data handling risks and ensure compliance with encryption and retention requirements.

## Sub-concepts
sensitive-data-flows

## Part of
architecture-security-audit-template

## Implementation status
defects: missing-path

## Design notes
An architectural security evaluation technique that tracks the lifecycle, movement, and storage of sensitive data across system boundaries to verify encryption, access controls, and leak prevention.
