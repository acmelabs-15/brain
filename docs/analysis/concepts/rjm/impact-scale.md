---
package: rjm
name: Impact Scale
slug: impact-scale
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

# Impact Scale

## Definition — verbatim
> "## Impact Scale" — .claude/skills/threat-modeling/references/risk-rating-guide.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/risk-rating-guide.md | 35 | defined here | Section heading defining the three-tier scoring rubric (High 3, Medium 2, Low 1) for threat impact. |

## Consumes
Data sensitivity, affected user volume, system criticality, recovery time, regulatory obligations, and reputation impact.

## Produces
A standardized Impact rating score between 1 and 3 reflecting the severity of harm from successful exploitation.

## When applied
Applied during threat evaluation to estimate potential business, technical, and regulatory damages from a security breach.

## Sub-concepts
none

## Part of
risk-formula

## Implementation status
clean

## Design notes
A standardized three-point rubric rating the severity of harm resulting from a security incident to inform risk calculation.
