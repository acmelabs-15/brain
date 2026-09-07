---
package: rjm
name: Rewrite-Regression Check
slug: rewrite-regression-check
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Rewrite-Regression Check

## Definition — verbatim
> "Rewrite-regression check applied as a halt criterion when the decision is a rewrite, refactor, or migration justified by improvement." — .claude/skills/decision-critic/SKILL.md:94

## Also called — verbatim
`rewrite-regression check` — .claude/skills/decision-critic/SKILL.md:92

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/rewrite-regression-check.md | 8 | defined here | Reference document defining principle, 5-question protocol, halt rule, and worked examples for rewrite decisions. |
| .claude/skills/decision-critic/SKILL.md | 92 | defined here | Verification checklist capping verdict at flagged STAND when institutional incentive remains unaddressed. |
| .claude/skills/decision-critic/SKILL.md | 94 | defined here | Mandatory verification checklist requirement enforcing the rewrite-regression check as a halt criterion. |

## Consumes
Rewrite, refactor, or migration proposals justifying changes by performance, clarity, or maintainability improvements.

## Produces
Evaluation against five questions (baseline, v0 win, v1 projection, regression plan, institutional incentive) and resulting verdict (HALT: ESCALATE, REVISE, or flagged STAND).

## When applied
During Verification (Steps 3-4) whenever a decision under critique is a rewrite, refactor, or migration listing improvement in its justification.

## Sub-concepts
halt-criterion, halt-rule

## Part of
decision-critic

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A critical gating mechanism adapted from Casey Muratori's critique that halts premature commitment to rewrites evaluated solely on transient v0 benchmark wins against empty surfaces, forcing teams to project v1 numbers with full feature parity and regression budgets before approval.
