---
package: rjm
name: CVSS Calculator
slug: cvss-calculator
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

# CVSS Calculator

## Definition — verbatim
(used, not defined)

> "- [CVSS Calculator](https://www.first.org/cvss/calculator/3.1)" — .claude/skills/threat-modeling/references/risk-rating-guide.md:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/risk-rating-guide.md | 147 | used here | Cited in references section as an external calculator tool for standard CVSS vulnerability scoring. |

## Consumes
Vulnerability characteristics across attack vector, complexity, privileges, scope, and impact metrics.

## Produces
Standardized Common Vulnerability Scoring System (CVSS v3.1) numerical scores.

## When applied
When quantitative vulnerability severity scoring is required during threat modeling or risk rating.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
External tooling reference for FIRST.org's CVSS calculator, cited in rjm's risk rating documentation to support objective, standardized numerical risk evaluations.
