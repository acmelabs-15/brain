---
package: rjm
name: residual risk
slug: residual-risk
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md, sha256: 664b46f110094bbed7c45aab168811441cde25fb9bfc05eaae862beca4c4e09c}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: .claude/skills/threat-modeling/references/risk-rating-guide.md, sha256: c467af69c46f046dcb04189bf1bc274ac7788dad223bf79fa0faa7bf9d277c58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# residual risk

## Definition — verbatim
> "Residual Risk = Reduced Likelihood x Reduced Impact" — .claude/skills/threat-modeling/references/risk-rating-guide.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 51 | used here | Analyzed as the accepted security exposure on Copilot when excluding prompt-injection PR guards. |
| .claude/skills/threat-modeling/references/risk-rating-guide.md | 102 | defined here | Defined in the risk rating methodology as the reassessed risk score following the application of security mitigations. |
| .claude/skills/threat-modeling/SKILL.md | 272 | defined here | Documented as the post-mitigation risk rating field in generated threat models and mitigation roadmaps. |

## Consumes
Identified security threats, baseline likelihood and impact scores, and implemented or proposed mitigations.

## Produces
Reassessed risk rating metrics evaluating post-mitigation exposure to determine if further controls are required.

## When applied
Applied during threat modeling synthesis and architectural risk reviews following mitigation planning.

## Sub-concepts
none

## Part of
threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path, doc-drift

## Design notes
Residual risk provides a structured methodology within rjm's threat modeling practices for evaluating security posture after counter-measures are introduced. It prevents false senses of complete security by quantifying unmitigated threat surfaces and ensuring explicit risk acceptance.
