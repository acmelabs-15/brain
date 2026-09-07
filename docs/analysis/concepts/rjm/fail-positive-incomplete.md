---
package: rjm
name: FAIL_POSITIVE_INCOMPLETE
slug: fail-positive-incomplete
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

# FAIL_POSITIVE_INCOMPLETE

## Definition — verbatim
> "        return \"FAIL_POSITIVE_INCOMPLETE\"" — scripts/eval/eval-rule-activation.py:1756

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 219 | defined here | Verdict returned when the positive test scenario pool is not fully graded. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 434 | defined here | Gate preventing partially graded positive scenario pools from advancing. |
| scripts/eval/eval-rule-activation.py | 1756 | defined here | Returns failure verdict when positive pool evaluation is incomplete. |
| scripts/eval/README.md | 321 | defined here | Listed among eval failure verdicts in rule audit documentation. |

## Consumes
Evaluation completion status across positive test scenarios.

## Produces
A fatal gating verdict blocking rule approval when positive test coverage is incomplete.

## When applied
Applied during evaluation aggregation when any positive scenario is dropped or fails to parse.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
`FAIL_POSITIVE_INCOMPLETE` is an evaluation completeness gate in rjm. It ensures that prompt rule activation deltas are computed across the entire pre-specified positive test population, preventing selective dropout or failed judge calls from artificially inflating average scores.
