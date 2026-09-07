---
package: rjm
name: pytest_status
slug: pytest-status
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/quality_gate/run_pytest.py, sha256: 7630e0a27249e65473eb05d07aa0dea1d3c5b4db404f9162a358d979493475e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pytest_status

## Definition — verbatim
(used, not defined)

> "0 -> ``pytest_status=PASS``, non-zero -> ``pytest_status=FAIL``." — scripts/quality_gate/run_pytest.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/run_pytest.py | 14 | defined here | Output variable key recording the overall execution outcome of pytest for the QA agent. |

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
defects: orphan

## Design notes
pytest_status is an output key identifier written to GITHUB_OUTPUT by run_pytest.py to pass test results to the QA agent rather than an autonomous lifecycle concept.
