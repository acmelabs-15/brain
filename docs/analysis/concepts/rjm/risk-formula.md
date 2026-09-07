---
package: rjm
name: Risk Formula
slug: risk-formula
kind: technique
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

# Risk Formula

## Definition — verbatim
> "## Risk Formula" — .claude/skills/threat-modeling/references/risk-rating-guide.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/risk-rating-guide.md | 5 | defined here | Section heading introducing the standardized mathematical formula `Risk = Likelihood x Impact`. |

## Consumes
Likelihood scores (1–3) and Impact scores (1–3) assigned to identified threat scenarios.

## Produces
A calculated risk score ranging from 1 to 9 mapped to qualitative severity tiers (Low, Medium, High, Critical).

## When applied
Applied during threat modeling when evaluating identified threats to prioritize engineering response timelines.

## Sub-concepts
likelihood-scale, impact-scale, risk-matrix

## Part of
threat-modeling

## Implementation status
clean

## Design notes
The quantitative risk calculation methodology multiplying Likelihood by Impact to rank and prioritize security mitigations systematically.
