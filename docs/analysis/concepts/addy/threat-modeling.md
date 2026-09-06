---
package: addy
name: Threat Modeling
slug: threat-modeling
kind: technique
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

# Threat Modeling

## Definition — verbatim
> "Before reaching for controls, spend five minutes thinking like an attacker:" — references/security-checklist.md:23

## Also called — verbatim
"Threat Modeling (Start Here)" — references/security-checklist.md:21

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 7 | defines | Outlines essential threat modeling methodology covering trust boundaries, assets, STRIDE, and abuse cases. |

## Consumes
System architecture, component endpoints, data flow diagrams, and user stories.

## Produces
Trust boundary maps, asset inventories, STRIDE threat matrices, and testable abuse cases.

## When applied
Before implementing security controls, during the design of any feature handling untrusted inputs or sensitive assets.

## Sub-concepts
stride

## Part of
security-checklist, security-and-hardening

## Implementation status
clean

## Design notes
Threat modeling requires developers to analyze system components from an attacker's perspective before implementing security controls. By systematically identifying trust boundaries, valuing assets, running STRIDE analysis, and defining abuse cases alongside use cases, developers prevent structural security vulnerabilities (OWASP Insecure Design) rather than relying on reactive patching.
