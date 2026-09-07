---
package: rjm
name: OWASP Risk Rating Methodology
slug: owasp-risk-rating-methodology
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

# OWASP Risk Rating Methodology

## Definition — verbatim
(used, not defined)

> "- [OWASP Risk Rating Methodology](https://owasp.org/www-community/OWASP_Risk_Rating_Methodology)" — .claude/skills/threat-modeling/references/risk-rating-guide.md:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/risk-rating-guide.md | 146 | used here | Cited in references section as an external risk rating methodology guide. |

## Consumes
Threat descriptions and technical vulnerability factors.

## Produces
Standardized risk severity ratings based on likelihood and impact dimensions.

## When applied
When establishing or calibrating threat likelihood and impact criteria against external industry standards.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An external reference provided in rjm's risk rating guide pointing to OWASP's standardized framework for estimating severity and likelihood of technical application risks.
