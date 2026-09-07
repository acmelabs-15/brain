---
package: rjm
name: Threat Actors
slug: threat-actors
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/threat-model-template.md, sha256: eb6b22ffc3c10b5ebf2d88a64bfdf46fab3c99ecd746d8e39b566cbd4bfea895}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Threat Actors

## Definition — verbatim
> "## Threat Actors" — .claude/agents/security/references/threat-model-template.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/threat-model-template.md | 13 | defined here | Section heading and matrix in threat model template characterizing potential attackers by capability and motivation. |

## Consumes
threat-landscape, system-architecture

## Produces
attacker-profile-matrix

## When applied
> "# Threat Model: [Feature Name]" — .claude/agents/security/references/threat-model-template.md:6

## Sub-concepts
none

## Part of
threat-model

## Implementation status
defects: doc-drift

## Design notes
A threat modeling artifact section that enumerates potential adversary personas, their skill levels, and motivations. In rjm, profiling threat actors allows engineering agents to anticipate realistic attack scenarios and tailor security mitigations proportionally to the threat environment.
