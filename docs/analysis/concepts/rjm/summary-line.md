---
package: rjm
name: summary_line
slug: summary-line
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# summary_line

## Definition — verbatim
(used, not defined)

> "def summary_line(output: str) -> str:" — scripts/quality_gate/run_pytest.py:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/run_pytest.py | 60 | defined here | Function parsing pytest execution output to extract the final summary line matching passed, failed, or error. |

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
summary_line is a Python function identifier in run_pytest.py parsing stdout/stderr lines for the pytest summary string rather than an autonomous lifecycle concept.
