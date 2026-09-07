---
package: rjm
name: Likelihood Scale
slug: likelihood-scale
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

# Likelihood Scale

## Definition — verbatim
> "## Likelihood Scale" — .claude/skills/threat-modeling/references/risk-rating-guide.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/risk-rating-guide.md | 13 | defined here | Section heading establishing the three-tier scoring rubric (High 3, Medium 2, Low 1) for threat likelihood. |

## Consumes
Attacker skill requirements, access barriers, public tool availability, detection probability, and attacker motivation.

## Produces
A standardized Likelihood rating score between 1 and 3 for each evaluated threat.

## When applied
Applied during threat rating to assess how easily an adversary can execute an attack against a component.

## Sub-concepts
none

## Part of
risk-formula

## Implementation status
clean

## Design notes
A standardized three-point rubric scoring the exploitability and accessibility of a threat vector to calculate overall risk.
