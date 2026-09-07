---
package: rjm
name: Prove the delta
slug: prove-the-delta
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Prove the delta

## Definition — verbatim
> "## Step 4. Prove the delta" — .claude/skills/context-optimizer/references/rule-audit-procedure.md:494

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 494 | defined here | Step 4 of the Rule Audit Procedure establishing statistically verified improvement of candidate rules over baseline. |

## Consumes
Baseline behavioral scores, candidate rule evaluation scores, and pre-registered decision criteria.

## Produces
Delta analysis proving statistical significance (p < 0.05) and effect size threshold satisfaction.

## When applied
Executed after any change to always-on content and after running evaluation scenarios with the candidate rule enabled.

## Sub-concepts
none

## Part of
rule-audit-procedure

## Implementation status
clean

## Design notes
The decisive empirical hurdle in the Rule Audit Procedure requiring evidence that adding a rule creates a measurable, statistically significant improvement over baseline behavior without increasing false positives or degrading unrelated tasks.
