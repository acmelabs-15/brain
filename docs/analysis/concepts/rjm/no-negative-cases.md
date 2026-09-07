---
package: rjm
name: NO_NEGATIVE_CASES
slug: no-negative-cases
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# NO_NEGATIVE_CASES

## Definition — verbatim
> "return \"NO_NEGATIVE_CASES\"" — scripts/eval/eval-rule-activation.py:1776

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-rule-activation.py | 1776 | defined here | Returns configuration error verdict when an evaluation suite lacks negative restraint cases, withholding certification. |
| scripts/eval/README.md | 220 | defined here | Documents NO_NEGATIVE_CASES as the fallback verdict when negative cases are absent, preventing unearned passes. |

## Consumes
Scenario definition files and scenario pool negative validation flags (`has_negative_cases`).

## Produces
Configuration error verdict (exit code 2) refusing an evaluation run lacking negative restraint cases.

## When applied
Applied when positive evaluation cases yield a PASS verdict but the test suite contains no negative scenarios to measure restraint.

## Sub-concepts
none

## Part of
eval-rule-activation

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
An evaluation gate verdict in rjm that prevents prompt rules from earning certification when tested exclusively on positive scenarios, enforcing that negative restraint must be empirically demonstrated.
