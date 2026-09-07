---
package: rjm
name: expected_reason_contains
slug: expected-reason-contains
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
  - {path: scripts/eval/examples/example-scenarios.json, sha256: af2f596dbc4bd88d619b6969bca3830063a2d8b6f37a372504d86d7d896d12e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# expected_reason_contains

## Definition — verbatim
(used, not defined)

> "reason contains `expected_reason_contains` (when set)." — scripts/eval/eval-reviewer-asymmetry.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-reviewer-asymmetry.py | 15 | used here | Documented as an optional trial pass condition requiring the judge reason to contain this substring. |
| scripts/eval/examples/example-scenarios.json | 10 | defined here | Scenario fixture attribute specifying a required substring for validation of the judge explanation. |

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
defects: doc-drift

## Design notes
An evaluation fixture schema field specifying a required substring in the judge's reasoning explanation, classified as name-only per D-023.
