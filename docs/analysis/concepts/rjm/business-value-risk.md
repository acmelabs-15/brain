---
package: rjm
name: Business value/risk
slug: business-value-risk
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Business value/risk

## Definition — verbatim
> "High benefit vs cost, or high business risk" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 11 | defined here | First criterion of the 7-part ASR Test assessing high benefit relative to cost or significant business exposure. |

## Consumes
Business objectives, project cost projections, financial models, regulatory compliance constraints.

## Produces
Significance score evaluating commercial benefit and enterprise risk to guide ADR documentation priority.

## When applied
Evaluated during initial issue screening using the ASR Test before drafting an architectural decision record.

## Sub-concepts
none

## Part of
asr-test

## Implementation status
clean

## Design notes
The first criterion of the ASR Test, Business value/risk evaluates whether an architectural decision involves high potential reward compared to cost or introduces major operational/commercial risks. If a decision significantly impacts revenue, customer retention, or compliance liabilities, it qualifies as architecturally significant.
