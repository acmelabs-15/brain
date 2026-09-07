---
package: rjm
name: FAIR Risk Quantification
slug: fair-risk-quantification
kind: reference
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/risk-rating-guide.md, sha256: c467af69c46f046dcb04189bf1bc274ac7788dad223bf79fa0faa7bf9d277c58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FAIR Risk Quantification

## Definition — verbatim
(used, not defined)

> "- [FAIR Risk Quantification](https://www.fairinstitute.org/)" — .claude/skills/threat-modeling/references/risk-rating-guide.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/risk-rating-guide.md | 148 | used here | Cited in references section as an external methodology for quantitative financial risk assessment. |

## Consumes
Threat frequency, vulnerability characteristics, and loss magnitude factors.

## Produces
Probabilistic quantitative estimates of operational and cyber risk.

## When applied
When high-consequence threats require financial and probabilistic loss quantification beyond qualitative rating matrices.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An external reference to the Factor Analysis of Information Risk (FAIR) framework, cited in rjm's risk rating guide for engineering teams seeking quantitative economic risk modeling.
