---
package: rjm
name: expected_verdict
slug: expected-verdict
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-prompt-change.py, sha256: c47c10e18f0bd2da8a1854c46f1c8b9e805a25184fec0d9c9946b82457513136}
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
  - {path: scripts/eval/examples/example-scenarios.json, sha256: af2f596dbc4bd88d619b6969bca3830063a2d8b6f37a372504d86d7d896d12e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# expected_verdict

## Definition — verbatim
(used, not defined)

> "exact match against `expected_verdict`." — scripts/eval/eval-prompt-change.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-prompt-change.py | 56 | defined here | Specified in verdict matching contract as the required exact match label for check_scenario_pass. |
| scripts/eval/eval-reviewer-asymmetry.py | 11 | used here | Specified as part of the fixture contract establishing controlled-vocabulary expected verdict. |
| scripts/eval/examples/example-scenarios.json | 9 | defined here | Fixture attribute specifying the expected outcome label for scenario evaluation. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
A scenario fixture schema property specifying the target classification label required for an evaluation trial to pass, classified as name-only per D-023.
