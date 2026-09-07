---
package: rjm
name: Decision Quality Assessment
slug: decision-quality-assessment
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

# Decision Quality Assessment

## Definition — verbatim
> "### Decision Quality Assessment" — .claude/skills/review/references/decision-rigor.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/decision-rigor.md | 98 | defined here | Output section heading for the 1-5 rating table evaluating six decision rigor criteria. |

## Consumes
Decision rigor analysis of proposed decisions, ADRs, and technical justifications.

## Produces
A structured markdown table evaluating six criteria (Assumptions Explicit, Claims Verifiable, Alternatives Considered, Bias Examined, Failure Modes Named, Starts Simple) on a 1-5 scale.

## When applied
When formatting the output report of a decision rigor review.

## Sub-concepts
overall-decision-rigor-score

## Part of
decision-rigor

## Implementation status
clean

## Design notes
A structured output table in rjm's decision rigor review report that scores six decision quality criteria on a 1-5 scale to provide an objective assessment of decision soundness.
