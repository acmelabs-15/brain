---
package: rjm
name: Repudiation
slug: repudiation
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/stride-methodology.md, sha256: 62b62c288dc96d275f6b835cc75809816cb1acc3cb8d53da48c7499a36192a0d}
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Repudiation

## Definition — verbatim
> "**Definition**: Denying having performed an action when no one can prove otherwise." — .claude/skills/threat-modeling/references/stride-methodology.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/stride-methodology.md | 65 | defined here | Defines the Repudiation threat category, non-repudiation questions, and audit logging mitigations. |
| .claude/skills/threat-modeling/templates/threat-model-template.md | 117 | used here | Section header and threat catalog entry for repudiation vulnerabilities in sample architecture. |

## Consumes
Action records, transaction logs, audit trails, digital provenance mechanisms.

## Produces
Identified repudiation threats and non-repudiation controls including tamper-evident audit logs and digital signatures.

## When applied
Evaluated during threat modeling against processes performing security- or business-critical actions.

## Sub-concepts
none

## Part of
stride

## Implementation status
clean

## Design notes
Repudiation encompasses threats where an entity performs a sensitive action and subsequently denies involvement without possibility of disproof, mitigated by non-repudiable audit logging, secure timestamping, and cryptographic attribution.
