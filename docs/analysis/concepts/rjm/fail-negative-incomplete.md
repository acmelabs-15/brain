---
package: rjm
name: FAIL_NEGATIVE_INCOMPLETE
slug: fail-negative-incomplete
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

# FAIL_NEGATIVE_INCOMPLETE

## Definition — verbatim
> "        return \"FAIL_NEGATIVE_INCOMPLETE\"" — scripts/eval/eval-rule-activation.py:1750

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 219 | defined here | Verdict returned when the negative test scenario pool is not fully graded. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 434 | defined here | Gate preventing unmeasured negative scenario pools from passing audit checks. |
| scripts/eval/eval-rule-activation.py | 1750 | defined here | Returns failure verdict when negative pool evaluation is incomplete, preventing false certification. |
| scripts/eval/README.md | 322 | defined here | Listed among eval failure verdicts requiring test fixture or routing repairs. |

## Consumes
Evaluation completion status across negative test scenarios.

## Produces
A fatal gating verdict blocking rule approval when negative test coverage is partial.

## When applied
Applied during evaluation aggregation when any negative scenario fails to produce a valid grade.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
`FAIL_NEGATIVE_INCOMPLETE` is an evaluation gate in rjm enforcing denominator completeness. Even if no active harm is observed, if any negative scenario fails to produce a completed grade, restraint cannot be certified; passing would risk attributing clean metrics to an unmeasured test population.
