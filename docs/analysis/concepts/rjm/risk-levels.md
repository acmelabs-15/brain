---
package: rjm
name: Risk Levels
slug: risk-levels
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-detection/SKILL.md, sha256: d30a2af5f4760055052ffa9f61d5f440df2538d1d34761b0367dd6b48d33ec9b}
  - {path: .claude/skills/threat-modeling/scripts/validate_threat_model.py, sha256: 2df216789ee2fa0e552450372de422efd2bda8e7dc1f6f8a4e386e05ec3d86b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Risk Levels

## Definition — verbatim
> "## Risk Levels" — .claude/skills/security-detection/SKILL.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-detection/SKILL.md | 81 | defined here | Section heading defining risk tiers (CRITICAL, HIGH) and their corresponding review actions. |
| .claude/skills/threat-modeling/scripts/validate_threat_model.py | 53 | defined here | Constant set defining valid threat modeling risk classifications (Critical, High, Medium, Low). |

## Consumes
Identified security threats, modified file paths, or architectural vulnerability assessments.

## Produces
Standardized risk tier categorization determining mandatory review and mitigation actions.

## When applied
Applied during security infrastructure detection and threat model validation.

## Sub-concepts
none

## Part of
security-detection

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
Risk Levels defines the classification tiers (Critical, High, Medium, Low) used across rjm security detection and threat modeling to prescribe required validation rigor and gate actions.
