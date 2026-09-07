---
package: rjm
name: Identity as the Perimeter
slug: identity-as-the-perimeter
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Identity as the Perimeter

## Definition — verbatim
> "## Identity as the Perimeter" — .claude/skills/threat-modeling/references/security-zero-trust.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-zero-trust.md | 44 | defined here | Establishes identity as the primary security boundary replacing traditional network perimeters. |

## Consumes
Identity authentication mechanisms, role-based access control policies, conditional access rules.

## Produces
Dynamic per-request access decisions and verified identity boundary enforcement.

## When applied
Applied across all service-to-service and user-to-service access evaluations in Zero Trust architectures.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Identity as the Perimeter shifts security governance from physical or network topology to verified subject identity and context, ensuring that trust is continuously evaluated at every interaction rather than granted implicitly by network location.
