---
package: rjm
name: Trust Boundary Map
slug: trust-boundary-map
kind: artifact
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

# Trust Boundary Map

## Definition — verbatim
(used, not defined)

> "## Trust Boundary Map" — .agents/security/architecture-security-template.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/architecture-security-template.md | 54 | defines | Section containing trust zone diagrams and boundary controls requirements. |

## Consumes
Network architecture, component topology, external API boundaries, data storage tiers.

## Produces
Mermaid flowchart illustrating Untrusted, DMZ/Semi-Trusted, Trusted, and Highly Trusted zones with designated trust boundaries (TB1, TB2, TB3).

## When applied
Applied during architectural security audits to visualize trust perimeters and specify required boundary controls.

## Sub-concepts
trust-zones, boundary-controls

## Part of
architecture-security-audit-template

## Implementation status
defects: missing-path

## Design notes
An architectural diagram artifact mapping trust zones and transition perimeters to identify where input validation, authentication, and authorization controls must be enforced between components.
