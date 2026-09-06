---
package: addy
name: STRIDE
slug: stride
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
  - {path: skills/security-and-hardening/SKILL.md, sha256: 2f9979b84678ca6f07e684bb862a086f5b27bfa6e9a0ad3d57c499dba47c2e50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# STRIDE

## Definition — verbatim
> "Run STRIDE over each boundary" — skills/security-and-hardening/SKILL.md:27

## Also called — verbatim
> "STRIDE run per boundary (Spoofing, Tampering, Repudiation, Info disclosure, DoS, Elevation)" — references/security-checklist.md:27

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 106 | applies | Instructs the security auditor to start from trust boundaries and reason about each with STRIDE before enumerating findings. |
| references/security-checklist.md | 27 | applies | Checklist item mandating that STRIDE (Spoofing, Tampering, Repudiation, Info disclosure, DoS, Elevation) be run per trust boundary. |
| skills/security-and-hardening/SKILL.md | 27 | defines | Defines the STRIDE threat modeling step, mapping the six threat categories to specific questions and typical mitigations. |

## Consumes
Identified system trust boundaries and asset definitions.

## Produces
Structured threat analysis identifying potential attack vectors and required controls.

## When applied
Applied during early threat modeling before implementing security controls or conducting security reviews.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
STRIDE provides a lightweight, structured threat-modeling lens across addy's security skills, prompting engineers to systematically examine boundaries for spoofing, tampering, repudiation, information leakage, DoS, and privilege escalation.
