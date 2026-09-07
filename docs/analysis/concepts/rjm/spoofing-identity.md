---
package: rjm
name: Spoofing Identity
slug: spoofing-identity
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/stride-methodology.md, sha256: 62b62c288dc96d275f6b835cc75809816cb1acc3cb8d53da48c7499a36192a0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Spoofing Identity

## Definition — verbatim
> "**Definition**: Pretending to be something or someone other than yourself." — .claude/skills/threat-modeling/references/stride-methodology.md:9

## Also called — verbatim
> "### S - Spoofing" — .claude/skills/threat-modeling/templates/threat-model-template.md:99

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/stride-methodology.md | 7 | defined here | Defines the Spoofing threat category, questions, examples, and mitigations. |

## Consumes
Identity assertions, authentication tokens, credentials, communication channels.

## Produces
Threat scenarios for identity impersonation and corresponding authentication mitigations.

## When applied
Applied during STRIDE threat modeling against external entities and data flows crossing trust boundaries.

## Sub-concepts
none

## Part of
stride

## Implementation status
clean

## Design notes
Spoofing Identity represents threats where an adversary illegitimately assumes the identity of an authorized actor, system, or service, necessitating robust multi-factor authentication, cryptographic verification, and session binding.
