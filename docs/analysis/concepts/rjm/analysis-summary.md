---
package: rjm
name: Analysis Summary
slug: analysis-summary
kind: template
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/analyst.md, sha256: 8df3c3b39c6b4366fcc11dd6469ae406cc1883fa460ff846e20f9230866d8526}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Analysis Summary

## Definition — verbatim
> "### Analysis Summary" — .claude/skills/review/references/analyst.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/analyst.md | 105 | defined here | Output format section summarizing analyst review findings across core criteria. |

## Consumes
Analyst evaluation notes on readability, claim support, consistency, and simplicity.

## Produces
Four-bullet summary of analyst findings or explicit "no finding" affirmations.

## When applied
Applied when formatting analyst review results.

## Sub-concepts
none

## Part of
analyst

## Implementation status
clean

## Design notes
The structured summary section within an analyst review report presenting bullet-point notes or "no finding" statements across readability, claim support, consistency, and simplicity.
