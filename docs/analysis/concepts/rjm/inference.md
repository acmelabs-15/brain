---
package: rjm
name: Inference
slug: inference
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Inference

## Definition — verbatim
> "- `Inference`: synthesis from available evidence." — .claude/skills/world-model-diagnostic/SKILL.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 53 | defined here | Required diagnostic label for conclusions deduced through analytical synthesis of available evidence. |

## Consumes
Observed patterns, partial evidence, and domain principles.

## Produces
Synthesized analytical deductions clearly demarcated from confirmed facts.

## When applied
Applied under Non-Negotiable Rule 2 whenever drawing conclusions that extrapolate beyond directly stated facts.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
A required reporting discipline in rjm that labels conclusions derived from synthesis and deductive reasoning rather than direct observation. Explicit labeling allows stakeholders to evaluate the strength of underlying assumptions before committing to strategic or architectural decisions.
