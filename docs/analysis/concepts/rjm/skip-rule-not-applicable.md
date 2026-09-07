---
package: rjm
name: skip-rule-not-applicable
slug: skip-rule-not-applicable
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/eval/examples/example-scenarios.json, sha256: af2f596dbc4bd88d619b6969bca3830063a2d8b6f37a372504d86d7d896d12e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# skip-rule-not-applicable

## Definition — verbatim
> "NEGATIVE_GATE = \"skip-rule-not-applicable\"" — scripts/eval/eval-rule-activation.py:203

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 627 | used here | Explains that negative scenarios must use expected_gate skip-rule-not-applicable to verify restraint. |
| scripts/eval/eval-rule-activation.py | 203 | defined here | Constant defining the canonical negative gate label in rule evaluation scripts. |
| scripts/eval/examples/example-scenarios.json | 35 | defined here | Example scenario file illustrating negative case configuration with expected_gate skip-rule-not-applicable. |
| scripts/eval/README.md | 218 | defined here | Documents negative test requirement where scenarios lacking positive cases produce NO_POSITIVE_CASES. |

## Consumes
Negative test cases and prompt scenarios unrelated to the evaluated rule.

## Produces
Validation verdict confirming the rule remained dormant on irrelevant inputs.

## When applied
Specified as expected_gate in negative evaluation scenarios to test rule restraint.

## Sub-concepts
none

## Part of
scenario-files, rule-audit-procedure

## Implementation status
defects: doc-drift, missing-path

## Design notes
The canonical negative gate identifier in rule evaluation test scenarios, enforcing that every rule suite contains negative cases proving the rule does not over-trigger or interfere with unrelated agent tasks.
