---
package: addy
name: Insecure Design
slug: insecure-design
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

# Insecure Design

## Definition — verbatim
(used, not defined)
> "| 4 | Insecure Design | Threat modeling, spec-driven development |" — references/security-checklist.md:182

## Also called — verbatim
"A04: Insecure Design" — skills/security-and-hardening/SKILL.md:40

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 182 | references | Listed as OWASP #4 risk addressed by upfront threat modeling and spec-driven development. |

## Consumes
Feature specifications, system architecture designs, and trust boundary definitions.

## Produces
Architectural threat models, trust boundary definitions, and abuse-case test specifications.

## When applied
During the specification and architecture phases before starting feature implementation.

## Sub-concepts
threat-modeling

## Part of
owasp-top-10-quick-reference, security-checklist

## Implementation status
clean

## Design notes
Insecure Design (OWASP A04) represents architectural weaknesses that cannot be remediated simply by writing cleaner code or patching libraries. Addy tackles insecure design by mandating upfront threat modeling, explicit trust boundary mapping, STRIDE threat enumeration, and spec-driven development before code is written.
