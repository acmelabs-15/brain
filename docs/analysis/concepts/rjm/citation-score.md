---
package: rjm
name: citation_score
slug: citation-score
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/_optimizer_adapters.py, sha256: 41bb89c726d7372ef9bfea77b9eb57e3e2123c801358598ee13bfdab276a20b2}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# citation_score

## Definition — verbatim
> "  - citation_score   : did the response use the rule's specific vocabulary?" — scripts/eval/eval-rule-activation.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 111 | defined here | Second of three rubric dimensions returned per sample by LLM judges in rule evaluations. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 326 | used here | Describes judge scoring fields aggregated in step 1 of cell score reduction. |
| scripts/eval/_optimizer_adapters.py | 68 | used here | Member of `_RULE_SCORE_KEYS` extracted and normalized from scenario reports. |
| scripts/eval/eval-rule-activation.py | 16 | defined here | Rubric definition checking whether model responses adopted the rule's specific specialized vocabulary. |
| scripts/eval/README.md | 212 | defined here | Documents the three 1-5 rubric dimensions graded by LLM judges for rule activation. |

## Consumes
Model response text and rule terminology specifications.

## Produces
A 1 to 5 numeric rating evaluating vocabulary adoption.

## When applied
Applied during LLM judge grading of rule scenarios.

## Sub-concepts
none

## Part of
- cell-score

## Implementation status
defects: doc-drift, missing-path, script-bug, other

## Design notes
`citation_score` is an evaluation rubric dimension in rjm that tests whether a model adopts the exact domain terminology, concepts, and labels specified by an active rule, serving as a distinct signal from behavioral compliance.
