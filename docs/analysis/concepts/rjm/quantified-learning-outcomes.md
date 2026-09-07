---
package: rjm
name: Quantified Learning Outcomes
slug: quantified-learning-outcomes
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Quantified Learning Outcomes

## Definition — verbatim
> "Every extracted learning must include measurable impact (e.g., \"reduced failures by 40%\" not \"improved reliability\")" — .claude/agents/retrospective.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 28 | defined here | Agent requirement mandating measurable impact metrics for every extracted learning. |

## Consumes
Qualitative retrospective findings, performance metrics, and before-and-after failure counts.

## Produces
Measurable impact statements embedded into extracted learning entries.

## When applied
Applied during retrospective learning formulation before finalizing any insight into the skillbook.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Quantified Learning Outcomes is an epistemic standard requiring every captured learning to state a measurable, empirical impact rather than vague qualitative praise. Without quantification, knowledge bases degrade into untestable platitudes that cannot be verified or prioritized during future agent planning cycles.
