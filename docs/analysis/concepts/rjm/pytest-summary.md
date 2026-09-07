---
package: rjm
name: pytest_summary
slug: pytest-summary
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# pytest_summary

## Definition — verbatim
(used, not defined)

> "pytest_summary={summary}" — scripts/quality_gate/run_pytest.py:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/run_pytest.py | 119 | defined here | Output variable key recording the summary line from pytest execution output. |

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
pytest_summary is an output key identifier written to GITHUB_OUTPUT by run_pytest.py conveying the test summary line rather than an autonomous lifecycle concept.
