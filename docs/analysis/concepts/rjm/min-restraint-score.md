---
package: rjm
name: MIN_RESTRAINT_SCORE
slug: min-restraint-score
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# MIN_RESTRAINT_SCORE

## Definition — verbatim
> "MIN_RESTRAINT_SCORE = 3.5" — scripts/eval/eval-rule-activation.py:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 218 | defined here | Threshold constant below which negative scenario performance triggers `FAIL_OVER_ACTIVATION`. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 433 | used here | Restraint threshold applied to negative scenario pools in audit decision procedures. |
| scripts/eval/eval-rule-activation.py | 95 | defined here | Constant defining the 3.5 score threshold on an inverted rubric for negative scenario restraint. |

## Consumes
Negative scenario evaluation scores graded on a 1-5 scale.

## Produces
A pass/fail boundary for negative scenario restraint gating.

## When applied
Applied during negative scenario evaluation to detect inappropriate rule activation.

## Sub-concepts
none

## Part of
- fail-over-activation

## Implementation status
defects: doc-drift

## Design notes
`MIN_RESTRAINT_SCORE` is a threshold constant (3.5) in rjm's evaluation harness. Configured symmetrically with positive activation requirements (`MIN_ACTIVATION_SCORE = 3.5`), it establishes that an agent must demonstrate equal rigor in holding back from applying rules in irrelevant contexts as it does in triggering them when appropriate.
