---
package: rjm
name: FAIL_OVER_ACTIVATION
slug: fail-over-activation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# FAIL_OVER_ACTIVATION

## Definition — verbatim
> "        return \"FAIL_OVER_ACTIVATION\"" — scripts/eval/eval-rule-activation.py:1745

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 218 | defined here | Evaluation verdict returned when negative scenarios fail to achieve `MIN_RESTRAINT_SCORE`. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 433 | defined here | Documents negative scenario restraint gating where measured harm outranks coverage. |
| scripts/eval/eval-rule-activation.py | 1745 | defined here | Returns failure verdict when negative scenario score falls below restraint floor, prioritized ahead of positive activation. |
| scripts/eval/README.md | 322 | defined here | Lists gating verdicts evaluated when auditing skill reference and rule activation. |

## Consumes
Negative test scenario evaluation scores from LLM judges.

## Produces
A fatal evaluation verdict (exit code 1) blocking deployment of over-active prompt rules.

## When applied
Applied whenever an agent activates a rule in a negative scenario where the rule should not apply, scoring below 3.5.

## Sub-concepts
- min-restraint-score

## Part of
none

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
`FAIL_OVER_ACTIVATION` is a safety-critical evaluation gate in rjm's rule activation harness. Rooted in the principle that "a rule that fires where it must not is actively harmful, while one that under-fires is merely useless," it evaluates negative scenario restraint ahead of positive activation gates, failing any rule that over-triggers.
