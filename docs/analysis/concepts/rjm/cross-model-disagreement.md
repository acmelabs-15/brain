---
package: rjm
name: Cross-model disagreement
slug: cross-model-disagreement
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Cross-model disagreement

## Definition — verbatim
> "When Claude and another model disagree, or agree against the user's direction, that is signal, not a mandate." — .claude/skills/ai-agents-research-methodology/SKILL.md:217-218

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 217 | defined here | Defined as an informational signal rather than an automatic mandate, requiring user escalation per builder ethos. |

## Consumes
Deliberation outputs, multi-model review evaluations, or contradictory model recommendations.

## Produces
An escalation to the human user presenting recommendations and explicitly identifying missing context.

## When applied
When Claude and another model disagree, or agree in conflict with the user's explicit direction.

## Sub-concepts
none

## Part of
ai-agents-research-methodology

## Implementation status
defects: missing-path

## Design notes
In rjm's research and decision methodology, disagreement between AI models (or joint divergence from the user's direction) is treated as informational signal rather than an automatic mandate to act. Under the builder ethos of user sovereignty, such divergence requires surfacing the competing views to the human developer with explicit context gaps noted, preventing automated runaway decisions.
