---
package: rjm
name: Overall Decision Rigor Score
slug: overall-decision-rigor-score
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Overall Decision Rigor Score

## Definition — verbatim
> "**Overall Decision Rigor Score**: X/5" — .claude/skills/review/references/decision-rigor.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/decision-rigor.md | 109 | defined here | Output field presenting the composite 1-5 decision rigor score. |

## Consumes
Individual criterion ratings from the Decision Quality Assessment table.

## Produces
A composite numeric score out of 5 representing overall decision reasoning quality.

## When applied
At the conclusion of the Decision Quality Assessment section in decision rigor review.

## Sub-concepts
none

## Part of
decision-quality-assessment

## Implementation status
clean

## Design notes
A composite score field in rjm's decision rigor review report summarizing individual evaluation scores into a single rating out of 5 for quick operator review.
