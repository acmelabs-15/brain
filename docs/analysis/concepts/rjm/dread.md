---
package: rjm
name: DREAD
slug: dread
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

# DREAD

## Definition — verbatim
> "DREAD provides more granular rating but requires more effort:" — .claude/skills/threat-modeling/references/risk-rating-guide.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/risk-rating-guide.md | 77 | defined here | Section heading introducing DREAD as an optional fine-grained risk rating model. |

## Consumes
Threat descriptions and attack scenarios identified during threat modeling.

## Produces
A quantitative DREAD risk score `(D + R + E + A + D) / 5` mapping to Critical, High, Medium, or Low risk levels.

## When applied
When a system or component requires more granular risk rating than the standard 3x3 Likelihood x Impact matrix.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
DREAD is an optional risk assessment heuristic in rjm's threat modeling workflow that scores threats across five 0-10 dimensions (Damage, Reproducibility, Exploitability, Affected Users, Discoverability) to compute an average score mapping to standard risk levels.
