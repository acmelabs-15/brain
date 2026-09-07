---
package: rjm
name: trust zones
slug: trust-zones
kind: pattern
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

# trust zones

## Definition — verbatim
(used, not defined)

> "Use it to evaluate privilege boundaries, trust zones, attack surfaces, and sensitive data flows in system designs." — .agents/security/architecture-security-template.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/architecture-security-template.md | 5 | defines | Identified as a core architectural domain to evaluate during security reviews. |

## Consumes
Network topologies, process isolation mechanisms, component interaction diagrams.

## Produces
Architectural zones (Untrusted, DMZ/Semi-Trusted, Trusted, Highly Trusted) and border control specifications.

## When applied
Applied during security modeling to group components by trustworthiness and define required perimeter controls between zones.

## Sub-concepts
none

## Part of
trust-boundary-map

## Implementation status
defects: missing-path

## Design notes
Logical and physical partitions that categorize system components by level of trust and exposure, establishing distinct perimeters where input validation, authentication, and authorization checkpoints must be enforced.
