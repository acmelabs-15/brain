---
package: rjm
name: Risk Matrix
slug: risk-matrix
kind: artifact
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

# Risk Matrix

## Definition — verbatim
> "## Risk Matrix" — .claude/skills/threat-modeling/references/risk-rating-guide.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/risk-rating-guide.md | 58 | defined here | Section heading introducing the 3x3 matrix mapping Likelihood and Impact scores to risk categories and SLA responses. |

## Consumes
Likelihood scores (1-3) and Impact scores (1-3) from threat ratings.

## Produces
Discrete risk classifications (Critical: 9, High: 6, Medium: 3-4, Low: 1-2) with associated engineering remediation response requirements.

## When applied
Applied following threat scoring to assign triage priority, scheduling SLAs, and deployment stop conditions.

## Sub-concepts
none

## Part of
risk-formula

## Implementation status
clean

## Design notes
A 3x3 lookup matrix mapping combinations of Likelihood and Impact to actionable risk categories and remediation SLA requirements.
