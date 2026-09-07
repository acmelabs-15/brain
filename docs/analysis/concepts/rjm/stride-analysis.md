---
package: rjm
name: STRIDE analysis
slug: stride-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
  - {path: .claude/agents/security/references/threat-model-template.md, sha256: eb6b22ffc3c10b5ebf2d88a64bfdf46fab3c99ecd746d8e39b566cbd4bfea895}
  - {path: .claude/skills/adr-review/references/agent-prompts.md, sha256: 58a13dd3adc40229b5a77f394c0ffcfc5e20588f166f961bfc00dc877cd6598e}
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STRIDE analysis

## Definition — verbatim
> "STRIDE Analysis" — .claude/agents/security/references/threat-model-template.md:20

## Also called — verbatim
> "3. STRIDE Analysis" — .claude/skills/threat-modeling/templates/threat-model-template.md:97

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 277 | used here | Listed under security agent core specializations. |
| .agents/critique/ADR-045-debate-log.md | 168 | used here | Architectural debate record evaluating plugin security boundaries via STRIDE. |
| .claude/agents/security/references/threat-model-template.md | 20 | defined here | Threat model template section defining STRIDE threat analysis matrix. |
| .claude/skills/adr-review/references/agent-prompts.md | 230 | used here | Agent prompt instructions incorporating STRIDE methodology into architecture reviews. |
| .claude/skills/threat-modeling/templates/threat-model-template.md | 97 | used here | Structured threat modeling template categorizing threats by STRIDE vectors. |

## Consumes
Architecture diagrams, data flow diagrams, asset inventories, trust boundaries.

## Produces
Threat matrices classifying risks across Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.

## When applied
Applied during threat modeling and security reviews when evaluating architecture or feature designs for security threats.

## Sub-concepts
none

## Part of
security

## Implementation status
clean

## Design notes
A structured threat modeling technique developed by Microsoft that categorizes potential security threats into six vectors: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege. Within rjm, it is systematically applied by the security agent to data flow elements and trust boundaries to generate prioritized mitigation controls.
