---
package: rjm
name: pytest_status
slug: pytest-status
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
