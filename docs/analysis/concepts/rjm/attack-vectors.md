---
package: rjm
name: Attack Vectors
slug: attack-vectors
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

# Attack Vectors

## Definition — verbatim
> "## Attack Vectors" — .claude/agents/security/references/threat-model-template.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/threat-model-template.md | 18 | defined here | Threat model section header organizing STRIDE analysis and potential vulnerability exploitation paths. |

## Consumes
assets, threat-actors, data-flow-diagram

## Produces
stride-threat-matrix

## When applied
> "### STRIDE Analysis" — .claude/agents/security/references/threat-model-template.md:20

## Sub-concepts
stride-analysis

## Part of
threat-model

## Implementation status
defects: doc-drift

## Design notes
A structural section and analytical focus in threat modeling describing the paths, mechanisms, and entry points an attacker could use to compromise system assets. In rjm, it hosts STRIDE threat categorization to identify specific vulnerabilities and determine required defensive controls.
