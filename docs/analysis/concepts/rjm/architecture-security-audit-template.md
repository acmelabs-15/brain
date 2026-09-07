---
package: rjm
name: Architecture Security Audit Template
slug: architecture-security-audit-template
kind: template
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

# Architecture Security Audit Template

## Definition — verbatim
(used, not defined)

> "# Architecture Security Audit Template" — .agents/security/architecture-security-template.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/architecture-security-template.md | 1 | defines | Audit template guiding security architecture reviews across privilege boundaries, trust zones, and data flows. |

## Consumes
Proposed system architectures, ADRs, component models, and data dictionaries.

## Produces
Comprehensive architectural security review documents including privilege boundary analyses, Mermaid trust boundary maps, attack surface inventories, and prioritized recommendations.

## When applied
Applied during architectural design reviews and formal security audits of major system changes or framework extractions.

## Sub-concepts
privilege-boundary-analysis, trust-boundary-map, attack-surface-analysis, sensitive-data-flow-analysis, dependency-security, security-controls-assessment

## Part of
security

## Implementation status
defects: missing-path

## Design notes
A standardized audit template and schema establishing the required structure for conducting security architecture evaluations, ensuring systematic coverage of privilege levels, trust zones, attack surfaces, data flows, and baseline security controls.
