---
package: rjm
name: Evidence Bar
slug: evidence-bar
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Evidence Bar

## Definition — verbatim
> "A result is accepted here when ONE mechanism explains ALL observations, including the negative ones, and the explanation survives adversarial refutation." — .claude/skills/ai-agents-research-methodology/SKILL.md:38-40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 36 | defined here \| used here | Section heading defining the core standard for accepting results via singular mechanisms explaining all observations. |
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 11 | defined here | Overview statement defining the evidence bar for code changes under verification-based governance. |

## Consumes
Empirical observations, anomalous failure data, negative controls, and counter-hypotheses.

## Produces
Adversarially validated results and proven root-cause explanations satisfying repository rigor standards.

## When applied
When evaluating findings, accepting architectural proposals, or conducting root-cause investigations.

## Sub-concepts
none

## Part of
ai-agents-research-methodology

## Implementation status
defects: missing-path, doc-drift

## Design notes
The Evidence Bar serves as the definitive standard of proof in rjm. Rather than accepting explanations that merely accommodate favorable observations while ignoring contradictory anomalies, the Evidence Bar requires a unified mechanism that explains every observed data point and withstands adversarial challenge, ensuring engineering mitigations target actual root causes.
